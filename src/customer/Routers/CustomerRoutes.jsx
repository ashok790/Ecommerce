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
import PaymentSuccess from "../components/Payment/PaymentSuccess";

const CustomerRoutes = () => {
  return (
    // <div>
    //   <div>
    //     <Navigation />
    //   </div>
    //   <Routes>
    //     <Route path="/login" element={<HomePage />}></Route>
    //     <Route path="/register" element={<HomePage />}></Route>

    //     <Route path="/" element={<HomePage />}></Route>
    //     <Route path="/cart" element={<Cart />}></Route>
    //     <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
    //     <Route path="/product/:productId" element={<ProductDetails/>}></Route>
    //     <Route path="/checkout" element={<Checkout/>}></Route>
    //     <Route path="/account/order" element={<Order/>}></Route>
    //     <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>

    //   </Routes>
    //   <div >
    //     <Footer />
    //   </div>
    // </div>
    <div className="flex flex-col min-h-screen">
      <div>
        <Navigation />
      </div>
      <Routes className="flex-grow">
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />
        <Route path="/payment/:orderId" element={<PaymentSuccess />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
