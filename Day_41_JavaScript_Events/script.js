// const element = document.querySelector('.container')

//****childNodes */
// console.log(element.childNodes)

// // ***children
// console.log(element.children)

// //****firstElementChild */
// console.log(element.firstElementChild)

// ***lastElementChild
// console.log(element.lastElementChild)

// const child2 = document.querySelector('.child2')

// console.log(child2.innerHTML)
// console.log(child2.previousElementSibling.innerHTML)
// console.log(child2.nextElementSibling)

// const div = document.createElement('h1')

// div.setAttribute('class',"superman")
// div.setAttribute('id',"batman")

// div.style.backgroundColor = 'purple'
// div.style.color = 'black'

// div.innerText = "this is inner Text"

// // console.log("this is my div",div)
// // console.log("this is my div",div.innerText)

// document.querySelector('body').appendChild(div)

const button = document.createElement("button");

button.innerText = "Dynamic Button";
button.setAttribute("class", "btn");

document.querySelector("body").appendChild(button);

console.log(button.innerText);

document.querySelector(".btn").addEventListener("click", () => {
  console.log("this is a button");

  const div = document.createElement("h1");

  div.setAttribute("class", "superman");
  div.setAttribute("id", "batman");

  div.style.backgroundColor = "purple";
  div.style.color = "black";

  div.innerText = "this is inner Text";
  document.querySelector("body").appendChild(div);
});


const div = document.createElement("h1");

  div.setAttribute("class", "superman");
  div.setAttribute("id", "batman");

  div.style.backgroundColor = "purple";
  div.style.color = "black";

  div.innerText = "this is inner Text";
  document.querySelector("body").appendChild(div)


document.querySelector(".remove").addEventListener("click", () => {
  const parent = div.parentNode;

  console.log("this is a Parent", parent);

  parent.removeChild(div);
});
