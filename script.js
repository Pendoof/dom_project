// Add your code to this file
let body = document.querySelector("body");
body.style.backgroundColor = "darkblue";


let h2 = document.querySelector("h2");
h2.innerHTML = "Here are Pokemon's incredible Gen 1 starters!";
h2.style.textAlign = "center";

let bulbasaurContainer = document.querySelector("#bulbasaur_container");
bulbasaurContainer.style.backgroundColor = "#31987fff";

let imgs = document.querySelectorAll("img");
for (img of imgs) {
    img.style.border = "5px dotted #e89e26ff";
}

let names = document.querySelectorAll(".pokemon_names");
for (pokemon of names) {
    pokemon.innerHTML = pokemon.innerHTML + "!";
    pokemon.style.color = "#ffee8dff";
}

let footer = document.querySelector("footer");
footer.innerHTML = "<hr> All Star Code - DOM Project <hr>";
footer.style.width = "max-content";