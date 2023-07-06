// setTimeout and setInterval
// These two functions are not by default given to us by JS, but we are able to use it.
// But HoW can we use it - will cover later?





// setTimeout - Function that helps us to execute some task ones after a certain __timer__
// setInterval - Function that helps us to execute some task again and again after a given interval.





// CallBacks - A callback is a function that is passed to another function
function fun(x,fn)
{
    /* 
        x->number
        fn->callback function
    */
    // Some logic
    for(let i=0;i<x;i++)
    {
        console.log(i);
    }
    fn(); //Calling the callback function passed
    // Some more logic
}

fun(10,function log()
{
    // This is the Callback function
    console.log("Custom Logger");
})


/*let arr = [1,2,3,4,5];
let x=arr.map(function process(v,i)  //map fnctn->for all the elements of the given array, it passes elements as a arguement to the fnctn.   //it expects a callback function as an arguement 
//v is the value of the arrays and i are the index of those values
{
    // v->value
    // i->index
    console.log(v,i);
    return v*v;
});
console.log(x);
console.log(arr);
*/

function mapper(arr,fn)
{
    // arr-> is going to be an array of elements
    // fn-> callback function which expects two arguements value and index.
    let result=[];
    for(var i=0;i<arr.length;i++)
    {
        // i-> index
        // v-> value
        let res=fn(arr[i], i);
        result.push(res);
    }
    return result;
}

let arr=[1,2,3,4,5];
let x= mapper(arr, function cuber(v,i)
{
    console.log(v, v*v*v, i);
    return v*v*v;
})

console.log(x,arr);





let g= function()
{
    console.log("inside g");
}

function gunn(fn)
{
    console.log("inside gun");
    fn();
}

gunn(function()
{
    console.log("inside g");
});





// Structure of setTimeout function
// setTimeout(taskCallback,timeinmillisecond);

setTimeout(function (){console.log("Sunil Chettri is best");},5000); //set Timeout returns a unique ID that could be used to stop/clear a timeout fnctn to get executed
// Example
let id1=setTimeout(function (){console.log("Timer 1");},6000);
let id2=setTimeout(function (){console.log("Timer 2");clearTimeout(id1)},5000);



// setInterval(taskcallback,timeinmillisecond)
// setInterval(function (){console.log("task done again");},1000);

//set Interval returns a unique ID that could be used to stop/clear a Interval fnctn to get executed
// Example
let id11=setInterval(function (){console.log("Timer 1");},6000);
let id22=setInterval(function (){console.log("Timer 2");clearInterval(id11)},13000);
