import React, { Component } from "react";
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
import SearchResults from "../components/searchResults"
import API from "../utils/API"

class Search extends Component {
  state = {
    books: [],
    search: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks("Cristo")
  //   .then(res => this.setState({ books: res.data.items }))
  //   .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.search) {
      API.getBooks(this.state.search)
        .then(res => this.setState({ books: res.data.items }))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <NavBar />

        <SearchBar handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />

        <SearchResults books={this.state.books}/>

      </div>
    );
  }
}

export default Search;
