import events from "events";

const eventEmitter=new events.EventEmitter();

const myEventHandler=()=>{
    console.log("You just Clicked!");
}

eventEmitter.on('click',myEventHandler);

eventEmitter.emit('click');

