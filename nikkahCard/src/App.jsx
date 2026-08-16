import React, { useState, useEffect, useRef } from 'react';

import { 
  Heart, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Volume2, 
  VolumeX, 
  Send, 
  Sparkles,
  CheckCircle2,
  Printer
} from 'lucide-react';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', guests: '1', message: '' });
  const audioRef = useRef(null);

  // Countdown Timer Target Date (e.g., Oct 19, 2026)
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

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (formData.name) {
      setRsvpSubmitted(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#2C2A29] flex flex-col items-center justify-center p-4 sm:p-8 font-serif relative overflow-hidden">
      
      {/* Background Audio (Replace source with any soft instrumental/nasheed link) */}
      <audio ref={audioRef} loop src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />

      {/* Floating Action Buttons (Audio & Print) */}
      <div className="fixed top-6 right-6 z-50 flex gap-3 print:hidden">
        <button 
          onClick={toggleAudio}
          className="bg-amber-100 hover:bg-amber-200 text-amber-800 p-3 rounded-full shadow-md transition flex items-center justify-center border border-amber-300"
          title={isPlaying ? "Mute Background Music" : "Play Background Music"}
        >
          {isPlaying ? <Volume2 className="w-5 h-5 animate-pulse" /> : <VolumeX className="w-5 h-5" />}
        </button>
        <button 
          onClick={handlePrint}
          className="bg-amber-700 hover:bg-amber-800 text-white p-3 rounded-full shadow-md transition flex items-center justify-center"
          title="Print or Save as PDF"
        >
          <Printer className="w-5 h-5" />
        </button>
      </div>

      {/* Invitation Card Container */}
      <div className="max-w-2xl w-full bg-[#FFFDF9] border-[6px] border-double border-amber-600/40 rounded-xl shadow-2xl p-6 sm:p-12 relative my-6 text-center">
        
        {/* Decorative Corner Ornaments */}
        <div className="absolute top-3 left-3 w-16 h-16 border-t-2 border-l-2 border-amber-600/60 pointer-events-none"></div>
        <div className="absolute top-3 right-3 w-16 h-16 border-t-2 border-r-2 border-amber-600/60 pointer-events-none"></div>
        <div className="absolute bottom-3 left-3 w-16 h-16 border-b-2 border-l-2 border-amber-600/60 pointer-events-none"></div>
        <div className="absolute bottom-3 right-3 w-16 h-16 border-b-2 border-r-2 border-amber-600/60 pointer-events-none"></div>

        {/* Bismillah Calligraphy Header */}
        <div className="mb-6">
          <p className="text-2xl sm:text-3xl text-amber-800 font-arabic tracking-wider">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
        </div>

        {/* Main Heading */}
        <div className="space-y-2 mb-8">
          <div className="flex items-center justify-center gap-2 text-amber-700">
            <Sparkles className="w-4 h-4" />
            <span className="uppercase tracking-widest text-xs sm:text-sm font-semibold">Nikah Mubarak</span>
            <Sparkles className="w-4 h-4" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-amber-900 tracking-wide font-serif">
            You are cordially invited to the <br />
            <span className="text-amber-700 italic font-normal text-2xl sm:text-4xl">Nikkah Ceremony of</span>
          </h1>
        </div>

        {/* Couple Names */}
        <div className="my-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900">Fatima Zahra</h2>
          <div className="flex items-center justify-center gap-3 text-amber-600">
            <div className="h-[1px] w-16 bg-amber-400"></div>
            <Heart className="w-6 h-6 fill-amber-600 text-amber-600 animate-bounce" />
            <div className="h-[1px] w-16 bg-amber-400"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900">Abdullah Khan</h2>
        </div>

        {/* Family Blessing Note */}
        <div className="text-sm sm:text-base text-gray-600 italic mb-8 space-y-1">
          <p>Together with their families</p>
          <p className="font-semibold text-amber-800">In the blessed presence of Allah (SWT)</p>
        </div>

        {/* Event Details Grid */}
        <div className="bg-amber-50/60 border border-amber-200/60 rounded-xl p-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-900 font-bold">Date</p>
              <p className="text-sm text-gray-700">Saturday, October 19th, 2026</p>
              <p className="text-xs text-amber-800">Rabi-ul-Awwal 15, 1446</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-900 font-bold">Time</p>
              <p className="text-sm text-gray-700">3:00 PM Sharp</p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:col-span-2">
            <MapPin className="w-5 h-5 text-amber-700 mt-1 flex-shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-wider text-amber-900 font-bold">Venue</p>
              <p className="text-sm text-gray-700">The Grand Crystal Hall</p>
              <p className="text-xs text-gray-500">145, Al-Falah Avenue, Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        {/* Live Countdown Timer */}
        <div className="mb-10 print:hidden">
          <p className="text-xs uppercase tracking-widest text-amber-800 font-semibold mb-3">Counting down to the blessed day</p>
          <div className="grid grid-cols-4 gap-2 max-w-xs mx-auto">
            <div className="bg-amber-900 text-amber-50 p-2 rounded-lg">
              <span className="text-xl font-bold block">{timeLeft.days}</span>
              <span className="text-[10px] uppercase tracking-wider">Days</span>
            </div>
            <div className="bg-amber-900 text-amber-50 p-2 rounded-lg">
              <span className="text-xl font-bold block">{timeLeft.hours}</span>
              <span className="text-[10px] uppercase tracking-wider">Hours</span>
            </div>
            <div className="bg-amber-900 text-amber-50 p-2 rounded-lg">
              <span className="text-xl font-bold block">{timeLeft.minutes}</span>
              <span className="text-[10px] uppercase tracking-wider">Mins</span>
            </div>
            <div className="bg-amber-900 text-amber-50 p-2 rounded-lg">
              <span className="text-xl font-bold block">{timeLeft.seconds}</span>
              <span className="text-[10px] uppercase tracking-wider">Secs</span>
            </div>
          </div>
        </div>

        {/* RSVP Section */}
        <div className="border-t border-amber-200 pt-8 mt-8 print:hidden">
          <h3 className="text-lg font-bold text-amber-900 mb-2">RSVP & Well Wishes</h3>
          <p className="text-xs text-gray-600 mb-6">Please let us know if you will be gracing us with your presence.</p>

          {rsvpSubmitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-xl flex items-center justify-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
              <p className="text-sm font-medium">Jazakallah Khair, {formData.name}! Your response has been recorded.</p>
            </div>
          ) : (
            <form onSubmit={handleRsvpSubmit} className="space-y-4 max-w-md mx-auto text-left">
              <div>
                <label className="block text-xs font-semibold text-amber-900 uppercase mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Muhammad Ali"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-amber-900 uppercase mb-1">Attending Guests</label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white text-sm"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-amber-900 uppercase mb-1">Send Wishes</label>
                  <input 
                    type="text" 
                    placeholder="Optional blessing..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 bg-white text-sm"
                  />
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full bg-amber-800 hover:bg-amber-900 text-white font-medium py-2.5 rounded-lg shadow transition flex items-center justify-center gap-2 text-sm tracking-wider uppercase"
              >
                <Send className="w-4 h-4" /> Confirm Attendance
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Footer */}
        <div className="border-t border-amber-200 pt-6 mt-8 text-xs text-gray-500 space-y-2">
          <p className="font-semibold text-amber-900">For Queries & Assistance:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-amber-700" /> Ayesha: (0300-1234567)</span>
            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-amber-700" /> Bilal: (0321-9876543)</span>
          </div>
          <p className="italic pt-2 text-amber-800/80">"And of His signs is that He created for you from yourselves mates that you may find tranquility in them..." (Quran 30:21)</p>
        </div>

      </div>
    </div>
  );
}