import React, { Fragment, useRef } from 'react';
import { useInView } from 'framer-motion';
import EducationItem from './EducationItem';
import Divider from '../layout/Divider';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const Education = React.memo((props) => {
  const educations = props.educations;

  // Ref for the title
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, {
    once: false, // Re-trigger animation every time
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <div className="educations">
      <div
        className="title"
        ref={titleRef}
        style={{
          fontFamily: 'iori',
          transform: isInView ? 'none' : 'translateX(-50px)',
          opacity: isInView ? 1 : 0,
          transition: 'transform 0.9s ease, opacity 0.9s ease 0.2s', // Smooth transition with slight delay
        }}
      >
        Educations
      </div>
      <div className="description" style={{ paddingTop: '30px' }}>
        {educations.map((education) => (
          <Fragment key={education.id}>
            <Divider size="large" />
            <EducationItem education={education} />
          </Fragment>
        ))}
      </div>
    </div>
  );
});

export default Education;
