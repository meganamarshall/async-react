import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote }) {
  return (
    <>
    <p>{quote.character}</p>
    <p>{quote.quote}</p>
    <img src={quote.img} />
    </> 
  );
}

Quote.propTypes = {
  quote: PropTypes.shape({
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  })
};

export default Quote;
