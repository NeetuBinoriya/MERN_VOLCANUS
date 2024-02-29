// ****Events Listners****

// console.log("Hello Console!");

// const container = document.querySelector('.container')

// console.log(container)

// const items = document.querySelector('.items:nth-child(2)')

// // console.log(items)

// // items.style.backgroundColor = "yellow";

// console.log(items.innerText)
// console.log(items.innerHTML)
// console.log(items.textContent)

const changeStyle = () => {
  const items = document.querySelectorAll(".items");

  console.log(items.length);

  for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = "yellow";
    items[i].style.color = "black";
    items[i].style.padding = "10px";
    items[i].style.border = "2px solid blue";
  }
};

//changeStyle()

document.querySelector("#btn").addEventListener("click", changeStyle);

// console.log(document.querySelector("#input"))

const getInputValue = () => {
  const input = document.querySelector("#input");
  console.log(input.value);
  console.log(input.classList);
};
