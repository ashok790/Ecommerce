// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import Product from "./customer/components/Product/product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";

// import Carousel from './customer/components/HomeCarosel/MainCarosel';
import HomePage from "./customer/pages/HomePage/HomePage";
import CustomerRoutes from "./customer/Routers/CustomerRoutes";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
      </Routes>

     
    </div>
  );
}

export default App;
