import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { SLIDES } from './constants';
import { SlideRenderer } from './components/SlideRenderer';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1 < SLIDES.length ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-900 text-white overflow-hidden flex flex-col relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-600/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 w-full max-w-[1600px] mx-auto">
        <AnimatePresence mode="wait">
          <div key={currentSlide} className="w-full h-full p-4 md:p-8">
             <SlideRenderer data={SLIDES[currentSlide]} />
          </div>
        </AnimatePresence>
      </main>

      {/* Navigation Bar */}
      <div className="h-16 border-t border-slate-800 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-between px-6 md:px-12">
        <div className="text-sm text-slate-500 font-mono">
           FEISHU BASE PITCH DECK
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <span className="text-sm font-medium text-slate-300 min-w-[60px] text-center">
            {currentSlide + 1} / {SLIDES.length}
          </span>

          <button 
            onClick={nextSlide}
            disabled={currentSlide === SLIDES.length - 1}
            className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex items-center space-x-4">
           {/* Progress Bar */}
           <div className="hidden md:block w-32 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
              ></div>
           </div>
           
           <button onClick={toggleFullScreen} className="p-2 text-slate-400 hover:text-white transition-colors">
             <Maximize2 size={20} />
           </button>
        </div>
      </div>
    </div>
  );
}