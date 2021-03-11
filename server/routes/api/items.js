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
    Item.find().sort({date: -1}).then(items => res.json(items))
})

/**
 * @route POST
 * @desc Make edits to an item
 * @access Private
 */
router.post('/edit', auth, function(req, res) {
    res.send('edit')
})

module.exports = router