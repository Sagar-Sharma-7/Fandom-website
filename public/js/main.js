const span1 = document.querySelector("#span1")

const blink_speed = 1000;
span1.textContent = "Pokemons"

const blink = setInterval(() => {
    span1.style.color = (span1.style.color == 'black' ? '' : 'black');
}, blink_speed);