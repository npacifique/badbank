const moment =require ('moment')

const userId = ()=> Math.floor( Math.random() * 1000 ).toString(36) + Date.now().toString(36)
const generateAccoauntNumber = ()=> Math.floor( Math.random() * 1000 ).toString() + Date.now().toString()

// console.log(moment().format("MM/DD/YYYY"))
// console.log(moment().format("h:mm a"))


const createUser = ({username, firstName,  lastName, emailAddress, password})=>
{
        return {
            [username] : {
            "id": userId(),
            "firstName": firstName,
            "lastName":lastName,
            "username" : username,
            "emailAddress" : emailAddress, 
            "password" : password, 
            "account" : generateAccoauntNumber(), 
            "isAdmin":false,
            "deposits" : 
            {
                // "02/27/2022" : [
                //     {"time" : "10:00 AM", "amount" : 10}
                // ]

            },
            "widthrows" : 
            {
                // "02/26/2022" : [
                //     {"time" : "09:05 AM", "amount" : 15},
                //     {"time" : "08:06 AM", "amount" : 50}
                // ],
                // "02/27/2022" : [
                //     {"time" : "10:05 AM", "amount" : 5},
                //     {"time" : "10:06 AM", "amount" : 5}
                // ]    

            }
        }
    }
}


module.exports = createUser