import { Link } from "react-router-dom";

const Comics = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <button className='btn btn-danger'>Comics</button>
            </a>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"/section/comic"}>Batman</Link></li>
                <li><Link className="dropdown-item" to={"/section/comic"}>Spider-Man</Link></li>
                <li><Link className="dropdown-item" to={"/section/comic"}>Avengers</Link></li>
                <li><Link className="dropdown-item" to={"/section/comic"}>Joker</Link></li>
                <li><Link className="dropdown-item" to={"/section/comic"}>Superman</Link></li>
            </ul>
        </li>
    );
}

export default Comics;
