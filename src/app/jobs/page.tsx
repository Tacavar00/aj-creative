'use client';

import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import JobCard from '@/components/cards/JobCard';
import { jobs } from '@/lib/mock-data';

const jobTypes = ['All', 'Freelance', 'Full-time', 'Part-time', 'Gig'];
const locations = ['All', 'Miami, FL', 'Remote', 'New York, NY', 'Los Angeles, CA'];

export default function JobsPage() {
  const [activeType, setActiveType] = useState('All');
  const [activeLocation, setActiveLocation] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = jobs.filter((job) => {
    const matchType = activeType === 'All' || job.type === activeType;
    const matchLocation = activeLocation === 'All' || job.location === activeLocation;
    const matchSearch =
      searchQuery === '' ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchType && matchLocation && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/3 w-80 h-80 bg-blue-600/15 blur-[120px] rounded-full" />
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-violet-600/10 blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 text-center">
          <span className="bg-white/[0.06] border border-white/[0.08] rounded-full text-sm px-4 py-1.5 text-[#A0A0A0] mb-6 inline-block">
            {jobs.length} open positions
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Creative <span className="gradient-text">Jobs</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-xl mx-auto mb-8">
            Freelance, full-time, and gig opportunities for serious creatives
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#555555]" />
            <input
              type="text"
              placeholder="Search jobs, companies, skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0F0F0F] border border-white/[0.08] rounded-xl pl-11 pr-4 py-4 text-white placeholder:text-[#555555] focus:outline-none focus:border-white/20 transition-colors text-base"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-3 items-center">
          {/* Type filter */}
          <div className="flex gap-2 overflow-x-auto">
            {jobTypes.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`flex-shrink-0 rounded-full text-sm px-4 py-2 font-medium transition-all duration-200 ${
                  activeType === type
                    ? 'bg-gradient-to-r from-violet-600 via-blue-600 to-pink-600 text-white shadow-lg shadow-violet-500/25'
                    : 'bg-white/[0.06] border border-white/[0.08] text-[#A0A0A0] hover:border-white/20 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Location filter */}
          <div className="relative flex-shrink-0">
            <MapPin size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#555555]" />
            <select
              value={activeLocation}
              onChange={(e) => setActiveLocation(e.target.value)}
              className="bg-[#0F0F0F] border border-white/[0.08] rounded-xl pl-9 pr-4 py-2 text-sm text-[#A0A0A0] focus:outline-none focus:border-white/20 appearance-none cursor-pointer hover:border-white/20 transition-colors"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc} className="bg-[#0F0F0F]">
                  {loc === 'All' ? 'All Locations' : loc}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Job listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <p className="text-[#555555] text-sm mb-6">
          {filtered.length} job{filtered.length !== 1 ? 's' : ''} found
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#555555]">
            <p className="text-lg">No jobs match your filters. Try adjusting your search.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
