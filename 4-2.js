// Node

// Library - In development, someone has already done thework we need to do. Libraries are intenfef to do one particular task. E.G we make vegetables by taking all the stuffs from the markt. E.G - React
// Framework - Collection of multiple libraries. 
// E.g - Rails,Python DJANGO

// Note - Node is neither a language, framework or library. 

// Node is a RunTime Environmemnt for JS.
// In 2009, Ryan Dahl founded it. Before that, JS was only supported by JS.
// Advantage is that, now we can directly interact with the operating system rather than just the Browser.
//  Now, we can access the file system
// We can interact with the process of the computers.
// Opened a connnection with streams.


// So. now we can work like a normal Programming language by making desktop Applications. Electron framework is used to prepare desktop applications
// We can make mobile apps. E.G BY USING rEACT nATIVE 
// We can prepare servers by using Express


// DENO is another runtime founded by Ryan Dahl only.





// GLOBALS- variables accessible everywhere in a js code and they are provided to us by runtime.

// What globals NodeS exports?-
// -> Process global - Gives us the power to access the processes of NodeJS Runtime
// console.log(process);
// One use of Process Global - We can also provide command line arguements to the Node JS runtime else browser doesnt support it.

// -> __dirname - Current Directory where are trying to run our program
// console.log(__dirname);
// This global is not always accessible.



// In the Browsers, we have REPL consoles
// Here REPL - Read Execute Print Loop.
// Similar REPL Consoles, the command line also provides to us.


// -> Module Global -   Is a object having many properties like the exports one.
// console.log(module);


// Module Pattern of NODEJS - We have to explicitly mention that what all things we want to export from a file.
// There are two ways to export a file,  using CommonJS Modules and ES Modules.

// ->Common JS module - require helps us to consume the module

// const searching = require('./4-2-search.js');  //old type of moduling. no JS uses ES Modules


// import searching from './4-2.searching.js';  //It will show an error, as by default, common moduling is enabled. We have to do certain more for ES6 Moduling.
// For ES6 Moduling, we can change the file extension to .mjs.
// .mjs enables ES6 moduling for a JS file.

// So, there are two moduling - Common JS moduling and ES6 Moduling



// The second way to utilize a ES6 Modulling is by the help of packages.
// Packages - It is a folder which contains a package.json file.
// JSON - Javascript Object Notation. We can use .json extension for a JSON file.

console.log("start");
let arr=[5,4,3,6,7,1,9];
let key = 6;
console.log(searching);
// console.log(module);
console.log(searching.linear(arr,key));
