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


