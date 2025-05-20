'use client'
import { useState } from "react";
import { useEffect } from "react";
import SlideshowBackground from "../_components/SlideshowBackground";
import Logo from "../_components/logo";
import { CiLocationOn } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);


  const images = [
    {
      title: "Mahagony Suite",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      tags: ["Braiding Station", "Micro Blading"],
      location: "495, Flatbush Ave",
      url: "/WhatsApp Image 2025-05-19 at 14.37.05.jpeg",
    },
    {
      title: "Teak Suite",
      subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      tags: ["Nail Station", "Hair Station", "Shared Storage"],
      location: "495, Flatbush Ave",
      url: "/WhatsApp Image 2025-05-19 at 14.37.05 (1).jpeg",
    },
    {
      title: "Ebony Cove",
      subtitle: "Quisquam consectetur adipisicing elit. Quisquam, quos.",
      tags: ["Nail Station", "Hair Station", "Shared Storage"],
      location: "495, Flatbush Ave",
      url: "/WhatsApp Image 2025-05-19 at 14.37.05 (2).jpeg",
    },
    {
      title: "Birch Box",
    subtitle: "Quisquam consectetur adipisicing elit. Quisquam, quos.",
      tags: ["Nail Station", "Braiding Station"],
      location: "495, Flatbush Ave",
      url: "/WhatsApp Image 2025-05-19 at 14.37.05 (3).jpeg",
    },
    {
      title: "Cherry Chalace",
      subtitle: "Amet consectetur adipisicing elit. Quisquam, quos.",
      tags: ["Nail Station", "Hair Station", "Shared Storage"],
      location: "495, Flatbush Ave",
      url: "/WhatsApp Image 2025-05-19 at 14.37.05 (4).jpeg",
    },
  ];

  return (
    <div className="hero relative flex flex-col items-center justify-center w-full h-screen max-w-full overflow-hidden">
      <SlideshowBackground />
      <div className="w-full flex gap-12 flex-col justify-center items-center">
        <Logo
          className="text-4xl"
          size={typeof window !== 'undefined' && window.innerWidth < 640 ? 120 : 400}
          textColor="#C47DD9"
        />
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]?.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className=" flex h-full z-20 md:fixed justify-end md:bottom-24 md:right-24 md:w-1/5 w-fit flex-col items-center"
        >
          <div className="flex flex-col items-center justify-center">

          <div className="flex flex-col md:flex-row items-center  w-full justify-around gap-2 border-b text-white border-white pb-2">
            <h1 className="text-white text-2xl w-full font-bold border-r  ">{images[index]?.title}</h1>
   
            <h2 className="text-white text-md w-full font-bold flex flex-row items-center justify-start gap-2">
              <CiLocationOn />
              {images[index]?.location}
            </h2>
          </div>
          <div className="flex flex-row items-center justify-center p-2 gap-2">
            {images[index]?.tags.map((tag, index) => (
              <p key={index} className="text-white bg-white/30 px-4 flex-row md:no-wrap text-wrap py-1 rounded-full  text-sm">{tag}</p>
            ))}
          </div>
          <p className="text-white text-md">{images[index]?.subtitle}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
  );
}
