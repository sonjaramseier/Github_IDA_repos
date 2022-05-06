console.log('Hello World');
let number = 9
let string = 'string'

//arrays
let array = [3, 5, 20, 45, 100, 243]

// console.log(array)
//     //console.log(array[3]) //zeigt Zahl an mit Index 3 (also 45)
// console.log(array.length) //zeigt Länge Array an

// for (let i = 0; i < array.length; i += 1) { //Start bei Index 0, 5x wiederholen, wachsen von 1
//     //console.log('for loop in position '); //zeigt Index
//     //console.log(i)
//     //console.log('show array in position') //zeigt Zahl
//     console.log('showing array in position: ' + i) //zeigt Text plus Zahl
//     console.log(array[i])
// }

//mehrere Zeilen auskommentieren: Text anwählen & comm + shift + 7


//how to fill an array with random values

let empty_array = []

let number_of_items = 50

for (let i = 0; i < number_of_items; i++) {
    let random_value = Math.random() * 1000 //random Zahl zwischen 0 und 1 (mal 1000)
    empty_array.push(random_value)
}

console.log(empty_array)


//objects

let object = {
    x: 100,
    y: 200,
    width: 100,
    height: 300
}

let div = document.createElement('div')
div.style.position = 'fixed'
div.style.width = object.width + 'px'
div.style.height = object.height + 'px'
div.style.top = object.y + 'px'
div.style.left = object.x + 'px'
div.style.backgroundColor = '#f33'

document.body.appendChild(div)

console.log(object)