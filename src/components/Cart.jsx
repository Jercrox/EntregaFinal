import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clearCart, getTotal, removeItem } = useContext(CartContext);

    return ( 
        <div className="cart-container p-6 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-lg shadow-lg">
            {cart.map((product) => (
                <div key={product.item.id} className="cart-item-container py-3 border-b border-cyan-400">
                    <CartItem product={product} />
                    <button
                        onClick={() => removeItem(product.item.id)}
                        className="remove-item-button bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-1 px-3 rounded-full inline-block ml-2"
                    >
                        ❌
                    </button>
                </div>
            ))}
            <div className="flex items-center justify-between bg-cyan-400 p-3 rounded mt-4">
                <h3 className="font-bold text-sm text-white">Total: ${getTotal()}</h3>
                <button
                    onClick={() => clearCart()}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-1 px-2 rounded-full inline-block"
                >
                    Limpiar
                </button>
            </div>
            <div className="mt-4">
                <Link
                    to="/checkout"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-1 px-2 rounded-full inline-block mr-2"
                >
                    Generar Orden
                </Link>
            </div>
        </div>
    );
};

export default Cart;

