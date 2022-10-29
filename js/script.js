//1. assign a button to start the game
const startBtn= document.querySelector('#start-btn')
//2. create a function to click on the button then button disappears
//3. create input for the player to insert their name
//4. as player click on start button, button will disappear and form to input nickname will appear.
const playerName = document.querySelector('#player-name')
function startGame(){
    startBtn.classList.toggle("hide")
    playerName.classList.toggle("hide")
}
//5. saving input inside submit button function
const nicknameEL = document.querySelector("#nickName")
const welcomeEl = document.querySelector('#welcome')
// SubmitEvent(){
//     welcomeEl.textContent = nicknameEL.value
// }

//===============================

// class Alien {
//     constructor(name){
//         this.shipName = name;
//     }
// }
// const game = {
//     alienShips:['alien1','alien2','alien3','alien4','alien5','alien6'],
//     alienAccuracy: Math.random()*(0.6 - 0.8 + 1)+ 0.8
//     }
// console.log()

//  let hull = 20
//  let firepower = 5
//  let accuracy = .7
//  let alienAccuracy = Math.random()*(0.6 - 0.8 + 1)+ 0.8
//  console.log(alienAccuracy)
//  let alienHull = Math.floor(Math.random()*(6 - 3 + 1)+ 3)
//  let alienFirepower =Math.floor(Math.random()*(4 - 2 + 1)+ 2)
//  //console.log(alienFirepower)

//  for (let i = 0 ; i < alien.length ; i++){
//      alien[0] = Math.floor(Math.random()* (6 - 4 +1)+4 ) }
//  if(hull > alien[0]){
//     console.log('You are attacking the alien')
//     let hull = Math.floor(Math.random() * 20)
//     if(hull > alien[0]){
//         console.log(`You have done ${alienFirepower} damage`)
//     }else if (hull<alien[0]) {
//         console.log('alien has won')

//     }
//         else if(hull <= 0){
//             console.log('you are destroyed')
//         }
    
// }
 
// console.log(hull)
//console.log(alien1)
//let alien1= Math
//if (hull > )