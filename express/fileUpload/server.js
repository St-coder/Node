var express = require("express");
var app = express();
var fs = require("fs");

//解析body
var bodyParser = require("body-parser");
var multer = require("multer");

app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

//
app.use(multer({dest: "/upload"}).array('image'))

app.get("/index.html", function(req, res){
    res.sendFile( __dirname + "/index.html");
})

app.post("/file_upload", function(req, res){
    console.log(req.files[0]);
    var des_file = __dirname + "/"  + req.files[0].originalname;
    fs.readFile(req.files[0].path, function(err, data){
        fs.writeFile(des_file, data, function(err){
            if(err){
                console.log(err)
            }else{
                response = {
                    message: "success upload",
                    filename: req.files[0].originalname
                }
            }
            console.log(response)
            res.end(JSON.stringify(response));
        })
    })
})


app.listen(8081)