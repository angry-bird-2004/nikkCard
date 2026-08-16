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
    >
      {/* Bismillah Calligraphy */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <p className="text-2xl sm:text-4xl text-amber-400 font-arabic tracking-wider drop-shadow-[0_2px_10px_rgba(245,158,11,0.4)]">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
      </motion.div>

      {/* Header Title */}
      <div className="space-y-2 mb-8">
        <div className="flex items-center justify-center gap-2 text-amber-400/90">
          <Sparkles className="w-4 h-4 animate-spin text-amber-400" style={{ animationDuration: '5s' }} />
          <span className="uppercase tracking-[0.3em] text-xs sm:text-sm font-bold shimmer-gold">Nikah Mubarak</span>
          <Sparkles className="w-4 h-4 animate-spin text-amber-400" style={{ animationDuration: '5s' }} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-100 tracking-wide font-serif">
          You are cordially invited to celebrate <br />
          <span className="shimmer-gold italic font-normal text-2xl sm:text-3xl">The Nikkah Ceremony of</span>
        </h1>
      </div>

      {/* Couple Names with 3D Float Animation */}
      <motion.div 
        className="my-8 space-y-4"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
      >
        <motion.h2 
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)] font-serif"
        >
          Fatima Zahra
        </motion.h2>

        <div className="flex items-center justify-center gap-3 text-amber-500">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-amber-500/80 to-amber-500"></div>
          <motion.div 
            animate={{ scale: [1, 1.35, 1], rotate: [0, 10, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 2.5 }}
          >
            <Heart className="w-7 h-7 fill-amber-500 text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
          </motion.div>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent via-amber-500/80 to-amber-500"></div>
        </div>

        <motion.h2 
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
          className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)] font-serif"
        >
          Abdullah Khan
        </motion.h2>
      </motion.div>

      {/* Family Blessing Note */}
      <div className="text-sm sm:text-base text-amber-100/75 italic mb-8 space-y-1">
        <p>Together with their beloved families</p>
        <p className="font-semibold text-amber-400 tracking-wide">Under the divine grace of Allah (SWT)</p>
      </div>

      {/* Event Details Grid with Glassmorphism Hover Effects */}
      <div className="bg-black/50 border border-amber-500/30 rounded-3xl p-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left shadow-[inset_0_2px_15px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <motion.div 
          whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 158, 11, 0.08)" }}
          className="flex items-start gap-3.5 p-3 rounded-2xl transition duration-300 border border-transparent hover:border-amber-500/30"
        >
          <div className="p-3 bg-amber-500/10 border border-amber-500/40 rounded-2xl text-amber-400 shadow">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-amber-400 font-bold">Date</p>
            <p className="text-sm text-amber-100 font-medium">Saturday, October 19th, 2026</p>
            <p className="text-[11px] text-amber-300/70">Rabi-ul-Awwal 15, 1446</p>
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
            <p className="text-sm text-amber-100 font-medium">3:00 PM Sharp</p>
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
            <p className="text-sm text-amber-100 font-medium">The Grand Crystal Hall</p>
            <p className="text-xs text-amber-300/70">145, Al-Falah Avenue, Lahore, Pakistan</p>
          </div>
        </motion.div>
      </div>

      {/* Live Countdown Timer Cards */}
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-bold mb-3">Counting down to forever</p>
        <div className="grid grid-cols-4 gap-2.5 max-w-sm mx-auto">
          {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
            <motion.div 
              key={unit}
              whileHover={{ y: -4, boxShadow: "0 10px 25px rgba(245,158,11,0.2)" }}
              className="bg-gradient-to-b from-[#2D2218] to-[#17100B] border border-amber-500/40 text-amber-100 p-3 rounded-2xl shadow-xl text-center"
            >
              <span className="text-2xl sm:text-3xl font-extrabold block text-amber-400 drop-shadow">
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