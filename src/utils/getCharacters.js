import Data from '../data/pokemons.json';

export const getCharacters = (quantity) => {
  let numbers = [];
  let i = 0;
  while (i < quantity) {
    const num = Math.floor(Math.random() * 600);
    if (!numbers.includes(num)) {
      numbers.push(num);
      i++;
    }
  }

  let selected = [];

  for (let i = 0; i < numbers.length; i++) {
    const poke = Data.find((pk) => pk.id === numbers[i]);
    selected.push(poke);
  }
  return selected;
};
