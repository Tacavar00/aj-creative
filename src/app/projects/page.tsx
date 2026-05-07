'use client';

import { useState } from 'react';
import ProjectCard from '@/components/cards/ProjectCard';
import { projects } from '@/lib/mock-data';

const skills = [
  'All',
  'Illustration',
  '3D Art',
  'Typography',
  'Concept Art',
  'Murals',
  'Photography',
  'Brand Identity',
  'Ceramics',
  'Fashion',
  'Motion',
  'Sculpture',
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.skills.some((s) => s.toLowerCase().includes(activeFilter.toLowerCase())));

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-pink-600/15 blur-[120px] rounded-full" />
          <div className="absolute top-0 right-1/3 w-64 h-64 bg-violet-600/10 blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 text-center">
          <span className="bg-white/[0.06] border border-white/[0.08] rounded-full text-sm px-4 py-1.5 text-[#A0A0A0] mb-6 inline-block">
            {projects.length} featured projects
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Creative <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-xl mx-auto">
            Explore the best work from our global community of professional artists
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {skills.map((skill) => (
            <button
              key={skill}
              onClick={() => setActiveFilter(skill)}
              className={`flex-shrink-0 rounded-full text-sm px-4 py-2 font-medium transition-all duration-200 ${
                activeFilter === skill
                  ? 'bg-gradient-to-r from-violet-600 via-blue-600 to-pink-600 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-white/[0.06] border border-white/[0.08] text-[#A0A0A0] hover:border-white/20 hover:text-white'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#555555]">
            <p className="text-lg">No projects found for this filter. Try another category.</p>
          </div>
        ) : (
          <>
            <p className="text-[#555555] text-sm mb-6">{filtered.length} project{filtered.length !== 1 ? 's' : ''} found</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold border border-white/20 rounded-xl hover:border-white/40 text-white transition-all duration-200 hover:scale-[1.02]">
            Load More Projects
          </button>
        </div>
      </div>
    </div>
  );
}
