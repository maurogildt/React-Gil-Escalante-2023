import React from 'react';
import Mangas from './Mangas/Mangas';
import Comics from './Comics/Comics';

const Secciones = () => {
    return (
        <>
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#"><button className='btn btn-danger'>Inicio</button></a>
        </li>
        <Mangas/>
        <Comics/>
        <li className="nav-item">
            <a className="nav-link" href="#"><button className='btn btn-danger'>Contacto</button></a>
        </li>
        </>
    );
}

export default Secciones;
