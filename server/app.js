const express = require('express')
const bodyParser = require('body-parser')

// routers
const userRouter = require('./routers/user')
const accountRouter = require('./routers/account')

// app variables
const app =  express()
const port = 3000 || process.env.PORT

//middlewares 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/user', userRouter)
app.use('/api/account', accountRouter)


app.listen(port, ()=>{
    console.log('server is runnning on port '+ port)
})




