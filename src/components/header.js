import React from 'react';
import { Link } from "react-router-dom";
import react from '../assets/images/react-original.svg';
import tailwindcss from '../assets/images/tailwindcss-original.svg';

const Header = () => {
    return(
        <nav className="bg-white border border-b-2">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto px-8 py-2">
            <a href="/" className="flex items-center gap-x-2">
              <img src={react} className="w-8" alt="Logo" />
              <img src={tailwindcss} className="w-8" alt="Logo" />
            </a>
            <div className="">
              <ul className="font-medium flex flex-row py-2">
                <li>
                    <Link to="/" className="block py-2 px-3 text-gray-900">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="block py-2 px-3 text-gray-900">About</Link>
                </li>
                <li>
                    <Link to="/countries" className="block py-2 px-3 text-gray-900">Countries</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Header;