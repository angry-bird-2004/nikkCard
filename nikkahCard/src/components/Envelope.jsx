import React from 'react';
import { motion } from 'framer-motion';
import { MailOpen, Sparkles } from 'lucide-react';

export default function Envelope({ onOpen, isOpening }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, rotateX: 45, z: -300 }}
      animate={{ 
        opacity: isOpening ? 0 : 1, 
        scale: isOpening ? 1.35 : 1, 
        rotateX: isOpening ? 15 : 0, 
        z: isOpening ? 300 : 0,
        filter: isOpening ? "blur(12px)" : "blur(0px)"
      }}
      exit={{ opacity: 0, scale: 1.6, filter: "blur(25px)" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center z-30 cursor-pointer text-center p-6 transform-style-3d group"
      onClick={onOpen}
    >
      {/* Volumetric Deep Gold Aura Glow */}
      <div className="absolute w-80 sm:w-[440px] h-64 sm:h-72 bg-gradient-to-r from-amber-600/30 via-amber-400/50 to-amber-700/30 rounded-full blur-[80px] group-hover:blur-[100px] group-hover:bg-amber-500/70 transition-all duration-700 pointer-events-none animate-pulse"></div>

      {/* Main 3D Envelope Container */}
      <motion.div 
        whileHover={!isOpening ? { 
          scale: 1.07, 
          rotateY: 10, 
          rotateX: -10, 
          z: 70,
          boxShadow: "0 70px 140px rgba(0,0,0,0.95), 0 0 50px rgba(245,158,11,0.5)" 
        } : {}}
        whileTap={!isOpening ? { scale: 0.95 } : {}}
        transition={{ type: "spring", stiffness: 280, damping: 18 }}
        className="relative w-80 sm:w-[420px] h-60 sm:h-68 bg-gradient-to-br from-[#26170F] via-[#160D08] to-[#0A0503] rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.9)] border-2 border-amber-500/70 flex flex-col items-center justify-center p-6 overflow-hidden transform-style-3d"
        style={{ transform: 'translateZ(40px)' }}
      >
        {/* Inner Embossed Borders */}
        <div className="absolute inset-3 rounded-2xl border border-amber-500/35 pointer-events-none shadow-[inset_0_2px_10px_rgba(245,158,11,0.2)]"></div>
        <div className="absolute inset-4 rounded-xl border border-amber-500/15 pointer-events-none"></div>

        {/* Side Pocket Folds */}
        <div className="absolute bottom-0 left-0 w-1/2 h-40 bg-gradient-to-tr from-[#120804] via-[#1E110A] to-[#2C1A11] border-t border-r border-amber-500/30 clip-path-left-pocket pointer-events-none z-10 shadow-2xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-40 bg-gradient-to-tl from-[#120804] via-[#1E110A] to-[#2C1A11] border-t border-l border-amber-500/30 clip-path-right-pocket pointer-events-none z-10 shadow-2xl"></div>

        {/* Top Flap (Flips back 180deg on click) */}
        <motion.div 
          animate={isOpening ? { rotateX: -180, z: 60 } : { rotateX: 0, z: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#4A301F] via-[#352115] to-[#1A0F0A] clip-path-flap rounded-t-3xl border-t-2 border-amber-500/90 shadow-[0_25px_50px_rgba(0,0,0,0.85)] transform origin-top z-20"
          style={{ transformStyle: 'preserve-3d' }}
        ></motion.div>
        
        {/* Wax Seal */}
        <motion.div 
          animate={isOpening ? { scale: 0, opacity: 0, rotate: 45 } : { scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.3, rotate: 20, z: 90 }}
          className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-700 via-amber-400 to-amber-100 flex items-center justify-center border-2 border-amber-200 z-30 mb-2 mt-8 shadow-xl"
          style={{ transform: 'translateZ(60px)' }}
        >
          <MailOpen className="w-9 h-9 text-[#140F0C] drop-shadow-lg" />
        </motion.div>

        {/* Envelope Label Text */}
        <motion.div 
          animate={isOpening ? { opacity: 0, y: -25, filter: 'blur(8px)' } : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.4 }}
          className="z-30 space-y-1 mt-2 pointer-events-none" 
          style={{ transform: 'translateZ(40px)' }}
        >
          <div className="flex items-center justify-center gap-1.5 text-amber-400">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
            <span className="text-[11px] uppercase tracking-[0.35em] font-bold drop-shadow">Royal Invitation</span>
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-amber-300" />
          </div>
          <h2 className="text-2xl font-bold text-amber-100 font-serif tracking-wide drop-shadow">Fatima & Abdullah</h2>
          <p className="text-[11px] text-amber-300/90 italic pt-0.5 font-sans tracking-wider">
            Click wax seal to open invitation
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}