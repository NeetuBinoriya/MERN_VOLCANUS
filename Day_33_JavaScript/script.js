// *** LOOPS****
// const arr = [10,20,"Superman","Spiderman",28739.23,400]
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// console.log("Length of array = ", arr.length);

// let i = 0;
// while(i<arr.length){
//     console.log(arr[i])
//     i++
// }
// do{
//     console.log(arr[i])
//     i++
// }
// while(i<arr.length)


//**** Foreach, Map, Fillter*****
//**** for in loop****
// const arr = [10,20,"Superman","Spiderman",28739.23,400]
// for(let x in arr){
//     console.log("index of element = "+x+" Actual element = " +arr[x])
//     // console.log(x,arr[x])
// }

// ****For of Loop*****
// for(let x of arr){
//     console.log(x)
// }

// const person ={
//     Person_name :"Neetu Binoriya",
//     Person_age : 30,
//     gender : "Female",
//     Person_id : "Adhaar Card",
//     Adress : "Indore",
//     Contact_number : 123456,
//     height : 5.3,
//     weight : 58,
// }
// for(let i in person){
//         console.log(i, person[i])
//     }

// ****For Each*****
const arr = [10,20,"Superman","Spiderman",28739.23,400];
arr.forEach((value,index,array)=> console.log(value,index,array))