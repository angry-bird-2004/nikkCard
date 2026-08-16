import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Navigation, Compass } from 'lucide-react';

export default function VenueModal() {
  // Your exact coordinates
  const latitude = "31.462177315805707"; 
  const longitude = "74.34701347537111";

  return (
    <motion.div
      key="venue"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="space-y-6 text-left"
    >
      {/* Header Title */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest">
          <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} /> Location & Directions
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-100 font-serif">Wedding Venue</h2>
        <p className="text-sm text-amber-200/70 italic">We look forward to celebrating with you at our home.</p>
      </div>

      {/* Venue Info Card */}
      <div className="bg-black/40 border border-amber-500/30 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
        <div className="flex items-start gap-3.5">
          <div className="p-3 bg-amber-500/10 border border-amber-500/40 rounded-2xl text-amber-400 shrink-0">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-amber-100">Haji Khalid Mehmood House</h3>
            <p className="text-xs sm:text-sm text-amber-200/80 mt-0.5">Kanchi, Lahore, Pakistan</p>
            <p className="text-[11px] text-amber-400/70 mt-1 font-sans">Sunday, August 23rd, 2026 at 2:00 PM Sharp</p>
          </div>
        </div>

        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white text-xs font-semibold tracking-wider uppercase shadow-lg border border-amber-400/50 hover:brightness-110 transition"
        >
          <Navigation className="w-3.5 h-3.5" /> Open Maps <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
        </a>
      </div>

      {/* Interactive Map Embed Container using Exact Coordinates */}
      <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl relative bg-[#120B07]">
        <iframe 
          title="Venue Map Location"
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`}
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Helpful Direction Tip */}
      <div className="bg-amber-950/20 border border-amber-500/20 rounded-xl p-3.5 text-xs text-amber-200/70 text-center font-sans">
        💡 <span className="text-amber-300 font-semibold">Travel Note:</span> Valet parking and directional signs will be available near the entrance. Feel free to contact Saif or Ubaidullah if you need any guidance.
      </div>
    </motion.div>
  );
}