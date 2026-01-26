"use client";

import { Header } from "@/components/layout/header";
import { CompactFooter } from "@/components/layout/compact-footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen flex flex-col font-sans">
      <Header />

      <div className="flex-grow flex flex-col items-center justify-center p-4 py-20 text-center">
        <div className="bg-gray-50 p-8 rounded-full mb-6 relative">
          <div className="absolute inset-0 bg-[#1a8fa3] opacity-10 rounded-full animate-pulse"></div>
          <FileQuestion className="w-16 h-16 text-[#1a8fa3] relative z-10" />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-[#1a8fa3] mb-4">
          Página no encontrada
        </h1>

        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto leading-relaxed">
          Lo sentimos, la página que estás buscando no existe, ha sido movida o ya no está disponible.
        </p>

        <div className="space-y-4">
          <Link href="/">
            <Button className="bg-[#1EA091] hover:bg-[#168579] text-white font-bold text-lg px-8 py-6 rounded-sm shadow-sm transition-all duration-300 transform hover:-translate-y-1">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>

      <CompactFooter />
    </main>
  );
}
