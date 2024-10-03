const http=require("http");// ("node:http") use both

const server=http.createServer((req,res)=>{

    if(req.url=== "/getSecretData"){
        res.end("there is no secret data");
    }
    res.end("hello anjali");
});

server.listen(7777); 