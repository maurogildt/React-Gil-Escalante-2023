import React from 'react';
import { Link } from 'react-router-dom';
const Mangas = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className='btn btn-danger'>Mangas</button>
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/section/manga"}>Naruto</Link></li>
                <li><Link className="dropdown-item" to={"/section/manga"}>Berserk</Link></li>
                <li><Link className="dropdown-item" to={"/section/manga"}>Death Note</Link></li>
            </ul>
        </li>
    );
}

export default Mangas;
