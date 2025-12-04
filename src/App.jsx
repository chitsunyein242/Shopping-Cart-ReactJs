import { Routes ,Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Navbar/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Details from './components/Product/Details';
import NotFound from './components/Not Found/NotFound';


function App() {
  
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/products' element={<Home />}/>
          <Route path='/products/:productId' element={<Details />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App
