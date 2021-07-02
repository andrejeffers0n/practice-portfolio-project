/*
let name = "Andre";

function callIt() {
  alert(`Hey, ${name}! Don't give up!`);
}

callIt();
*/

const changeName = function () {
  document.querySelector(".title-heading").textContent = "erdnA";
};

document.querySelector(".title-heading").addEventListener("click", changeName);
