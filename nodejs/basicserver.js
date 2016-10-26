var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log(req.url)
    fs.readFile('files' + req.url, function(data, contents){
        res.end('' + contents)
    })
    
    //REST API call
    //Serve static content
    //Mature server
    
});

server.listen('3000', function(){
    console.log('Listening onto 3000 port')
})