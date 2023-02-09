import { Link } from "react-router-dom";
const Item = ({item}) => {
    return (
        <div className="card mb-3 cardProducto">
            <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Tomo - {item.tomo}</h6>
                <img src={`../img/${item.img}`} className="card-img" alt={"producto"} height={320}/>
                <p className="card-text">Stock: {item.stock}</p>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <button className="btn btn-danger"><Link className="nav-link" to={`/product/${item.id}`}>Ver Producto</Link></button>
            </div>
        </div>
    );
}

export default Item;
