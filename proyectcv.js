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

    document.querySelector(".contacSmile").classList.toggle("change-mode-contacSmile");

    document.querySelector(".cajagrandeSmile").classList.toggle("change-mode-cajagrandeSmile");

    
  

}
