// const fs = require('fs/promise') This is for the common moduling, lets get into ES moduling
// import { writeFile } from 'fs/promises';
import {readFile,writeFile } from 'fs/promises'


// console.log(__dirname);  //This will not work as the __dirname is not defined in the ES moduline and thus cant be utilized.
// rather we can use import.meta.url to print the current directory.

const filepath = new URL('./index.html', import.meta.url, 'utf-8');
let data = await readFile(filepath, {encoding: 'utf-8'});    //Here, we are passing the filepath, the encodeing and we have replaced the callback with the await as we are taking promises into actions.
console.log(data);

// In order to write something in the html file, we change the html syntax in a particular fashion and do the following: 
const obj = {            //Kind of a templating engine. Which help us to prepare html file and put the values dynamically.
    head: 'my custom head',
    body: 'custom body'
}


for(const [key,value] of Object.entries(obj))
{
    data= data.replace(`${key}`, value)
}

await writeFile(new URL('./index.html', import.meta.url), data);