import searching from "./searching.js";
console.log(searching);

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
