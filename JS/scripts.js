
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

        pokemonRepository.getAll().forEach(function(user) {
          document.write(user.name + ' is ' + user.height + ' meters tall. Also, They are ' + user.type + ' type' + '<br><br>');
        });