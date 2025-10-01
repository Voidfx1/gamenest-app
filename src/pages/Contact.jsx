import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5c0uc4i",     // ✅ Your EmailJS Service ID
        "template_shma3hc",   // ✅ Your EmailJS Template ID
        formRef.current,
        "1j12rJOHD5XEH3X7D"   // ✅ Your EmailJS Public Key
      )
      .then(
        () => {
          toast.success("✅ Your message has been sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("❌ Failed to send message, please try again.");
        }
      );
  };

  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-gradient-to-r from-blue-700 to-purple-600 flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
          <p className="mt-3 text-lg text-gray-200">
            We’re here to answer your questions and help you anytime
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <aside className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed">
            Have questions about our services or need assistance? Reach out and we’ll respond as soon as possible.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-blue-600" /> +234 801 234 5678
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-blue-600" /> support@gamenest.com
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-blue-600" /> 123 GameNest Street, Abuja, Nigeria
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 text-xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-600 text-xl">
              <FaInstagram />
            </a>
          </div>
        </aside>

        {/* Contact Form */}
        <aside className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </aside>
      </section>
    </main>
  );
}
