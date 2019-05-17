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

  fetchCharacters = currentPage => {
    this.setState({ loading: true });
    getCharacters(currentPage)
      .then(({ totalPages, characters }) => this.setState({ totalPages, characters, loading: false }));
  }

  componentDidMount() {
    this.fetchCharacters(this.currentPage);
  }

  previousButton(currentPage) {
    if(currentPage === 1) throw 'this is the first page';
    let thePage = currentPage;
    console.log(thePage);
    this.setState({ currentPage: thePage - 1 });
    this.fetchCharacters(this.currentPage - 1);
  }

  nextButton(currentPage, totalPages) {
    if(currentPage === totalPages) throw 'no more pages';
    let thePage = currentPage;
    console.log(thePage);
    this.setState({ currentPage: thePage + 1 });
    this.fetchCharacters(this.currentPage + 1);
  }

  render() {
    const { characters, loading, currentPage, totalPages } = this.state;
    if(loading) return <Loading />;
    return (
    <>
      <button onClick={() => this.previousButton(currentPage)}>Previous Page</button>
      <button onClick={() => this.nextButton(currentPage, totalPages)}>Next Page</button>
      <Characters characters={characters} />
    </>
    );
  }
}
