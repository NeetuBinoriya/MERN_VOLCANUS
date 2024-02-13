// ***Array***
// let heros = ["superman", "spiderman", "hulk", 120, 20346.50, 'shaktimaan']
// let arr = []
// arr [0] = 'ram'
// arr [1] = 'shyam'
// arr [2] = 20.4

// // console.log(heros)
// console.log(heros[2])
// console.log(arr[1])
// console.log(arr)


// ***Array with objects
// let arrObj = [
//     {name: "ram", gav: "Ayodhya", age: 5000},
//     {name: "Chinky", gav: "Indore", age: 30, rashancard: false, nested:{name2: "Abhishek", funt: function(){
//         return 20;
//     }}},
//     {name: "mohan", gav: "Rajashthan", age: 50, rashancard: false},
//     {name: "Shyam", gav: "Bhopal", age: 100, rashancard: true},

// ]
// console.log(arrObj)
// console.log(arrObj[2])
// console.log(arrObj[3].gav)
// console.log(arrObj[1].nested.funt())

let arr = [10,20,30,40]

console.log("Original Array..",arr)
// arr.push("Apple", "Superman") //Will add one or more new element in last of the array
// arr.pop() //will remove last element from the last of the array
// console.log("Pop Element", arr.pop())

// console.log("Removing Shift Element",arr.shift()) //Will Remove Element from First
// console.log("Removing Shift Element",arr.shift())

arr.unshift("Don3", "Dr. Strange", 50) //Will add one more New element from Start

console.log("Modify array..", arr)

// arr.shift()