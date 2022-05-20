const http=require('http'); // creating a server using http module

const port = 7430;

const hostname='127.0.0.1';


//Creating a server obj
const server = http.createServer(function (req,res){
    res.write("hello "); //passing text/string data;

    res.write(JSON.stringify({name:"yato"})); // Passing JSON data

    res.write('<h1>hello html response</h1>')  //Passing html response
    
    res.end();
})

server.listen(port,hostname,()=>{})