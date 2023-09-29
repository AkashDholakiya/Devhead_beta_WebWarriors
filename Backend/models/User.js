const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        validate :{ 
            validator: function(value) {
                return /^[a-zA-Z0-9_]+$/.test(value);
            },
            message: "Username must consist of only alphanumeric characters and underscores.",
        }
    },
    email:{
        type: String,
        required: true,
        unique: true, 
    },
    password:{       
        type: String,
        required: true,
    },
    role:{
        type:String,
        default: "user",
    }
});
  
module.exports = mongoose.model("User", userSchema);