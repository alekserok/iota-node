require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var info = require('./routes/info');
var address = require('./routes/address');
var account = require('./routes/account');
var withdraw = require('./routes/withdraw');

app.use(bodyParser.json());

app.use('/info', info);
app.use('/address', address);
app.use('/account', account);
app.use('/withdraw', withdraw);

app.listen(process.env.PORT, function () {
  console.log('App listening on port ' + process.env.PORT);
});
