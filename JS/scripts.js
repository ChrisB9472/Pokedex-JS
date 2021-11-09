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

  for (let i = 0; i < pokemonList.length; i++) {
      if (pokemonList[i].height >1){
    document.write(pokemonList[i].name + ': Height ' + pokemonList[i].height + '. Wow, that\'s big!' + '<br><br>');}
        else {
            document.write(pokemonList[i].name + ': Height ' + pokemonList[i].height + '<br><br>');}
        
        }
    
  
   

  
 