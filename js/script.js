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
const promptEl4 = document.querySelector("#prompt4")
const hastyBtn = document.querySelector(".retreat")

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


/////////// ===================== final ======================
let USS_Earth = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7,
    attack:(Math.random()*(1 - 0 )+ 0).toFixed(1),

    }
   

let alien = {
    hull:Math.floor(Math.random()*(6 - 3)+ 3) ,
    firepower:Math.floor(Math.random()*(4 - 2 )+ 2) ,
    accuracy: (Math.random()*(0.6 - 0.8 )+ 0.8).toFixed(1),
    aliens:['alien1','alien2','alien3','alien4','alien5','alien6']
    
} 

//alien.aliens[0].src = `images/spaceship.png`


console.log(alien.accuracy)
console.log(USS_Earth.attack)
let attackFirst = false
const attack = function(){
    while(USS_Earth.hull > 0){
    if (attackFirst === false){
        console.log(`You are attacking the alien`)
    
        
        if(USS_Earth.attack == alien.accuracy)
        { 
            console.log(`You HIT the alien` )
            console.log(`You have done ${alien.firepower + 1} damages`)
            console.log(`Alien had ${alien.hull} hulls, now Alien has ${alien.hull -1 } remaining hull`)
            alien.aliens.shift()
           console.log(alien.aliens)
           promptEl.innerHTML =`You HIT the alien`
           promptEl2.innerHTML =`You have done ${alien.firepower + 1} damages`
           promptEl3.innerHTML =`Alien had ${alien.hull} hulls, now Alien has ${alien.hull -1 } remaining hull`
           console.log(alien.aliens)
           hastyBtn.classList.toggle('hide')
           continue
           
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
                   promptEl3.innerHTML =`You've survived, now it's Your turn`;
                   
                  // attackFirst= false
                }
                
            }
            break
            }
            
        }
    
    
        

attackBtn.addEventListener('click',attack)
function heal(){
    alienShipEl.classList.toggle('hide')
   promptEl4.innerHTML=`You are Healing.... click "Heal" button again if you are ready to go back and fight `
    
}
function retreat(){
    alienShipEl.classList.toggle('hide')
    promptEl4.innerHTML=`You have chosen to make a hasty retreat `
}
healBtn.addEventListener('click',heal)
hastyBtn.addEventListener('click',retreat)
/////============ encapsulation =============

// let hull = 20
// let firepower = 5
// let accuracy = 0.7
// let alienAccuracy = (Math.random()*(0.6 - 0.8 )+ 0.8).toFixed(1)
// let alienHull = Math.floor(Math.random()*(6 - 3)+ 3)
// let alienFirepower =Math.floor(Math.random()*(4 - 2 )+ 2)
// let generalAccuracy = (Math.random()*(1 - 0 )+ 0).toFixed(1)
// class OurShip {
//    constructor(){
//        this.hull = hull,
//        this.firepower = firepower,
//        this.accuracy = accuracy
//    }
// }
// class Alien{
//     constructor(){
//        this.alienAccuracy = alienAccuracy,
//        this.alienHull = alienHull,
//        this.alienFirepower = alienFirepower,
//        this.generalAccuracy = generalAccuracy

//     }
// }
// console.log(this.accuracy)
// let attackFirst = false
// function battle(){
//     while(this.hull > 0){
       
   
//     if (attackFirst === false){
//         console.log(`You are attacking the alien`)
    
        
//         if(this.generalAccuracy == this.alienAccuracy)
//         { 
//             console.log(`You HIT the alien` )
//             console.log(`You have done ${this.alienFirepower + 1} damages`)
//             console.log(`Alien had ${this.alienHull} hulls, now Alien has ${this.alienHull -1 } remaining hull`)
//             alien.aliens.shift()
           
//            promptEl.innerHTML =`You HIT the alien`
//            promptEl2.innerHTML =`You have done ${this.alienFirepower + 1} damages`
//            promptEl3.innerHTML =`Alien had ${this.alienHull} hulls, now Alien has ${this.alienHull -1 } remaining hull`
           
//            hastyBtn.classList.toggle('hide')
           
           
//         }  
//         else 
//         {
//                console.log(`You have missed, Now it's Aliens Turn`)
//               promptEl2.innerHTML = `You have missed, Now it's Aliens Turn`
//               attackBack()
              
//         }
        
//     }
//                function attackBack(){
//                 if(this.generalAccuracy == this.accuracy){
//                     console.log(`You have been HIT and You have ${this.hull - 1} remaining Hull`)
//                    promptEl3.innerHTML = `You have been HIT and You have ${this.hull - 1} remaining Hull`
                  
//                 } 
            
//                 else if(this.generalAccuracy !== this.accuracy) {
//                     console.log(`You've survived, now it's Your turn`)
//                    promptEl3.innerHTML =`You've survived, now it's Your turn`;
                   
//                 }
                
//             }
//             break
//             }
            
//         }
    


// attackBtn.addEventListener('click',battle)