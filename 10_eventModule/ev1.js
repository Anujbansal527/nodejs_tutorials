const EventEmitter = require("events");
const events = new EventEmitter();

events.on("SayMyName",()=>{
    console.log("Anuj Bansal");
});
events.emit("SayMyName");