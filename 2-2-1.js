// console.log is not a part of ECMA Script rather it is the part of runtime


// We cant predict how exactly the runtime is working.
// Depending on our operating systems, the way console.log works is different.

// In node, when we do console.log(), then internally it calls something i.e. ______process.stdout.write_____


// console.log() will try to work(most of the time) in a synchronous manner

// In production level, there are many logs that are used as the behaviour of console.log can vary from runtime to runtime



// Go to latentflip.com to visualize how the thigs are working in asynchronous environment, like how the things
// are entering in event queue and the loop is checking it.



// In event queue, we receive callbacks.


// Disadvantages of Callbacks: 
// -> Callback hell - Callback inside a callback inside a callback inside a callback for a long time -> People say Code readibility hampers

// -> Inversion of Control - I there is some part of code whose control we are passing to someone else and we dont know how that part will be executed. This is called Inversion of Control



// E.g-
function fun(inputString, fn)
{
    // executes some algorithm on string
    let output = inputString.split(',');
    for(let i=0;i<output.length;i++)
    {
        fn(output[i]);
    }
}



// using it
fun("name:mohit,subject:ECE",function process(ip)   //This is the function which will be written by us and it is going
// as a callback to a function that is written by someone else, so out function is executing in a function no written by us
// So, this is not good as there could be some problem in the function written by else. 
// or we can say if we are using the service of other, we dont know if something is wrong with their functions
// It will cause issues to our users.
// So, it is called Inversion of Control
{
    let arr=ip.split(":");
    console.log("{", arr[0], " => ", arr[1], "}");
})


// The alternative is Promises.


// PROMISES - 
// -> These are special JS Objects that are also considered readability enhancers.
// -> They get immidiately returned from a function set up to return a promise.
// -> They act as placeholders for the data we hope to get back from some future task.
// -> We also attach the functionality we want to differ until the future task is done and promise object automatically handles execution of this functionality


// So promises do two things 1 inside and 1 outside JS
// -> It signs up the process required to run in the runtime and gives a place holder in JS which has a value property





// Things we need to know ->

// How to create a promise??
// How to consume a promise??




// requesting content of a url using callback

// Tasks:
// 1-> Write a function to download data from a url
// 2-> Write a function to save that downloaded data in a file
// 3-> Write a function to upload the file written in previous step to a new url.


function fetchcallcustom(url,fn)
{
    // download content of the url
    // this downloading can take sometime
    // We first download the content of url and then pass it in to a callback function.
    console.log("Starting Download from: ",url);
    setTimeout(function proc()
    {
        console.log("Download Completed");
        let response="Dummy data";
        fn(response);
        data=response;
        // console.log("Ending the function");
    },3000);
}

function writefile(data,fn)
{
    // this function writes data in a new file
    console.log("Started writing data: ");
    setTimeout(function process()
    {
        console.log("Writing Completed!!");
        let filename = "output.text";
        fn(filename);
        // console.log("writing ended");
    },4000);
}

function uploadfile(filename,newurl,fn)
{
    console.log("Uploading Started");
    setTimeout(function process()
    {
        console.log("File",filename, "Uplaoded Successfully on",newurl);
        let uploadResponse="SUCCESS";
        fn(uploadResponse);
        console.log("Upload Ended");
    },2000);
}

fetchcallcustom("www.google.com",function downloadcallback(resp)
{
    console.log("Downloaded Content: ",resp);
    writefile(resp,function writecallback(filename)
    {
        console.log("new file written is: ",filename);
        uploadfile(filename,"www.yahoo.com",function uploadcallback(uploadResponse)
        {
            console.log("Successfully uploaded",uploadResponse);
        })
    })
});

// The above example is of Callback Hell