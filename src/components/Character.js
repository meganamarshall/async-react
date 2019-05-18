import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <section>
      <p>{character.name}</p>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <img src={character.image} />
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default Character;

