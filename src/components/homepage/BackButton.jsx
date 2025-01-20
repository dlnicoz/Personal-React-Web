import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function BackButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show button when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } 
      // Hide button when scrolling down
      else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Link
      to="/"
      className={`fixed left-4 z-50 flex items-center gap-2 transition-all duration-300 ${
        isVisible 
          ? 'top-4 opacity-100' 
          : '-top-20 opacity-0'
      }`}
    >
      <div className="bg-white/80 backdrop-blur-sm p-3 rounded-full hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
        <ArrowLeft className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
      </div>
    </Link>
  );
}
export default BackButton;