// #!/usr/bin/env node
// Here #! is a She-bang

// To execute the file anytime in the terminal, we can use chmod 777, here 777 will give read write execute permissions to the file
console.log("Hello World");

// Command Line Arguements
// We can access the files using the process global:
console.log(process.argv); 
console.log(process.argv[2].split("="));