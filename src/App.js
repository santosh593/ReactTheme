import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ConstactUs';
import ProductDeatil from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';

function App() {

  return <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/contact" element={<ContactUs />}/>
      <Route path="/productdetail" element={<ProductDeatil />}/>
      <Route path="/productlist" element={<ProductList />}/>
      <Route path="/contact" element={<ContactUs />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/cart" element={<Cart />}/>
     </Routes>
     <Footer />
  </BrowserRouter>
}

export default App;
