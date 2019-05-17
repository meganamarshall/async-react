import React, { PureComponent } from 'react';
import Characters from '../components/Characters';
import Loading from '../components/Loading';
import { getCharacters } from '../services/rickAndMortyApi';


export default class AllCharacters extends PureComponent {
  state = {
    characters: [],
    loading: true,
    currentPage: 1,
    totalPages: 25
  }

  fetchCharacters = currentPage => {
    this.setState({ loading: true });
    getCharacters(currentPage)
      .then(({ totalPages, characters }) => this.setState({ totalPages, characters, loading: false }));
  }

  componentDidMount() {
    this.fetchCharacters(this.currentPage);
  }

  previousButton(currentPage) {
    if(currentPage - 1 === 0) {
      throw 'this is the first page';
    } else {
      this.fetchCharacters(this.state.currentPage - 1);
      this.setState({ currentPage: currentPage - 1 });
    }
  }

  nextButton(currentPage) {
    if(this.state.currentPage === this.state.totalPages) throw 'no more pages';
    this.fetchCharacters(this.state.currentPage + 1);
    this.setState({ currentPage: currentPage + 1 });
    
  }

  render() {
    //console.log(this.state.currentPage);
    const { characters, loading, currentPage } = this.state;
    if(loading) return <Loading />;
    return (
    <>
      <button onClick={() => this.previousButton(currentPage)}>Previous Page</button>
      <button onClick={() => this.nextButton(currentPage)}>Next Page</button>
      <Characters characters={characters} />
    </>
    );
  }
}
