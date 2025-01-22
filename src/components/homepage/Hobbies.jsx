import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";  // Import motion and useInView

const Hobbies = (props) => {
  const hobbies = props.hobbies;

  // Ref for the title
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, {
    once: false, // Re-trigger animation every time
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <div className="skills">
      <div
        className="title"
        ref={titleRef}
        style={{
          fontFamily: "iori",
          transform: isInView ? "none" : "translateX(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "transform 0.9s ease, opacity 0.9s ease 0.2s", // Smooth transition
        }}
      >
        Hobbies
      </div>
      <div className="row skills">
        <div
          className="col-12"
          style={{ marginTop: "35px", marginBottom: "15px" }}
        >
          {hobbies.map((hobby, index) => (
            <motion.span
              key={index}
              className="badge badge-light font-josefin"
              style={{
                marginRight: "7px",
                marginBottom: "7px",
                fontSize: "1.0rem",
              }}
              initial={{ opacity: 0, y: 20 }}  // Initial state for animation
              whileInView={{ opacity: 1, y: 0 }}  // Animate to visible position
              transition={{ duration: 0.6, delay: index * 0.2 }}  // Staggered animation delay
            >
              {hobby.title}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
