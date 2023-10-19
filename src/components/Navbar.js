import React, { useState } from 'react';
import logo from '../images/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ onLocationQueryChange }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onLocationQueryChange(searchQuery); 
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgb(159, 179, 194)' }}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} width='60px' alt="logo" />
                </a>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <form onSubmit={handleSearch}>
                                <div className="input-group mb-5 pt-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search for cities..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <div className="input-group-append">
                                        <button className="btn" style={{backgroundColor: 'black', color: 'white'}} type="submit">
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
