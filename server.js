console.log("Welcome to node");

const http = require("http");

/*
Using Node.js create a HTTP Server which listens on port 8081 - the server should return
“Welcome to Data Representation & Querying” when it receives a request.*/
/*

http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end('Welcome to Data Representation and Querying\n');
 }).listen(8081);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8081/');
 */

/*
 Rewrite the “Welcome to Data Representation Querying” application from exercise one
using the express framework
*/
var express = require('express');
var app = express();
var path = require('path');
app.get('/', function (req, res) {
    res.send('Welcome to Data Representation & Querying');
})

app.get('/hello/:name', function (req, res) {
    console.log(req.params.name);
    res.send('Hello ' + req.params.name);
})

app.get('/name1', function (req, res) {
    res.send('Good morning');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://127.0.0.1:8081/", host, port)
})

app.get("/api/posts", (req, res) => {
    const posts = [
        {
            "posts": [
                {
                    "id": "fadf12421l",
                    "title": "First server-side post",
                    "content": "This is coming from the server"
                },
                {
                    "id": "ksajflaj132",
                    "title": "Second server-side post",
                    "content": "This is coming from the server!"
                }
            ]
        }
    ];
    res.status(200).json({ posts: posts }); //response of data
}
);          

/* Routing point added so if I type in http://127.0.0.1:8081/test I get a response back of the index.html page. */
app.get('/test', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/name', function (req, res) {
    console.log("get method");
    console.log(req.query.lastname);
    res.send('Hello ' + " " + req.query.firstname + " " + req.query.lastname);
    })

app.get('/hello/:test', function(req, res) {
})
    


    
