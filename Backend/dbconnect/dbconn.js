const mongoose = require('mongoose');
const uri = "mongodb://127.0.0.1:27017/fitpal" 
function dbconn(){
    mongoose.connect(process.env.MONGO_URI || uri);
    console.log('Connected to MongoDB');     
}   
 
module.exports = dbconn; 