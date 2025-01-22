import React, { Fragment, useRef } from 'react';
import { useInView } from 'framer-motion';
import ProjectItem from './ProjectItem';
import Divider from '../layout/Divider';

const Projects = (props) => {
  const projects = props.projects;

  // Ref for the title
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, {
    once: false, // Re-trigger animation every time
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  return (
    <div className='row experience'>
      <div
        className='col-12 title'
        ref={titleRef}
        style={{
          fontFamily: 'iori',
          margin: '0px',
          transform: isInView ? 'none' : 'translateX(-50px)',
          opacity: isInView ? 1 : 0,
          transition: 'transform 0.9s ease, opacity 0.9s ease 0.2s',
        }}
      >
        Projects
      </div>
      <Divider size='medium'></Divider>
      {projects.map((project) => (
        <Fragment key={project.id}>
          <ProjectItem projects={project}></ProjectItem>
          <Divider size='medium'></Divider>
        </Fragment>
      ))}
    </div>
  );
};

export default Projects;
