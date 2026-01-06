
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import TagCloud from './components/TagCloud';
import { MAX_CANVAS_WIDTH } from './constants';

const Word: React.FC<{ word: string; index: number; progress: MotionValue<number>; total: number }> = ({ word, index, progress, total }) => {
  // Staggered entrance: words appear one by one during the scroll
  const start = index / total * 0.35;
  const end = (index + 1) / total * 0.35 + 0.1;
  
  const opacity = useTransform(progress, [start, end, 0.92, 1], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, end], [20, 0]);

  return (
    <motion.span 
      style={{ opacity, y }}
      className={`inline-block mr-[0.25em] ${word === 'We' || word === 'Spread' ? 'font-medium text-gray-300' : 'font-black text-black'}`}
    >
      {word}
    </motion.span>
  );
};

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroWords = "TFTL©25 — Success Designed Differently. We Spread".split(" ");

  return (
    <main ref={containerRef} className="relative h-[500vh] bg-white text-black">
      {/* Sticky Hero Scene */}
      <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden">
        <div className="relative h-full w-full max-w-[1728px]">
          
          {/* 1. Hero Text Layer (High Priority Z-Index) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-50 pointer-events-none">
            <h1 className="tracking-tight leading-[1.05] text-[clamp(2.5rem,7vw,5.2rem)] max-w-[1400px]">
              {heroWords.map((word, i) => (
                <Word 
                  key={i} 
                  word={word} 
                  index={i} 
                  progress={scrollYProgress} 
                  total={heroWords.length} 
                />
              ))}
            </h1>
          </div>

          {/* 2. Floating Tags Layer (Middle Z-Index) */}
          <TagCloud scrollProgress={scrollYProgress} />
          
        </div>
      </div>

      {/* Persistent UI Elements */}
      <div className="fixed top-8 left-8 z-[60] pointer-events-none">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-black/30 uppercase tracking-[0.2em]">
            Agency Portfolio v4.5
          </span>
          <span className="text-[9px] font-medium text-black/15 uppercase tracking-[0.2em]">
            Grid Optimized Flow
          </span>
        </div>
      </div>
      
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[60] opacity-30 text-[9px] font-bold uppercase tracking-[0.6em]">
        Scroll Down
      </div>

      {/* Scrollable Spacer */}
      <div className="h-[500vh] w-full invisible" />
    </main>
  );
};

export default App;
