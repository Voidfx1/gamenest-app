import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ASSETS } from '../assets';
import { useSelector } from 'react-redux';
import { PiShoppingCart } from 'react-icons/pi';
import { RiMenu3Fill } from 'react-icons/ri';

export default function Header() {
    const location = useLocation();
    const [navOpen, setNavOpen] = useState(false);
    const cart = useSelector((state) => state.cart);
    //   const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // This effect can be used to handle any side effects when the location changes
        // For example, you might want to scroll to the top of the page on route change
        window.scrollTo(0, 0);
        // clean up function
        return () => {
            setNavOpen(false);
        }
    }, [location.pathname]);

  const navLinks = [
    {id: "1234", path: "/", name: "Home" },
    {id: "1235", path: "/shop", name: "Shop" },
    {id: "1236", path: "/about", name: "About" },
    {id: "1237", path: "/contact", name: "Contact" },
  ];

  return (
    <header className="bg-orange-400 md:p-2 md:rounded-full fixed top-0 md:top-4 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:container z-50 shadow-lg">
      <div className="container mx-auto relative flex justify-between md:items-center gap-4 p-4 md:p-0">
            <Link to="/" className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full grid place-items-center bg-primary flex-shrink-0">
                     <img src={ASSETS["Logo"]} alt=""  className="w-5 h-auto md:w-24 lg:w-32"/>
                </div>
                <h1 className="text-lg md:text-xl font-bold text-green-400">Game<span className="text-blue-300">Nest</span></h1>
                
            </Link>
             <nav className={`flex-1 bg-backdrop md:bg-white w-full absolute md:static top-full ${navOpen ? "left-0" : "left-full"} transition-all duration-300 flex flex-col md:flex-row justify-center md:items-center md:gap-2`}>
                    {
                        navLinks.map((link) => (
                            <Link className={`${link.path === location.pathname ? 'text-blue-400' : 'text-gray-800 hover:text-blue-500'} font-semibold py-1.5 px-4 md:rounded-md transition-colors duration-300 ease-in-out`} key={link.id} to={link.path}>{link.name}</Link>
                        ))
                    }
                </nav>
                <div className='flex gap-2 w-max'>
                    <Link to="/cart" className='relative bg-red-500 rounded-full h-10 w-10 grid place-items-center text-2xl md:text-3xl text-white'>
                        <PiShoppingCart />
                        <span className="h-5 w-5 rounded-full bg-black text-xs text-white grid place-items-center absolute -top-1 -left-1 border border-white">{cart.length ?? 0}</span>
                    </Link>
                     <div onClick={() => setNavOpen(!navOpen)} className="relative md:hidden h-10 w-10 grid place-items-center text-2xl text-primary bg-backdrop hover:bg-primary hover:text-white rounded-full cursor-pointer">
                        <RiMenu3Fill />
                    </div>
                    
                </div>
      </div>
    </header>
  )
}
