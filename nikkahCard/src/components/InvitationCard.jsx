import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

export default function InvitationCard({ timeLeft }) {
  return (
    <div className="relative w-full max-w-xl mx-auto px-1 xs:px-2 sm:px-4 perspective-1000">
      
      {/* MAIN INVITATION CARD WITH 3D TILT & FLUID ANIMATIONS */}
      <motion.div
        key="card"
        initial={{ opacity: 0, scale: 0.85, y: 40, rotateX: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.01, rotateX: 2, rotateY: -2, transition: { duration: 0.3 } }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative p-3 xs:p-5 sm:p-8 z-10 rounded-2xl sm:rounded-3xl border-2 border-amber-400/80 shadow-[0_20px_90px_rgba(245,158,11,0.4)] overflow-hidden backdrop-blur-xl"
        style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(15, 10, 8, 0.94), rgba(25, 16, 11, 0.9), rgba(10, 6, 4, 0.96)), url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Soft Golden Light Glow Overlay */}
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.25)_0%,transparent_70%)] pointer-events-none"
        />

        {/* Ornate Pakistani Wedding Card Outer Border Frame with Glowing Pulsing Effect */}
        <div className="absolute inset-0 border-2 border-amber-300/60 rounded-2xl sm:rounded-3xl pointer-events-none m-1.5 xs:m-2 sm:m-3">
          <div className="absolute inset-1 border border-amber-200/30 rounded-xl sm:rounded-2xl pointer-events-none"></div>
          {/* Animated Glowing Corner Motifs */}
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-l-2 border-amber-300 rounded-tl-xl sm:rounded-tl-2xl m-1"
          ></motion.div>
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.75 }}
            className="absolute top-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-t-2 border-r-2 border-amber-300 rounded-tr-xl sm:rounded-tr-2xl m-1"
          ></motion.div>
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
            className="absolute bottom-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-l-2 border-amber-300 rounded-bl-xl sm:rounded-bl-2xl m-1"
          ></motion.div>
          <motion.div 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 3, delay: 2.25 }}
            className="absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-b-2 border-r-2 border-amber-300 rounded-br-xl sm:rounded-br-2xl m-1"
          ></motion.div>
        </div>

        {/* Floating Background Sparkles Animation */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: Math.random() * 350, x: Math.random() * 300, opacity: 0 }}
              animate={{ y: [null, -40], opacity: [0, 0.8, 0], scale: [0.5, 1.2, 0.5] }}
              transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut", delay: i * 0.7 }}
              className="absolute text-amber-300"
            >
              <Sparkles className="w-3.5 h-3.5" />
            </motion.div>
          ))}
        </div>

        {/* Bismillah Calligraphy with Floating Shimmer */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-3 sm:mb-5 pt-1 sm:pt-3 text-center relative z-10"
        >
          <motion.p 
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="text-xl xs:text-2xl sm:text-4xl text-amber-300 font-arabic tracking-wider drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]"
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </motion.p>
        </motion.div>

        {/* Traditional Pakistani Arch Photo Frame with 3D Floating Effect */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="my-3 sm:my-5 flex justify-center relative z-10"
          style={{ transform: 'translateZ(30px)' }}
        >
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
            className="relative p-2.5 sm:p-3 bg-gradient-to-b from-amber-500/40 via-amber-950/80 to-black/95 border-2 border-amber-300/80 rounded-t-full rounded-b-3xl shadow-[0_10px_40px_rgba(245,158,11,0.5)] backdrop-blur-md group"
          >
            <div className="w-28 h-36 xs:w-32 xs:h-40 sm:w-40 sm:h-48 rounded-t-full rounded-b-2xl overflow-hidden border-2 border-amber-200 relative">
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=80" 
                alt="Pakistani Wedding Couple Portrait" 
                className="w-full h-full object-cover filter brightness-95 contrast-110 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Heart Ribbon Badge */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-amber-100 px-3.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-sans uppercase tracking-widest border border-amber-300 shadow-xl whitespace-nowrap flex items-center gap-1 animate-pulse">
              <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-200 text-amber-100 animate-bounce" /> Nikkah Mubarak
            </div>
          </motion.div>
        </motion.div>

        {/* Header Title with Glowing Shimmer Effect */}
        <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 mt-4 sm:mt-6 text-center relative z-10" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-center justify-center gap-2 text-amber-300">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-amber-200" style={{ animationDuration: '4s' }} />
            <span className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[10px] xs:text-xs sm:text-sm font-bold text-amber-200 drop-shadow">Wedding Celebration</span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-amber-200" style={{ animationDuration: '4s' }} />
          </div>
          <h1 className="text-xl xs:text-2xl sm:text-3xl font-bold text-amber-100 tracking-wide font-serif drop-shadow-md px-1">
            You are cordially invited to celebrate <br />
            <span className="text-amber-300 italic font-normal text-base xs:text-xl sm:text-2xl drop-shadow">The Nikkah Ceremony of</span>
          </h1>
        </div>

        {/* Couple Names with Smooth Floating & 3D Shimmer Gradient */}
        <motion.div 
          className="my-4 sm:my-6 space-y-2 sm:space-y-3 text-center relative z-10"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7, type: "spring" }}
          style={{ transform: 'translateZ(40px)' }}
        >
          <motion.h2 
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="text-2xl xs:text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_5px_20px_rgba(245,158,11,0.6)] font-serif"
          >
            Ubaidullah Ibrahim
          </motion.h2>

          <div className="flex items-center justify-center gap-2 sm:gap-3 text-amber-300">
            <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-amber-400 to-amber-300"></div>
            <motion.div 
              animate={{ scale: [1, 1.4, 1], rotate: [0, 15, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <Heart className="w-5 h-5 sm:w-7 sm:h-7 fill-amber-500 text-amber-200 drop-shadow-[0_0_15px_rgba(245,158,11,0.9)]" />
            </motion.div>
            <div className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-amber-400 to-amber-300"></div>
          </div>

          <motion.h2 
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
            className="text-2xl xs:text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_5px_20px_rgba(245,158,11,0.6)] font-serif"
          >
            Wajiha Khalid
          </motion.h2>
        </motion.div>

        {/* Family Blessing Note */}
        <motion.div 
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-[11px] xs:text-xs sm:text-sm text-amber-100/90 italic mb-4 sm:mb-6 text-center space-y-0.5 sm:space-y-1 relative z-10 drop-shadow px-2"
        >
          <p>Together with their beloved families</p>
          <p className="font-semibold text-amber-300 tracking-wide">Under the divine grace of Allah (SWT)</p>
        </motion.div>

        {/* Event Details Grid with Glassmorphic Fluid Hover Effects */}
        <div className="bg-black/75 border border-amber-400/50 rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 mb-4 sm:mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left shadow-[inset_0_2px_25px_rgba(0,0,0,0.9)] backdrop-blur-xl relative z-10" style={{ transform: 'translateZ(15px)' }}>
          <motion.div 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 158, 11, 0.15)", borderColor: "rgba(245, 158, 11, 0.7)" }}
            className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl transition duration-300 border border-amber-500/20 shadow-md"
          >
            <div className="p-2.5 sm:p-3 bg-amber-500/20 border border-amber-300/50 rounded-xl sm:rounded-2xl text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.4)] shrink-0">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-300 font-bold">Date</p>
              <p className="text-xs sm:text-sm text-amber-100 font-semibold">Sunday, August 23rd, 2026</p>
              <p className="text-[10px] sm:text-[11px] text-amber-200/80">Safar 19, 1448</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 158, 11, 0.15)", borderColor: "rgba(245, 158, 11, 0.7)" }}
            className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl transition duration-300 border border-amber-500/20 shadow-md"
          >
            <div className="p-2.5 sm:p-3 bg-amber-500/20 border border-amber-300/50 rounded-xl sm:rounded-2xl text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.4)] shrink-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-300 font-bold">Time</p>
              <p className="text-xs sm:text-sm text-amber-100 font-semibold">2:00 PM Sharp</p>
              <p className="text-[10px] sm:text-[11px] text-amber-200/80">Reception follows dinner</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 158, 11, 0.15)", borderColor: "rgba(245, 158, 11, 0.7)" }}
            className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl transition duration-300 border border-amber-500/20 sm:col-span-2 shadow-md"
          >
            <div className="p-2.5 sm:p-3 bg-amber-500/20 border border-amber-300/50 rounded-xl sm:rounded-2xl text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.4)] shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" />
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-300 font-bold">Venue Location</p>
              <p className="text-xs sm:text-sm text-amber-100 font-semibold">Haji Khalid Mehmood House</p>
              <p className="text-[11px] text-amber-200/80">Kanchi, Lahore, Pakistan</p>
            </div>
          </motion.div>
        </div>

        {/* Live Countdown Timer Cards with Floating Glow */}
        <div className="mb-1 sm:mb-2 text-center relative z-10" style={{ transform: 'translateZ(20px)' }}>
          <motion.p 
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="text-[10px] xs:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-amber-300 font-bold mb-2.5 sm:mb-3 drop-shadow"
          >
            Counting down to forever
          </motion.p>
          <div className="grid grid-cols-4 gap-2 sm:gap-2.5 max-w-sm mx-auto">
            {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
              <motion.div 
                key={unit}
                whileHover={{ y: -4, scale: 1.05, boxShadow: "0 15px 30px rgba(245,158,11,0.4)" }}
                className="bg-gradient-to-b from-[#2D2218] to-[#100905] border border-amber-400/60 text-amber-100 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl shadow-2xl text-center transition-all duration-300"
              >
                <span className="text-lg xs:text-xl sm:text-2xl font-extrabold block text-amber-300 drop-shadow-[0_0_10px_rgba(245,158,11,0.7)]">
                  {timeLeft[unit]}
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-wider opacity-85 font-sans">{unit}</span>
              </motion.div>
            ))}
          </div>
        </div>    
      </motion.div>
    </div>
  );
}