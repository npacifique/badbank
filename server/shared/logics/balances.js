const users = require('../../data/sampleData')

//console.log(users["joe.doe"].deposits)







//console.log(users["joe.doe"].widthrows)
const getWidthrowTotal = (username)=>{

    const keys = Object.keys(users[username].widthrows)

    const user = users[username].widthrows

    let total = 0
    
    keys.forEach(k => {

        user[k].forEach(d => {
            console.log(d.amount)
        });
    });
    
}

getWidthrowTotal("joe.doe")