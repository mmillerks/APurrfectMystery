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

// Get the modal for the case file
const modal = document.getElementById("myModal");

// Get the button that opens the modal - case file
const btn = document.getElementById("caseFile1");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
if (btn) {
  btn.onclick = function() {
    modal.style.display = "block";
  }
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

const images = ["./assests/c1.png", "./assets/c2.png"];
let i = 0;

function goNext() {
  if (i < 2) {
    const image = document.getElementById("dynamicImage");
    image.src = images[i]; 
    i++;
  }
}

const nextButton =  document.getElementById("begin");

nextButton.onclick = goNext;

// const i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     let elem = document.getElementById("myBar");
//     let width = 1;
//     let id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//         elem.innerHTML = width + "%";
//       }
//     }
//   }
// }

// const i = 0;
// function move() {
//   if (i == 0) {
//     i = 1;
//     let elem = document.getElementById("catLives");
//     let width = 1;
//     let id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//         elem.innerHTML = width + "%";
//       }
//     }
//   }