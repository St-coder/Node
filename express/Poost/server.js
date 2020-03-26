var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use("/public", express.static("public"));

app.get("/index.html", function(req, res){
    res.sendFile( __dirname + "/index.html");
})

app.post("/process_post", urlencodedParser, function(req, res){
    var response = {
        "first_name":req.body.first_name,
        "last_name":req.body.last_name
    }
    res.end(JSON.stringify(response));

})

app.listen(8081)