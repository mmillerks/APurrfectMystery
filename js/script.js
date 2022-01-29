class Detective {
    constructor (name, rating, skill) {
      this.name = name;
      this.rating = rating;
      this.skill = skill;
    }
}
  
  class Cat {
    constructor (name, lives) {
      this.name = name;
      this.lives = lives;
    }
}

// const file = document.getElementById("caseFile1");
// file.addEventListener("click", (evt) => {
//   alert("Read this case file.");
// });




const play = document.getElementById("investigate");
play.addEventListener('click', (evt) => {
  prompt("Please enter your investigator name:", "Investigator XYZ");
});


// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("caseFile1");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}