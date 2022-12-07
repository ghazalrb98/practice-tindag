class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
      <img class="avatar" src="${avatar}" />
      <div class="info">
        <h3 class="name">${name}, ${age}</h3>
        <p class="bio">${bio}</p>
      </div>
    `;
  }
}

export default Dog;
