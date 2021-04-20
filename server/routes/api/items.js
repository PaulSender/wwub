var express = require('express');
var router = express.Router()
var auth = require('../../middleware/auth')
// Item Model
var Item = require('../../models/Item');
const fs = require('fs')
var mongodb = require('mongodb');
const User = require('../../models/User');
const _ = require('underscore')

/**
 * @route GET api/items
 * @desc Get All Items
 * @access Public
 */
router.get('/', function (req, res) {
    if (req.query.user) {
        var user = JSON.parse(req.query.user)
        Item.find({ user: user._id }).sort({ date: -1 }).then(items => res.json(modulizeItems(items))).catch(e => {
            console.error(e)
            res.send(e)
        })
    }
    else if (req.query.category) {
        Item.find({ category: req.query.category }).sort({ date: -1 }).then(items => res.json(modulizeItems(items)))
    }
    else {
        Item.find().sort({ date: -1 }).then(items => res.json(modulizeItems(items)))
    }
})
/**
 * @desc break total items into subarrays for grid-rendering
 * @return {Array[Items]} every 18 items, create a new sub array. Return the parent array
 */
function modulizeItems(items) {
    var i = 18, list = _.groupBy(items, function(a, b){
        return Math.floor(b/i);
    });
  return _.toArray(list) 
}
/**
 * @route POST
 * @desc add an item
 * @access Private
 */
router.post('/add', auth, async function (req, res) {
    var { values, user } = req.body
    var { image } = req.files
    values = JSON.parse(values)
    values.ratings = [parseInt(values.rating)]
    values.image = image
    values.user = user
    var newItem = new Item(values)
    newItem.save(async function (err, item) {
        if (err) res.status(500).send(err)
        if (item) {
            var userQuery = await User.findOne({ _id: req.body.user })
            var prevRated = userQuery.rated_items
            await User.findOneAndUpdate({ _id: req.body.user }, { $set: { rated_items: [...prevRated, item._id] } }, { new: true, useFindAndModify: false })
            res.status(200).send(item)
        }
    })
})

/**
 * @route POST
 * @desc Delete an item
 * @access Private
 */
router.post('/delete', auth, function (req, res) {
    var user = req.body.user
    Item.deleteOne({ _id: req.body.id }).then(response => {
        if (response) {
            Item.find({ user: user._id }).sort({ date: -1 }).then(items => res.json(items))
        }
    }).catch(e => {
        console.error(e)
        res.send("AN ERROR HAS OCCURED CHECK CONSOLE")
    })
})

/**
 * @route POST
 * @desc Rate an Item
 * @access Public
 */
router.post('/rate', async function (req, res) {
    var passed = false
    var userQuery = await User.findOne({ _id: req.body.userID })
    var prevRated = userQuery.rated_items
    passed = await User.findOneAndUpdate({ _id: req.body.userID }, { $set: { rated_items: [...prevRated, req.body.itemID] } }, { new: true, useFindAndModify: false })
    if (passed) {
        var ratingQuery = await Item.findOne({ _id: req.body.itemID })
        var prevRatings = ratingQuery.ratings
        Item.findOneAndUpdate({ _id: req.body.itemID }, { $set: { ratings: [...prevRatings, req.body.rating] } }, { new: true, useFindAndModify: false }, (err, doc) => {
            if (err) {
                console.error("Rate Item: " + err);
                res.status(500).send(err)
            }
            res.status(200).send(doc)
        });
    }
})

module.exports = router