import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import splashImg from '../assets/splash.png';

interface SplashViewProps {
  onComplete: () => void;
}

const SplashView: React.FC<SplashViewProps> = ({ onComplete }) => {
  const [showTap, setShowTap] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTap(true);
    }, 2500); // 1.0s fade + 0.5s static + some buffer
    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 1000); // Match fade-out duration
  };

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          id="brand-splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[10000] cursor-pointer"
          onClick={handleStart}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
            className="flex items-center justify-center p-8"
          >
            <img 
              src={splashImg} 
              alt="Brand Logo" 
              className="max-w-[80%] max-h-[60vh] object-contain"
            />
          </motion.div>

          {showTap && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 1] }}
              transition={{ 
                opacity: { duration: 1, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
              }}
              className="absolute bottom-[25%] text-gray-400 text-lg font-medium"
            >
              タップしてスタート
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashView;
