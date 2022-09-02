

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

    let contactSmile = document.querySelector(".startJoke")
     /* valida la información */
    if (contactSmile){
        contactSmile.classList.toggle("change-mode-startJoke");
    }
    
    let cajaGrande = document.querySelector(".jokeBox")

    if (cajaGrande){
        cajaGrande.classList.toggle("change-mode-jokeBox");
    }
    
    let logowwcm = document.querySelector(".logowwcm")
    
    if (logowwcm){
      logowwcm.classList.toggle("change-mode-lwwcm");
    }
    
    let aHere = document.querySelector(".a-here")

    if (aHere){
      aHere.classList.toggle("change-mode-a-here");
    }
    
    let aLetsgo = document.querySelector(".a-letsGo")
    
    if (aLetsgo){
      aLetsgo.classList.toggle("change-mode-a-letsGo");
    }

}

