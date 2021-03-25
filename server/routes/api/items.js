var express = require('express')
var router = express.Router()
var auth = require('../../middleware/auth')
// Item Model
var Item = require('../../models/Item');

/**
 * @route GET api/items
 * @desc Get All Items
 * @access Public
 */
router.get('/', function (req, res) {
    Item.find().sort({ date: -1 }).then(items => res.json(items))
})

/**
 * @route POST
 * @desc Make edits to an item
 * @access Private
 */
router.post('/add', auth, function (req, res) {
    var {values} = req.body
    var {image} = req.files
    values = JSON.parse(values)
    res.status(200).send('edit')
})

module.exports = router