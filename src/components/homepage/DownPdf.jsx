import React, { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import resume from '../../assets/resume.pdf';

const DownPdf = () => {
  const titleRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const isInView = useInView(titleRef, {
    once: false,
    threshold: 0.5,
  });

  return (
    <div className="resume inline">
      <motion.a
        className="text-[#2284EC] hover:text-black flex items-center gap-2 relative"
        href={resume}
        download="resume.pdf"
        target="_blank"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <div
          ref={titleRef}
          className="flex items-center gap-2"
          style={{
            fontFamily: 'iori',
            transform: isInView ? 'none' : 'translateX(-50px)',
            opacity: isInView ? 1 : 0,
            transition: 'transform 0.9s ease, opacity 0.9s ease 0.2s',
          }}
        >
          Resume
          <Download 
            size={30} 
            className="text-[#2284EC] transition-colors duration-200"
          />
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                y: 8, 
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                  mass: 0.8
                }
              }}
              exit={{ 
                opacity: 0,
                y: -10,
                scale: 0.9,
                transition: {
                  duration: 0.2
                }
              }}
              className="absolute left-0 top-full bg-black text-white text-xs py-1.5 px-3 rounded whitespace-nowrap z-10"
            >
              Download Resume PDF
              <div className="absolute -top-1 left-6 w-2 h-2 bg-black transform rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.a>
    </div>
  );
};

export default DownPdf;