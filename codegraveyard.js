//CODE GRAVEYARD

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