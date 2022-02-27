const users = {
    
    "joe.doe" : {
        "id":"01",
        "firstName":"Joe",
        "LastName":"Doe",
        "username" : "joe.doe",
        "emailAddress" : "joe.doe@gmail.com", 
        "password" : "pasNow", 
        "account" : 123, 
        "isAdmin":false,
        "deposits" : 
        {
            "02/27/2022" : [
                {"time" : "10:00 AM", "amount" : 10}
            ]

        },
        "widthrows" : 
        {
            "02/27/2022" : [
                {"time" : "10:05 AM", "amount" : 5},
                {"time" : "10:06 AM", "amount" : 5}
            ]  
        }
    }, 
    "ann.beth" : {
        "id":"02",
        "firstName":"Ann",
        "LastName":"Beth",
        "username" : "ann.beth",
        "emailAddress" : "ann.beth@gmail.com", 
        "password" : "pasNow", 
        "account" : 124, 
        "isAdmin":false,
        "deposits" : 
            {
                "02/27/2022" : 
                    [
                        {"time" : "11:00 AM", "amount" : 110},
                        {"time" : "11:00 AM", "amount" : 110}
                    ]
            }
        , 
        "widthrows" : 
        {
            "02/27/2022" : [
                {"time" : "12:05 PM", "amount" : 5},
                {"time" : "14:06 pM", "amount" : 5}
            ]  
        }
    }
}


module.exports = users