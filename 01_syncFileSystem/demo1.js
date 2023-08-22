const fs = require("fs");

fs.writeFileSync("read.txt","welcome to my file");

fs.writeFileSync("read.txt","new text will replace old text");

fs.appendFileSync("read.txt","new text will be added with old text");

const buf_data = fs.readFileSync("read.txt");

console.log(buf_data);
        //form of binary data

/*PRINTING BUFFER DATA INTO NORMAL FORM*/

const buff_data = fs.readFileSync("read.txt");

org_data = buff_data.toString();

console.log(org_data);

fs.renameSync("read.txt","readwrite.txt");