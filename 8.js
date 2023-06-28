// Scopes
// In simple words, scope is simply where to look for things.
// We are looking for variables & functions


// We have three types of scopes in JS

// Global Scope
// Function Scope
// Block Scope

// Global Scope - If a variable is present in a global scope, then it is accessable everywhere in the JS File
// One of the way is to declare variable outside any function or a block


var name = "Mohit" ;
function greet()
{
    console.log("greetings !", name);
    function test() {
        console.log("test");
    }
}

function fun()
{
    console.log("Have Fun !", name);
}

greet();
fun();
// test(); - gives an error as test is not global, it is inside a function.





// function scope - In a function scope, the visibility of a variable/function is just inside that function or is just inside the outer function
// example - function fun{
//                          var x=12;      ->It is just accessable inside the function as its local to that function 
// }

var name = "Mohit" ;
function greet()
{
    var x=12;
    console.log("greetings !", name);
    function test() {
        console.log("test",x);
    }
    test();
    console.log(x);

}

function fun()
{
    console.log("Have Fun !", name);
}

greet();
fun();





// Block Scope - In JS, we can use a pair of curly braces to declare a block 
// example - { 
//              .......
//              }
// Now, if a variable/function is only accessible/visible inside a block then it willbe having block scope.
// Exampele - if else, while, for or any raw block




if(true){
    let x=10;
    console.log(x);
}
// console.log(x);
// or

{
    let x=10;
    console.log(x);
}
// console.log(x);







// Difference b/w let, var and const

// var - whenever we use a var anywhere inside a function, the variable gets function scope. If we used it outside the function, no matter if it is enclosed in a block or not, it will give the variable global scope
// Example - 


{
    var m=21;
    console.log(m);
}
console.log(m);  // Here, m is printed as m is a block and thus the var m becomes global but if we put var inside a function, we wont be able to use it anywhere outside the function
// When we use a var outside from a block, then it gives us undefined but it doesnt gives us any error because of _______Lexical Scoping_______.
function snh()
{
    var n=12;
    console.log(n);
}
// console.log(n); //It throws error as var is only accessible inside the function, its local to the function






// let - whenever we initialize a variable with let, it always gets the scope of enclosing BLOCK.

{
    let m=10;
    console.log(m);
}

function funn() {
    let n=5;
    console.log(5);
}
funn();
console.log(m);
// let can't be printed inside a function scope before initialization as its not function scope.
// We cant redeclare a variable twice with let.
// if we declare let outside any block then it doesnt get ____complete____ global scope

// console.log(a); //It throws error but it wouldnt have been the same with var.
let a=5;





// Const - it is similar to let but it can neither be reassigned nor redeclared.
// e.g. let y=10; and the if we do y=11, it wont happen 






// How JS Parses the code??
// We know, that JS is not interpreted, it is definitely hybrid. i.e compile + interpreted.
// So, whwnever we try to execute a JS code, JS first parses the whole code, in this phase it assigns scopes to variables/function.
// Once it is done, it reads the code and executes it.

// Every variable in our code will be used in one of the following ways:
// either it will be getting a value assigned i.e used as a target(x=10) 
// or it will be used to retreive a value i.e as a source(y=10+x)



// Now, JS will start the parsing phase.
// Outside everything it maintains global scope, but the moment it goes inside a function it starts maintaining scope of that function aloso.



var teacher ="mohit";
function  fun(){
    var teacher = "abhay";
    teachingAssistant="Hari";   //No formal declaration.  So, once inside a scope, we dont know about scope of a variable, we check the outer scopes one by one. 
    console.log(teacher);
    console.log(teachingAssistant);
}
fun();
console.log(teacher);
// console.log(teachingAssistant);
// Phase 1 -> parsing = we will do scope resolution
// whenever we declare a variable using var/let/const or initialization of a function it is a formal declaration

// So, in the parsing phase JS looks for formal declarations
// In this parsing phase, we only allocate scopes, we dont allocate values
// The moment we go in a functon, we maintain a new scope as well i.e function scope






// line 172 - 
// _____Auto-Globals_____ - In JS if we keep on searching scope of a variable in outer scopes and nowhere found it, we automatically consider it in global scope
// Auto Globals happen during execution phase
var teacher ="mohit";
function  fun(){
    var teacher = "abhay";
    teachingAssistant="Hari";  
    console.log(teacher);
    console.log(teachingAssistant);
}
// console.log(teachingAssistant); // will give reference error as auto global not yet executed.
fun();
console.log(teacher);
// NOTE - Autoglobals onky work with target reference and not with source





var teacher1 ="mohit";
function  fun(){
    console.log(subject);
    var teacher1 = "abhay";
    teachingAssistant1="Hari";  
    var subject="Java Script";
    console.log(teacher1);
    console.log(teachingAssistant1);
}
fun();
console.log(teacher1);
console.log(teachingAssistant1); 






// Difference b/w lexical and dynamic scoping
// Lexical - Scopes are assigned earlier and then while execution, they are only executed. 
// Dynamic - Scopes are seen during the time of execution only.