const friends = [
 {"name" : "Santi"},
 {"name" : "Santi"},
 {"name" : "Santi"},
 {"name" : "Santi"}
]
    

let output = ''

for(let i = 0; i< friends.length; i++){
    output = output + `<li>${friends[i].name}</li>`
}
document.getElementById('course').innerHTML = output

