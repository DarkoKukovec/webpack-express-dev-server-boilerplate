require('./main.css');

fetch('test.json')
  .then((res) => res.json())
  .then((data) => document.querySelector('.message').innerText = data.message + '!!!');

fetch('/pokemon')
  .then((res) => res.json())
  .then((data) => document.querySelector('.pokemons').innerText = 'Pokemons: ' + data.results.map((item) => item.name).join(', '));

fetch('/pokemon/25')
  .then((res) => res.json())
  .then((data) => document.querySelector('.pikachu').src = data.sprites.front_shiny);
