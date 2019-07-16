import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div classNameName="App">
        <nav className="container-fluid bg-light mb-5 py-3">
          <div className="row">
            <div className="col-md-4">
              <a className="navbar-brand" href="/"><h3>Google Books</h3></a>

              <ul className="nav navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">Search</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Saved</a>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h1 className="text-center">React Google Books Search</h1>
            </div>

            <div className="col-md-4">
              <form className="form-inline my-2 my-lg-0 float-right">
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Book Search</span>
                  </div>
                  <input className="form-control mr-sm-2" type="search" placeholder="Book Title" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
              </form>
            </div>
          </div>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h4>Results</h4>
            </div>
          </div>

          <div className="row">
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
                <div className="row">
                  <div className="col-md-12">
                    <p>Authors</p>
                    <a href="/">link</a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-2">
                    <img src="#"/>
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
    );
  }
}

export default App;
