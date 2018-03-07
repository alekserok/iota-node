require('dotenv').config();
var express = require('express');
var router = express.Router();
var IOTA = require('iota.lib.js');

var iota = new IOTA({
    'provider': process.env.IOTA_PROVIDER
});

router.post('/', function(req, res) {

    iota.api.getNewAddress(req.body.seed, function(error, success) {
        if (error) {
            res.status(400).json(error.toString());
        } else {
            res.json(success)
        }
    });
});


module.exports = router;
