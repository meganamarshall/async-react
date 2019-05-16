import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }) {
  const quoteList = quotes.map(quote => (
    <li key={quote.quote}>
      <Quote quote={quote} />
    </li>
  )
  );

  return (
    <ul>
      {quoteList}
    </ul>
  );
}

Quotes.propTypes = {
  quotes: PropTypes.array.isRequired
};

export default Quotes;
