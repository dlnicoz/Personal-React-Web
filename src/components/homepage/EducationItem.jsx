import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { motion } from 'framer-motion';  // Import motion

const EducationItem = (props) => {
  const education = props.education;
  return (
    <motion.div
      className='row'
      style={{ padding: '0px', margin: '0px' }}
      initial={{ opacity: 0, y: 20 }}  // Initial state for animation
      whileInView={{ opacity: 1, y: 0 }}  // Animate to visible position
      transition={{ duration: 0.6 }}  // Transition duration
    >
      <div className='col-lg-1 d-none d-lg-block'>
        <img
          src={education.logo}
          className='img-fluid company-logo'
          alt=''
        ></img>
      </div>
      <div className='col-lg-8 col-sm-12'>
        <h5 className='text-xl mb-2' style={{ fontFamily: 'iori' }}>{education.title}</h5>
      </div>
      <div className='col-lg-3 '>
        <h6 style={{ fontFamily: 'iori' }} className='showTime mb-2'>
          {education.time}
        </h6>
      </div>
      <div
        className='col-lg-11 offset-lg-1'
        style={{ textAlign: 'justify', fontSize: '0.8rem' }}
      >
        <h6>{education.description}</h6>
      </div>
    </motion.div>
  );
};

export default EducationItem;
