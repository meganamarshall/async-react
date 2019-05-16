export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
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
