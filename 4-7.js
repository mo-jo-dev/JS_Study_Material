// using http module(inbuilt by node) we can setup a basic server
const http = require('http');
const PORT = 3000;

/*
    http module contains a function called as create server
    this createServer function takes a callback as the input
    now inside this callback, we get two arguements - request and response
    // request - contains all the details about the incoming req
    // response - contains functions using which we can prepare the response
*/
//We use createServer function to create a server

const server = http.createServer(function exec(request, response){
    if(request.url == '/home'){
        response.end("Welcome Home!!");
    }
    else if(request.url == '/faq'){
        response.end("List of FAQs");
    }
    else{
        response.end("Hello World!!");
    }
})

server.listen(PORT, function process(){
    // once the server starts, the callback will be executed
    console.log("Server started on port",PORT); 
});