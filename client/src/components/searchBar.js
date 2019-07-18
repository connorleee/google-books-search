import React from "react";

function SearchBar() {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <form className="form-inline form my-2 my-lg-0">
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
        </div>
    )
}

export default SearchBar