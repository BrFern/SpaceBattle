
//     let userChoice = prompt ("Do you want to attack or exit?", "Enter attack, a or A to attack, enter exit, e or E to exit");
//     if (userChoice === "A" || userChoice === "a" || userChoice === "attack") {
//         //confirm ("Laser attack! Pew, pew!");
//     } else if (userChoice === "E" || userChoice === "e" || userChoice ==="Exit") {
//         confirm ("TRAITOR! You retreated and left the world in ashes. Good job, jerk.")
//     } 
//   }
// );





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


    let newASHull = (alienArray[0].hull - helloWorld.firepower)


//HW ATTACKS

//HW accuracy comparison
function hwAttacks() {
    userPrompt()
    if (helloWorld.accuracy > alienArray[0].accuracy) {
        console.log(`You hit an alien ship!`)
    } else if (helloWorld.accuracy < alienArray[0].accuracy) {
        console.log(`You missed! They're now going to attack you!`)
        asAttacks()
    }
    // HW Firepower
    if (helloWorld.firepower >= 5) {
        console.log(`You hit a ship! Their health is now at ${newASHull}`) 
    } else if (helloWorld.firepower <= 5) {
        console.log(`You missed the ship! They're now going to attack you!`)
        asAttacks()
    }
    //Subtracting AS hull
    if (helloWorld.firepower < 2 || helloWorld.firepower < 5) {
            console.log(`The ship is still alive! But its health is now at ${newASHull}`)
}       else if (alienArray[0].accuracy < helloWorld.accuracy)
        console.log('The ship failed to hit you! It is now your turn to attack')
        hwAttacks()
        userPrompt()
}
    //Destroying AS 
        if (helloWorld.firepower >= 3) {
            console.log(`You destroyed the ship!`)
        }
            
//Alien Attacking 

function asAttacks() {
    if (alienArray[0].accuracy > helloWorld.accuracy)  {
        console.log(`Uh-oh, the ship was accurate enough to be able to hit you!`)
    }
    else if (alienArray[0].accuracy < helloWorld.accuracy) {
        console.log(`The ship missed! It is now your turn to attack`)
        hwAttacks()
    }

    //Subtracting HW hull
    if (alienArray[0].firepower >= 5) {
        let newHWHull = (
            helloWorld.hull - alienArray[0].firepower
        )
        console.log(`You've been hit! Your hull stats are now at ${newHWHull}!`)
    }
     
    //Destroying HW -AS wins
        if (newASHull === 0) {
            console.log (`Your ship has been destroyed! Would you like to play again?`)
        
    }
}

//HW won
function hwWon() {
    if (alienArray[0] === 0) {
        console.log(`You have destroyed all of the ships! Congratulations you saved humanity!!!`)
    }
}    
    
//Prompting UserChoice
function userPrompt () { 
    let userInput = prompt ("Do you want to attack or exit?", "Enter attack, a or A to attack, enter exit, e or E to exit")
    if (userInput === "A" || userInput === "a" || userInput=== "attack") {
    } else if (userInput === "E" || userInput === "e" || userInput ==="Exit") {
        confirm ("TRAITOR! You retreated and left the world in ashes. Good job, jerk.")
    } 
};

//Starting button 
// var button = document.createElement("button");
// button.innerHTML = "Start Game!"

// var body = document.getElementsByTagName("body")[0];
// body.appendChild(button);


// // Event handler for attacking

// var body = document.getElementsByTagName("body")[0];
// body.appendChild(button);

// // // Event handler for attacking
// // //Lorivie helped me with this part, thank you!
// button.addEventListener ("click", startGame()) 
//     alert("Let's kill some aliens");
//     alert("You're being attacked! How annoying.")
//     userPrompt();

// button.addEventListener("click", button);

//Starting the game function
function startGame (){
    alert (`You are a crew member on the ship, HelloWorld! There are several aliens coming to attack you!`)
    alert (`You're being attacked! How annoying.`)
    userPrompt();
}


//Restarting the game function
function restarting() {
    let userChoiceTwo =  prompt(`Would you like to play again? Type y, Y or Yes to start again, type n, N or No to finish`)
    if (userChoiceTwo === "y" || userChoiceTwo === "Y" || userChoiceTwo === "Yes") {
        confirm ("Let's get going!")
    } else if (userChoiceTwo === "n" || userChoiceTwo === "N" || userChoiceTwo ==="No") {
        confirm ("Fine. That's cool too. I guess.")
}
    }
    //Game Loop 
    function gameLoop() {
        while (helloWorld.hull >= 0 ||alienArray[0].hull >= 0)
                hwAttacks()
            
    } 

    


