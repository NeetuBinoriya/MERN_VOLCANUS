// ****HIgh Order Array Method*******
// const arr = [10,20,30,40,50];
// console.log(arr.includes(20)); //Will give tell the element is available in this array or not Give answer in True or False

// *** INCLUDES METHOD ****

// const phones = [ "apple", "lenovo", "dell Inspiron", "Xiami", "hp", "Oppo"]

// const searchElement = "Apple";
// console.log(phones.includes(searchElement.toLowerCase()));

// **** High Order Methods******//
// ******* MAP METHOD********//
// const arr = [10,20,30,40,50,60]

// const result = arr.map((elements) => elements + 20);
// const result = arr.map((elements) => elements + "20");
// const result = arr.map((elements) => elements - "20");
// const result = arr.map((elements) => elements * "20");
// arr.map((e) => console.log(e+10));
// console.log(result)

// const result = arr.map((e)=>{
//     console.log(e+10);
//     return e+10;
// });

// console.log(result);

// ******** FILTER METHOD ********//
// const arr = [10,20,30,40,50,60];

// const filteredData = arr.filter((superman)=>superman>30)

// console.log(filteredData);

const products = [
  {
    id: 1,
    title: "Iphone 14",
    category: "Mobiles",
    price: 69999,
  },
  {
    id: 2,
    title: "One +",
    category: "mobiles",
    price: 29999,
  },
  {
    id: 3,
    title: "hp probook g90",
    category: "laptops",
    price: 169999,
  },
  {
    id: 4,
    title: "Lenovo Yoga",
    category: "laptops",
    price: 269999,
  },
  {
    id: 5,
    title: "Microsoft Surface",
    category: "tablets",
    price: 89999,
  },
  {
    id: 6,
    title: "ipad",
    category: "tablets",
    price: 99999,
  },
];

const filterSearch = "mobiles";

const filtereByCategory = products.filter(
  (product) => product.category.toLowerCase() == filterSearch.toLowerCase()
);

console.log(filtereByCategory);

// const filterByPrice = products.filter((data)=>data.price>=99999)

// console.log(filterByPrice)


// const filterByTitle = products.filter((data)=>data.title.toLowerCase().includes("i"))

// console.log(filterByTitle);