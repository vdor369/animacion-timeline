
import React from 'react';
import { MotionValue } from 'framer-motion';
import Tag from './Tag';
import { TAGS_CONFIG } from '../constants';

interface TagCloudProps {
  scrollProgress: MotionValue<number>;
}

const TagCloud: React.FC<TagCloudProps> = ({ scrollProgress }) => {
  return (
    <div className="absolute inset-0 w-full h-full z-20 pointer-events-none">
      {TAGS_CONFIG.map((tag, index) => (
        <Tag 
          key={tag.id} 
          data={tag} 
          index={index} 
          scrollProgress={scrollProgress}
        />
      ))}
    </div>
  );
};

export default TagCloud;
