import React from 'react';

const Mangas = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className='btn btn-danger'>Mangas</button>
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Naruto</a></li>
                <li><a className="dropdown-item" href="#">Dragon Ball Z</a></li>
                <li><a className="dropdown-item" href="#">Death Note</a></li>
            </ul>
        </li>
    );
}

export default Mangas;
