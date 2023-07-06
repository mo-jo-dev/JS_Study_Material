// Closures

function todo(task)
{
    console.log("Starting task");
    setTimeout(function fun()          // At the time when function fun will be called, todo's execution will be already over
                                       // Q) - // If fun is called after the completion of todo, and todo has ended, then how fun is able to access task variable. Task variable is given to todo function, how its utilized in fun???
                                       // Ans) - It happens due to closures.
                                       // Closures - Closure is when a function ____remembers____ it's lexical scope even when the function is executed that lexical scope
    {
        console.log("Completed",task);
    },2000);
    console.log("Ending task");
}

console.log("Starting");
todo("assignment");
console.log("Ending");



function test()           //formal declaration-> global scope
{
    for(let i=0;i<3;i++)               
    {
        setTimeout(function exec()        //function -> in function scope
        {
            console.log(`i: ${i}`);          //using backtick, we use string interpolation
        },i*1000)
    }
}

test();




const add = (function execc()
{
    let counter=0;
    return function process()
    {
        counter+=1;
        console.log(counter);
        return counter;
    }
})();

add();
add();
add();
