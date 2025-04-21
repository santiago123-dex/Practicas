// creamos un objeto base
let baseShape = {
    describe(){
        return console.log("Soy una figura base")
    }
}
// creamos un constructor
function Square(side){
    this.side = side
}
// asignarmos a Squeare el prototipo baseShape
Square.prototype = baseShape
// Agregamos un metodo a Square (Tambien se le asigna al prototipo)
Square.prototype.area = function(){
    return console.log("Área " + this.side * this.side)
}
// Shape1 va a ser un nuevo objeto en base de Square y le decimos que side vale 5
let shape1 = new Square(5)
// shape sirve
shape1.area()
// Este tambien sirve pero da NaN por que no le llenamos los parametros
baseShape.area()


// Creamos un nuevo constructor
function Hexagon(side){
    this.side = side
}

// A Hexagon le decimos que tome las propiedades de base y si se agrega metodos a Hexagon no se reflejen en baseShape
Hexagon.prototype = Object.create(baseShape)

// Creamos un metodo nuevo
Hexagon.prototype.perimeter = function(){
    return console.log("Perimetro: " + this.side * 6)
}

// Creamos un nuevo objeto en base a hexagon y le determinamos el valor del parametro
let shape2 = new Hexagon(3)

//Probamos si sirve "si sirve"
shape2.perimeter()