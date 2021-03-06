
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
   

      function add(pokemon) {
        pokemonList.push(pokemon);
      }
    
      function getAll() {
        return pokemonList;
      }
      
      
    
      function loadList() {
        return fetch(apiUrl).then(function (response) {
          return response.json();
        }).then(function (json) {
          json.results.forEach(function (item) {
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            add(pokemon);
          });
        }).catch(function (e) {
          console.error(e);
        })
      }

      function addListItem(pokemon) {
        loadSprite(pokemon)
            .then(() => {
                const { name, spriteUrl } = pokemon;

                let list = document.querySelector('.list-group');
                let listItem = document.createElement('li');
                listItem.classList.add('list-group-item');

                let pokemonButton = document.createElement('button');
                pokemonButton.classList.add('button-class');
                pokemonButton.setAttribute('data-toggle', 'modal');
                pokemonButton.setAttribute('data-target', '#poke-modal');
                pokemonButton.innerHTML = `
                    <img class="sprite" src="${spriteUrl}" alt="${name}"/>
                    <p>${name}</p>
                `;

                listItem.appendChild(pokemonButton);
                list.appendChild(listItem);
                addEventListener(pokemonButton, pokemon);
            });
    }

    async function loadSprite(pokemon) {
      let res = await fetch(pokemon.detailsUrl);
      let resData = await res.json();

      pokemon.spriteUrl = resData.sprites.front_default;
      return resData;
  }

      function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
          return response.json();
        }).then(function (details) {
          // Now we add the details to the item
          item.imageUrl = details.sprites.front_default;
          item.height = details.height;
          item.types = details.types;
          item.weight = details.weight;
          item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
        }).catch(function (e) {
          console.error(e);
        });
      }
    
      function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
          showModal(pokemon);
        });
    }
    
    function addEventListener(button, pokemon) {
      button.addEventListener('click', function (event) {
          showDetails(pokemon);
      });
  }
  
    let modalContainer = document.querySelector('#modal-container');
  
  function showModal(pokemon) { 
  
     modalContainer.innerHTML = '';
    
    let modal = document.createElement('div');
      modal.classList.add('modal');
  
    let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);
      
    let modalPokemonName = document.createElement('h1'); 
     modalPokemonName.innerText = pokemon.name;
  
    let modalPokemonImg = document.createElement('img'); 
    modalPokemonImg.src = pokemon.imageUrl; 
  
    
    let modalPokemonHeight = document.createElement('p'); 
     modalPokemonHeight.innerText = 'Height: ' + pokemon.height + ' ft';
  
    let modalPokemonWeight = document.createElement('p'); 
     modalPokemonWeight.innerText = 'Weight: ' + pokemon.weight + ' lbs';

     
     let modalPokemonType = document.createElement('p'); 
     modalPokemonType.innerText = 'Types: ' + pokemon.types;
  
  
            modal.appendChild(closeButtonElement);
            modal.appendChild(modalPokemonName);
            modal.appendChild(modalPokemonImg);
            modal.appendChild(modalPokemonHeight);
            modal.appendChild(modalPokemonWeight);
            modal.appendChild(modalPokemonType);
            modalContainer.appendChild(modal);
            modalContainer.classList.add('is-visible');
            }
  
    function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
      modalContainer.classList.remove('is-visible');
      }
  
    window.addEventListener('keydown', (e) => { 
      let modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
      }
    });
    
    modalContainer.addEventListener('click', (e) => { 
    let target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });

      let searchPokemon = document.querySelector('#search-input');
    searchPokemon.addEventListener('input', () =>{
        let value = searchPokemon.value.toLowerCase();
        let pokemonList = document.querySelectorAll('li');

        pokemonList.forEach((pokemon) =>{
            if(pokemon.innerText.toLowerCase().includes(value))
                pokemon.style.display = 'block';
            else
                pokemon.style.display = 'none';
        })
    });
      
      
        return {
          add: add,
          getAll: getAll,
          addListItem: addListItem,
          loadList: loadList,
          loadDetails: loadDetails,
          showDetails: showDetails
        };
  
  })();
  
  
  pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon);
      });
  }); 