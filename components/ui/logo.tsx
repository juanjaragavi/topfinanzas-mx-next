"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      className="relative h-14 w-auto flex items-center justify-center p-1"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3,
      }}
    >
      <Image
        src="https://media.topfinanzas.com/images/TopFinanzas-favicon-color.png"
        alt="Top Finanzas Logo"
        width={140}
        height={56}
        className="object-contain h-12 w-auto"
      />
    </motion.div>
  );
}
