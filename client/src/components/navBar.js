import React from "react";

function NavBar() {
    return (
        <div>
            <nav className="container-fluid bg-light mb-5 py-3">
                <div className="row">
                    <div className="col-md-4">
                        <a className="navbar-brand" href="/"><h3>Google Books</h3></a>

                        <ul className="nav navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Saved</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h1 className="text-center">React Google Books Search</h1>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar