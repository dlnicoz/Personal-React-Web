import React, { Fragment, useState, useEffect } from "react";
import { motion } from "framer-motion";
import profile from "../../assets/mainprofile.webp";
import profile1 from "../../assets/profile1.webp";
import profile2 from "../../assets/profile2.webp";
import profile3 from "../../assets/profile3.webp";

const Images = () => {
  const gallery = [profile, profile1, profile2, profile3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatic image change every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 7000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [gallery.length]);

  // Handle image change on click
  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  };

  return (
    <Fragment>
      <motion.div
        className="d-none d-lg-block left-big-image"
        id="mypicDiv"
        onClick={handleClick} // Change image on click
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          backgroundImage: `url(${gallery[currentImageIndex]})`,
          backgroundColor: "#0d1117",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "450px",
          height: "450px",
          marginBottom: "50px",
          marginTop: "60px",
          borderRadius: "15px",
          cursor: "pointer",
        }}
      >
        <div id="overlay"></div>
      </motion.div>
    </Fragment>
  );
};

export default Images;
