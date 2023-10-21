import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Cart/Action';
import { store } from '../../../State/store';




const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector(store=>store);
  const dispatch = useDispatch();
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };
  
  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);



  return (
    <div className="container mx-auto">
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[10rem] mt-5 lg:mt-10 mb-3">
          {/* px-5 sticky top-0 h-[10rem] mt-5 lg:mt-10 */}
          <div className="border p-3.5">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold ">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">-₹{cart.cart?.discounte}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <hr />
              <div className="flex justify-between pt-2 text-black font-bold">
                <span>Total Amount</span>
                <span className="text-green-600 font-bold">
                  ₹{cart.cart?.totalDiscountedPrice}
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
  );
}

export default Cart
