console.log('node application');

http = require('http');
express = require('express');
app = express();

/*app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/script'));

app.get('/', function(req, res){
  //res.writeHead(200, {"Content-Type": "text/html"});
  res.sendFile(__dirname+'/index.html');
});*/

const albumList = { 
  "id": 4, 
  "isDone": true,  
  "text": "components 1" 
};
app.get('/list', function(req, res){
  //res.writeHead(200, {"Content-Type": "text/html"});
  res.send(albumList);
});

app.listen('8081', function(){
  console.log('success');
});

/*http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
  res.write('<!DOCTYPE "html">');
  res.write("<html>");
  res.write("<head>");
  res.write("<title>Hello World</title>");
  res.write("</head>");
  res.write("<body>");
  res.write("Hello World!");
  res.write("</body>");
  res.write("</html>");
  res.end();

}).listen(7080,function(){
	console.log('success');
});*/