var http = require('http');
var url = require('url');


function start() {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathName;
        console.log('Request for ' + pathName + " received.");
        // response.
    }
}