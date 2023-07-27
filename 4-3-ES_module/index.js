import searching, {linearSearch} from "./searching.js"; //This kind of Syntax is majorly used in the React.JS.
console.log(searching);
var arr=[1,2,3,4,5];
var key=4;
console.log(linearSearch(arr,key));

// Here, inside this file, if we have no package.json file then --
// -> .js will be treated as common js
// -> .mjs will be treated as ES Module

// Else, if we have a package.json with 
// {"type":"module"}; then ---- 
// -> .cjs will be treated as common js
// -> .js will be treated as ES Module

// {"type":"commonjs"}; then ---- 
// -> .js will be treated as common js
// -> .mjs will be treated as ES Module