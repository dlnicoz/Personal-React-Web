import React from 'react';
import { useParams } from 'react-router-dom';
import { DetailView } from './DetailView';
import BackButton from './BackButton';

function ExperiencePage({ data }) {
  const { title } = useParams();
  const { experiences } = data;
  
  const experience = experiences.find(e => e.title === decodeURIComponent(title));

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Experience not found</h1>
          <BackButton />
        </div>
      </div>
    );
  }

  return (
    <div>
      <BackButton />
      <DetailView item={experience} />
    </div>
  );
}

export default ExperiencePage;