// If we want to mimic a promise that is already resolved, then we use Promise.resolve(parameter) funcrtion.
/*
console.log(("Start"));

setTimeout(function timer1()
{
    console.log("Timer 1 Done!!");
},0);

for(let i=0;i<100000000;i++)
{
    //Some code
}

let x= Promise.resolve("Mohit's Promise");
x.then(function processPromise(value)              //goes to microtask queue due to callback
{
    console.log("Who's Promise??", value);
});

setTimeout(function timer2()
{
    console.log("Timer 2 Done!!");
},0);


console.log("End");
*/

// due to microtask queue, the code prints 


/*Start
End
Who's Promise?? Mohit's Promise
Timer 1 Done!!
Timer 2 Done!!*/

// and not:

/*
Start
Who's Promise?? Mohit's Promise
End
Timer 1 Done!!
Timer 2 Done!!
*/


// In case of promises, the callbacks are sent to microtask queue for the execution like callbacks of setTimeout used to go to Event queue.
// Microtask Queue has a higher priority then event queues.
// normal callbacks->event queue while promise callbacks->microtask queues

// Event queue is also called as callback queues.




// Promise is not the cleanest thing that we can see, so do we have something else? Which is more clean than it??
// The answer is yes, we have two keywords async and await.


// We can declare a function async.
// If we declare a function async, it does the following:
// -> It allows the use of await keyword.
// -> if we declare a function a function async, it allows consumption of a promise using await.
// -> an async function always converts your return value to a promise.

/*
function fetchData(url)
{
    return new Promise(function(resolve,reject){
        console.log("Download Started from: ",url);
        setTimeout(function process()
        {
            let data="Important Data!!!";
            console.log("Download Completed from", url);
            resolve(data);        
        },5000);
    })
}



function writefile(data)
{
    return new Promise(function(resolve,reject)
    {
        console.log("Started Writing ",data," in a file");
        setTimeout(function process(){
            let file="result/return.txt";
            console.log(data ,"written Successfully on", file);
            resolve(file);
        },3000);
    });
}

function uploadData(file,url)
{
    return new Promise(function(resolve,reject){
        console.log("Uploading Files Started in ",url, "and filename is ",file);
        setTimeout(function process(){
            let result="SUCCESS";
            console.log(file ,"Uploading SuccessFully in ",url);
            resolve(result);
        },5000);
    });
}



// let downloadPromise = fetchData("www.datadrive.com");
// downloadPromise
// .then(function process(value)
// {
//     console.log("Downloading is done with the following value", value);
//     return value; 
// })

// .then(function writePromise(value)
// {
//     return writefile(value);
// })

// .then(function processUpload(value)
// {
//     return uploadData(value,"www.mj.com");
// })

async function processing()
{
    let downloadData = await fetchData("www.google.com");
    console.log("Downloading await completed");
    let file = await writefile(downloadData);
    console.log("Writing await completed");
    let uploadResponse = await uploadData(file,"www.mohit.com");
    console.log("Uploading await completed");
    console.log("Completed process with response: ",uploadResponse);

    return true;
}
// await //wrong syntex!!!!

processing();


// We can implement the .then() chain with async await kewyords.
*/

function fetchData(url)
{
    return new Promise(function(resolve,reject){
        console.log("Download Started from: ",url);
        setTimeout(function process()
        {
            let data="Important Data!!!";
            console.log("Download Completed from", url);
            resolve(data);        
        },5000);
    })
}

async function processing()
{
    console.log("Entering Processing!!");
    let value1 = await fetchData("www.google.com");
    console.log("Youtube Downloading  Done!!");
    let value2 = await fetchData("www.google.com");
    console.log("google downloading done");
    console.log("Exiting Processing");
    return value1 + value2;
}

console.log("Start");
setTimeout(function timer1()
{
    console.log("timer1");
},0);
console.log(("after setting timer1"));
let x=processing();
x.then(function (value)
{
    console.log("Finally processing promise resolves with ",value);
});
setTimeout(function timer2(){console.log("timer2")},1000);
setTimeout(function timer3(){console.log("timer3")},0);
console.log("End");



// Inside async function, everything looks synchronus but overall it is asynchronus.