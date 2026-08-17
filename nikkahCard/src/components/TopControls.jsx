import React from 'react';
import { motion } from 'framer-motion';
import { Printer } from 'lucide-react';

export default function TopControls({ handlePrint, autoPlay }) {
  const videoId = 'Xmlqym0s9X8';
  
  // autoplay=${autoPlay ? 1 : 0} ensures it triggers when open becomes true, skipping the first 5 seconds
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=${autoPlay ? 1 : 0}&start=5&mute=0&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`;

  return (
    <>
      <div className="fixed bottom-0 left-0 z-0 h-0 w-0 overflow-hidden opacity-0 pointer-events-none">
        <iframe
          title="Background music"
          src={embedUrl}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen={false}
          frameBorder="0"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.9 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 right-6 z-50 print:hidden"
      >
        <motion.button
          whileHover={{ scale: 1.12, rotate: 8, boxShadow: '0 0 25px rgba(245, 158, 11, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrint}
          className="bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white p-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 flex items-center justify-center border border-amber-300/50"
          title="Print or Save as PDF"
        >
          <Printer className="w-5 h-5 drop-shadow" />
        </motion.button>
      </motion.div>
    </>
  );
}