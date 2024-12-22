import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg mb-6">
      <div className="border-b border-green-500 py-4">
        <div className="flex items-center space-x-6">
          {/* Product Image */}
          <div className="w-24 h-24 flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-gray-800">{item.title}</h1>
            <p className="text-sm text-gray-600 mt-2 line-clamp-2">{item.description}</p>
          </div>

          {/* Price and Actions */}
          <div className="text-right">
            <p className="text-lg font-bold text-green-600">${item.price}</p>
            <button
              onClick={removeFromCart}
              className="mt-4 inline-flex items-center space-x-2 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition"
              aria-label="Remove item from cart"
            >
              <FcDeleteDatabase className="text-lg" />
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
