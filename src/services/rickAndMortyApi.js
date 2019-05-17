export const getCharacters = currentPageNumber => {
  if(!currentPageNumber) {
    currentPageNumber = 1;
  }
  return fetch(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${currentPageNumber}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch';

      return json;
    })
    .then(({ results }) => ({
      characters: results.map(character => ({
        name: character.name,
        species: character.species,
        status: character.status,
        image: character.image
      }))
    }));
};
