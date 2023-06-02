import http from "http";

const app=http.createServer((req,res)=>{
    res.writeHead(200,{
        "Content-Type":"text/html;charset=utf-8"
        });
        res.write("<h1>Hello world</h1>")
        for(let i=0;i<5;i++){
            for(let j=0;j<i;j++){
                res.write("*");
            }
            res.write("<br>");
        }
        res.end();
},console.log("App is listen on port 2000"));

app.listen(2000);

