import { Monstre} from "./monstre.js";

let ennemies = new Array("barzork_bourrin.png","barzork_brave.png","barzork_chetif.png","barzork_clone.png","barzork_invisible.png");
let monstre = document.querySelector(".mechant")


function afficherEnnemie(){
    
    let vilaine = monstre.createElement("img")
    monstre.append(vilaine)
}
afficherEnnemie()


// function choosePic() {
//     let randomNum = Math.floor(Math.random() * ennemies.length);
//     document.getElementsByClassName(".mechant").src = ennemies[randomNum]
// }

// choosePic()

