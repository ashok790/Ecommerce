import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { store } from "../../../State/store";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const {order} = useSelector(store=>store)
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  useEffect(() => {
    console.log("OrderSummary useeffect", orderId);
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleCheckout = () => {
    dispatch(createPayment(orderId))
  }


  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3  relative">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <CartItem item={item} />
            ))}
          </div>

          <div className="px-5 sticky top-0 h-[10rem] mt-5 lg:mt-2 mb-30">
            <div className="border p-3.5 mt-auto mb-auto">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold ">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">
                    -₹{order.order?.discounte}
                  </span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <hr />
                <div className="flex justify-between pt-2 text-black font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600 font-bold">
                    ₹{order.order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                onClick={handleCheckout}
                type="submit"
                variant="contained"
                className="w-full mt-5 mb-2"
                sx={{
                  px: "2.5rem",
                  py: "0.7rem",
                  bgcolor: "#9155fd",
                  mt: "0.75rem",
                  transition: "background-color 0.3s", // Add smooth transition
                  "&:hover": {
                    bgcolor: "indigo.500", // Change to indigo 500 on hover
                  },
                }}
              >
                CheckOut
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
