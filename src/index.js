document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector('#new-toy-btn');
  const toyForm = document.querySelector('.container');
  let addToy = false;

  // YOUR CODE HERE
  const toyCollect = document.querySelector("#toy-collection");

  addBtn.addEventListener('click', () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = 'block';
      // submit listener here
    } else {
      toyForm.style.display = 'none';
    }
  })

  function displayToy(toy) {
    const toyBttn = document.createElement("button");
    const toyCard = document.createElement("div");
    const toyName = document.createElement("h2");
    const toyImage = document.createElement("img");
    const toyLikes = document.createElement("p");
    //Toy Elements
    toyCard.classList.add("card");
    toyCard.dataset.id = toy.id;
    toyName.innerText = toy.name;
    toyImage.src = toy.image;
    toyImage.classList.add("toy-avatar")
    toyLikes.innerText = toy.likes
    toyBttn.innerText = "Like"
    toyCard.append(toyName, toyImage, toyLikes, toyBttn);

    toyCollect.appendChild(toyCard);
  }

  ToyAdapter.getToys()
  .then(data => {
    data.forEach(displayToy);
    const likeButtons = toyCollect.querySelectorAll("button");
    likeButtons.forEach(button => button.addEventListener("click", (event) => {
      let toyDiv = event.target.parentNode;
      let toyId = toyDiv.dataset.id;
      let likes = toyDiv.querySelector("p")
      let newLikes = parseInt(likes.innerText)
      likes.innerText = ++newLikes
      ToyAdapter.updateLikes(toyId, {likes: newLikes})
    }))
  })
  // OR HERE!
  toyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const toyNameValue = toyForm.querySelector("#toy-name-input").value;
    const toyURLValue = toyForm.querySelector("#toy-value-input").value;
    let newToy = {
      "name": toyNameValue,
      "image": toyURLValue,
      "likes": 0
    };
    // console.log(newToy);
    displayToy(newToy);
    ToyAdapter.createToy(newToy);
  })

})
