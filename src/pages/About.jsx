import React, { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { ASSETS } from "../assets"

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <main className="max-w-7xl mx-auto px-6 py-16 space-y-20">
      {/* Hero Section */}
      <section className="text-center" data-aos="fade-up">
        <h1 className="text-5xl font-bold text-gray-900">
          About <span className="text-blue-600">GameNest</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          GameNest is your ultimate destination for the latest and greatest games, 
          accessories, and more. We are passionate about connecting gamers with 
          the experiences they love.
        </p>
      </section>

      {/* Our Story */}
      <section className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-right">
        <div>
          <img
            src="https://images.unsplash.com/photo-1549924231-f129b911e442"
            alt="Our story"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            Founded in 2020, GameNest started as a small passion project between friends 
            who loved gaming. What began as a local online shop has grown into a trusted 
            platform for gamers across the globe. Our journey reflects our dedication 
            to quality, innovation, and above all, the gaming community.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-left">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At GameNest, our mission is to create a one-stop platform where gamers 
            can discover, buy, and enjoy their favorite titles with ease. We aim 
            to provide quality, affordability, and a community-driven experience 
            that keeps gaming exciting.
          </p>
        </div>
        <div>
          <img
            src={ASSETS["gaming_setup"]}
            alt="Gaming setup"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-right">
        <div>
          <img
            src="https://images.unsplash.com/photo-1610564555990-07a478a8f8b0"
            alt="Vision"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a future where GameNest is the leading hub for gamers worldwide, 
            recognized for innovation, trust, and community. Our vision is to bridge the 
            gap between gaming passion and accessibility for everyone.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section data-aos="zoom-in">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            { title: "Quality", desc: "Delivering only the best gaming products and experiences." },
            { title: "Community", desc: "Building a strong, supportive, and fun gaming family." },
            { title: "Innovation", desc: "Continuously evolving to match the fast-paced gaming industry." },
            { title: "Trust", desc: "Ensuring secure, transparent, and reliable services." },
            { title: "Passion", desc: "Fueled by love for gaming and dedication to gamers." },
            { title: "Customer First", desc: "Your satisfaction drives everything we do." },
          ].map((value, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            {
              name: "Daniel Smith",
              role: "CEO & Founder",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Sophia Johnson",
              role: "Head of Marketing",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Michael Brown",
              role: "Lead Developer",
              img: "https://randomuser.me/api/portraits/men/50.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Why Choose GameNest?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Wide Selection</h3>
            <p className="text-gray-700">
              From trending titles to timeless classics, find every game in one place.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Trusted Service</h3>
            <p className="text-gray-700">
              Thousands of satisfied customers rely on us for authentic gaming products.
            </p>
          </div>
          <div className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Fast Delivery</h3>
            <p className="text-gray-700">
              Get your favorite games quickly with our reliable and fast delivery.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
