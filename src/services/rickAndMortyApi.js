export const getCharacters = currentPage => {
  if(currentPage === undefined) currentPage = 1;
  return fetch(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?page=${currentPage}`)
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
