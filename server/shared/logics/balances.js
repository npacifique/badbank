const users = require('../../data/sampleData')

//console.log(users["joe.doe"].deposits)


//console.log(users["joe.doe"].widthrows)


class Calc {
    
    constructor(username){
        this.username = username
    }
    
    getWidthrowTotal(username){

        const keys = Object.keys(users[username].widthrows)
    
        const user = users[username].widthrows
    
        let total = 0
        
        keys.forEach(k => {
    
            user[k].forEach(d => {
                //console.log(d.amount)
                total+=d.amount
            });
        });
        
    }


    getDepositsTotal(username){

        const keys = Object.keys(users[username].deposits)
    
        const user = users[username].deposits
    
        let total = 0
        
        keys.forEach(k => {
    
            user[k].forEach(d => {
                //console.log(d.amount)
                total+=d.amount
            });
        });
        
    }

}

var calc = new Calc()


calc.getDepositsTotal("joe.doe")

