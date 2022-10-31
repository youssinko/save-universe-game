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

//5. saving user's name inside Play button function, 'ready' message appears with user name and user form disappears.
const nicknameEL = document.querySelector("#nickName")
const welcomeEl = document.querySelector('#welcome')
const playBtn= document.querySelector ("#play-button")
const alienShipEl = document.querySelector("#alienship")
const attackBtn = document.querySelector(".attack")
const healBtn = document.querySelector(".heal")
const promptEl = document.querySelector("#prompt1")
const promptEl2 = document.querySelector("#prompt2")
const promptEl3 = document.querySelector("#prompt3")

function submit(){
    welcomeEl.classList.toggle("hide")
    playerName.classList.toggle('hide')
    welcomeEl.textContent = (` ${nicknameEL.value.toUpperCase()}! YOUR MISSION IS STARTING NOW`)
    attackBtn.classList.remove('hide')
    healBtn.classList.remove('hide')
}


//=============================== FUNCTION ============


//  let hull = 20
//  let firepower = 5
//  let accuracy = 0.7
//  let alienAccuracy = (Math.random()*(0.6 - 0.8 )+ 0.8).toFixed(1)
//  let alienHull = Math.floor(Math.random()*(6 - 3)+ 3)
//  let alienFirepower =Math.floor(Math.random()*(4 - 2 )+ 2)
//  let generalAccuracy = (Math.random()*(1 - 0 )+ 0).toFixed(1)



//  function attack(){
//   //  const alien = ['alien1','alien2','alien3','alien4','alien5','alien6']
//  //for (let i = 0 ; i < alien.length ; i++){
//     let startAttack = true;

//     if(startAttack === true){
//     console.log('You are attacking the alien')
//     promptEl.innerHTML = 'You are attacking the alien'
//     winning()
//     function winning(){
//      if(generalAccuracy === alienAccuracy){
//         console.log(`You HIT the alien` )
//         console.log(`You have done ${alienFirepower} damage`)
//         console.log(`Alien had ${alienHull} hulls, now Alien has ${alienHull -1 } remaining hull`)
//         promptEl.innerHTML =`You HIT the alien`
//         promptEl2.innerHTML =`You have done ${alienFirepower} damage`
//         promptEl3.innerHTML =`Alien had ${alienHull} hulls, now Alien has ${alienHull -1 } remaining hull`

//     }
    
//       else {
//        console.log(`You have missed, Now it's Aliens Turn`)
//        promptEl.innerHTML = `You have missed, Now it's Aliens Turn`
//        attackBack()
//       }
//     }

//        function attackBack(){
//         if (generalAccuracy == accuracy){
//             console.log(`You have been HIT and You have ${hull - 1} remaining Hull`)
//             promptEl.innerHTML = `You have been HIT and You have ${hull - 1} remaining Hull`
//             winning()
//             return
//         } 
    
//         else {
//             console.log(`You've survived, now it's Your turn`)
//             promptEl.innerHTML =`You've survived, now it's Your turn`
            
            
//         }
//     }
    
// }
//  }
 




// attackBtn.addEventListener('click',attack)
// function heal(){
//     alienShipEl.classList.add("hide")
    
// }
// healBtn.addEventListener('click',healBtn)
//=========================
// class USS_Earth{
//     hull=20;
//     firepower = 5;
//     accuracy = 0.7;
//     attack(ship){
//         let randomNum = math.random();
//         if(randomNum.tofixed(2)< USS_Earth.accuracy){
//             console.log(`Your hit chance: ${randomNum.tofixed(2)}is under you accuracy!`)
//             console.log(`It's a hit!`)
//             console.log(`${ship.shipName} HP:${ship.hull}`)
//             ship.hull -= USS_Earth.firepower
//             console.log(`${ship.shipName} HP:${ship.hull.tofixed(2)}`)
//             return ship.hull

//         }else {
//             console.log(`you missed the alien ship ${ship.shipName}`)
//             console.log(`your hit chance : ${randomNum.tofixed(2)} didn't fall under your accuracy of 0.7`)
//         }
//     }
// }
// class AlienShip{
//     randomHull = Math.random()* (6 - 3)+3;
//     randomFirePower = Math.random()* (4 - 2)+2
//     randomAccuracy = Math.random() * (.8 - .6) +.6
// constructor(name){
//     this.shipName = name;
//     this.hull = this.randomHull.tofixed(2)
//     this.firepower = this.randomFirePower.toFixed(2)
//     this.accuracy = this.randomAccuracy.tofixed(2)
// }

// attack(){
//     let randomNum = Math.random()
//     if(randomNum <this.accuracy){
//         console.log(`the hit chance ${randomNum.tofixed(2)} is under its accuracy of ${this.accuracy}`)
//     }
// }
// }
///==============


///////////final
let USS_Earth = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    attack:(Math.random()*(1 - 0 )+ 0).toFixed(1)

    }
   

let alien = {
    hull:Math.floor(Math.random()*(6 - 3)+ 3) ,
    firepower:Math.floor(Math.random()*(4 - 2 )+ 2) ,
    accuracy: (Math.random()*(0.6 - 0.8 )+ 0.8).toFixed(1),
    aliens:['alien1','alien2','alien3','alien4','alien5','alien6']
    
}

alien.aliens[0].src = `images/spaceship.png`


console.log(alien.accuracy)
console.log(USS_Earth.attack)
let attackFirst = true
const playgame = function(){
    
    if (attackFirst === true){
        console.log(`You are attacking the alien`)
    
       
        if(USS_Earth.attack == alien.accuracy)
        { 
            console.log(`You HIT the alien` )
            console.log(`You have done ${alien.firepower + 1} damages`)
            console.log(`Alien had ${alien.hull} hulls, now Alien has ${alien.hull -1 } remaining hull`)
            alien.aliens.shift()
           
           promptEl.innerHTML =`You HIT the alien`
           promptEl2.innerHTML =`You have done ${alien.firepower + 1} damages`
           promptEl3.innerHTML =`Alien had ${alien.hull} hulls, now Alien has ${alien.hull -1 } remaining hull`
           console.log(alien.aliens)
        
        }  
        else 
        {
               console.log(`You have missed, Now it's Aliens Turn`)
              promptEl2.innerHTML = `You have missed, Now it's Aliens Turn`
              attackBack()
        }
        
    }
               function attackBack(){
                if(USS_Earth.attack == USS_Earth.accuracy){
                    console.log(`You have been HIT and You have ${USS_Earth.hull - 1} remaining Hull`)
                   promptEl3.innerHTML = `You have been HIT and You have ${USS_Earth.hull - 1} remaining Hull`
                  
                } 
            
                else if(USS_Earth.attack !== USS_Earth.accuracy) {
                    console.log(`You've survived, now it's Your turn`)
                   promptEl3.innerHTML =`You've survived, now it's Your turn`
                    
                }
            }
            }
            
        
    
    
        

attackBtn.addEventListener('click',playgame)
function heal(){
    alienShipEl.classList.toggle('hide')
}
healBtn.addEventListener('click',heal)