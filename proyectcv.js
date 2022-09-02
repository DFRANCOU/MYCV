

    // let x = document.querySelector(".contactSmile")

    // console.log("x");

const button1 = document.querySelector(".button1");

button1.addEventListener("click", lightMode);

function lightMode(){

    document.querySelector("body").classList.toggle("change-mode-body");

    document.querySelectorAll(".a-header").forEach(element => { 
    element.classList.toggle("change-mode-a-header")
    });

    document.querySelectorAll(".cajaGrande").forEach(element => {
    element.classList.toggle("change-mode-cajaGrande")
    });

    document.querySelectorAll("div h3").forEach(element => {
    element.classList.toggle("change-mode-h3")
    });

    document.querySelectorAll("h4").forEach(element => {
    element.classList.toggle("change-mode-h4") 
    });

    let contactSmile = document.querySelector(".contactSmile")
     /* valida la información */
    if (contactSmile){
        contactSmile.classList.toggle("change-mode-contactSmile");
    }
    
    let cajaGrande = document.querySelector(".cajagrandeSmile")

    if (cajaGrande){
        cajaGrande.classList.toggle("change-mode-cajagrandeSmile");
    }

    // document,getElementsByClassName("logowwcm").classList.toggle("change-mode-lwwcm");

    let aHere = document.querySelector(".a-here")

    if (aHere){
      aHere.classList.toggle("change-mode-a-here");
    }
    
    let aLetsgo = document.querySelector(".a-letsGo")
    
    if (aLetsgo){
      aLetsgo.classList.toggle("change-mode-a-letsGo");
    }
 

    
  

}
