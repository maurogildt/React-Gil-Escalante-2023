import './App.css';
import Navbar from './Navbar/Navbar';
import ItemLIstContainer from './ItemListContainer/ItemListContainer'
function App() {
  return (
    <div>
      <Navbar/>
      <ItemLIstContainer mensaje={"¡Compra en efectivo 10% de descuento!"}/>
    </div>
  );
}

export default App;
