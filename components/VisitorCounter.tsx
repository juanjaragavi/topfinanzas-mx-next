"use client";

import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(283);

  useEffect(() => {
    // Small increment logic if needed
    const timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="flex items-center space-x-2">
      <div className="border border-[#2E74B5] rounded px-3 py-1 bg-white shadow-sm ring-1 ring-[#2E74B5]/10">
        <span className="text-xl font-bold text-[#2E74B5] tracking-widest font-mono">
          {count}
        </span>
      </div>
      <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded border border-gray-300 font-medium">
        solicitudes exitosas hoy
      </span>
    </div>
  );
}
