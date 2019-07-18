import React, { Component } from "react";
import NavBar from "../components/navBar";
import SearchBar from "../components/searchBar";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  // state = {
  //   books: [],
  //   title: "",
  //   author: "",
  //   synopsis: ""
  // };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div>
        <NavBar />

        <SearchBar />

        <div className="container bg-light py-3">
          <div className="row">
            <div className="col-md-12">
              <h4>Results</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="card w-100">
                <div className="card-body">
                  {/* Card Title Row */}
                  <div className="row justify-content-between">
                    <div className="col-md-4">
                      <h5 className="card-title">Book Title</h5>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                      <button className="card-title btn btn-primary mr-2">View</button>
                      <button className="card-title btn btn-primary">Save</button>
                    </div>
                  </div>
                  {/* Card Body Row */}
                  <div className="row mb-2">
                    <div className="col-md-12">
                      <p className="mb-0">Authors</p>
                      <a href="/">link</a>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-2">
                      <img src="/" alt="Book" />
                    </div>
                    <div className="col-md-10">
                      <p className="card-text">With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Books;
