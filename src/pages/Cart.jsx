import { useSelector, useDispatch } from "react-redux";
import { ASSETS } from "../assets";
import { InputNumber } from "antd";
import { RiDeleteBin5Line, RiHeart2Line } from "react-icons/ri";
import { removeFromCart, changeCartQuantity } from "../features/CartSlice";
import { useNavigate } from "react-router-dom"; // ✅ added

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ added

  // ✅ Quantity change
  const handleQuantityChange = (id, value) => {
    if (value > 0) {
      dispatch(changeCartQuantity({ id, quantity: value }));
    }
  };

  // ✅ Remove item
  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  // ✅ Subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <main className="space-y-10">
      {/* Hero section */}
      <section className="relative px-4 h-[40vh] bg-primary">
        <img
          src={ASSETS["Fortnite"]}
          alt="Cart Banner"
          className="opacity-70 absolute top-0 left-0 h-full w-full object-cover object-center"
        />
      </section>

      {/* Cart section */}
      <section className="px-10">
        <div className="container mx-auto grid md:grid-cols-3 gap-4">
          
          {/* Cart Items */}
          <aside className="md:col-span-2 divide-y divide-slate-50 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center py-3 px-6">
              <h3 className="text-lg md:text-xl font-semibold">Shopping Cart</h3>
              <p className="text-gray-500 text-xs">{cart.length} items</p>
            </div>

            {cart.length === 0 ? (
              <p className="p-6 text-center text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <figure key={item.id} className="py-4 px-6 flex gap-4 items-center">
                  {/* Product Image */}
                  <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100">
                    <img
                      src={item.image || ASSETS["lamborghini_ash_car"]}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">Price: ${item.price}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col items-start space-y-1">
                    <InputNumber
                      min={1}
                      value={item.quantity}
                      onChange={(value) => handleQuantityChange(item.id, value)}
                      className="max-w-20"
                    />
                    <p
                      className="flex items-center gap-2 text-xs text-red-500 cursor-pointer"
                      onClick={() => handleRemove(item.id)}
                    >
                      <RiDeleteBin5Line /> Remove
                    </p>
                    <p className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer">
                      <RiHeart2Line /> Save for later
                    </p>
                  </div>

                  {/* Total Price per item */}
                  <p className="text-sm font-semibold text-primary">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </figure>
              ))
            )}
          </aside>

          {/* Order Summary */}
          <aside className="bg-white p-6 rounded-lg shadow-md h-fit space-y-6">
            <h3 className="text-lg font-semibold">Order Summary</h3>

            <div className="flex justify-between text-sm">
              <p>Items ({cart.length})</p>
              <p className="font-medium">${subtotal.toFixed(2)}</p>
            </div>

            {/* Delivery Options */}
            <div className="space-y-2">
              <p className="text-sm font-medium">Delivery</p>
              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="delivery" defaultChecked />
                Free - Standard delivery
              </label>
              <p className="ml-6 text-xs text-gray-500">5-6 business days</p>

              <label className="flex items-center gap-2 text-sm">
                <input type="radio" name="delivery" />
                $7.99 - Express delivery
              </label>
              <p className="ml-6 text-xs text-gray-500">2-3 business days</p>
            </div>

            {/* Taxes */}
            <div className="flex justify-between text-sm">
              <p>Estimated Tax</p>
              <p>--</p>
            </div>

            {/* Total */}
            <div className="flex justify-between text-base font-semibold">
              <p>Total</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>

            {/* Buttons */}
            <button 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              onClick={() => navigate("/checkout")} // ✅ added navigation
            >
              Checkout
            </button>
            <button className="w-full border border-gray-300 py-2 rounded-md flex justify-center items-center gap-2">
              <img
                src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
                alt="PayPal"
                className="h-5"
              />
              PayPal
            </button>

            {/* Promo Code */}
            <div>
              <input
                type="text"
                placeholder="Promo code?"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
