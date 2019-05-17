import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const withFetch = (fetchFn, initialState, key = 'results') => Comp => {
  class WithFetch extends Component {
   
    state = {
      results: initialState,
      loading: false
    }

    fetch = () => {
      this.setState({ loading: true });
      fetchFn() 
        .then(results => this.setState({ results, loading: false }));
    }

    componentDidMount() {
      this.fetch();
    }

    render() {
      const { results, loading } = this.state;
      const props = { [key]: results, loading, ...this.props };
      return <Comp {...props} />;
    }
  }
  return WithFetch;
};
