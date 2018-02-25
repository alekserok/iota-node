var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var info = require('./routes/info');
var address = require('./routes/address');
var account = require('./routes/account');

app.use(bodyParser.json());

app.use('/info', info);
app.use('/address', address);
app.use('/account', account);

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
