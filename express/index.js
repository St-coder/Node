var express = require('express');
var app = express();
 
app.get('/url', function (req, res) {
   res.send('Hello World');
})

app.get('/', function (req, res) {
    res.send('主页');
 })
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://127.0.0.1:8081/", host, port)
 
})