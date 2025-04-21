function Animal(){
    this.speak = function(){
        return console.log("I make a sound")
    }
}

dog1.speak()
Animal.prototype.describe = function(){
    return console.log("I am a dog named Firulais")
}

function Dog(name, breed){
    this.type = "dog"
    this.name = name
    this.breed = breed
}

Dog.prototype = new Animal()

let dog1 = new Dog("firulais", "labrador")

dog1.describe()