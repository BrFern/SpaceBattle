//Starting button 
var button = document.createElement("button");
button.innerHTML = "Start Game!"

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

//Making a class for spaceships 
class Ship {
    constructor (hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
};

const helloWorld = new Ship (20, 5, .7);

console.log(helloWorld)

//Alien spaceship class   //Sarada's support yay! Things worked!
class Alien {
    constructor(hull,firepower,accuracy)
    {   this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;  
    } 

}  

let alienArray = []
    let randomNumber = (min, max) => { 
        return Math.random() * (max - min) + min;
    }
    for(let i=0;i<6;i++)
    {
        let alienShips = new Alien(Math.floor(randomNumber(3,6)),Math.floor(randomNumber(2,4)),randomNumber(0.6,0.8));
        alienArray.push(alienShips);
    };

    // console.log(Alien.alienArray.accuracy)

//Will's code --yay things worked!
    let shipsBattle = (userShip, alienShip) => {
        let ships = [userShip, alienShip];
        let beingAttacked = 1;
        while (ships[beingAttacked].hull>0) //Greater than 0 makes it true
            if (ships[beingAttacked].hull>0)
            console.log(shipsBattle);
    };
 
//HW Attacking AS
function hwAttacks(){
    if (helloWorld.accuracy >= Alien.accuracy && Ship.firePower >= Alien.hull){
        alert(`You destroyed an alien ship!`)
    } else if (Ship.accuracy === Alien.accuracy && Ship.firePower === Alien.hull){
        alert(`You hit an alien ship! Their hull defense is now at ${Alien.hull}`) // Reflect the alienship points
    } else (Ship.accuracy <= Alien.accuracy && Ship.firePower <= Alien.hull);{
        alert("You missed the ship!")
    }
    };

// Event handler for attacking
//Lorivie helped me with this part, thank you!
button.addEventListener ("click", function() {
    alert("Let's kill some aliens");
    alert("You're being attacked! How annoying.")
    let userChoice = prompt ("Do you want to attack or exit?", "Enter attack, a or A to attack, enter exit, e or E to exit");
    if (userChoice === "A" || userChoice === "a" || userChoice === "attack") {
        confirm ("Laser attack! Pew, pew!");
        hwAttacks ();
        // shipsBattle ();
    } else if (userChoice === "E" || userChoice === "e" || userChoice ==="Exit") {
        confirm ("TRAITOR! You retreated and left the world in ashes. Good job, jerk.")
    } else {
        confirm ("Press the button to start again")
    }
  }
);

button.addEventListener("click", button);
 


//ALL THE FUNCTIONS YO

    class hwDamage  {
        constructor (hull, firePower) {
        let newHullPoints = Alien.firePower - Ship.hull;
        if (newHullPoints > 0) { 
            console.log(`You've been hit! Your new hull points are ${newHullPoints}`);
    }  else if (newHullPoints === 0 ) {
             console.log(`You've been destroyed. Play again?`) 
    }  else if (newHullPoints >=1 ) {
        console.log(`They missed your ship!`)
    }
    }
}




function alienDamage (hull, firePower) {
    let alienHullPoints = userShip.firePower - Alien.hull;
    if (alienHullPoints < 0) {
        alert ("You destroyed their ship!")
    } else if (alienHullPoints >= 0) {
        alert ("You hit their ship! But didn't destroy them. FINISH THEM.")
    }
}










//AS attacking HW
// if(Alien.alienArray.accuracy >= userShip.accuracy && Alien.alienArray.firePower >= userShip.firePower){
//     alert("You've been hit! Your hull is now at...") // Reflect the hull points 
// } else if (Alien.alienArray.accuracy === userShip.accuracy && Alien.alienArray.firePower === userShip.firepower){
//     alert("The ship missed!")
// } else (Alien.alienArray.accuracy <= userShip.accuracy && userShip.firePower <= Alien.alienArray.firePower);{
//     alert("The ship missed!")
// }

//CODE GRAVEYARD

 // constructor (name) {
    //     this.name = name
    //     this.hull = Math.floor(Math.random() * 4) + 3; //Ying's idea
    //     this.firepower = Math.floor(Math.random() * 2) + 3;
    //     this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; //whatever multiplication range, we do not include at the end
    // }

//Original piece, took out the array
   //     const alienOne = new Alien();
//     const alienTwo = new Alien();
//     const alienThree = new Alien();
//     const alienFour = new Alien();
//     const alienFive = new Alien();
//     const alienSix = new Alien();


//Looping through the different alien outcomes

//     for (let i = 0; i<= 5; i++) {
//         console.log("A new alien ship has arrived!")
//     }

//console.log (HWSpaceshipStart.helloWorld.accurateHitFromAS())

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

 // accurateHitFromAS() {
    //     return console.log("You've been hit!"); //Reflect new stats for HW and AS
    // }
    // destroyedAS() {
    //     return console.log("You destroyed the ship!") //Reflect new stats
    // }