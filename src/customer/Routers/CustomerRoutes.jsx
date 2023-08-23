import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Cart from "../components/Cart/Cart";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product/product";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Checkout from "../components/Checkout/Checkout";
import Order from "../components/Order/Order";
import OrderDetails from "../components/Order/OrderDetails";

const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
        <Route path="/product/productId" element={<ProductDetails/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/account/order" element={<Order/>}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
        
        {/* <Order/> */}
        {/* <OrderDetails/> */}
        
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;