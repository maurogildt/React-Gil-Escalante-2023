import React from 'react';

const Comics = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className='btn btn-danger'>Comics</button>
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Batman</a></li>
                <li><a className="dropdown-item" href="#">Spider-Man</a></li>
                <li><a className="dropdown-item" href="#">Avengers</a></li>
                <li><a className="dropdown-item" href="#">Joker</a></li>
                <li><a className="dropdown-item" href="#">Superman</a></li>
            </ul>
        </li>
    );
}

export default Comics;
