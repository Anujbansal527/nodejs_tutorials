const EventEmitter = require("events");
const events = new EventEmitter();

events.on("SayMyName",()=>{
    console.log("Anuj Bansal");
});
events.on("SayMyName",()=>{
    console.log("kamlesh sharma");
});
events.on("SayMyName",()=>{
    console.log("palak chouhan");
});
events.emit("SayMyName");