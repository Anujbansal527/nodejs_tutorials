const EventEmitter = require("events");
const events = new EventEmitter();

events.on("checkPage",(sc,msg)=>{
    console.log(`status code ${sc} and the page is ${msg}`);
});
events.emit("checkPage",200,"ok");