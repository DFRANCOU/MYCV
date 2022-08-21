const button1 = document.querySelector(".button1");

button1.addEventListener("click", lightMode);

function lightMode(){

    document.querySelector("body").classList.toggle("change-mode-body");



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

// let experience = document.querySelector(".cajaGrande")
// experience.forEch(element => {
//     element.classList.toggle("change-mode-cajaGrande")
// });

    //   let nav = document.querySelector("nav");
    //   nav.classList.toggle("change-mode-nav");

    //  let a = document.querySelector(".link-a")
    // // a.classList.toggle("change-mode-a")

    // // document.querySelector("header ul a").classList.toggle("change-mode-a")