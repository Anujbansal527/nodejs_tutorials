const fs = require("fs");

//fs.mkdir("new",(err)=>{console.log("done")});

//fs.writeFile("new/bio.txt","tesxt inside my file",(err)=>{console.log("done")});

//fs.appendFile("new/bio.txt"," new data will be added to the file",(err)=>{console.log("done")});

//const data = fs.readFile("new/bio.txt","utf-8",(err,data)=>{console.log(data)});

//fs.rename("new/bio.txt","myBio.txt",(err)=>{console.log("rename done")});

//fs.unlink("new/myBio.txt",(err)=>{console.log("done")});

fs.rmdir("new",(err)=>{console.log("done")});