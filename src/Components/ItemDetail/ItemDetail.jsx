import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({item}) => {
    return (
        <div className="row g-0">
            <div className="col-md-3">
                <img src={`../img/${item.img}`} className="card-img" alt={`imagen de ${item.img}`} />
            </div>
            <div className="col-md-6 itemDetail">
                <h5 className="card-title">{item.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Tomo - {item.tomo}</h6>
                <p className="card-text">Stock: {item.stock}</p>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <div className="botonItem">
                    <ItemCount valInicial={1} stock={item.stock}/>
                    <button className="btn btn-danger">Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;

