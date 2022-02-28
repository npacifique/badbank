const users = require('../../data/sampleData')

//console.log(users["joe.doe"].deposits)

// let test = Object.keys(users['joe.doe'])

// console.log(test)

//console.log(test[1])
// test = [ 'joe.doe', 'ann.beth' ]
// test.forEach((k, i) => {
//     if(i == 0) {console.log(users['joe.doe'])}
// });

//console.log(users["joe.doe"].widthrows)


// class Calc {
    
//     constructor(username, withdrowAmount){
//         this.username = username, 
//         this.withdrowAmount = withdrowAmount
//     }
    
//     getWidthrowTotal(username){

//         const keys = Object.keys(users[username].widthrows)
    
//         const user = users[username].widthrows
    
//         let total = 0
        
//         keys.forEach(k => {
    
//             user[k].forEach(d => {
//                 //console.log(d.amount)
//                 total+=d.amount
//             });
//         });
        

//         return total
//     }


//     getDepositsTotal(username){

//         const keys = Object.keys(users[username].deposits)
    
//         const user = users[username].deposits
    
//         let total = 0
        
//         keys.forEach(k => {
    
//             user[k].forEach(d => {
//                 //console.log(d.amount)
//                 total+=d.amount
//             });
//         });

//         return total
        
//     }



//     getBalance(username){
//         return calc.getDepositsTotal(username) - calc.getWidthrowTotal(username)
//     }


//     isAbleToWithdrow(username, withdrowAmount){
//         const bal =  calc.getBalance(username)
//         if( withdrowAmount > bal){
//             return false
//         }else{
//             return true
//         }
//     }


// }

// var calc = new Calc()


// const d =  calc.getDepositsTotal("joe.doe")
// const w =  calc.getWidthrowTotal("joe.doe")
// const b =  calc.getBalance("joe.doe")
// const canWithdorw = calc.isAbleToWithdrow("joe.doe", 36)

// console.log('deposit: ',d)
// console.log('withdrow: ',w)
// console.log('balance: ',b)
// console.log('can withdrow: ',canWithdorw)


function getWidthrowTotal(username){

    const keys = Object.keys(users[username].widthrows)

    const user = users[username].widthrows

    let total = 0
    
    keys.forEach(k => {

        user[k].forEach(d => {
            //console.log(d.amount)
            total+=d.amount
        });
    });
    

    return total
}


function getDepositsTotal(username){

    const keys = Object.keys(users[username].deposits)

    const user = users[username].deposits

    let total = 0
    
    keys.forEach(k => {

        user[k].forEach(d => {
            //console.log(d.amount)
            total+=d.amount
        });
    });

    return total
    
}



function getBalance(username){
    return getDepositsTotal(username) - getWidthrowTotal(username)
}


function isAbleToWithdrow(username, withdrowAmount){
    const bal =  getBalance(username)
    if( withdrowAmount > bal){
        return false
    }else{
        return true
    }
}



module.exports =  {
    getBalance, 
    isAbleToWithdrow, 
    getDepositsTotal, 
    getWidthrowTotal
}