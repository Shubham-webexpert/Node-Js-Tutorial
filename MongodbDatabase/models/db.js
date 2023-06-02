const mongoose=require('mongoose');
mongoose.connect(
    "mongodb://localhost:27017/StudentDB",
    {
        useNewUrlParser:true
    }, 
    console.log("Database connected")

    // err=>{
    //     if(!err){
    //         console.log("Database Connected Successfully");
    //     }else{
    //         console.log("Error in connection:"+err);
    //     }
    // }

);

require("./studentModel");