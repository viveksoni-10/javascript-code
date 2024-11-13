let container = document.getElementById("pokemon_card_container");
let searchInput = document.getElementById("search");
let filterBtn = document.getElementById("filter");
let resetBtn = document.getElementById("reset");

function createCart(response) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <div class='card-inner'>
            <div class='card-front'>
            <div class='id'>${response.id}</div>
            <img src='${response.sprites.front_default}'>
            <div class='name'>${response.name}</div>
            <div class='type'>${response.types[0].type.name}</div>
            </div>

            <div class='back-card'>
            <img src='${response.sprites.back_default}'>
                <div class='name'>${response.name}</div>
                <div class='name'>${response.abilities[0].ability.name}</div>
            </div>
            </div>`;
    // console.log(card);
    return card;
}

searchInput.addEventListener("keyup", () => {
    let searchValue = searchInput.value.toLowerCase();
    let allcard = document.querySelectorAll(".card");
    // console.log(allcard);
    allcard.forEach((card) => {
        let cardName = card.querySelector(".name").textContent;
        // console.log(cardName);
        if (cardName.startsWith(searchInput)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

filterBtn.addEventListener("click", () => {
    let allcard = document.querySelectorAll(".card");
    allcard.forEach((card) => {
        let cardType = card.querySelector(".type").textContent;
        if (cardType === type.value) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

async function fetchPokemonData(i) {
    let data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let result = await data.json();
    console.log(result);
    return result;
}

async function fetchPokemon() {
    for (let i = 1; i <= 100; i++) {
        const response = await fetchPokemonData(i);
        let pokecard = createCart(response);
        container.appendChild(pokecard);
    }
}
fetchPokemon();