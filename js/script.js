
//PLAYER CLASSES
class Investigator {
    constructor (rating) {
      this.rating = rating;
  }
  updateProgress() {
    const width = this.rating/6*100;
    let elem = document.getElementById("myBar");
    elem.style.width = width + "%";
    elem.innerHTML = width + "%";
  }
}
  
  class Cat {
    constructor (lives) {
      this.lives = lives;
    }
    updateCatProgress() {
      const catWidth =this.lives/9*100;
      let update = document.getElementById("myCatBar"); 
      if (update) {
        update.style.width = catWidth + "%";
        update.innerHTML = catWidth + "%";
      }
    }
}

const player = new Investigator(0);

const sherlock = new Cat(9);

sherlock.updateCatProgress();


//OUTCOME ALERT
const statusBtn = document.getElementById("outcome");

statusBtn.onclick = function () {
  const alertMsg = "Sherlock was found sleeping in a box in the file room!" + "\n" + "\n" + "Your Investigator Status Level: " + player.rating + "\n" + "Levels: 1=Novice 2=Junior 3=Senior 4=Legend" + "\n" + "\n" + "After your investigation Sherlock has " + sherlock.lives + " remaining Cat Lives.";
  alert(alertMsg); 
}


//CASE FILE MODAL
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


//CHOICES THAT UPDATE STATUS AND LIVES
const choiceA = document.getElementById("choice1");
 if (choiceA) {
   choiceA.onclick = function() {
     player.rating++;
     player.updateProgress();
     sherlock.updateCatProgress();
   }
  }

  const choiceB = document.getElementById("choice2");
  if (choiceB) {
    choiceB.onclick = function() {
      player.rating++;
      player.updateProgress();
      sherlock.updateCatProgress();
    }
   }

   const choiceC = document.getElementById("choice3");
   if (choiceC) {
     choiceC.onclick = function() {
       player.updateProgress();
       sherlock.lives--;
       sherlock.updateCatProgress();
     }
    }

   const choiceD = document.getElementById("choice4");
   if (choiceD) {
     choiceD.onclick = function() {
       player.rating++;
       player.updateProgress();
       sherlock.updateCatProgress();
     }
    }

    const choiceE = document.getElementById("choice5");
    if (choiceE) {
      choiceE.onclick = function() {
        player.updateProgress();
        sherlock.lives--;
        sherlock.updateCatProgress();
      }
     }  
     const choiceF = document.getElementById("choice6");
     if (choiceF) {
     choiceF.onclick = function() {
       player.rating++;
       player.updateProgress();
       sherlock.updateCatProgress();
     }
    }
    const choiceG = document.getElementById("choice7");
    if (choiceG) {
     choiceG.onclick = function() {
       player.rating++;
       player.updateProgress();
       sherlock.updateCatProgress();
     }
    }
    const choiceH = document.getElementById("choice8");
    if (choiceH) {
      choiceH.onclick = function() {
        player.updateProgress();
        sherlock.lives--;
        sherlock.updateCatProgress();
      }
     }
     const choiceI = document.getElementById("choice9");
     if (choiceI) {
       choiceI.onclick = function() {
         player.updateProgress();
         sherlock.lives--;
         sherlock.updateCatProgress();
       }
      }
      const choiceJ = document.getElementById("choice10");
      if (choiceI) {
      choiceI.onclick = function() {
        player.rating++;
        player.updateProgress();
        sherlock.updateCatProgress();
      }
     }
     const choiceK = document.getElementById("choice11");
     if (choiceK) {
      choiceK.onclick = function() {
        player.updateProgress();
        sherlock.lives--;
        sherlock.updateCatProgress();
      }
     }
     const choiceL = document.getElementById("choice12");
     if (choiceH) {
      choiceH.onclick = function() {
        player.rating++;
        player.updateProgress();
        sherlock.updateCatProgress();
      }
     }
     const level  = document.getElementById("outcome")
     if (level) {
       level.onclick = function() {
         console.log("Status");
       }
     }






// //STATUS MODAL
// // Get the modal for the status
// const statusModal = document.getElementById("statusModal");

// // Get the button that opens the modal - 
// const statusBtn = document.getElementById("outcome");

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// if (btn) {
//   btn.onclick = function() {
//     modal.style.display = "block";
//   }
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



// ROTATING IMAGE CODE - SAVE THIS TO USE FOR UPDATE
// const images = ["./assests/c1.png", "./assets/c2.png"];
// let i = 0;

// function goNext() {
//   if (i < 2) {
//     const image = document.getElementById("dynamicImage");
//     image.src = images[i]; 
//     i++;
//   }
// }

// const nextButton =  document.getElementById("begin");

// nextButton.onclick = goNext;


