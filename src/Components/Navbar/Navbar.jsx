import React from 'react';
import Secciones from './Secciones/Secciones';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Manga Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Secciones />
                    </ul>
                </div>
                <CartWidget/>
            </div>
        </nav>
    );
}

export default Navbar;
