// function fetchcallcustom(url,fn)
// {
//     console.log("Starting Download from: ",url);
//     setTimeout(function proc()
//     {
//         console.log("Download Completed");
//         let response="Dummy data";
//         fn(response);
//         data=response;
//     },3000);
// }

// function writefile(data,fn)
// {
//     console.log("Started writing data: ");
//     setTimeout(function process()
//     {
//         console.log("Writing Completed!!");
//         let filename = "output.text";
//         fn(filename);
//     },4000);
// }

// function uploadfile(filename,newurl,fn)
// {
//     console.log("Uploading Started");
//     setTimeout(function process()
//     {
//         console.log("File",filename, "Uplaoded Successfully on",newurl);
//         let uploadResponse="SUCCESS";
//         fn(uploadResponse);
//         console.log("Upload Ended");
//     },2000);
// }

// fetchcallcustom("www.google.com",function downloadcallback(resp)
// {
//     console.log("Downloaded Content: ",resp);
//     writefile(resp,function writecallback(filename)
//     {
//         console.log("new file written is: ",filename);
//         uploadfile(filename,"www.yahoo.com",function uploadcallback(uploadResponse)
//         {
//             console.log("Successfully uploaded",uploadResponse);
//         })
//     })
// });





// PROMISES - are special JS objects


// We have to learn:
// -> How to create these promises?
// -> How to consume them?
// -> What are the properties involved?



// How promises work behind the scenes?
// -> The promise object we create have 4 major properties:
//    -Status/state
//    -Value
//    -on Fulfillment
//    -on Reject




// Status/state - It shows current promise status - pending(Still going on), fulfilled(Success) or a rejected(Error) state

// Value - when status of the promise is pending, this value property is undefined.The momment promise is resolved(fulfillment state), the value property is updated from undefined to the new value(actual value/returned value/resolved value that was expected)
// So, the value property acts like a placeholder till the time promise finishes.

// onfulfillment - This is an array which contains functions that we attach to our promise object
// (to a promise object, we can attach some functions using .then() method). When the value property is updated from undefined to the new value, JS gives chance to these attached function one by one with the value property as their arguement
// (if there is no piece of code in the call stack & global code left).





// How can we write a function to download some data from a url, and not use callbacks
// indtead use promises?

/*
function fetchData(url)
{

    return new Promise(function (resolve, reject) {        //new Promise is a Promise Constructor   and this constructor takes callback as an arguement. 
                                                           //resolve-> success and reject-> failure
        console.log("Started Fetching from ", url);
        setTimeout(function process()
        {
            let data = "Dummy Data";
            console.log("Completed Fetching the data");
            // Somehow we need to return the data ? ->TODO
            resolve(data);                                //function given to us by JS, the implementation will be done by JS itself
            //resolve gives us option to return what we need, earlier we used to so using callbacks;
        },4000);
    });
}
*/

// To create a promise, call the promise constructer(using new promise).
// The promise constructor takes a callback as an arguement
// The callback passed inside constructor expects two arguements.... resolve and reject
// Then inside the callback write your logic
// **if u want to return something on success, then call the resolve function with whatever value u want to return;


/*
function demo1()
{
    return new Promise(function(resolve,reject)
    {
        console.log("Hi");
        setTimeout(function process()
        {
            console.log("Wohoo!! Task is done.");
            resolve("Mohit is the best!!");
        },10000);
        console.log("by");
    })
}

var y=demo1();
console.log(y);

*/


// Q- When do we consider a promise fullfilled
// -> If we call resolve() function, we consider it fulfilled.
// -> We consider it rejected if we call reject().

/*

function demo(val)
{
    return new Promise(function(resolve,reject)
    {
        console.log("Start");
        setTimeout(function process()
        {
            console.log("Completed Timer");
            if(val%2==0)
            {
                // even number
                resolve("Even");
            }
            else
            {
                // odd number
                reject("Odd");
            }
        },10000);
        console.log("Somewhere");
    })
}



function fetch(url)
{
    return new Promise(function(resolve,reject)
    {
        console.log("Going to start the download!!");
        setTimeout(function process()
        {
            let data="Dummy Downloaded Data";
            console.log("Download Completed");
            resolve(data);
        },10000);
        console.log("Timer to mimic download started");
    });
}



console.log("Starting the program");
console.log("We are expecting to mimic a downloader");
x = fetch("www.google.com");
console.log("New Promise Object created successfully, but downloading still going on");


*/

// Creation of a Promise object is Synchronus as it is a Javascript object and is present in ECHMA Script documentation




// Tasks:
// 1-> Write a function to download data from a url
// 2-> Write a function to save that downloaded data in a file
// 3-> Write a function to upload the file written in previous step to a new url.
// NOTE - Now use Promises!!

function fetchData(url)
{
    return new Promise(function(resolve,reject){
        console.log("Download Started from: ",url);
        setTimeout(function process()
        {
            let data="Important Data!!!";
            console.log("Download Completed from", url);
            resolve(data);        //It changes state from pending to fulfilled and value from undefined to data.
            // resolve("done");     This line will never get executed as happened in callbacks, so it is advantageous for us as even if the control is with someone else, the output is expected. So, no inversion of control.
            // resolve(12345);      This line will never get executed as happened in callbacks, so it is advantageous for us as even if the control is with someone else, the output is expected. So, no inversion of control.
            // console.log("Hello");    This will work as in setTimeout has one line to resolve so it will get printed
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


// Consuming a Promise
// The promise consumption is the main beauty, using which we will avoid inversion of control.
// Whenever we call a function returning a promise, we will get a promise object which is like any JS object that we can store in a variable


// let response = fetchData("www.mohit.com");             // Q - will JS wait here for promise to be resolved if it involves any async piece of code?
// If creatin=on of promise involves sync piece of code, it will wait else not
// Here, this callback is having a asynchronus code so JS will not wait for it, it will send the code to runtime and then it will be stroed in Event queue until other code is executed


// Now, technically when promise is resolved, we have to execute some functions


// let data = fetchData("www.mohit.com");
// let filename = writefile(data);
// let response = uploadData(filename,"www.drive.google.com");

//The above code will not work on the required fashion. 



// we can use .then() function on the promise object to bind the functions we want to execute once we fulfill a promise
// The .then() function takes function as an arguement that we want to execute after promise fulfills, and the arguement function takes value property as parameter.



// So, we can do ->
// let downloadPromise = fetchData("www.datadrive.com");
// downloadPromise.then(function processDownload(value)
// {
//     console.log("Download Promise Fullfilled!!");
//     let writePromise = writefile(value);
//     writePromise.then(function writeProcess(value)
//     {
//         console.log("File Downloaded/Written");
//     })
// })


// The above piece of code solves inversion of code but not promise hell.
// The above Callback Hell is also called Promise Hell. So, we can say that callback hell is not a big problem than inversion of control

// But we can do: 
let downloadPromise = fetchData("www.datadrive.com");
downloadPromise
.then(function process(value)
{
    console.log("Downloading is done with the following value", value);
    return value; 
})

// downloadPromise=fetchdata("url");
// downloadPromise.then(function f(value){
    //   console.log(value);
    // return "Mohit";
// })

// So, in the above piece of code, .then() function returns another promise

// So, we can save us from promise hell by:

.then(function writePromise(value)
{
    return writefile(value);
})

.then(function processUpload(value)
{
    return uploadData(value,"www.mj.com");
})


// Apart from the event queue, we have a microtask queue also