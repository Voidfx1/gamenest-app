// src/pages/Checkout.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/CartSlice"; // ✅ make sure path matches your project
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCartTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    toast.success("✅ Order placed successfully!");
    dispatch(clearCart());

    // Redirect user to homepage (or orders page)
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="checkout-page p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* Cart Summary */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Items</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">No items in your cart.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b py-2"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-gray-500">
                      {item.quantity} × ${item.price}
                    </p>
                  </div>
                </div>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
        )}

        {/* Total */}
        <div className="flex justify-between font-bold text-lg mt-4">
          <span>Total:</span>
          <span>${getCartTotal().toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Form */}
      <form
        onSubmit={handlePlaceOrder}
        className="bg-white shadow-md rounded-lg p-4"
      >
        <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border rounded p-2 w-full"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded p-2 w-full"
            required
          />
        </div>

        <textarea
          placeholder="Address"
          className="border rounded p-2 w-full mb-4"
          required
        ></textarea>

        <h2 className="text-xl font-semibold mb-4">Payment</h2>
        <select className="border rounded p-2 w-full mb-4" required>
          <option value="">Select payment method</option>
          <option value="card">Credit/Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cod">Cash on Delivery</option>
        </select>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
