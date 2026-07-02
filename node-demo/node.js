//js only run on broweser 
//after node we run js in local machine using node.js
//node are libraries that allow us to run js in local machine
//also called- run tim env. and library
//it use the v8 engine to run js code in local machine
//use as front-end and back-end

const fs = require('fs'); //file system module, it is a built-in module in node.js, it allows us to work with the file system on our computer

fs.writeFileSync("test.txt", "Hello from Node.js!"); //write a file named test.txt with the content 'Hello from Node.js!'
//take two parameter in () => text, write text- message

let data = fs.readFileSync("test.txt", "utf-8"); //read the file named test.txt and return the content of the file
//return catset

console.log(data)

const http = require("http") //help to create server, in backend- use local server to run the code, it is a built-in module in node.js, it allows us to create a server and handle HTTP requests and responses
const server = http.createServer(() => {
    console.log("server is running")
}) //create a server and handle HTTP requests and responses

server.listen(5000); 

//node method are very complex, so use EXPRESS