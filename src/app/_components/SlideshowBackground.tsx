"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";

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

export default function SlideshowBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute  max-h-screen w-full inset-0 -z-10 bg-black overflow-hidden ">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]?.title}
          src={images[index]?.url}
          alt=""
          initial={{ opacity: 1, filter: "blur(0px)", scale: 1, x: -20, y: 0 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1.08, x: 20, y: 10 }}
          exit={{ opacity: 0, filter: "blur(1px)", scale: 1.08, x: 20, y: 10 }}
          transition={{ duration: 10, ease: "easeInOut" }}
          className="w-full h-full object-cover object-center absolute inset-0"
        />
      </AnimatePresence>
      <div className="absolute inset-0 pointer-events-none"
           style={{
             background: "radial-gradient(circle at 0% 0%, rgba(0,0,0,0.7) 20%, transparent 60%), radial-gradient(circle at 100% 0%, rgba(0,0,0,0.7) 20%, transparent 60%), radial-gradient(circle at 0% 100%, rgba(0,0,0,0.7) 20%, transparent 60%), radial-gradient(circle at 100% 100%, rgba(0,0,0,0.7) 20%, transparent 60%)"
           }} />

    </div>
  );
}
