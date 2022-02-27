const express = require('express')
const auth = require('../shared/auth')

const router = express.Router();



router.get('/', auth, (req, res)=>{
    res.send('user router')
})


router.post('/login', auth, (req, res)=>{

      
    res.send(req.body)
})


module.exports = router;