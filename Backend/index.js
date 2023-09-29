const express = require('express');
const mongoconn = require('./dbconnect/dbconn');
const coockieParser = require('cookie-parser');
const cors = require('cors');
const auth = require('./routes/auth');


const app = express();
const port = process.env.PORT || 4000;

// middleware  
app.use(cors());  
app.use(express.json());  
app.use(coockieParser());  
  
// routes
app.use('/api/v1/auth', auth);
   
// listen
app.listen(port, () => {   
    mongoconn();
    console.log(`Server is running on port: ${port}`);
}); 