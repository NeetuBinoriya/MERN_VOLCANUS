// console.log("Hello Console");

// Synchronus Code
// const synchronus = () => {
//     console.log("Superman");
//     console.log("Spiderman");
//     console.log("Batman");
// }
// // Asynchronus Code
// const asynchronus = () => {
//     console.log("Indian Institute of Technology");
//     setTimeout(() => {
//         console.log("Vellore Institute of Technology");
//     }, 2000);
//     console.log("Volcanus");
// };
// // Calling Function Synchronus
// // synchronus()
// // Calling Function Asynchronus
// asynchronus()

// Fetch Data using async await

const fetchData = async () =>{
    const api = await fetch("https://jsonplaceholder.typicode.com/users")
    // console.log(api)
    const data = await api.json();
    console.log(data);
};

// fetchData();

const fetchMealData = async () =>{
    const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=American");

    // console.log(api);
    const data = await api.json();
    return data.meals;
    // console.log(data);
}
// console.log(fetchMealData()); 

const showDataToDOM = async () =>{
    const data = await fetchMealData();

    // console.log("This data is Coming from MealDB API",data[0].strMeal);
//     document.querySelector(".main").innerHTML = `<div>
// <h1> ${data[0].strMeal}</h1>    
// <img src=${data[0].strMealThumb} alt=${data[0].strMeal} style="width:300px" />
// </div>`;

document.querySelector('.main').innerHTML = data.map((d)=>
    `<div>
<h1> ${d.strMeal} ${d.idMeal}</h1>    
<img src=${d.strMealThumb} alt=${d.strMeal} style="width:300px" />
</div>`
)
};

showDataToDOM();