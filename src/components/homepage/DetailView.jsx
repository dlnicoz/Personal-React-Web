import React from 'react';
import { ImageCarousel } from './ImageCarousel';
import { Code2, Globe, Key, Layers, LightbulbIcon, MapPin, Puzzle as PuzzlePiece, Timer, PenTool as Tool } from 'lucide-react';

export function DetailView({ item }) {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto pt-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
          <img src={item.logo} alt={item.title} className="w-16 h-16 rounded-lg object-cover" />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">{item.title}</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2 text-gray-600">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 flex-shrink-0" />
                <span>{item.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{item.location}</span>
              </div>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                item.status === 'online' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {item.status}
              </span>
            </div>
          </div>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={item.images} />

        {/* Project Overview */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Globe className="w-6 h-6 text-red-600" />
                Project Overview
              </h2>
              <div className="space-y-4">
                <p className="text-lg font-semibold text-gray-900">{item.details.projectOverview.tagline}</p>
                <p className="text-gray-600">{item.details.projectOverview.briefDescription}</p>
                <a 
                  href={item.details.projectOverview.projectLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 text-lg hover:text-blue-800"
                >
                  View Project
                  <Globe className="w-4 h-4 ml-1" />
                </a>
              </div>
            </section>

            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <PuzzlePiece className="w-6 h-6 text-red-600" />
                Problem & Solution
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem Statement</h3>
                  <p className="text-gray-600">{item.details.problemStatement}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Solution</h3>
                  <p className="text-gray-600">{item.details.solution}</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Key className="w-6 h-6 text-red-600" />
                Key Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.details.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <LightbulbIcon className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Tool className="w-6 h-6 text-red-600" />
                Technologies
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">Frontend</h3>
                  <p className="text-gray-900">{item.details.technologiesUsed.frontend}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">Backend</h3>
                  <p className="text-gray-900">{item.details.technologiesUsed.backend}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">Database</h3>
                  <p className="text-gray-900">{item.details.technologiesUsed.database}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500">Others</h3>
                  <p className="text-gray-900">{item.details.technologiesUsed.others}</p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-red-600" />
                Implementation Details
              </h2>
              <div className="space-y-4">
                {Object.entries(item.details.methodologiesAndComplexImplementations).map(([key, value]) => (
                  <div key={key}>
                    <h3 className="text-sm font-semibold text-gray-500 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <p className="text-gray-900">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6 text-red-600" />
                Challenges & Solutions
              </h2>
              <p className="text-gray-600">{item.details.challengesAndSolutions}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}