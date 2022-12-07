import dogs from "./data.js";
import Dog from "./Dog.js";

const postDiv = document.getElementById("post");
const likeBtn = document.getElementById("like-btn");
const rejectBtn = document.getElementById("reject-btn");

likeBtn.addEventListener("click", () => {
  setBadge(true);
});

rejectBtn.addEventListener("click", () => {
  setBadge(false);
});

function setBadge(isLike) {
  dog.setBadge(isLike);
  render();
  setTimeout(() => {
    dog = getNewDog();
    render();
  }, 1500);
}

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
