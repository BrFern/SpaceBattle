//Starting button 
var button = document.createElement("button");
button.innerHTML = "Start Game!"

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// Event handler for attacking

//Lorivie helped me with this part, thank you!
button.addEventListener ("click", function() {
    alert("Let's kill some aliens");
    alert("You're being attacked! How annoying.")
    let userChoice = prompt ("Do you want to attack or exit?", "Enter attack, a or A to attack, enter exit, e or E to exit");
    if (userChoice === "A" || userChoice === "a" || userChoice === "attack") {
        confirm ("Laser attack! Pew, pew!");
    } else if (userChoice === "E" || userChoice === "e" || userChoice ==="Exit") {
        confirm ("TRAITOR! You retreated and left the world in ashes. Good job, jerk.")
    } else {
        confirm ("Press the button to start again")
    }
  }
);
 
//Making a class for spaceships 
class userShip {
    constructor (hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = 5;
        this.accuracy = .7;
    }
    // accurateHitFromAS() {
    //     return console.log("You've been hit!"); //Reflect new stats for HW and AS
    // }
    // destroyedAS() {
    //     return console.log("You destroyed the ship!") //Reflect new stats
    // }
};

const helloWorld = new userShip("Hello World");

console.log(helloWorld)

//console.log (HWSpaceshipStart.helloWorld.accurateHitFromAS())


//Alien spaceship class
class Alien {
    constructor (name) {
        this.name = name
        this.hull = Math.floor(Math.random() * 4) + 3; //Ying's idea
        this.firepower = Math.floor(Math.random() * 2) + 3;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; //whatever multiplication range, we do not include at the end
    }

    }
const alienOne = new Alien();
const alienTwo = new Alien();
const alienThree = new Alien();
const alienFour = new Alien();
const alienFive = new Alien();
const alienSix = new Alien();

//Looping through the different alien outcomes
let alienArray = [alienOne, alienTwo, alienThree, alienFour, alienFive, alienSix]
    for (let i = 0; i<= 5; i++) {
        console.log("A new alien ship has arrived!")
    }




//HW Attacking AS
if (userShip.accuracy >= Alien.alienArray.accuracy && userShip.firePower >= Alien.alienArray.hull){
    alert("You destroyed the ship!")
} else if (userShip.accuracy === Alien.alienArray.accuracy && userShip.firePower === Alien.alienArray.hull) {
    alert("You hit the ship, the points are now..") // Reflect the alienship points
} else (userShip.accuracy <= Alien.alienArray.accuracy && userShip.firePower <= Alien.alienArray.hull) {
    alert("You missed the ship!")
};

startGame.addEventListener("click", Start);

//USS Hello World Attacks
if (ussHelloWorld.accuracy > alienShipOne.accuracy) {
    alert(`Direct hit! You reduced the Alien Ship's hull by ${ussHelloWorld.firepower} points. The Alien's ship's hull is now at ${alienShipOne.hull - ussHelloWorld.firepower}`)
};

//AS attacking HW
if(Alien.alienArray.accuracy >= userShip.accuracy && Alien.alienArray.firePower >= userShip.firePower) {
    alert("You've been hit! Your hull is now at...") // Reflect the hull points 
} else if (Alien.alienArray.accuracy === userShip.accuracy && Alien.alienArray.firePower === userShip.firepower) {
    alert("The ship missed!")
} else (Alien.alienArray.accuracy <= userShip.accuracy && userShip.firePower <= Alien.alienArray.firePower) {
    alert("The ship missed!")
}

//Attacking or Retreating Version 1-did not work


// let userChoice = prompt("Do you wish to attack? Type in attack or a. If you would like to retreat, type in retreat or r.");
// let text;
//     if (userChoice === "attack" || userChoice === "a" || userChoice === "A") {
//         text = "You attack the alien spaceship!"
//     } else if (userChoice === "retreat" || userChoice === "r" || userChoice === "R") {
//         text = "You leave, letting the world go to ashes. You monster"
//     } else {
//         alert("Click to start the game again!")
//     }

// function userAttacks (ahull,uAccuracy, uFirepower){
//     if (ahull <=5  ) {
//         return 
//     }

//     }
// }

// function maxOfThree(a,b,c){
//     if (a >= b && a >=c){ 
//          if (a === b && a > c) { //
//             return a;
//         } else if(a === c && a > b ){
//             return a;
//          }else if (a > b && a > c){
//             return a;
//         } else if (a === b && b === c) {
//             return "they are equal"
//         } 
//     } else if(b >= a && b >= c){
//           if (b === c && b >a ){
//             return b;
//           } else if(b>a && b >c){
//             return b;
//           }     
//     } else if(c > a && c > b){
//       return c; 
//     }  
// }
// console.log(maxOfThree(17, 11, 17));




//const alienShipOne = new Aliens;
//console.log(Aliens.alienShipOne.hullRandom(3,6));


//for (let i =20; i <= 0; i--);

//May append the Spaceship class in order to calculate the items for alien spaceship

// const firepower = (min,max);
// const accuracy = (min, max);

// function calcHull = (Math.random(0.)) => {
//     return hull


//Some thinking as I tried the functions as methods
// hullRandom (min=3, max=6) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max-min) + min);
// }
// firepowerRandom (min=  max = ) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * )
// }