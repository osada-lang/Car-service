import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import splashImg from '../assets/splash.png';

interface SplashViewProps {
  onComplete: () => void;
}

const SplashView: React.FC<SplashViewProps> = ({ onComplete }) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showTap, setShowTap] = useState(false);

  useEffect(() => {
    // Standard sequence:
    // 0s: start
    // 0.1s: logo fade-in starts (1s)
    // 1.1s: logo is fully visible
    // 1.6s: logo fade-out starts (1s)
    // 2.6s: logo is hidden, tap text appears

    const showLogoTimer = setTimeout(() => setShowLogo(true), 100);
    const hideLogoTimer = setTimeout(() => setShowLogo(false), 1600);
    const showTapTimer = setTimeout(() => setShowTap(true), 2600);

    return () => {
      clearTimeout(showLogoTimer);
      clearTimeout(hideLogoTimer);
      clearTimeout(showTapTimer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
      className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[10000] cursor-pointer touch-none"
      onClick={onComplete}
    >
      <motion.div
        animate={{ opacity: showLogo ? 1 : 0, scale: showLogo ? 1 : 0.9 }}
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
          style={{ color: '#999', fontSize: '1rem' }}
          className="absolute bottom-[25%] font-medium tracking-wider"
        >
          タップしてスタート
        </motion.p>
      )}
    </motion.div>
  );
};

export default SplashView;
