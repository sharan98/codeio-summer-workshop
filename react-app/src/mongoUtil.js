const MongoClient = require( 'mongodb' ).MongoClient;
const uri = " ---PUT CONNECTION STRING HERE--- ";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( uri,  { useNewUrlParser: true }, function( err, client ) {
      _db  = client.db('bmsce');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  },

//   closeDB: function() {
//       MongoClient.close( function( callback ){
//           console.log('Connection Terminated.')
//       });
//   }
};