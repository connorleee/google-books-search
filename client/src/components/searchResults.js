import React from "react";
import BookCard from "../components/bookCard"

function SearchResults(props) {
    return (
        <div>
            <div className="container bg-light py-3">
                <div className="row">
                    <div className="col-md-12">
                        <h4>Results</h4>
                    </div>
                </div>

                <BookCard />
            </div>
        </div>
    )
}

export default SearchResults;