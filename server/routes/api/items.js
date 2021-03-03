var express = require('express')

var router = express.Router()

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

module.exports = router