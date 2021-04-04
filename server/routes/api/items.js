var express = require('express');
var router = express.Router()
var auth = require('../../middleware/auth')
// Item Model
var Item = require('../../models/Item');
const fs = require('fs')
var mongodb = require('mongodb')


/**
 * @route GET api/items
 * @desc Get All Items
 * @access Public
 */
router.get('/', function (req, res) {
    if(req.query.user) {
        var user = JSON.parse(req.query.user)
        Item.find({ user: user._id }).sort({ date: -1 }).then(items => res.json(items))
    }
    else {
        Item.find().sort({ date: -1 }).then(items => res.json(items))
    }
})

/**
 * @route POST
 * @desc Make edits to an item
 * @access Private
 */
router.post('/add', auth, function (req, res) {
    var { values, user } = req.body
    var { image } = req.files
    values = JSON.parse(values)
    values.rating = parseInt(values.rating)
    values.image = image
    values.user = user
    var newItem = new Item(values)
    newItem.save(function (err, item) {
        if (err) res.status(500).send(err)
        if (item) {
            res.status(200).send(item)
        }
    })
})

/**
 * @route POST
 * @desc Make edits to an item
 * @access Private
 */
router.post('/delete', auth, function (req, res) {
    var user = req.body.user
    console.log(req.body.id);
    Item.deleteOne({_id: req.body.id}).then(response => {
        if(response) {
            Item.find({ user: user._id }).sort({ date: -1 }).then(items => res.json(items))
        }
    }).catch(e => {
        console.error(e)
        res.send("AN ERROR HAS OCCURED CHECK CONSOLE")
    })
})

module.exports = router