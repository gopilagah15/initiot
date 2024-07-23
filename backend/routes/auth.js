const express = require('express');
const User = require('../models/User');

const router = express.Router();
const { body, validationResult } = require('express-validator');

router.get('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
        body('email','Enter a valid email').isEmail(),
        body('password','Password must be atleast 5 digit long').isLength({min:5})
],(req,res)=>{
    
    try {
    
    //if there are errors
    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  //to  create a  user
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(user => res.json(user))
      .catch(err=>{console.log(err);
        res.json({errors:'Please enter a valid email',message:err.message})
      })
          
    } catch (error) {
        console.log(error);
        return res.status(500).send('Server error')
    }
})
module.exports = router;