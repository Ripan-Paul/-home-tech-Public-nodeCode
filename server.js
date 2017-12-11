/*
//connect with module1 and module2.js file
var http =  require('http');
var module1 = require('./module1');
var module2 = require('./module2')

function onRequest12(request,response){
  response.writeHead(200,{'Content-Type':'text/plain'});
  response.write("hello nodejs");
  response.write(module2.myString);
  module2.node();
  response.end();
}

http.createServer(onRequest12).listen(2000); */

var http =  require('http');
var fs = require('fs');


function onRequest(request,response){
  response.writeHead(200,{'Content-Type':'text/html'});
  fs.readFile('index.html',null,function(error,data){
       if(error){
         response.write("Its an error");
       }
       else{
         response.write(data);
       }
      response.end();
  })

}

http.createServer(onRequest).listen(2000);
