const express = require('express')
const app = express();
var path = require('path');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', "GET, PUT, POST, DELETE");
    res.header('Access-Control-Allow-Headers', "Content-Type");
    next();
});

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})