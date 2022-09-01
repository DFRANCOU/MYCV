
document.querySelectorAll(".tileSmlie")
console.log(document.querySelectorAll(".tileSmlie"));


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
    
    let startJoke = document.querySelector(".startJoke");
      
       startJoke.classList.toggle("change-mode-startJoke");

    // document.querySelector(".startJoke").classList.toggle("change-mode-startJoke");
    
    document.querySelector(".jokeBox").classList.toggle("change-mode-jokeBox");

    document.querySelector(".logowwcm").classList.toggle("change-mode-lwwcm");

    // document.querySelector(".a-here").classList.toggle("change-mode-a-here:link");

    // document.querySelector(".a-letsGo").classList.toggle(".change-mode-a-letsGo");

    
  

}
