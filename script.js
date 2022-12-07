import dogs from "./data.js";
import Dog from "./Dog.js";

const postDiv = document.getElementById("post");

document.addEventListener("click", (e) => {
  if (e.target.id === "reject-btn") {
  } else if (e.target.id === "like-btn") {
  }
});

function getNewDog() {
  const newDogData = dogs.shift();
  return newDogData ? new Dog(newDogData) : {};
}

function render() {
  const dogHtml =
    dog.getDogHtml() + (dog.hasBeenSwiped ? dog.getBadgeHtml() : "");
  postDiv.innerHTML = dogHtml;
}

let dog = getNewDog();
render();

// <img class="badge" src="/images/badge-like.png">
