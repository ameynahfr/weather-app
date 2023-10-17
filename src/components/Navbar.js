import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ onLocationQueryChange }) => {
    const [searchQuery, setSearchQuery] = useState(''); // State for user input

    const handleSearch = (e) => {
        e.preventDefault();
        onLocationQueryChange(searchQuery); // Pass the searchQuery to the parent component (App)
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgb(159, 179, 194)' }}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/3845/3845731.png" width='60px' alt="logo" />
                </a>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <form onSubmit={handleSearch}>
                                <div className="input-group mb-5">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search for cities..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn" style={{backgroundColor: 'rgb(105, 119, 130)', color: 'white'}} type="submit">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
