import React, { PureComponent } from 'react';
import Quotes from './Quotes';
import getQuotes from '../services/getQuote';

export default class TopQuotes extends PureComponent {
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
