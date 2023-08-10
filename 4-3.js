// Both ES Module and the Common Modules are common in the industry.
// We doesnt start writing code to a new platform in a hurry. We wait for the threat, like if the feature is removed.
// E.g - JS had only var earlier, the let keyword was implemented but nothing happened to the var even after that.


// How can we prepare Command Line Scripts?



// We use console.log for printing something in the JS file
// To print, we can use one other methoed too with the help of process global called
process.stdout.write("hi");      //It appends the new line


// We can take input using command line interface or by the standard input form, but there is another way, i.e streams.
// Streams - Continuous flow of data fed into the computer processor



// Packages - Already prepared set of libraries that are used by us for the effective use.
// There are various libraries in the node runtime environment, there should be a effective way to utilize the libraries
// that happens with the help of package managers.
// In node we have various package managers - npm and yarn
// These manage the installation, dependies, resolution, version management. 

// npx is a part of npm, used to directly execute some function of a package in a terminal instead of downloading the whole code.

// There are various packages to replace the standard long codes - like the minimist package is used to run the process.argv program
// There is a package called Axios that is used to make http calls and it is a promise based library.

// Packages help us in dependency resolution.

// We have fs package too which is a default package in node.
// We can use it using:
// const fs = require('fs/promises');         //We require a module here. //This is a promise based syntax, we have to give promises for this to run
// By default this module takes the callback type.



// The Further code is in fsdemo.js file: