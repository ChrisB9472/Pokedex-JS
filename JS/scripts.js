
let pokemonRepository = (function () {
    let pokemonList = [
        {
          name: 'Charizard',
          height: 1.7,
          type: ['fire', 'flying']
        },
        {
          name: 'Lugia',
          height: 5.2,
          type: ['Psychic', 'flying']
        },
        {
          name: 'Ho-Oh',
          height: 3.8,
          type: ['Fire']
        },
        {
          name: 'Mew',
          height: 0.4,
          type: ['Psychic']
        },
       
      ];
   

      return {
        add: function(pokemon) {
          pokemonList.push(pokemon);
        },
        getAll: function() {
          return pokemonList;
        }
      };
      
        })();

        +pokemonRepository.getAll().forEach(function(pokemon) {
          let pokemonList = document.querySelector('.pokemon-list');
          let listPokemon = document.createElement('li');
          let button = document.createElement('button');
          button.innerText = pokemon.name;
          button.classList.add('button-class')
          listPokemon.appendChild(button);
          pokemonList.appendChild(listPokemon);
          button.addEventListener('click', function() { 
            console.log(pokemon)
            })
              });
        
        function showDetails(pokemon) {
          loadDetails(pokemon).then(function () {
            console.log(pokemon);
          });
        }