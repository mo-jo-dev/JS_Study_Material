// Client Server Architecture

// Client - an user facing interactive end, it is seen by the user. It includes the front end.
// As a frontend developer, we have to take care that the overall feel is good and similar to the UI. App/ Web should be fast.



// Server - Server can be a hardware or a software. It is a hardware or a computer program that provides a service to another computer program or a different machine.
// Server comes under Backend development. Noone from outside knows whats going on in the server side.
// Example - MySQL - Used for Database storing


// How client and server connect with each other - using http request and response method.

// For creating a contract/ API, one needs to follow certain conventions, like REST, SOAP, JRPC, etc
// REST is the most common.
// REST - Representational State Transfer.
// The rules of REST - 
// -> Every real life entity is expected to be represented as a resource.(while jRPC wors on actions)
// -> Every time with a RESTFUL API request, we have to send type/methods of the request. The most relevant ones are - Get, POST, Put, Patch, Delete.
//     - GET - used to Retrive/fetch the info about a resource
//     - POST - Causes change in state or side effects on a resource. 
//     - DELETE - delete a resource
//     - Patch - make partial update to a resource
//     - PUT - make complete update to a resource
// -> In REST conventions, data/messages sent apart from URL are sent in JSON.


// Fundamental difference between GET and POAT request.
// GET - in get request, data is sent in URL i.e it gets saved in our history, we can cache it etc.
// POST - generally data is not expected to be sent in URL, rather than in requst body/payload 

// Postman helps us to hit a URL without writing a frontend code. 

// 3 Ways we can send the data: 
// -> Request Params(/movies/blackpanther)
// -> Query Params(/categories/electronics?company==samsung&order=desc&filter=price)
// -> Request Body - separate payload that is send apart from the request(email: , password:)


 