import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">GameNest</h2>
          <p className="mt-2 text-sm">
            Your one-stop destination for games, accessories, and fun!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-400">Home</a></li>
            <li><a href="/shop" className="hover:text-blue-400">Shop</a></li>
            <li><a href="/about" className="hover:text-blue-400">About</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:text-blue-400">FAQ</a></li>
            <li><a href="/shipping" className="hover:text-blue-400">Shipping</a></li>
            <li><a href="/returns" className="hover:text-blue-400">Returns</a></li>
            <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
        <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaFacebook className="w-6 h-6" /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter className="w-6 h-6" /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram className="w-6 h-6" /></a>
            <a href="#" className="hover:text-red-500"><FaYoutube className="w-6 h-6" /></a>
        </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        © {new Date().getFullYear()} GameNest. All rights reserved.
      </div>
    </footer>
  );
}
