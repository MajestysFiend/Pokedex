//IIFE containing pokemon list and basic functionality
let pokemonRepository = (function () {
    // Array of Pokemon and their attributes as objects
    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, weight: 6.9, types: ['grass', 'poison'] },
        { name: 'Ivysaur', height: 1.0, weight: 13.0, types: ['grass', 'poison'] },
        { name: 'Venusaur', height: 2.0, weight: 100.0, types: ['grass', 'poison'] },
        { name: 'Charmander', height: 0.6, weight: 8.5, types: ['fire'] },
        { name: 'Charmeleon', height: 1.1, weight: 19.0, types: ['fire'] },
        { name: 'Charizard', height: 1.7, weight: 90.5, types: ['fire', 'flying'] },
        { name: 'Squirtle', height: 0.5, weight: 9, types: ['water'] },
        { name: 'Wartortle', height: 1.0, weight: 22.5, types: ['water'] },
        { name: 'Blastoise', height: 1.6, weight: 85.5, types: ['water'] },
        { name: 'Caterpie', height: 0.3, weight: 2.9, types: ['bug'] },
        { name: 'Metapod', height: 0.7, weight: 9.9, types: ['bug'] },
        { name: 'Butterfree', height: 1.1, weight: 32.0, types: ['bug', 'flying'] }];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    function showDetails(pokemon) {
        console.log(pokemon);
    }

    function addListItem(pokemon) {
        let pokeList = document.querySelector('ul');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('pokemonbutton');
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        })
        listItem.appendChild(button);
        pokeList.appendChild(listItem);
    }

    return {
        add: add,
        getAll: getAll,
        showDetails: showDetails,
        addListItem: addListItem
    }

})();
// Looping through Pokemon list array
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
