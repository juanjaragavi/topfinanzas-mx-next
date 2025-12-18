"use client";

export default function ProgressIndicator({ step }: { step: number }) {
  return (
    <div className="flex justify-center space-x-2 mb-4">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all ${
          step >= 1
            ? "bg-[#2E74B5] shadow-[0_4px_10px_rgba(46,116,181,0.4)]"
            : "bg-gray-300 opacity-60"
        }`}
      >
        1
      </div>
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold transition-all ${
          step >= 2
            ? "bg-[#2E74B5] shadow-[0_4px_10px_rgba(46,116,181,0.4)]"
            : "bg-gray-300 opacity-60"
        }`}
      >
        2
      </div>
    </div>
  );
}
