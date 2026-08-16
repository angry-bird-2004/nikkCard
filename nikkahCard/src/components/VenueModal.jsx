import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

export default function VenueModal() {
  return (
    <motion.div
      key="venue"
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -15 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="py-4 text-left space-y-6"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-amber-200 font-serif">Venue & Map Directions</h2>
        <p className="text-sm text-amber-100/60 font-sans">We are honored to celebrate this auspicious day with you.</p>
      </div>

      <div className="bg-black/50 border border-amber-500/30 rounded-3xl p-6 space-y-5 backdrop-blur-md shadow-xl">
        <div className="flex items-start gap-4">
          <div className="p-3.5 bg-amber-600/20 border border-amber-500/40 text-amber-400 rounded-2xl shadow">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-amber-200 text-lg">The Grand Crystal Hall</h3>
            <p className="text-sm text-amber-100/80 font-sans">145, Al-Falah Avenue, Lahore, Pakistan</p>
            <p className="text-xs text-amber-400 mt-1 font-medium font-sans">Valet parking & direct gate assistance available.</p>
          </div>
        </div>

        {/* Interactive Map Simulation Frame */}
        <div className="w-full h-64 bg-[#1C130E] rounded-2xl overflow-hidden border border-amber-500/30 relative flex items-center justify-center shadow-inner">
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#f59e0b_1.5px,transparent_1.5px)] [background-size:20px_20px]"></div>
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center z-10 space-y-3 p-6 bg-black/85 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-500/40 max-w-xs mx-auto"
          >
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <MapPin className="w-9 h-9 text-amber-400 mx-auto drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
            </motion.div>
            <p className="text-xs font-bold text-amber-200 tracking-wide">The Grand Crystal Hall, Lahore</p>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-700 to-amber-600 text-white text-xs px-5 py-2.5 rounded-xl font-semibold hover:from-amber-600 hover:to-amber-500 transition shadow-lg border border-amber-400/40 font-sans tracking-wider uppercase"
            >
              <Navigation className="w-3.5 h-3.5" /> Open in Google Maps
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="bg-black/30 border border-amber-500/30 rounded-3xl p-6 shadow-xl backdrop-blur-md">
        <h4 className="text-xs font-bold text-amber-300 uppercase tracking-[0.2em] mb-2.5">Guest Guidelines</h4>
        <ul className="text-xs text-amber-100/75 space-y-2 list-disc list-inside font-sans">
          <li>Kindly arrive 15 minutes before the 3:00 PM scheduled ceremony start time.</li>
          <li>Reception banquet will be served right after the Nikkah conclusion.</li>
        </ul>
      </div>
    </motion.div>
  );
}