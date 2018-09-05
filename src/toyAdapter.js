class ToyAdapter {
  static getToys() {
   return fetch("http://localhost:3000/toys")
   .then(resp => resp.json());
 }

 static createToy(toy) {
   return fetch("http://localhost:3000/toys", {
       method: "POST",
       header: "Content-Type: application/json",
       body: JSON.stringify(toy)
      })
      .then(resp => resp.json())
  }

 static updateLikes(id, likes) {
   return fetch(`http://localhost:3000/toys/${id}`, {
       method: "PATCH",
       header: "Content-Type: application/json",
       body: JSON.stringify(likes)
      })
      .then(resp => resp.json())
 }
}
