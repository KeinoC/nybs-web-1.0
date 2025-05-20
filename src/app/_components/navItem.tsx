'use client'
import type { NavItemProps } from "./Navbar";
import { motion } from "framer-motion";

export default function NavItem({ item }: { item: NavItemProps }) {
  return (
    <button onClick={item.onClick} className="flex group flex-row items-center !text-zinc-300 border-zinc-300  hover:bg-[#C47DD9] cursor-pointer justify-center w-full h-fit overflow-hidden rounded-lg">
      <motion.div
        whileHover={{ scale: 1.12, backgroundColor: "", color: "" }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex items-center justify-center p-2 border  text-4xl rounded-lg bg-transparent"
      >
        {item.icon}
      </motion.div>
    </button>
  );
}
