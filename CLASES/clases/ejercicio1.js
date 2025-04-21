class User{
    constructor({username, email, status, lastlogin}){
        this.username = username
        this.email = email
        this.status = "offline"
        this.lastlogin = lastlogin
    }
    login(){
        if(this.status == "offline"){
            return this.status = "online"
        }else{

        }
    }
    logout(){
        if(this.status == "online"){
            return this.status = "offline"
        }else{

        }
    }
}

let user1 = new User({username : "Santi", email: "santi17@gmail.com", lastlogin : "se creo hace poco"})
let user2 = new User({username : "Nicolas", email: "nico27@gmail.com", lastlogin : "se creo hace poco"})

console.log(user1.username)
console.log(user1.email)
console.log(user1.lastlogin)
console.log(user1.login()) 
console.log(user1.logout())

console.log(user2.username)
console.log(user2.email)
console.log(user2.lastlogin)
console.log(user2.login()) 
console.log(user2.logout())