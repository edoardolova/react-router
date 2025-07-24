import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import DefaultLayout from './layouts/DefaultLayout';
function App() {

  return (
    <>
    {
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage}/>
            <Route path='/products' Component={ProductsPage}/>
            <Route path='/about' Component={AboutPage}/>
           
          </Route>
        </Routes>
      </BrowserRouter>}
    </>
  )
}

export default App
