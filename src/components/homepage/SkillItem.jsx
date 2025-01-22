import React from 'react';
import { motion } from 'framer-motion';  // Import motion

const SkillItem = (props) => {
  let badgeClass = 'light';
  const skill = props.skill;

  switch (skill.degree) {
    case 'senior':
      badgeClass = 'warning';
      break;
    case 'intermediate':
      badgeClass = 'light';
      break;
    case 'junior':
      badgeClass = 'dark';
      break;
    default:
      badgeClass = 'light';
  }

  return (
    <motion.div
      className='col-lg-6 col-sm-12'
      style={{ marginBottom: '7px' }}
      initial={{ opacity: 0, y: 20 }}  // Initial state for animation
      whileInView={{ opacity: 1, y: 0 }}  // Animate to visible position
      transition={{ duration: 0.6 }}  // Transition duration
    >
      <div className='skillName'>{skill.name}</div>
      <span
        className={`badge badge-${badgeClass}`}
        style={{ float: 'right', fontFamily: 'iori' }}
      >
        {skill.degree.toUpperCase()}
      </span>
    </motion.div>
  );
};

export default SkillItem;
