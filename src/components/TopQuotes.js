import React from 'react';
import PropTypes from 'prop-types';
import Quotes from './Quotes';

function TopQuotes({ quotes, count, title }) {
  return (
    <section>
      <h2>{title}</h2>
      <Quotes quotes={quotes} />
    </section>
  );
}

TopQuotes.propTypes = {
  title: PropTypes.string.isRequired,
  quotes: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired
};

export default TopQuotes;
