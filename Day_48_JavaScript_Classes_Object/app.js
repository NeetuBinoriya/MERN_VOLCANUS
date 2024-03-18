// Classes And Objects
// Constructor Method
// console.log("hello Console");

// const heros = {
//     name: 'superman',
//     age: 40,
//     salary: 789064,
//     cart: {
//         productName: 'Iphone', price: 12344565, quantity: 1
//     },
//     company:function(){
//         return this
//     }
// }
// console.log(heros);
// console.log(this);

// const P = new Promise

// constructor function
function Product(name, price, quantity) {
    this.name = name,
        this.price = price
    return this
}

Product.prototype.brandName = 'Apple'
Product.prototype.quantity = 20
Product.prototype.price = 3000
Product.prototype.shell = function () {
    return 20
}

// console.log(Product("macbook", 123456, 2));
const p1 = new Product('macbook', 123456, 2)
const p2 = new Product('HP I-Book', 7453, 3)
console.log(p1.brandName, p1.price, p1.quantity);
console.log(p1.shell());
console.log(p1);
console.log(p2);