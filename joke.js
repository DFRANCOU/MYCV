window.addEventListener("DOMContentLoaded", chistesAleatorios)

let joke = document.getElementById("joke");
let answer = document.getElementById("answer");
let button = document.getElementById("one-more-time");

button.addEventListener("click", chistesAleatorios)

function chistesAleatorios(){
    const endpoint="https://api.dadjokes.io/api/random/joke";
    async function apiAsync(){
        const response = await fetch(endpoint);
        const data = await response.json()
        const listaChiste = data.body;
        const joke = listaChiste[0];
        const jokes = joke.setup;
        const answer = joke.punchline;
        document.getElementById("joke").textContent = jokes;
        document.getElementById("answer").textContent = answer;
       }
    apiAsync()
}

try {
    apiAsync()
} catch (error) {
    document.getElementById("answer").textContent = "Metio el dedo mal";
}