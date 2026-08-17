import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

export default function InvitationCard({ timeLeft }) {
  return (
    <motion.div
      key="card"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-2 sm:p-4"
    >
      {/* Decorative Traditional Arch Border Frame (Pinterest Style) */}
      <div className="absolute inset-0 border-2 border-amber-500/40 rounded-3xl pointer-events-none m-2">
        <div className="absolute inset-1 border border-amber-400/20 rounded-2xl pointer-events-none"></div>
        {/* Corner Royal Motifs */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-amber-400 rounded-tl-xl m-1"></div>
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-400 rounded-tr-xl m-1"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-400 rounded-bl-xl m-1"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-amber-400 rounded-br-xl m-1"></div>
      </div>

      {/* Bismillah Calligraphy */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4 pt-2"
      >
        <p className="text-2xl sm:text-4xl text-amber-400 font-arabic tracking-wider drop-shadow-[0_2px_10px_rgba(245,158,11,0.4)]">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
      </motion.div>

      {/* Traditional Pakistani Wedding Arch Graphic Illustration */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="my-3 flex justify-center"
      >
        <div className="relative p-3 bg-gradient-to-b from-amber-500/15 via-black/40 to-amber-950/30 border border-amber-500/40 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.2)] backdrop-blur-md">
          <svg viewBox="0 0 160 80" className="w-32 sm:w-40 h-16 sm:h-20 text-amber-300">
            {/* Traditional Grand Entrance Arch Silhouette */}
            <path d="M20 75 L20 40 Q20 10 80 5 Q140 10 140 40 L140 75 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
            <path d="M30 75 L30 42 Q30 18 80 14 Q130 18 130 42 L130 75 Z" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
            
            {/* Hanging Floral / Jhumka / Chandelier Motif */}
            <line x1="80" y1="5" x2="80" y2="25" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="80" cy="28" r="4" fill="#F59E0B" />
            <path d="M75 35 Q80 42 85 35 Z" fill="#F59E0B" />

            {/* Twin Doves / Love Birds or Ring Icon on Arch */}
            <circle cx="80" cy="50" r="12" fill="#2D2218" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M76 50 L79 53 L85 47" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>

      {/* Header Title */}
      <div className="space-y-1 mb-5">
        <div className="flex items-center justify-center gap-2 text-amber-400/90">
          <Sparkles className="w-4 h-4 animate-spin text-amber-400" style={{ animationDuration: '5s' }} />
          <span className="uppercase tracking-[0.3em] text-xs sm:text-sm font-bold shimmer-gold">Nikah Mubarak</span>
          <Sparkles className="w-4 h-4 animate-spin text-amber-400" style={{ animationDuration: '5s' }} />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-amber-100 tracking-wide font-serif">
          You are cordially invited to celebrate <br />
          <span className="shimmer-gold italic font-normal text-xl sm:text-2xl">The Nikkah Ceremony of</span>
        </h1>
      </div>

      {/* Couple Names with 3D Float Animation */}
      <motion.div 
        className="my-5 space-y-3"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
      >
        <motion.h2 
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)] font-serif"
        >
          Ubaidullah Ibrahim
        </motion.h2>

        <div className="flex items-center justify-center gap-3 text-amber-500">
          <div className="h-[1px] w-16 sm:w-20 bg-gradient-to-r from-transparent via-amber-500/80 to-amber-500"></div>
          <motion.div 
            animate={{ scale: [1, 1.35, 1], rotate: [0, 10, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <Heart className="w-6 h-6 fill-amber-500 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
          </motion.div>
          <div className="h-[1px] w-16 sm:w-20 bg-gradient-to-l from-transparent via-amber-500/80 to-amber-500"></div>
        </div>

        <motion.h2 
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
          className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)] font-serif"
        >
          Wajiha Khalid
        </motion.h2>
      </motion.div>

      {/* Family Blessing Note */}
      <div className="text-xs sm:text-sm text-amber-100/75 italic mb-6 space-y-1">
        <p>Together with their beloved families</p>
        <p className="font-semibold text-amber-400 tracking-wide">Under the divine grace of Allah (SWT)</p>
      </div>

      {/* Event Details Grid with Glassmorphism Hover Effects */}
      <div className="bg-black/50 border border-amber-500/30 rounded-3xl p-5 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left shadow-[inset_0_2px_15px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 158, 11, 0.08)" }}
          className="flex items-start gap-3.5 p-3 rounded-2xl transition duration-300 border border-transparent hover:border-amber-500/30"
        >
          <div className="p-3 bg-amber-500/10 border border-amber-500/40 rounded-2xl text-amber-400 shadow">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">Date</p>
            <p className="text-sm text-amber-100 font-medium">Sunday, August 23rd, 2026</p>
            <p className="text-[11px] text-amber-300/70">Safar 19, 1448</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 158, 11, 0.08)" }}
          className="flex items-start gap-3.5 p-3 rounded-2xl transition duration-300 border border-transparent hover:border-amber-500/30"
        >
          <div className="p-3 bg-amber-500/10 border border-amber-500/40 rounded-2xl text-amber-400 shadow">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">Time</p>
            <p className="text-sm text-amber-100 font-medium">2:00 PM Sharp</p>
            <p className="text-[11px] text-amber-300/70">Reception follows dinner</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.01, backgroundColor: "rgba(245, 158, 11, 0.08)" }}
          className="flex items-start gap-3.5 p-3 rounded-2xl transition duration-300 border border-transparent hover:border-amber-500/30 sm:col-span-2"
        >
          <div className="p-3 bg-amber-500/10 border border-amber-500/40 rounded-2xl text-amber-400 shadow">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">Venue Location</p>
            <p className="text-sm text-amber-100 font-medium">Haji Khalid Mehmood House</p>
            <p className="text-xs text-amber-300/70">Kanchi, Lahore, Pakistan</p>
          </div>
        </motion.div>
      </div>

      {/* Live Countdown Timer Cards */}
      <div className="mb-2">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-3">Counting down to forever</p>
        <div className="grid grid-cols-4 gap-2.5 max-w-sm mx-auto">
          {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
            <motion.div 
              key={unit}
              whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(245,158,11,0.2)" }}
              className="bg-gradient-to-b from-[#2D2218] to-[#17100B] border border-amber-500/40 text-amber-100 p-2.5 rounded-2xl shadow-xl text-center"
            >
              <span className="text-xl sm:text-2xl font-extrabold block text-amber-400 drop-shadow">
                {timeLeft[unit]}
              </span>
              <span className="text-[10px] uppercase tracking-wider opacity-70 font-sans">{unit}</span>
            </motion.div>
          ))}
        </div>
      </div>    
    </motion.div>
  );
}