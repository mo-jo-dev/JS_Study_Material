// How JS Handles Async Operations?
// -> JS is a single threaded language.

// -> JS by default only supports synchronus code execution.
// Example

// console.log("Start");
// for(let i=0;i<10000000000;i++)
// {

// }
// console.log("Task End");
// console.log("End");

// NOTE - The above property of sync code execution only works for operations natively known to JS.




// JS Runtime - Earlier JS used to only work on Browser(Runtime), Browser as a runtime gives functions to interact with the DOM
// E.G. - document.getElementbyID is not a valid JS code, it is provided by the runtime
// E.G. - steTimeout give JS power to interact with browser clock


// In 2009, Ryan Dahl tried to run JS outside of a browser enviroment in a new runtime environment, that runtime is known as ____NODE____. He also was a co-founder in the DENO runtime of JS

// _____NOTE_____ Both the runtime environments are different, for example - The typeof setTimeout function in chrome runtime is 'number' but it is 'object' in node runtime


// Now, we know that runtime also provides functionalities that can be leveraged by JS. But how JS handles them?


function process()
{
    console.log("Start");
    setTimeout(function exec()
    {
        console.log("Executed some task!!");    //Even after the timer is completed, this will not be executed.
        // What happens is that the function exec, as it is not native to JS, will be sent to runtime for excution 
        // and even after the timer is completed, JS will no run it before the completion of other tasks. So, the function
        // exec() will be sent to a event queue where it will wait until other tasks known to JS gets executed
        // an event loop will be continously checking the _____conditions____

        // The Conditions are: 
        // -> The call satck should be empty, i.e. no function in the call stack is left to be executed
        // -> The global code is also done. refern line no ___56___ 
    },3000);
    setTimeout(function exec1()
    {
        console.log("Executed 2nd Task!!");
    },4000);
    for(let i=0;i<1000000;i++)
    {

    }
    console.log("End");
}

process();
console.log("TATA");