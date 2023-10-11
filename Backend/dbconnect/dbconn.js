const mongoose = require('mongoose');
const uri = process.env.MONGO_URI
function dbconn(){
    mongoose.connect(process.env.MONGO_URI || uri);
    console.log('Connected to MongoDB');      
}    
 
module.exports = dbconn; 
