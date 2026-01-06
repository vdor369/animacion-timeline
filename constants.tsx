
import { TagData } from './types';

/**
 * GRID-BASED COLLISION AVOIDANCE STRATEGY:
 * 1. VERTICAL: 10 fixed lanes (Top: 5, 12, 19, 26, 33 | Bottom: 67, 74, 81, 88, 95).
 *    The area between 33% and 67% is reserved for hero text.
 * 2. HORIZONTAL: Tags are distributed across lanes. If multiple tags occupy the same lane, 
 *    they are spaced horizontally by at least 30% initialX.
 * 3. SPEED: Parallax offsets are calibrated so faster tags don't "overtake" slower ones
 *    within the visible scroll range if they start too close.
 */

export const TAGS_CONFIG: TagData[] = [
  // --- UPPER LANES (5% to 33%) ---
  // Lane 1: 5%
  { id: '1', text: 'Success Designed Differently', color: '#E97EFF', top: '5%', initialX: '15%', group: 'medium' },
  { id: '2', text: 'Team', color: '#F2FBE0', top: '5%', initialX: '75%', group: 'slow' },
  
  // Lane 2: 12%
  { id: '3', text: 'Sexyness', color: '#34B550', top: '12%', initialX: '40%', group: 'fast' },
  { id: '4', text: 'Design', color: '#F05E23', top: '12%', initialX: '90%', group: 'medium' },
  
  // Lane 3: 19%
  { id: '5', text: 'UI/UX', color: '#CBBEDC', top: '19%', initialX: '10%', group: 'slow' },
  { id: '6', text: 'Digital Strategy', color: '#DBEAFE', top: '19%', initialX: '60%', group: 'fast' },
  
  // Lane 4: 26%
  { id: '7', text: 'Miami', color: '#CBBEDC', top: '26%', initialX: '30%', group: 'medium' },
  { id: '8', text: 'The First The Last', color: '#F49FC5', top: '26%', initialX: '80%', group: 'slow' },
  
  // Lane 5: 33%
  { id: '9', text: 'Insights', color: '#F5CC53', top: '33%', initialX: '55%', group: 'medium' },
  { id: '10', text: 'Development', color: '#F2FBE0', top: '33%', initialX: '15%', group: 'fast' },

  // --- LOWER LANES (67% to 95%) ---
  // Lane 6: 67%
  { id: '11', text: 'Success Designed Differently', color: '#E97EFF', top: '67%', initialX: '20%', group: 'slow' },
  { id: '12', text: 'Team', color: '#34B550', top: '67%', initialX: '70%', group: 'medium' },
  
  // Lane 7: 74%
  { id: '13', text: 'Sexyness', color: '#F5CC53', top: '74%', initialX: '5%', group: 'fast' },
  { id: '14', text: 'Insights', color: '#F49FC5', top: '74%', initialX: '45%', group: 'medium' },
  { id: '15', text: 'Development', color: '#F05E23', top: '74%', initialX: '85%', group: 'slow' },
  
  // Lane 8: 81%
  { id: '16', text: 'Awwwwards', color: '#CBBEDC', top: '81%', initialX: '25%', group: 'fast' },
  { id: '17', text: 'Brand identity', color: '#F49FC5', top: '81%', initialX: '65%', group: 'medium' },
  
  // Lane 9: 88%
  { id: '18', text: 'Marketing', color: '#CBBEDC', top: '88%', initialX: '10%', group: 'slow' },
  { id: '19', text: 'Strong Messages', color: '#F05E23', top: '88%', initialX: '50%', group: 'fast' },
  { id: '20', text: 'Creative Strategy', color: '#F2FBE0', top: '88%', initialX: '90%', group: 'medium' },
  
  // Lane 10: 95%
  { id: '21', text: 'Visual Language', color: '#F05E23', top: '95%', initialX: '35%', group: 'medium' },
  { id: '22', text: 'Digital Experience', color: '#E97EFF', top: '95%', initialX: '75%', group: 'slow' },
  { id: '23', text: 'Dubai', color: '#34B550', top: '95%', initialX: '15%', group: 'fast' },
  { id: '24', text: 'Design', color: '#CBBEDC', top: '95%', initialX: '55%', group: 'medium' },
  { id: '25', text: 'Development', color: '#F2FBE0', top: '81%', initialX: '95%', group: 'slow' },
  { id: '26', text: 'Insights', color: '#F05E23', top: '67%', initialX: '45%', group: 'fast' },
];

export const MAX_CANVAS_WIDTH = 1728;

// Parallax offsets (all moving LEFT)
// Scaled for a smooth scroll experience across the 500vh height
export const PARALLAX_OFFSETS = {
  fast: -1400,
  medium: -800,
  slow: -300
};
