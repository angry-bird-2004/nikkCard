import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageSquareHeart } from 'lucide-react';

export default function WishesWall({ wishesList }) {
  return (
    <motion.div
      key="wishes"
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -15 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="py-4 text-left space-y-6"
    >
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-amber-200 font-serif">Wall of Well Wishes</h2>
        <p className="text-sm text-amber-100/60 font-sans">Heartfelt prayers and blessings from our cherished loved ones.</p>
      </div>

      <div className="space-y-3.5 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
        {wishesList.map((wish, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.01, backgroundColor: "rgba(245, 158, 11, 0.08)" }}
            className="bg-black/40 border border-amber-500/30 p-4.5 rounded-2xl shadow-lg backdrop-blur-md transition duration-300"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-amber-200 text-sm flex items-center gap-2">
                <MessageSquareHeart className="w-4 h-4 text-amber-400" /> {wish.name}
              </span>
              <Heart className="w-4 h-4 text-amber-500 fill-amber-500 drop-shadow" />
            </div>
            <p className="text-xs text-amber-100/85 italic font-sans pl-6">"{wish.message}"</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}