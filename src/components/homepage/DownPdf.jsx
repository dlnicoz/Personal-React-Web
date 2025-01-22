import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import logolink from '../../assets/link.webp';
import resume from '../../assets/resume.pdf';

const DownPdf = () => {
  // Ref for the title
  const titleRef = useRef(null);
  
  const isInView = useInView(titleRef, {
    once: false, // Re-trigger animation every time
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <div className="resume inline">
      <a
        className="text-[#fd1056] hover:text-red-600"
        href={resume}
        download="resume.pdf"
        target="_blank"
      >
        <div
          ref={titleRef}
          style={{
            fontFamily: 'iori',
            transform: isInView ? 'none' : 'translateX(-50px)',
            opacity: isInView ? 1 : 0,
            transition: 'transform 0.9s ease, opacity 0.9s ease 0.2s', // Smooth transition with slight delay
          }}
        >
          Resume
        </div>
      </a>
    </div>
  );
};

export default DownPdf;
