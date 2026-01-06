
import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { TagData } from '../types';
import { PARALLAX_OFFSETS } from '../constants';

interface TagProps {
  data: TagData;
  index: number;
  scrollProgress: MotionValue<number>;
}

const Tag: React.FC<TagProps> = ({ data, index, scrollProgress }) => {
  // Use group-specific speed offsets for parallax effect
  const maxOffset = PARALLAX_OFFSETS[data.group] || -800;
  
  const xTranslate = useTransform(
    scrollProgress, 
    [0, 1], 
    [0, maxOffset]
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: index * 0.012, 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="absolute flex items-center justify-center pointer-events-auto cursor-default select-none"
      style={{
        top: data.top,
        left: data.initialX,
        x: xTranslate,
        zIndex: data.group === 'fast' ? 10 : data.group === 'medium' ? 8 : 6,
      }}
    >
      <div 
        className="px-4 py-2 md:px-5 md:py-2.5 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-black/5 flex items-center justify-center"
        style={{ 
          backgroundColor: data.color,
          borderRadius: '2px', // Clean, straight edges
          transform: 'none' // Removed tilt, strictly horizontal
        }}
      >
        <span className="text-[11px] md:text-[13px] font-bold tracking-tight text-black/90 whitespace-nowrap">
          {data.text}
        </span>
      </div>
    </motion.div>
  );
};

export default Tag;
