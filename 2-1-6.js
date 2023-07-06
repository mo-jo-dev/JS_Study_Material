// ____Function Expressions____ - If the code do not starts with a function rather it starts with sometihing else but including a function.
// Then its called function expression


// function fn()
// {
    //Normal Function
// }
// let gn = function()
// {
    // Function Expression
// } 
// (function() {/*Function Expression*/})             //Kind of a IIFE





// In JS, we can pass a function as an arguement to another function
function fun()
{
    console.log("Hi there!!");
}

function gun(fn)
{
    console.log("Coming Inside");
    fn();
    console.log("Leaving Outside");
}//This is the function expression

gun(fun);


// Function expression is of two types: 
// 1) Anonymous
// 2) Named

// 1) Anonymous 
// let x = function()
// {
    // Function Expression
// } 
// or
// gun(function() {} )

// __NOTE__ : Anonymous Function are hard to debug and recursion is tricky

// Use of console.trace()

function fun()
{
    console.log("Hi there!!");
}

function gun(fn)
{
    console.log("Coming Inside");
    fn();
    console.log("Leaving Outside");
    console.trace();
}
gun (function logger()
{
    console.trace();
    console.log("new function passed");
})


gun(fun);

// 2) Named 



// Toms AI
// Scopes

// var x = function gun() //Function gun() is inside the scope of x, we cant access it globally but can do the same with x
// {
    // Function Expression
// } 

// gun() //Will not print anything, as gun is not globally available    
