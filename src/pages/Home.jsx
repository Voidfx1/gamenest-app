import React, { useEffect } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { ASSETS } from "../assets"
import AOS from "aos"
import "aos/dist/aos.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <main className="space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero Section with Swiper */}
      <section className="relative h-[75vh] w-full rounded-2xl overflow-hidden shadow-xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative h-full w-full">
              <img
                src={ASSETS["Fortnite"]}
                alt="Fortnite"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative h-full w-full">
              <img
                src={ASSETS["Call_Of_Duty"]}
                alt="Call of Duty"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative h-full w-full ">
              <img
                src={ASSETS["Assasin_Creed"]}
                alt="Assassin’s Creed"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Floating Welcome Text + CTAs */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-center z-20">
          <h1
            className="text-white text-5xl font-bold drop-shadow-lg"
            data-aos="fade-up"
          >
            Welcome to GameNest
          </h1>
          <p
            className="mt-3 text-lg text-gray-200 max-w-xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover top-rated, must-played, and latest games, accessories, and more!
          </p>

          {/* CTA Buttons */}
          <div
            className="mt-6 flex justify-center gap-4"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <a
              href="/shop"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 hover:scale-105 transform transition-all duration-300"
            >
              🛒 Shop Now
            </a>
            <a
              href="/games"
              className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 hover:scale-105 transform transition-all duration-300"
            >
              🎮 Browse Games
            </a>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Games</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Fortnite", img: ASSETS["Fortnite"] },
            { name: "Call of Duty", img: ASSETS["Call_Of_Duty"] },
            { name: "Assassin’s Creed", img: ASSETS["Assasin_Creed"] },
          ].map((game, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4"
              data-aos="zoom-in"
              data-aos-delay={i * 200}
            >
              <img
                src={game.img}
                alt={game.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{game.name}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Explore thrilling gameplay, stunning visuals, and endless action.
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {["Action", "Adventure", "Sports", "RPG"].map((cat, i) => (
            <div
              key={i}
              className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition text-center"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <h3 className="text-xl font-semibold text-blue-600">{cat}</h3>
              <p className="text-gray-600 text-sm mt-2">
                Explore {cat} games loved by millions.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section
        className="grid md:grid-cols-2 gap-10 items-center"
        data-aos="fade-right"
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1549924231-f129b911e442"
            alt="About GameNest"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            GameNest is built by gamers, for gamers. Our mission is to provide 
            the ultimate destination where you can find the best games, accessories, 
            and community events. We believe in innovation, trust, and customer-first service.
          </p>
          <a
            href="/about"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            Learn More →
          </a>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="bg-blue-600 text-white py-12 px-6 rounded-2xl text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl font-bold">Stay Updated!</h2>
        <p className="mt-3 max-w-xl mx-auto">
          Subscribe to our newsletter and never miss updates on new games,
          accessories, and special offers.
        </p>
        <form className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg text-gray-900 w-full sm:w-96"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </section>
    </main>
  )
}
