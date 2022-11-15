const USSAssembly = {
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
};

function getRange(min, max) {
  return Math.random() * (max - min) + min;
}

const alienShip = {
  // create array of ships , if ship destroyed increment and fight next ship
  hull: getRange(3, 6),
  firepower: getRange(2, 4),
  accuracy: getRange(0.6, 0.8),
};

alienTest = [0, 1, 2, 3, 4, 15];

function userPrompt() {
  let answer = prompt("Would you like to attack? (Y/N)");
  if (answer === "Y") {
    // attack
    userAttacks();
  } else if (answer === "N") {
    // retreat
    console.log("USS Assembly retreated");
    alert("YOU RETREATED, GAME OVER!");
  }
}
userPrompt();

let num = 0;
function userAttacks() {
  // attack
  for (let i = num; i < alienTest.length; i++) {
    if (Math.random() < USSAssembly.accuracy) {
      console.log("You landed a hit");
      console.log(alienShip.hull);
      alienShip.hull -= USSAssembly.firepower;
      console.log(alienShip.hull);
      if (alienShip.hull > 0) {
        alienSurvives();
      } else {
        console.log("You destroyed an alien ship");
        num++;
        console.log(i);
        alienTest[i++];
        console.log(i);
        userPrompt();
      }
    } else {
      console.log("Your shot missed");
      alienSurvives();
    }
    ///
    break;
  }
}

//if enemy survived attack
function alienSurvives() {
  if (Math.random() < alienShip.accuracy) {
    // determines accuracy
    console.log("You have been hit!");
    console.log(USSAssembly.hull);
    USSAssembly.hull -= alienShip.firepower;
    console.log(USSAssembly.hull);
  }
}

// if we survive enemy attack
if (USSAssembly.hull > 0) {
  userPrompt();
}
