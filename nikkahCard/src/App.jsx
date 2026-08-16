import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Map, MessageSquareHeart, Phone } from 'lucide-react';

import TopControls from './components/TopControls';
import Envelope from './components/Envelope';
import InvitationCard from './components/InvitationCard';
import VenueModal from './components/VenueModal';
import WishesWall from './components/WishesWall';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('card'); 
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', guests: '1', message: '' });
  const [wishesList, setWishesList] = useState([
    { name: 'Aunt Zainab', message: 'May Allah bless your marriage and shower His endless blessings upon you both!' },
    { name: 'Usman & Family', message: 'Mabrouk! Wishing you a lifetime of joy, love, and sweet companionship.' }
  ]);
  const audioRef = useRef(null);

  // Countdown Target Date (Oct 19, 2026)
  const targetDate = new Date('2026-10-19T15:00:00').getTime();
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

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => console.log("Audio play blocked"));
    }
    setIsPlaying(!isPlaying);
  };

  const handleOpenEnvelope = () => {
    if (isOpening) return; // Prevent multiple clicks
    setIsOpening(true);
    audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
    
    // Wait for the envelope flap & opening sequence to finish before rendering the card jumping out
    setTimeout(() => {
      setIsOpen(true);
    }, 700);
  };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (formData.name) {
      setRsvpSubmitted(true);
      if (formData.message) {
        setWishesList([{ name: formData.name, message: formData.message }, ...wishesList]);
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#060911] via-[#16100D] to-[#24130A] text-[#EDE8DF] flex flex-col items-center justify-center p-4 sm:p-8 font-serif relative overflow-x-hidden selection:bg-amber-600 selection:text-white perspective-1500">
      
      {/* Background Audio */}
      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />

      {/* Enhanced Glowing Golden Background Particle Field */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-amber-400 rounded-full blur-[1px]"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -70, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.85, 0.1],
              scale: [1, 1.5, 1],
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

      {/* Floating Action Controls */}
      <AnimatePresence>
        {isOpen && (
          <TopControls isPlaying={isPlaying} toggleAudio={toggleAudio} handlePrint={handlePrint} />
        )}
      </AnimatePresence>

      {/* 3D STAGE 1: ENVELOPE */}
      <AnimatePresence>
        {!isOpen && (
          <Envelope onOpen={handleOpenEnvelope} isOpening={isOpening} />
        )}
      </AnimatePresence>

      {/* 3D STAGE 2: INVITATION CARD JUMPING UP FROM ENVELOPE */}
      <AnimatePresence>
        {isOpen && (
          <div className="w-full flex flex-col items-center justify-center z-20 transform-style-3d">
            
            {/* 3D Floating Navigation Switcher Tabs */}
            <motion.div 
              initial={{ y: -50, opacity: 0, rotateX: -20 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex bg-[#1B1613]/90 backdrop-blur-2xl p-1.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-amber-500/40 mb-6 print:hidden z-20"
            >
              {[
                { id: 'card', label: 'Invitation', icon: Sparkles },
                { id: 'venue', label: 'Venue & Map', icon: Map },
                { id: 'wishes', label: 'Guest Wishes', icon: MessageSquareHeart }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <motion.button 
                    key={tab.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${isActive ? 'bg-gradient-to-r from-amber-700 via-amber-600 to-amber-700 text-white shadow-lg border border-amber-400/50' : 'text-amber-200/70 hover:text-white hover:bg-amber-900/40'}`}
                  >
                    <Icon className="w-3.5 h-3.5" /> {tab.label}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Main 3D Card Container (Jumping up with dramatic depth and physics) */}
            <motion.div 
              initial={{ scale: 0.2, opacity: 0, y: 220, rotateX: 45 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="max-w-2xl w-full bg-[#18120E]/95 backdrop-blur-3xl border-2 border-amber-500/50 rounded-3xl shadow-[0_30px_100px_rgba(217,119,6,0.3)] p-6 sm:p-12 relative my-2 text-center overflow-hidden transform-style-3d"
            >
              
              {/* Radiant Corner Ornaments */}
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-amber-500/30 to-transparent rounded-br-full pointer-events-none"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-amber-500/30 to-transparent rounded-tl-full pointer-events-none"></div>

              <AnimatePresence mode="wait">
                {activeTab === 'card' && (
                  <InvitationCard 
                    timeLeft={timeLeft}
                    rsvpSubmitted={rsvpSubmitted}
                    formData={formData}
                    setFormData={setFormData}
                    handleRsvpSubmit={handleRsvpSubmit}
                  />
                )}

                {activeTab === 'venue' && (
                  <VenueModal />
                )}

                {activeTab === 'wishes' && (
                  <WishesWall wishesList={wishesList} />
                )}
              </AnimatePresence>

              {/* Contact Info Footer */}
              <div className="border-t border-amber-500/25 pt-6 mt-8 text-xs text-amber-100/50 space-y-2 font-sans">
                <p className="font-semibold text-amber-200 font-serif">For Inquiries & Assistance:</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-amber-400" /> Ayesha: (0300-1234567)</span>
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-amber-400" /> Bilal: (0321-9876543)</span>
                </div>
                <p className="italic pt-2 text-amber-300/80 font-serif text-sm">"And of His signs is that He created for you from yourselves mates that you may find tranquility in them..." (Quran 30:21)</p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}