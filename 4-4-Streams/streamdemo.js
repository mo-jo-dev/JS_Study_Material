const fs=require('fs');
const transformStream = require('stream'); 
let fileStream = fs.createReadStream(__dirname + '/input.txt');
let outputStream = process.stdout;

let middleStream = new transformStream.Transform({
    transform(chunk,enc,next){
        let modifiedChunk = chunk.toString().toUpperCase();        
        this.push(modifiedChunk);
        setTimeout(nextCB,1000);
    }
});

let newReadableStream = fileStream.pipe(middleStream);
newReadableStream.pipe(outputStream);

// fileStream.pipe(outputStream);
//readStream.pipe(writeStream);