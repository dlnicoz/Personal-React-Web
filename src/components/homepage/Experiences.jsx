import React, { Fragment, useRef } from "react";
import { useInView } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import Divider from "../layout/Divider";

const Experience = React.memo((props) => {
  const experiences = props.experiences;

  // Ref for the title
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, {
    once: false, // Re-trigger animation every time
    threshold: 0.5, // Animation triggers when 50% of the element is visible
  });

  return (
    <div className="row experience" style={{ marginTop: "60px" }}>
      <div
        className="col-12 title"
        ref={titleRef}
        style={{
          fontFamily: "iori",
          margin: "0px",
          transform: isInView ? "none" : "translateX(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "transform 0.9s ease, opacity 0.9s ease 0.2s", // Smooth transition with slight delay
        }}
      >
        Experiences
      </div>
      <Divider size="medium"></Divider>
      {experiences.map((experience) => (
        <Fragment key={experience.id}>
          <ExperienceItem experience={experience}></ExperienceItem>
          <Divider size="medium"></Divider>
        </Fragment>
      ))}
    </div>
  );
});

export default Experience;
