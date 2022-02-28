const express = require('express')

const moment =require ('moment')

const auth = require('../shared/auth')

const users = require('../data/sampleData')

const {getBalance} = require('../shared/logics/balances')


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

    // console.log(moment().format("MM/DD/YYYY"))

    // console.log(moment().format("h:mm a"))
    const today = moment().format("MM/DD/YYYY")

    let newBal
    
    let newDay = { [today.toString()]:[]}

    const user = req.params["username"]

    const dep = users[user].deposits

    const keys = Object.keys(dep)

    let data = [] // users[user].deposits[today.toString()]

    
    // var data = keys.map((k)=> {

    //     return  k.toString() == today.toString() && users[user].deposits[today.toString()
      
    // })

    //users[user].deposits[today.toString()].concat({"time":  moment().format("h:mm a"),"amount": req.body.amount})

    if(data == undefined){
        
       data.push(req.body.amount)

        
    }else if(data !== undefined){

        data.push(req.body.amount)

        
    }
    
    res.send(data)
    

    // if(data == undefined){
        
    // }else{
       
    // }


    //console.log(users[user].deposits[today.toString()])


   // keys.filter(k => {

        // if(k.toString() == today.toString()) 
        // {
        //     newBal = users[user].deposits[k].push({"time":  moment().format("h:mm a"),"amount": req.body.amount})

        //     return
        // }
        // else
        // {

        //     newDay[today.toString()].push({"time":  moment().format("h:mm a"),"amount": req.body.amount})

        //     newBal = {...users[user].deposits, ...newDay}

        //     return
            
        // }
       


    // })

        // console.log(newBal)

        // res.send(newBal)

       
    }
)







    //console.log(moment().format("MM/DD/YYYY"))

   // console.log(keys)



    
    //const bal = getBalance(user)

    //res.send({username : user, "balance":bal})
    
// })














module.exports = router; 