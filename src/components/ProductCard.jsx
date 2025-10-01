import React from 'react'
import { RiDeleteBin5Line } from 'react-icons/ri';
import { TfiShoppingCartFull } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/CartSlice';
import { motion } from "framer-motion";

export default function ProductCard({ id, name, image, price, rating }) {
    const cart = useSelector((state) => state.cart);
    const productInCart = cart.find((item) => item.id === id);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const product = { id, name, image, price, rating, quantity: 1 };
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id));
    };

    // Create stars based on rating
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? "text-yellow-500" : "text-gray-300"}>
            ★
        </span>
    ));

    return (
        <div
            key={id}
            className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
            {/* Image zoom effect */}
            <div className="overflow-hidden rounded-t-lg">
                <img
                    src={image || "https://via.placeholder.com/300x200?text=No+Image"}
                    alt={name}
                    className="w-full h-48 object-cover rounded-t-lg transition-transform duration-500 hover:scale-110"
                />
            </div>

            <h3 className="text-xl font-semibold mt-2">{name}</h3>

            {/* Rating Stars */}
            <div className="flex items-center mt-1">
                {stars}
                <span className="ml-2 text-sm text-gray-500">({rating})</span>
            </div>

            {/* Price + Cart Buttons */}
            <div className="flex justify-between gap-2 mt-2">
                <p className="text-lg text-emerald-600 font-bold">${price}</p>

                {productInCart ? (
                    <motion.button
                        whileTap={{ scale: 0.8, rotate: -15 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={handleRemoveFromCart}
                        className="bg-red-500 text-white grid place-items-center flex-shrink-0 w-8 h-8 cursor-pointer rounded-lg hover:bg-red-600 transition-all"
                    >
                        <RiDeleteBin5Line />
                    </motion.button>
                ) : (
                    <motion.button
                        whileTap={{ scale: 0.8, rotate: 15 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={handleAddToCart}
                        className="bg-blue-600 text-white grid place-items-center flex-shrink-0 w-8 h-8 cursor-pointer rounded-lg hover:bg-blue-700 transition-all"
                    >
                        <TfiShoppingCartFull />
                    </motion.button>
                )}
            </div>
        </div>
    )
}
