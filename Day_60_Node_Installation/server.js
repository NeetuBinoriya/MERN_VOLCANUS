import http from 'http'
// console.log(http);
const server = http.createServer((req, res)=>{
    // console.log(req);
    if(req.url == '/'){
        // console.log("USer is Requesting for Home Route");
        res.end("Thank you for Requesting")
    }
    else if(req.url == '/samosa'){
        res.end("Giving you in 5 Min")
        // console.log("USer is Requesting for Superman");
    }else if(req.url == '/wdm'){
        res.end("YouTube")
        // console.log("USer is Requesting for WDM");
    }
    else{
        console.log("Invalid Request");
    }

});

const port = 1000;
 
server.listen(port, ()=>console.log(`Server is running on port ${port}`))
