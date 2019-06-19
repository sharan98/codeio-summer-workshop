var mongoUtil = require( './mongoUtil' );

mongoUtil.connectToServer( function( err, client ) {
  if (err) console.log(err);
  // start the rest of your app here
  console.log("connection Success!!");
  const db = mongoUtil.getDb();
  db.collection('syllabus').find({}).toArray( function (err,result){
    if (err) throw err;
    console.log(result);
  });
  //mongoUtil.closeDB(); does not work yet
} );

// client.connect(err => {
//   //const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("connected Successfully");
//   const db = client.db('bmsce');
//   console.log('created coll object');
//   //console.log(db.collection('syllabus').count());
//   db.collection('syllabus').find({}).toArray( function (err,result){
//     if (err) throw err;
//     console.log(result)
//   });
//   client.close();
// });

