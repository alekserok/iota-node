require('dotenv').config();
var express = require('express');
var router = express.Router();
var IOTA = require('iota.lib.js');

var iota = new IOTA({
    'provider': process.env.IOTA_PROVIDER
});

router.post('/', function(req, res) {

    var transfers = [
        {
            // Recipient address
            address: req.body.address,
            // Value sent to recipient
            value: parseInt(req.body.amount),
            message: req.body.message,
            tag: ''
        }
    ];

    if (req.body.commission)
        transfers.push({
            address: req.body.commissionAddress,
            value: parseInt(req.body.commission),
            message: req.body.message,
            tag: ''
        });


    const options = [];

    const depth = 4;
    const minWeightMagnitude = 14;
    const withdrawalHashes = [];

    iota.api.sendTransfer(req.body.seed, depth, minWeightMagnitude, transfers, options, function(err, transactions) {
        if (err) {
            console.log(err);
            res.status(400).json(err.toString());
            return
        }

        // Push obtained tail hash to withdrawals array
        withdrawalHashes.push(transactions[0].hash);

        res.json(transactions[0].hash);
    // Save hash to persistent database...
    // [...]
    })
});


module.exports = router;
