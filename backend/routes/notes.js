const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/',(req,res)=>{
    const obj={
        name:'gopi'
    }
    res.send(obj)
})
module.exports = router;