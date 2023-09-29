const express = require('express');
const { register,Login,getuser } = require('../controllar/authControllar');
const router = express.Router();
const {TokenVerify} = require('../utils/TokenVerify');

router.post('/login', Login); 
router.post('/register' ,register);
router.post('/getuser', TokenVerify, getuser)
  
 
module.exports = router;  