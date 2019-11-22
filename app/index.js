/*jshint node:true,esversion:6*/

const fs = require('fs');

let revBuffer = null;
let processing = false;
let pos = 0,
    datalen = 0;
debugger;
process.stdin.on("data", function (buffer) {
    let sourceStart = 0;
    if (processing === false) {
        processing = true;
        datalen = buffer.readInt32LE(0);
        revBuffer = Buffer.alloc(datalen);
        sourceStart = 4;
    }
    pos += buffer.copy(revBuffer, pos, sourceStart);
    if (pos === datalen) {
        pos = 0;
        processing = false;
        datalen = 0;
        console.log(revBuffer.toString("utf8"));
    }
});

setInterval(() => {

    const data = Math.random().toString();
    const dataBuffer = Buffer.from(data);
    const lenBuffer = Buffer.alloc(4);
    lenBuffer.writeInt32LE(dataBuffer.length, 0);
    process.stdout.write(lenBuffer);
    process.stdout.write(dataBuffer);
}, 5000);