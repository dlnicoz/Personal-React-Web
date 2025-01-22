import React, { Fragment, useRef } from "react";
import { useInView , motion } from "framer-motion";
import SkillItem from "./SkillItem";
import "bootstrap/dist/css/bootstrap.min.css";

// import "../../App.css";

const Skills = (props) => {
  const skills = props.skills;

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
          fontFamily: 'iori',
          transform: isInView ? 'none' : 'translateX(-50px)',
          opacity: isInView ? 1 : 0,
          transition: 'transform 0.9s ease, opacity 0.9s ease 0.2s',
        }}
      >
        Skills
      </div>
      {skills.map((skill) => (
        <div className="row skills" key={skill.id}>
          <div
            className="col-12"
            style={{ marginTop: "35px", marginBottom: "35px" }}
          >
            <motion.div
              className="skillName"
              style={{
                color: skill.header.color,
              }}
              initial={{ opacity: 0, y: 20 }}  // Initial state for animation
              whileInView={{ opacity: 1, y: 0 }}  // Animate to visible position
              transition={{ duration: 0.6 }}  // Transition duration
            >
              {skill.header.name}
            </motion.div>
            <div
              className="progress"
              style={{
                marginTop: "10px",
              }}
            >
              <div
                className="progress-bar"
                style={{
                  width: skill.header.percent + "%",
                  backgroundColor: skill.header.color,
                }}
              ></div>
            </div>
          </div>
          {skill.skills.map((skill) => (
            <Fragment key={skill.id}>
              <SkillItem skill={skill}></SkillItem>
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
