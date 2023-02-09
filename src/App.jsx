import './App.css';

import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/section/:seccion' element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
