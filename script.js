// import { Monstre} from "./monstre.js";
// import { Joueur} from "./monstre.js";

// import {Generation} from 'Generation.js'; 





let fleche = document.querySelector(".aro");
let attack = document.querySelector("#boutatack")
let special = document.querySelector("#boutspecial")


// while (fleche < 10) {
//   resultat++;
//   fleche.setAttribute("id", "rotated-imagetres");
//   ;
// }




let monsterturn = document.querySelector("#monster")
let playerturn = document.querySelector("#play")

// function tour() {
//   if (randomplayer() == true) {
//     monsterturn.classList.remove("disable");
//   } else
//     playerturn.classList.remove("disable");

// }

// tour();


let life = document.querySelector("#vie")
life.setAttribute('value', 100);



// function poumpoum(){
//     if{

//     }
// }
let war = document.querySelector(".war")

// function frapper() {
//   if(document.getElementById('#boutatack').click()){
//     war.addEventListener("",function(e){
        
//     })
//   }
// }


function bougetesmorts(){
  if(document.getElementById('#boutatack').click()){
    war.setAttribute("id","war2")
  }
}
let ennemies = new Array("barzork_bourrin.png","barzork_brave.png","barzork_chetif.png","barzork_clone.png","barzork_invisible.png");
let monstre = document.querySelector(".mechant")

function afficherEnnemie(){
  let vilaine = document.createElement("img")
  monstre.append(vilaine)
  vilaine.setAttribute("src", "asset/img/barzork_bourrin.png");
}


function randomplayer() {
  let random = Math.round(Math.random() * 101)
    console.log(random)
  if (random < 50) {
    fleche.setAttribute("id", "rotated-image");
    return true;
  } else {
    fleche.setAttribute("id", "rotated-imagedos")
    return false;
  }
}

function canpunch(){
  attack.classList.remove("is-disabled");

  special.classList.remove("is-disabled");
}


let spawnMechant = document.querySelector(".spawn")

spawnMechant.addEventListener("click",function(){
  afficherEnnemie()
  spawnMechant.classList.add("displaySpawn")
  randomplayer()
  canpunch()
})



// fleche.addEventListener("click", function(e){
//   console.log("pipi");(e)
//   if(e.key === "b"){
//     console.log("pipi");("je suis trop fort")
//   }
// })