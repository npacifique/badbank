const express = require('express')

const auth = require('../shared/auth')

const users = require('../data/sampleData')

const create = require('../shared/userTemplate')



const router = express.Router();

let allUsers 

router.get('/', (req, res)=>{
    res.send('user router')
})


router.post('/login', (req, res)=>{
     
    res.send(req.body)
})


router.post('/create', (req, res)=>{

    let user = create(req.body)

    allUsers = {...users, ...user}

    res.send(allUsers)
})


router.get('/users', (req, res)=>{

    //this should only be accessible by admins
    res.send(users)
})



module.exports = router; 