import React from "react";

function BookCard(props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card w-100 mb-2">
                    <div className="card-body">
                        {/* Card Title Row */}
                        <div className="row justify-content-between">
                            <div className="col-md-8">
                                <h5 className="card-title">{props.title}</h5>
                            </div>
                            <div className="col-md-4 d-flex justify-content-end">
                                <button className="card-title btn btn-primary mr-2">View</button>
                                <button className="card-title btn btn-primary">Save</button>
                            </div>
                        </div>
                        {/* Card Body Row */}
                        <div className="row mb-2">
                            <div className="col-md-12">
                                <p className="mb-0">{props.authors ? props.authors.join(", ") : "No Authors"}</p>
                                <a href={props.link}>Preview Link</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">
                                <img src={props.img} alt={props.title} />
                            </div>
                            <div className="col-md-10">
                                <p className="card-text">{props.description ? props.description : "No description available"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard