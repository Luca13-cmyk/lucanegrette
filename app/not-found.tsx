"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/Lamp";

export default function NotFound() {
  return (
    <div className="w-full flex justify-center items-center">
      <LampContainer className="w-[90vw] rounded-full">
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          OPS! Página não encontrada.
        </motion.h1>
      </LampContainer>
    </div>
  );
}
