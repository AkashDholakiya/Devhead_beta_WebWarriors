const mongoose = require('mongoose');
const uri = 'mongodb+srv://akashdholakiya:Ak%40sh635692@cluster0.0tjtlea.mongodb.net/FitPal?retryWrites=true&w=majority' 
function dbconn(){
    mongoose.connect(process.env.MONGO_URI || uri);
    console.log('Connected to MongoDB');      
}    
 
module.exports = dbconn; 