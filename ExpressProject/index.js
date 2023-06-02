const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.post('/',(req,res)=>{
    res.send('Welcome to Post Method');
})

const server=app.listen(8081,()=>{
    const host=server.address().address
    const port=server.address().port

    console.log("Server is running at http://%s:%s",host,port)
})