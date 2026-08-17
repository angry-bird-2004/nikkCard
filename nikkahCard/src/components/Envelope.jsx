import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function Envelope({ onOpen, isOpening }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 1.1, opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      onClick={onOpen}
      className="cursor-pointer group relative w-full max-w-sm sm:max-w-md aspect-[4/3] bg-gradient-to-br from-[#2D2218] via-[#1C130E] to-[#120B07] rounded-3xl border-2 border-amber-500/50 shadow-[0_30px_100px_rgba(217,119,6,0.25)] p-6 sm:p-8 flex flex-col items-center justify-between overflow-hidden transform-style-3d hover:border-amber-400 transition-all duration-500"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Top Corner Decorative Flaps */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-transparent rounded-br-full pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-500/20 to-transparent rounded-bl-full pointer-events-none"></div>

      {/* Top Header / Bismillah */}
      <div className="relative z-10 text-center space-y-1">
        <p className="text-amber-400/80 font-arabic text-lg sm:text-xl drop-shadow">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-amber-300/60 font-sans font-semibold">Special Wedding Invitation</span>
      </div>

      {/* Center Wedding Cartoon / Vector Avatar & Wax Seal */}
      <motion.div 
        animate={isOpening ? { scale: [1, 1.4, 0], rotate: [0, 180, 360], opacity: [1, 1, 0] } : { y: [0, -6, 0] }}
        transition={isOpening ? { duration: 0.7 } : { repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="relative z-10 my-auto flex flex-col items-center group-hover:scale-105 transition-transform"
      >
        {/* Cute Couple Cartoon / Illustration Avatar Circle */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 border-2 border-amber-300/70 shadow-[0_10px_30px_rgba(217,119,6,0.6)] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-1 rounded-full border border-amber-400/40 pointer-events-none z-20"></div>
          
          {/* Custom Elegant Wedding Cartoon Couple SVG */}
          <svg viewBox="0 0 100 100" className="w-16 h-16 text-amber-100 opacity-95 z-10" fill="currentColor">
            {/* Groom (Left) */}
            <path d="M30 42 C26 42 23 45 23 49 C23 53 26 56 30 56 C34 56 37 53 37 49 C37 45 34 42 30 42 Z" /> {/* Head */}
            <path d="M18 78 L22 58 Q30 52 38 58 L42 78 Z" /> {/* Suit Body */}
            <polygon points="27,58 33,58 30,68" fill="#FDF8F2" /> {/* Shirt Collar & Tie */}
            
            {/* Bride (Right) */}
            <path d="M70 40 C66 40 63 43 63 47 C63 51 66 54 70 54 C74 54 77 51 77 47 C77 43 74 40 70 40 Z" /> {/* Head */}
            <path d="M57 76 C57 60 83 60 83 76 Z" /> {/* Dress / Dupatta */}
            <path d="M60 43 C60 34 80 34 80 43 Z" fill="#FDF8F2" opacity="0.8" /> {/* Veil */}

            {/* Floating Heart between them */}
            <path d="M50 42 C48 38 43 38 43 43 C43 47 50 52 50 52 C50 52 57 47 57 43 C57 38 52 38 50 42 Z" fill="#F59E0B" />
          </svg>
        </div>
        <span className="mt-3 text-xs sm:text-sm font-semibold tracking-widest text-amber-200 uppercase font-serif drop-shadow">Tap to Open</span>
      </motion.div>

      {/* Bottom Couple Monogram Hint */}
      <div className="relative z-10 text-center space-y-1 pb-1">
        <div className="flex items-center justify-center gap-2 text-amber-400">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span className="text-xs sm:text-sm font-serif italic text-amber-100/90 tracking-wide">Ubaidullah & Wajiha</span>
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
        </div>
        <p className="text-[10px] text-amber-300/50 uppercase tracking-widest font-sans">August 23, 2026</p>
      </div>

      {/* Opening Flash Overlay Animation */}
      {isOpening && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 bg-amber-100 z-30 pointer-events-none"
        />
      )}
    </motion.div>
  );
}