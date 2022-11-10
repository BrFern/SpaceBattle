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
        //Alien attack function here
        userPrompt()
    } else if (userChoice === "E" || userChoice === "e" || userChoice ==="Exit") {
        confirm ("TRAITOR! You retreated and left the world in ashes. Good job, jerk.")
    } else {
        confirm ("Press the button to start again")
    }
  }
);

button.addEventListener("click", button);

//Add in the 

//Making a class for spaceships 
class Ship {
    constructor (hull, firepower, accuracy) {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
};

const helloWorld = new Ship (20, 5, .7);

//console.log(helloWorld)

//Alien spaceship class   //Sarada's support yay! Things worked!
class Alien {
    constructor(hull,firepower,accuracy)
    {   this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;  
    } 

}; 

let alienArray = []
    let randomNumber = (min, max) => { 
        return Math.random() * (max - min) + min;
    }
    for(let i=0;i<6;i++)
    {
        let alienShips = new Alien(Math.floor(randomNumber(3,6)),Math.floor(randomNumber(2,4)),randomNumber(0.6,0.8));
        alienArray.push(alienShips);

    };



    //Ying went through her logic and I think I get it finally! I'm going to work on my own

//HW attacking AS accuracy
function hwAttacksAccuracy() {
    userPrompt()
    if (helloWorld.accuracy > alienArray[i].accuracy) {
        console.log(`You hit an alien ship!`)
        hwAttacksAccuracy()
    } else if (helloWorld.accuracy < alienArray[i].accuracy) {
        console.log(`You missed! They're now going to attack you!`)
        asAttacksAccuracy()
    }
}


//Alien Attacking 

function asAttacksAccuracy(){
    if (alienArray[i].accuracy > helloWorld.accuracy) {
        subtractingASHull()
        hwAttacksFirepower()
        console.log(`You've been hit by the ship! Your health is now at ${newHWHull}`)
        userPrompt()
    } else if (alienArray[i].accuracy < helloWorld.accuracy)
        console.log('The ship failed to hit you!')
        userPrompt()
}
//HW Attacking with Firepower
function hwAttacksFirepower() {
    userPrompt()
    if (helloWorld.firepower >= 5) {
        console.log(`You hit a ship! Their health is now at ${newASHull}`) //Put in the Alien ship hull health
    } else if (helloWorld.firepower <= 5) {
        console.log(`You missed the ship! They're now going to attack you!`)
        asAttacksAccuracy()
    }
}
//Subtracting HW hull
function subtractingHWHull() {
    if (alienArray[i].firepower >= 5) {
        let newHWHull = (
            helloWorld.hull - alienArray[i].firepower
        )
        console.log(`You've been hit! Your hull stats is now at ${newHWHull}!`)
    }
}
//Subtracting AS hull
function subtractingASHull() {
    if (helloWorld.firepower < 2 || helloWorld.firepower < 5) {
        let newASHull = (
            alienArray[i] - helloWorld.firepower
        )
        console.log(`The ship is still alive! But its health is now at ${newASHull}`)
    }
}
//Destroying AS 
function destroyingAS(){
    if (helloWorld.firepower >= 3) {
        console.log(`You destroyed the ship!`)
        asAttacksAccuracy()
    }
}
//Destroying HW -AS wins
function destroyingHW() {
    if (subtractingASHull() === 0) {
        console.log (`Your ship has been destroyed! Would you like to play again?`)
        //restarting()
    }
}

//Counting through the Alien array

//HW won
function hwWon() {
    if (alienArray[i] === 0) {
        console.log(`You have destroyed all of the ships! Congratulations you saved humanity!!!`)
    }
}
//Removing Alien ship array

//Prompting UserChoice
function userPrompt () { 
    let userInput = prompt ("Do you want to continue attacking or exit?", "Enter attack, a or A to attack, enter exit, e or E to exit")
    if (userChoice === "A" || userChoice === "a" || userChoice === "attack") {
        confirm ("Laser attack! Pew, pew!");
        hwAttacksAccuracy()
        hwAttacksFirepower()
    } else if (userChoice === "E" || userChoice === "e" || userChoice ==="Exit") {
        confirm ("TRAITOR! You retreated and left the world in ashes. Good job, jerk.")
    } else {
        confirm ("Press the button to start again")
    }
  };
userPrompt()

//Restarting the game function
function restarting() {

    let userChoice =  prompt(`Would you like to play again? Type y, Y or Yes to start again, type n, N or No to finish`)
    if (userChoice === "y" || userChoice === "Y" || userChoice === "Yes") {
        confirm ("Let's get going!")
        button()
    } else if (userChoice === "n" || userChoice === "N" || userChoice ==="No") {
        confirm ("Fine. That's cool too. I guess.")
}
    }

