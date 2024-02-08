// *****Function****//

// Normal Function Declaration
// function print(){
//     console.log("This is a Function body");
// }

// print()

// Function with return type
// function sbiRateOfInterest(){
//     return 7.8
// }

// console.log(sbiRateOfInterest())

// Funtion with Aurgument
// function sum(a,b){
//     // console.log("happy");

//     return a+b;
// }
// const result = sum(10,20);
// console.log(result)

// Arrow Function
// function print(){
//     console.log("This is Normal Function")
// }

// Normal Arrow Function Decalaration
// const print2 = () => console.log("This is a Arrow Function")
// print2()

// Arrow Function With Return Value

// const rateOfInterest = () => 7.9

// console.log(rateOfInterest())

// Arrow Function with Aurgument and return type

// const sum = (a,b) =>{
    //     return a+b
    // }
    // console.log(sum(10,20))
    
// Arrow Function with Aurgument and No return type

// const sum = (a,b) =>{
//     console.log (a+b)
// }
// sum(10,20)


// ****OBJECTS****//

const laptop1 = {
    model_name: "HP Probook 830 G8",
    brand_name: "HP",
    ram: "10GB",
    HHD: "500GB",
    SSD: "300GB",
    Processor: "Intel i-9 9th Gen",
    Price: 75000
}
// console.log(laptop)
// console.log(laptop.model_name)
// console.log(laptop.ram)
// console.log(laptop.Price)

// console.log("Laptop1 Object", laptop1)

// //****SPREAD OPERATOR****/ 
// const laptop2 = {...laptop1, Price:55000, model_name:"Sony", Language: "Hindi"}
// console.log("Laptop2 Object", laptop2)

// ****Destructuring***//
const{ram,SSD,Price} = laptop1

console.log(ram,SSD,Price)


















// Class task
// const bank_detail = (holder_name, ac_number, IFSC_code, amount) => {

//     return holder_name, ac_number, IFSC_code, amount;
// }
// console.log(bank_detail("Neetu Binoriya", 12345, "SBI005", 25000))

