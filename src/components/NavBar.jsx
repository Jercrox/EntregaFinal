import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="bg-gray-100">
            <div className="container mx-auto flex justify-between items-center">
                <div className="p-6">
                    <Link to="/">
                        <img src="../src/assets/logo.png" className="w-40 h-auto" alt="Logo" />
                    </Link>
                </div>
                <div className="ml-20 flex items-center justify-center flex-grow">
                    <ul className="space-x-4 flex ml-auto text-gray-700">
                        <li>
                        <Link to="/"><button className="font-semibold hover:text-customBlue">Productos</button></Link>
                        </li>
                        <li className="border-r pr-2"></li>
                        <li>
                        <Link to="/cart"> 
                        <CartWidget />
                        </Link>
                        </li>
                        <li className="border-r pr-2"></li>
                        <Link to="/contacto" className="hover:text-customBlue">Contacto</Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;