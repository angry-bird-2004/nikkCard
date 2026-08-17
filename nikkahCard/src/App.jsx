import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Map, Phone } from 'lucide-react';

import Envelope from './components/Envelope';
import InvitationCard from './components/InvitationCard';
import VenueModal from './components/VenueModal';
import TopControls from './components/TopControls';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [activeTab, setActiveTab] = useState('card');

  const handlePrint = () => {
    window.print();
  };

  // Countdown Target Date (Aug 23, 2026, 14:00)
  const targetDate = new Date('2026-08-23T14:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);

    setTimeout(() => {
      setIsOpen(true);
    }, 700);
  };

  return (
    <div className="min-h-[100dvh] w-full max-w-[100vw] bg-gradient-to-br from-[#060911] via-[#16100D] to-[#24130A] text-[#EDE8DF] flex flex-col items-center justify-between lg:justify-center p-2 xs:p-3 sm:p-6 md:p-10 font-serif relative overflow-x-hidden selection:bg-amber-600 selection:text-white perspective-2000 box-border">
      
      {/* Background Music Trigger on Load */}
      <TopControls handlePrint={handlePrint} autoPlay={true} />

      {/* Responsive Glowing Golden Background Particle Field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-amber-400 rounded-full blur-[1px]"
            style={{
              width: Math.random() * 5 + 2,
              height: Math.random() * 5 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* 3D STAGE 1: ENVELOPE */}
      <AnimatePresence>
        {!isOpen && (
          <div className="flex-1 flex items-center justify-center w-full my-auto max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-lg scale-90 sm:scale-100 transition-transform px-2">
            <Envelope onOpen={handleOpenEnvelope} isOpening={isOpening} />
          </div>
        )}
      </AnimatePresence>

      {/* 3D STAGE 2: UNIVERSALLY RESPONSIVE INVITATION CARD INTERFACE */}
      <AnimatePresence>
        {isOpen && (
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center z-25 transform-style-3d my-auto py-2 xs:py-4 px-1 xs:px-2 sm:px-4 box-border">

            {/* Fluid Navigation Switcher Tabs with 3D Depth */}
            <motion.div 
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center gap-1.5 sm:gap-2 bg-[#1B1613]/95 backdrop-blur-2xl p-1.5 rounded-2xl lg:rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-amber-500/40 mb-3 sm:mb-6 z-20 w-[95%] max-w-[260px] sm:max-w-xs lg:w-auto"
            >
              {[
                { id: 'card', label: 'Invitation', icon: Sparkles },
                { id: 'venue', label: 'Venue & Map', icon: Map }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <motion.button 
                    key={tab.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 min-w-[100px] xs:min-w-[110px] sm:min-w-[130px] lg:flex-initial px-2.5 xs:px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl lg:rounded-full text-[10px] xs:text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 ${isActive ? 'bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white shadow-lg border border-amber-400/50' : 'text-amber-200/70 hover:text-white hover:bg-amber-900/40'}`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" /> <span className="truncate">{tab.label}</span>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Main Fluid 3D Card Container */}
            <motion.div 
              initial={{ scale: 0.3, opacity: 0, y: 180, rotateX: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full bg-[#18120E]/98 backdrop-blur-3xl border-2 border-amber-500/50 rounded-2xl sm:rounded-3xl shadow-[0_30px_100px_rgba(217,119,6,0.3)] p-3 xs:p-5 sm:p-8 lg:p-12 relative text-center overflow-hidden box-border"
            >

              {/* Corner Ornaments */}
              <div className="absolute top-0 left-0 w-24 xs:w-28 sm:w-40 lg:w-48 h-24 xs:h-28 sm:h-40 lg:h-48 bg-gradient-to-br from-amber-500/30 to-transparent rounded-br-full pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-24 xs:w-28 sm:w-40 lg:w-48 h-24 xs:h-28 sm:h-40 lg:h-48 bg-gradient-to-tl from-amber-500/30 to-transparent rounded-tl-full pointer-events-none"></div>

              <AnimatePresence mode="wait">
                {activeTab === 'card' && (
                  <InvitationCard timeLeft={timeLeft} />
                )}

                {activeTab === 'venue' && (
                  <VenueModal />
                )}
              </AnimatePresence>

              {/* Contact Info Footer */}
              <div className="border-t border-amber-500/25 pt-3.5 sm:pt-6 mt-5 sm:mt-8 text-[11px] sm:text-xs text-amber-100/60 space-y-2 font-sans">
                <p className="font-semibold text-amber-200 font-serif">For Inquiries & Assistance:</p>
                <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-1.5 sm:gap-4">
                  <span className="flex items-center justify-center gap-1.5"><Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Saif: (0309-4840711)</span>
                  <span className="flex items-center justify-center gap-1.5"><Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" /> Ubaidullah: (0307-4712588)</span>
                </div>
                <p className="italic pt-2 text-amber-300/80 font-serif text-[11px] sm:text-sm px-2">"And of His signs is that He created for you from yourselves mates that you may find tranquility in them..." (Quran 30:21)</p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}