import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="relative min-h-screen bg-gray-100 py-8 px-4">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto"> {/* Keep products centered */}
          {/* Cart Items List */}
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          {/* Cart Summary and Checkout - Positioned at Top Right */}
          <div className="absolute top-4 right-4 max-w-sm bg-white p-4 rounded-lg shadow-md">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Your Cart Summary</h2>
              <p className="text-sm text-gray-600">Total Items: {cart.length}</p>
            </div>

            <div className="mb-4">
              <p className="text-xl font-bold text-green-600">Total Amount: ${totalAmount.toFixed(2)}</p>
            </div>

            <div className="mt-4">
              <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-300">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 transition-transform">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
