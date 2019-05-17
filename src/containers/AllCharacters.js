import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import Loading from '../components/Loading';
import { getCharacters } from '../services/rickAndMortyApi';


export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    loading: true,
    currentPage: 1,
    totalPages: 1
  }

  fetchCharacters = () => {
    this.setState({ loading: true });
    getCharacters()
      .then(({ totalPages, characters }) => this.setState({ totalPages, characters, loading: false }));
  }

  componentDidMount() {
    this.fetchCharacters(this.currentPage);
  }

  'https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/'

  previousButton() {
    if(this.state.currentPage === this.state.totalPages) throw 'no more pages';
    let thePage = this.state.currentPage;
    this.setState({ currentPage: thePage-- });
    this.fetchCharacters(this.currentPage - 1);
  }

  render() {
    const { characters, loading } = this.state;
    if(loading) return <Loading />;
    return (
    <>
      <button onClick={() => previousButton()}>Previous Page</button>
      <button>Next Page</button>
      <Characters characters={characters} />
    </>
    );
  }
}
