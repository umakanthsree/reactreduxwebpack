console.log('node application');

http = require('http');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
express = require('express');
app = express();

app.use(express.static(__dirname));
//app.use(express.static(__dirname+'/script'));

app.get('/', function(req, res){
  //res.writeHead(200, {"Content-Type": "text/html"});
  console.log('res');
  res.sendFile(__dirname+'/index.html');
});
/*

const albumList = { 
  "id": 4, 
  "isDone": true,  
  "text": "components 1" 
};
app.get('/list', function(req, res){
  //res.writeHead(200, {"Content-Type": "text/html"});
  MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to db server");
    getAllDocument(db,function(result){
        db.close();
        console.log(req);
       res.send(result);
      });
  });
});
*/
app.listen('8090', function(){
  console.log('success', __dirname);
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