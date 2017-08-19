
// Connection URL
var url = 'mongodb://localhost:27017/MyMongoDB';

// Use connect method to connect to the server
/*MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to db server");*/
  /*insertDocuments(db, function() {
    removeDocument(db,function(){
      db.close();
    });
  });*/
 /* removeDocument(db,function(){
      db.close();
    });
 /* getAllDocument(db,function(){
      db.close();
    });*/
//});


var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('myCollection');
  // Insert some documents
  collection.insertMany([
    { id: 2, isDone: false,  text: 'document 2' },
    { id: 3, isDone: false,  text: 'document 3' }
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

var getAllDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('myCollection');
  // Delete document where a is 3
  collection.find({}).toArray(function(err, result) {
    assert.equal(err, null);
    console.log(result);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });    
}

var removeDocument = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('myCollection');
  // Delete document where a is 3
  collection.deleteOne({ id: 2, isDone: false,  text: 'document 3' }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });    
}