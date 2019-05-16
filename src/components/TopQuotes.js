import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Quotes from './Quotes';
import { getQuotes } from '../services/getQuote';

export default class TopQuotes extends PureComponent {
  static propTypes = {
    count: PropTypes.number
  }

  static defaultProps = {
    count: 3
  }

  state = {
    quotes: []
  }

  componentDidMount() {
    getQuotes() 
      .then(quotes => this.setState({ quotes }));
  }
  render() {
    const { quotes } = this.state;
    return <Quotes quotes={quotes} />;
  }
}
