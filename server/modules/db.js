var mongoose = require('mongoose');
var mongoURI = 'mongodb://who:password@ds031651.mlab.com:31651/nicsdb';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('Mongo Connection Error: ' + err);
});

MongoDB.once('open', function(){
  console.log('Connected to Mongo');
});

module.exports = MongoDB;
