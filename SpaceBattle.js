
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


//HW ATTACKS

//HW accuracy comparison
function hwAttacks(alienShip) {
    if (Math.floor(Math.random()) <= helloWorld.accuracy) 
    { console.log(`You hit an alien ship!`)
        alienShip.hull -= helloWorld.firepower //Alien ship minus helloWorld is equal to your new AS hull
    } else {
        console.log(`You missed! They're now going to attack you!`)
    }
}
    //Destroying AS 
        function alienDestroy () {
                alienArray.shift()
                console.log(`You destroyed the ship!`)
                
            if (alienArray.length === 0) {
                console.log (`All of the ships have been destroyed! You won!`)
            } else (
                userPrompt()
            )
        }
//Alien Attacking 

function asAttacks(alienShip) {
    if (Math.floor(Math.random()) <= alienShip.accuracy) 
    { console.log(`You've been hit by an alien ship!`)
        helloWorld.hull -= alienShip.firepower //Alien ship minus helloWorld is equal to your new AS hull
    } else {
        console.log(`They missed! Now you get to attack!`)
    }
}
    
//Prompting UserChoice
function userPrompt () { 
    let userInput = prompt ("Do you want to attack or exit?", "Enter attack, a or A to attack, enter exit, e or E to exit")
    if (userInput === "A" || userInput === "a" || userInput=== "attack")  
    {
        gameLoop(alienArray[0]) //restarting with new ship, new round
    } else if (userInput === "E" || userInput === "e" || userInput ==="Exit") {
        alert ("TRAITOR! You retreated and left the world in ashes. Good job, jerk.")
    } 
};

//Game Loop
function gameLoop(alienShip) {
    while (helloWorld.hull > 0 && alienArray.length >= 1) //Game runs while HW is alive and there are still AS targets
    {hwAttacks(alienShip) 
    if (alienShip.hull <= 0) {
        alienDestroy(alienShip)
        return;
}   else { 
    asAttacks(alienShip);
}
    };
  if (helloWorld.hull <= 0) {
    console.log(`YOU'RE DEAD. GAME OVER!!`)
  }
}
//Starting Button

function startButton() {
    gameLoop(alienArray[0]);
}
