import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ASSETS } from "../assets";
import ProductCard from "../components/ProductCard"; // ✅ import ProductCard

export default function Shop() {
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Local games (your own images)
  const localGames = [
    {
      id: "local-1",
      title: "Fortnite",
      genre: "Battle Royale",
      thumbnail: ASSETS["Fortnite"],
    },
    {
      id: "local-2",
      title: "Call of Duty",
      genre: "Shooter",
      thumbnail: ASSETS["Call_Of_Duty"],
    },
    {
      id: "local-3",
      title: "Assassin’s Creed",
      genre: "Action RPG",
      thumbnail: ASSETS["Assasin_Creed"],
    },
    {
      id: "local-4",
      title: "Minecraft",
      genre: "Sandbox",
      thumbnail: ASSETS["Minecraft"],
    },
    {
      id: "local-5",
      title: "The Witcher 3",
      genre: "Action RPG",
      thumbnail: ASSETS["Witcher_3"],
    },
    {
      id: "local-6",
      title: "Cyberpunk 2077",
      genre: "Action RPG",
      thumbnail: ASSETS["Cyberpunk_2077"],
    },
    {
      id: "local-7",
      title: "God of War",
      genre: "Action Adventure",
      thumbnail: ASSETS["God_Of_War"],
    },
    {
      id: "local-8",
      title: "Red Dead Redemption 2",
      genre: "Action Adventure",
      thumbnail: ASSETS["Red_Dead_Redemption_2"],
    },
  ];

  // ✅ Fetch games function
  const fetchGames = async () => {
    setLoading(true);
    toast.loading("Fetching Games, please wait...", { id: "123" });
    try {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "YOUR_API_KEY", // Replace with your real API key
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );

      const data = await response.json();
      setAllGames(data); // ✅ Store the API games in state
      toast.success("Games fetched successfully!", { id: "123" });
    } catch (error) {
      toast.error("Error fetching games", { id: "123" });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Automatically load games when page opens
  useEffect(() => {
    fetchGames();
  }, []);

  // ✅ Make sure we always have at least 12 games
  const combinedGames = [...localGames, ...(Array.isArray(allGames) ? allGames : [])];

  let finalGames = combinedGames;
  if (combinedGames.length < 12) {
    const repeatCount = Math.ceil(12 / combinedGames.length); // how many times to repeat
    finalGames = Array(repeatCount).fill(combinedGames).flat().slice(0, 12);
  }

  return (
    <div className="p-6">
      {/* Swiper for hero images */}
      <section className="relative h-[70vh] w-full rounded-2xl overflow-hidden shadow-xl">
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
      </section>

      <h2 className="text-2xl font-bold mb-4">Game Shop</h2>

      {loading && <p>Loading games...</p>}

      {/* ✅ Render at least 12 games */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {finalGames.map((game, index) => (
          <ProductCard
            key={game.id + "-" + index}
            id={game.id + "-" + index}
            name={game.title}
            image={game.thumbnail}
            price={Math.floor(Math.random() * 60) + 10} // random price
            rating={Math.floor(Math.random() * 5) + 1} // random rating
          />
        ))}
      </div>
    </div>
  );
}
