const express = require('express')

const moment =require ('moment')

const auth = require('../shared/auth')

const users = require('../data/sampleData')

const {getBalance, isAbleToWithdrow} = require('../shared/logics/balances')

const today = moment().format("MM/DD/YYYY")

let data = users['joe.doe'].deposits[today.toString()]

//const calc = new calculator()

//const create = require('../shared/userTemplate')

const router = express.Router()

// http://localhost:3000/api/account/deposits/joe.doe
router.get('/deposits/:username', (req, res)=>{

    const user = req.params["username"]

    const dep = users[user].deposits

    res.send(dep)
})


router.get('/withdrows/:username', (req, res)=>{

    const user = req.params["username"]

    const dep = users[user].widthrows

    res.send(dep)
})


router.get('/balance/:username', (req, res)=>{
    
    const user = req.params["username"]
    
    const bal = getBalance(user)

    res.send({username : user, "balance":bal})
})


router.post('/deposit/:username', (req, res)=>{

    //use database data instead of sample data
    if(data == undefined){
        data = []
       users['joe.doe'].deposits[today.toString()] =  [{"time":  moment().format("h:mm a"),"amount": req.body.amount}]
       
    }else{
        users['joe.doe'].deposits[today.toString()].push({"time":  moment().format("h:mm a"),"amount": req.body.amount})
    }
    
    res.send(users['joe.doe'].deposits)

    }
)


router.post('/withdrow/:username', (req, res)=>{

    //use database data instead of sample data

    let checks = isAbleToWithdrow('joe.doe', req.body.amount)

    if(checks){

        if(users['joe.doe'].widthrows[today.toString()] == undefined){
            users['joe.doe'].widthrows[today.toString()] = []
        users['joe.doe'].widthrows[today.toString()] =  [{"time":  moment().format("h:mm a"),"amount": req.body.amount}]
        
        }else{
            users['joe.doe'].widthrows[today.toString()].push({"time":  moment().format("h:mm a"),"amount": req.body.amount})
        }
    }

    //res.send(users['joe.doe'].widthrows)
    const bal = getBalance('joe.doe')

    if(checks){
        res.send({username : 'joe.doe', "balance":bal})
    }else{
        res.send({"error" : 'you have no money to cover your withdrow'})
    }

    }
)





module.exports = router; 