import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailView } from './DetailView';
import BackButton from './BackButton';

function ProjectPage({ data }) {
  const { title } = useParams();
  const { projects } = data;
  
  const project = projects.find(e => e.title === decodeURIComponent(title));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h1>
          <BackButton />
        </div>
      </div>
    );
  }

  return (
    <div>
      <BackButton />
      <DetailView item={project} />
    </div>
  );
}

export default ProjectPage;