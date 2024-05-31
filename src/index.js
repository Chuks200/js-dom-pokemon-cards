const cardsContainer = document.querySelector('.cards');

console.log(data);

function createCard(pokemon) {
    const card = document.createElement('li');
    card.className = 'card';
  
    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card--title';
    cardTitle.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    card.appendChild(cardTitle);
  
    const cardImage = document.createElement('img');
    cardImage.className = 'card--img';
    cardImage.width = 256;
    cardImage.src = pokemon.sprites.other["official-artwork"].front_default;
    card.appendChild(cardImage);
  


    const cardText = document.createElement('ul');
    cardText.className = 'card--text';
    pokemon.stats.forEach(stat => {
      const statItem = document.createElement('li');
      statItem.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
      cardText.appendChild(statItem);
    });
    card.appendChild(cardText);
  
    return card;
  }
  
  
data.forEach(pokemon => {
    const card = createCard(pokemon);
    cardsContainer.appendChild(card);
  });

//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);
