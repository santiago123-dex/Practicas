class Post{
    constructor({title, content, author, published, date}){
        this.title = title
        this.content = content
        this.author = author
        this.published = false
        this.date = new Date(date) //usa la fecha proporcionada
    }
    publish(){
        if(this.published == false){
            return this.published = true
        }
    }
    getSummary(){
        return console.log(`${this.title}, ${this.author}, ${this.published}`)
    }
}

let post1 = new Post({title : "Cien años de soledad", content : "El mejor libro", author : "Gabriel Garcia marquez", date : "10 - 11 - 1999"})

post1.publish()
console.log(post1)
post1.getSummary()
