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

const play = document.getElementById("begin");
play.addEventListener('click', (evt) => {
  alert("Let's play!");
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




const i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

const i = 0;
function move() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("catLives");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}