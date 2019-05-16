import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

function Quote({ quote }) {
  return (
    <section classList={styles.Quote}>
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
