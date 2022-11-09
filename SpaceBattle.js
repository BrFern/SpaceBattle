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
        hwAttacks();
        asAttacks();
    } else if (userChoice === "E" || userChoice === "e" || userChoice ==="Exit") {
        confirm ("TRAITOR! You retreated and left the world in ashes. Good job, jerk.")
    } else {
        confirm ("Press the button to start again")
    }
  }
);

button.addEventListener("click", button);

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

//Will's code --yay things worked!
    let shipsBattle = (userShip, alienShips) => {
        let ships = [userShip, alienShips];
        let beingAttacked = 1;
        while (ships[beingAttacked].hull>0) //Greater than 0 makes it true
            if (ships[beingAttacked].hull<0)
            console.log(shipsBattle);
    };

//Wrap a loop around the whole if statement 
//Instead of alien array zero, do your variable (i)
 


//HW Attacking AS
function hwAttacks(){
    for (let i = 0; i<= 6; i++) {
            if (helloWorld.accuracy >= alienArray[i].accuracy && helloWorld.firepower >=alienArray[i].hull){
                alert(`You destroyed an alien ship!`)
            } else if (helloWorld.accuracy < alienArray[i].accuracy && helloWorld.firepower === alienArray[i].hull){
                alert(`You hit an alien ship! Their hull defense is now at ${alienArray[i].hull}`)
                 // Reflect the alienship points
            } else (helloWorld.accuracy <= alienArray[i].accuracy && helloWorld.firepower <= alienArray[i].hull);{
                alert("You missed the ship!")
            }

        };
    }

//AS attacking HW
function asAttacks(){
    for  (let i = 0; i<= 6; i++) {
    if(alienShips[i].accuracy >= helloWorld.accuracy && alienArray[i].firepower >= helloWorld.firepower){
        alert(`You've been destroyed by an alien ship! Game over`)
    } else if (alienArray[i].accuracy < helloWorld.accuracy && helloWorld.firepower === alienArray[i].hull){
        function newHull () { 
           helloWorld.hull - alienArray[i].firepower
        }
        alert(`You've been hit! Your hull defense is now at ${newHull}`)
         // Reflect the alienship points
    } else (helloWorld.accuracy <= alienArray[i].accuracy && helloWorld.firepower <= alienArray[i].hull);{
        alert("You missed the ship!")
    }
}
};


 //Attack again?
let userChoice = prompt ("Do you want to attack again or exit?", "Enter attack, a or A to attack, enter exit, e or E to exit");
    if (userChoice === "A" || userChoice === "a" || userChoice === "attack") {
        confirm ("Laser attack! Pew, pew!");
        hwAttacks ();
    };











