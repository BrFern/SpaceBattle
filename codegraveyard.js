//CODE GRAVEYARD


// let shipsBattle = (ship1, ship2) => {
//    // let ships = [helloWorld, alienShips];
//    // let beingAttacked = 1;
//    //  while (ships[beingAttacked].hull>0) //Greater than 0 makes it true
//    //     if (ships[beingAttacked].hull>0)
//    //     console.log(shipsBattle);
//    ship1.hull -= ship2.firepower
// };

// //Wrap a loop around the whole if statement 
// //Instead of alien array zero, do your variable (i)
// //AS attacking HW
// function asAttacks() {
// for (let i=0; i<=6; i++) {
// if(alienArray[i].accuracy > helloWorld.accuracy){
// alert(`You've been destroyed by an alien ship! Game over`)

// } else if (alienArray[i].accuracy < helloWorld.accuracy){

// const  newHull = helloWorld.hull - alienArray[i].firepower

// alert(`You've been hit! Your hull defense is now at ${newHull}`)
// prompt ("Do you want to attack again or exit?", "Enter attack, a or A to attack, enter exit, e or E to exit");
// if (userChoice === "A" || userChoice === "a" || userChoice === "attack") {
// confirm ("Laser attack! Pew, pew!");
// shipsBattle();
// };
// // Reflect the alienship points
// prompt ("Do you want to attack again or exit?", "Enter attack, a or A to attack, enter exit, e or E to exit");
// if (userChoice === "A" || userChoice === "a" || userChoice === "attack") {
// confirm ("Laser attack! Pew, pew!");
// shipsBattle();
// }
// }
// }
// };
// //HW Attacking AS
// function hwAttacks(){ 

// if (helloWorld.accuracy > alienArray[0].accuracy){
//    prompt ("Do you want to attack again or exit?", "Enter attack, a or A to attack, enter exit, e or E to exit");
//     if (userChoice === "A" || userChoice === "a" || userChoice === "attack") {
//    confirm ("Laser attack! Pew, pew!");
//    if (0>= alienArray[i].hull){
//        console.log(`You destroyed an alien ship!`)
//        alienArray[0].hull -= helloWorld.firepower
//    shipsBattle(helloWorld,alienArray[i])
//    } else if (alienArray[i].hull > 0 ){
//        alert (`You hit an alien ship!`)
//        shipsBattle(helloWorld,alienArray[i])
//    }
//    };
// } else if (helloWorld.accuracy < alienArray[i].accuracy)
//     if (helloWorld.firepower === alienArray[i].hull){
//    alert(`You hit an alien ship! Their hull defense is now at ${alienArray[i].hull}`)
//    shipsBattle()
//    let userChoice = prompt ("Do you want to attack again or exit?", "Enter attack, a or A to attack, enter exit, e or E to exit");
//     if (userChoice === "A" || userChoice === "a" || userChoice === "attack") {
//    confirm ("Smash those ships!");
//    shipsBattle()
//    };
//     // Reflect the alienship points
// } else (helloWorld.accuracy < alienArray[i].accuracy)
//  else if (helloWorld.firepower < alienArray[i].hull);{
//    alert(`The ship failed to hit you! Your hull is at ${helloWorld.hull}`)
// }

// };

// } else if (helloWorld.accuracy < alienArray[i].accuracy && helloWorld.firepower < alienArray[i].hull);{
//    alert("The ship failed to hit you!")
//    shipsBattle();

// //Attack functions
// let hwBattle (helloWorld.accuracy, alienArray[i].hull) {
//    if 
// }




// //Will's code --yay things worked!
//     let shipsBattle = (userShip, alienShips) => {
//         let ships = [userShip, alienShips];
//         let beingAttacked = 1;
//         while (ships[beingAttacked].hull>0) //Greater than 0 makes it true
//             if (ships[beingAttacked].hull<0)
//             console.log(shipsBattle);
//     };


//     if (helloWorld.accuracy >= .7 && helloWorld.firePower >= 5){
//         alert(`You destroyed an alien ship!`)
//     } else if (helloWorld.accuracy <= .7 || helloWorld.firePower >= 5){
//         alert(`You hit an alien ship! Their hull defense is now at ${Alien.alienShips.hull}`)
//          // Reflect the alienship points
//     } else if (Alien.hull <=0){
//         alert("You missed the ship!")
//     }
// }

//AS attacking HW
// if(Alien.alienArray.accuracy >= userShip.accuracy && Alien.alienArray.firePower >= userShip.firePower){
//     alert("You've been hit! Your hull is now at...") // Reflect the hull points 
// } else if (Alien.alienArray.accuracy === userShip.accuracy && Alien.alienArray.firePower === userShip.firepower){
//     alert("The ship missed!")
// } else (Alien.alienArray.accuracy <= userShip.accuracy && userShip.firePower <= Alien.alienArray.firePower);{
//     alert("The ship missed!")
// }
// //ALL THE FUNCTIONS YO

// function hwDamage (hull,firePower) {
//     let newHullPoints = Alien.firePower - helloWorld.hull;
//     if (newHullPoints > 0) { 
//         console.log(`You've been hit! Your new hull points are ${newHullPoints}`);
// }  else if (newHullPoints === 0 ) {
//          console.log(`You've been destroyed. Play again?`) 
// }  else if (newHullPoints >=1 ) {
//     console.log(`They missed your ship!`)
// }
// }


// function alienDamage (hull, firePower) {
// let alienHullPoints = helloWorld.firePower - Alien.hull;
// if (alienHullPoints < 0) {
//     alert ("You destroyed their ship!")
// } else if (alienHullPoints >= 0) {
//     alert ("You hit their ship! But didn't destroy them. FINISH THEM.")
// }
// }

//HAS WORKED SOMEWHAT PREVIOUSLY

// function hwAttacks(){
//     // for (let i=0; i<=Alien.length; i++) 
//     {
//     if (helloWorld.accuracy >= Alien.accuracy && helloWorld.firePower >= Alien.hull){
//         alert(`You destroyed an alien ship!`)
//     } else if (helloWorld.accuracy === Alien.accuracy && helloWorld.firePower === Alien.hull){
//         alert(`You hit an alien ship! Their hull defense is now at ${Alien.hull}`)
//          // Reflect the alienship points
//     } else (helloWorld.accuracy <= Alien.accuracy && helloWorld.firePower <= Alien.hull);{
//         alert("You missed the ship!")
//     }
// }
// };

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