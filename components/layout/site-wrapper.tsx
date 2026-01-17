"use client";

import React from "react";
import { useMobileMenu } from "@/components/providers/mobile-menu-context";

export default function SiteWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();

  return (
    <div className="min-h-screen">
      {/* Overlay to close menu when clicking outside */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[55] bg-black/30 transition-opacity duration-300"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
