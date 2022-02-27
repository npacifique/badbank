const express = require('express')
const auth = express.Router()


auth.use((req, res, next) => {

    let body = req.body

    
    if(body.username == 'jon.doe'){
        return next()
    }else{
        res.send('Not authorized! Go back!')
    }
   
})


module.exports = auth