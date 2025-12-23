import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Flower2, Sprout, Wind, Grape } from 'lucide-react';

interface FloralFrameProps {
  currentSection: string;
}

const FloralFrame: React.FC<FloralFrameProps> = ({ currentSection }) => {
  const color = "#482F7A"; // Alfalfa Purple

  const getVariant = () => {
    switch (currentSection) {
      case 'venue': return 'venue';
      case 'details': return 'details';
      case 'rsvp': return 'rsvp'; // Using Grape/Vine for "Embracing"
      case 'registry': return 'registry';
      default: return null;
    }
  };

  const variant = getVariant();

  if (!variant) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none hidden md:block overflow-hidden">
      <AnimatePresence mode="wait">
        {variant && (
          <motion.div
            key={variant}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Render Composition based on Variant */}
            
            {/* --- VENUE (The Foundation: Strong Leaves) --- */}
            {variant === 'venue' && (
              <>
                {/* Left Vine */}
                <div className="absolute bottom-0 left-0 w-64 h-96">
                   <Leaf className="absolute bottom-[-10px] left-[-10px] w-24 h-24" color={color} fill={color} style={{ transform: 'rotate(15deg)' }} />
                   <Leaf className="absolute bottom-16 left-2 w-20 h-20" color={color} fill={color} style={{ transform: 'rotate(-45deg)' }} />
                   <Leaf className="absolute bottom-36 left-[-10px] w-16 h-16" color={color} fill={color} style={{ transform: 'rotate(30deg)' }} />
                   <Leaf className="absolute bottom-52 left-8 w-12 h-12" color={color} fill={color} style={{ transform: 'rotate(-15deg)' }} />
                </div>
                {/* Right Vine */}
                <div className="absolute bottom-0 right-0 w-64 h-96">
                   <Leaf className="absolute bottom-[-10px] right-[-10px] w-24 h-24" color={color} fill={color} style={{ transform: 'rotate(-15deg) scaleX(-1)' }} />
                   <Leaf className="absolute bottom-16 right-2 w-20 h-20" color={color} fill={color} style={{ transform: 'rotate(45deg) scaleX(-1)' }} />
                   <Leaf className="absolute bottom-36 right-[-10px] w-16 h-16" color={color} fill={color} style={{ transform: 'rotate(-30deg) scaleX(-1)' }} />
                   <Leaf className="absolute bottom-52 right-8 w-12 h-12" color={color} fill={color} style={{ transform: 'rotate(15deg) scaleX(-1)' }} />
                </div>
              </>
            )}

            {/* --- DETAILS (The Information: Elegant Sprouts/Wind) --- */}
            {variant === 'details' && (
               <>
                 <div className="absolute bottom-0 left-0 w-64 h-96">
                    <Sprout className="absolute bottom-[-20px] left-[-20px] w-32 h-32" color={color} strokeWidth={1.5} />
                    <Wind className="absolute bottom-24 left-4 w-24 h-24 opacity-60" color={color} strokeWidth={1} style={{ transform: 'rotate(-45deg)' }} />
                    <Sprout className="absolute bottom-10 left-16 w-16 h-16" color={color} strokeWidth={1.5} style={{ transform: 'scaleX(-1) rotate(20deg)' }} />
                 </div>
                 <div className="absolute bottom-0 right-0 w-64 h-96">
                    <Sprout className="absolute bottom-[-20px] right-[-20px] w-32 h-32" color={color} strokeWidth={1.5} style={{ transform: 'scaleX(-1)' }} />
                    <Wind className="absolute bottom-24 right-4 w-24 h-24 opacity-60" color={color} strokeWidth={1} style={{ transform: 'rotate(45deg) scaleX(-1)' }} />
                    <Sprout className="absolute bottom-10 right-16 w-16 h-16" color={color} strokeWidth={1.5} style={{ transform: 'rotate(-20deg)' }} />
                 </div>
               </>
            )}

            {/* --- RSVP (The Welcome: Embracing Grapes/Vines) --- */}
            {variant === 'rsvp' && (
                <>
                  <div className="absolute bottom-0 left-0 w-64 h-96">
                     <Grape className="absolute bottom-4 left-[-10px] w-24 h-24" color={color} fill={color} style={{ transform: 'rotate(10deg)' }} />
                     <div className="absolute bottom-0 left-10 w-1 h-64 bg-[#482F7A] rounded-full opacity-20 rotate-[-5deg] origin-bottom"></div>
                     <Leaf className="absolute bottom-32 left-8 w-12 h-12" color={color} fill={color} style={{ transform: 'rotate(-30deg)' }} />
                     <Grape className="absolute bottom-52 left-0 w-16 h-16" color={color} fill={color} style={{ transform: 'rotate(45deg)' }} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-64 h-96">
                     <Grape className="absolute bottom-4 right-[-10px] w-24 h-24" color={color} fill={color} style={{ transform: 'rotate(-10deg) scaleX(-1)' }} />
                     <div className="absolute bottom-0 right-10 w-1 h-64 bg-[#482F7A] rounded-full opacity-20 rotate-[5deg] origin-bottom"></div>
                     <Leaf className="absolute bottom-32 right-8 w-12 h-12" color={color} fill={color} style={{ transform: 'rotate(30deg) scaleX(-1)' }} />
                     <Grape className="absolute bottom-52 right-0 w-16 h-16" color={color} fill={color} style={{ transform: 'rotate(-45deg) scaleX(-1)' }} />
                  </div>
                </>
            )}

            {/* --- REGISTRY (The Decorative: Flowers) --- */}
            {variant === 'registry' && (
                <>
                  <div className="absolute bottom-0 left-0 w-64 h-96">
                     <Flower2 className="absolute bottom-[-10px] left-[-10px] w-32 h-32" color={color} fill={color} strokeWidth={1} />
                     <Flower2 className="absolute bottom-24 left-10 w-20 h-20" color={color} fill={color} strokeWidth={1} style={{ transform: 'rotate(45deg)' }} />
                     <Flower2 className="absolute bottom-48 left-0 w-16 h-16" color={color} fill={color} strokeWidth={1} style={{ transform: 'rotate(-15deg)' }} />
                     <Sprout className="absolute bottom-10 left-24 w-12 h-12" color={color} strokeWidth={2} />
                  </div>
                   <div className="absolute bottom-0 right-0 w-64 h-96">
                     <Flower2 className="absolute bottom-[-10px] right-[-10px] w-32 h-32" color={color} fill={color} strokeWidth={1} style={{ transform: 'scaleX(-1)' }} />
                     <Flower2 className="absolute bottom-24 right-10 w-20 h-20" color={color} fill={color} strokeWidth={1} style={{ transform: 'rotate(-45deg) scaleX(-1)' }} />
                     <Flower2 className="absolute bottom-48 right-0 w-16 h-16" color={color} fill={color} strokeWidth={1} style={{ transform: 'rotate(15deg) scaleX(-1)' }} />
                     <Sprout className="absolute bottom-10 right-24 w-12 h-12" color={color} strokeWidth={2} style={{ transform: 'scaleX(-1)' }} />
                  </div>
                </>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloralFrame;
