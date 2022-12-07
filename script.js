import dogs from "./data.js";
import Dog from "./Dog.js";

const postDiv = document.getElementById("post");
const rejectBtn = document.getElementById("reject-btn");

const dog = new Dog(dogs[0]);

function render() {
  postDiv.innerHTML = dog.getDogHtml();
}

render();
