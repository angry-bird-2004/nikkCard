import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Printer } from 'lucide-react';

export default function TopControls({ isPlaying, toggleAudio, handlePrint }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.9 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 right-6 z-50 flex gap-3 print:hidden"
    >
      <motion.button 
        whileHover={{ scale: 1.12, rotate: 8, boxShadow: "0 0 25px rgba(245, 158, 11, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleAudio}
        className="bg-gradient-to-br from-amber-900/90 via-[#2C1A11] to-amber-950/90 backdrop-blur-xl hover:from-amber-800 hover:to-amber-900 text-amber-200 p-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 flex items-center justify-center border border-amber-500/50"
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
      >
        {isPlaying ? <Volume2 className="w-5 h-5 animate-pulse text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" /> : <VolumeX className="w-5 h-5 text-amber-300/70" />}
      </motion.button>
      
      <motion.button 
        whileHover={{ scale: 1.12, rotate: -8, boxShadow: "0 0 25px rgba(245, 158, 11, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePrint}
        className="bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white p-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 flex items-center justify-center border border-amber-300/50"
        title="Print or Save as PDF"
      >
        <Printer className="w-5 h-5 drop-shadow" />
      </motion.button>
    </motion.div>
  );
}