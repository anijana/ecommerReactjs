import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/products" element={<Product />}/>
        <Route path="/products/:id" element={<ProductDetails />}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/contact" element={<Contact />} />
        {/* <Route index element={<Home/>} /> */}
        <Route path="*" element={<h1>Error 404 pages</h1>} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
