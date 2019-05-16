import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote }) {
  return (
    <section>
      <p>{quote.character}</p>
      <p>{quote.quote}</p>
      <img src={quote.image} />
    </section> 
  );
}

Quote.propTypes = {
  quote: PropTypes.shape({
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default Quote;
