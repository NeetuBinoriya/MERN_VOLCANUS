console.log("Hello Console!");
// const element1 = document.getElementsByTagName("h1");
// const element2 = document.getElementById("h2");
// const element3 = document.getElementsByClassName("h3");

// const element1 = document.querySelector("h1")
// // const element1 = document.querySelectorAll("h1")
// const element2 = document.querySelector("#h2")
// const element3 = document.querySelector(".container")



// console.log("This is ELement 1", element1);
// console.log("This is ELement 2", element2);
// console.log("This is ELement 3", element3);

// const element = document.querySelector(".container")

// element.innerHTML = " <h1>This is my Dynamic Content</h1>";

// element.innerText = "This is My text"

// const h1 = document.querySelector("h1")

// document.querySelector('.container').innerHTML = `<h1>${h1.innerText}</h1>`

// const image = document.querySelector('img')

// image.src = "https://cdn.pixabay.com/photo/2022/08/01/12/36/city-7358078_1280.jpg"

// const element = document.querySelector('h1')

// element.style.backgroundColor = "yellow"
// element.style.color = "blue"

// document.querySelector('h1').style.backgroundColor = "blue"
// document.querySelector('h1').style.color = "yellow"

const bgLight = () =>{
    const superman = document.querySelector('body')
    superman.style.backgroundColor = "White"
    superman.style.color = "black"
} 
const bgDark = () =>{
    const superman = document.querySelector('body')
    superman.style.backgroundColor = "black"
    superman.style.color = "white"
} 

let temp;
const imgChange = () =>{
    const element = document.querySelector('img')
    temp = element.src
 element.src ="https://cdn.pixabay.com/photo/2022/08/01/12/36/city-7358078_1280.jpg"
}

const imgOriginal = () =>{
    document.querySelector('img').src = temp;
}