import { MapPin, Clock, Heart } from 'lucide-react';
import type { Job } from '@/lib/mock-data';
import GradientButton from '@/components/ui/GradientButton';
import { clsx } from 'clsx';

interface Props {
  job: Job;
}

const typeBadge: Record<string, string> = {
  'Freelance': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  'Full-time': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Part-time': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Gig': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
};

export default function JobCard({ job }: Props) {
  const badgeClass = typeBadge[job.type] ?? 'bg-white/10 text-white/60 border-white/20';

  return (
    <div className="bg-[#0F0F0F] border border-white/[0.08] rounded-xl p-6 card-hover group">
      <div className="flex items-start gap-4">
        {/* Company avatar */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg"
          style={{ backgroundColor: job.color }}
        >
          {job.initials}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <h3 className="font-bold text-white text-base">{job.title}</h3>
              <p className="text-[#A0A0A0] text-sm mt-0.5">{job.company}</p>
            </div>
            <button className="text-[#555555] hover:text-white transition-colors flex-shrink-0" aria-label="Save job">
              <Heart size={18} />
            </button>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <div className="flex items-center gap-1 text-[#555555] text-sm">
              <MapPin size={12} />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1 text-[#555555] text-sm">
              <Clock size={12} />
              <span>{job.posted}</span>
            </div>
            <span className={clsx('border rounded-full text-xs px-3 py-0.5 font-medium', badgeClass)}>
              {job.type}
            </span>
          </div>

          {/* Salary */}
          <p className="mt-2 text-emerald-400 font-semibold text-sm">{job.salary}</p>

          {/* Description */}
          <p className="text-[#A0A0A0] text-sm mt-3 leading-relaxed line-clamp-2">{job.description}</p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-3">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="bg-white/[0.06] border border-white/[0.08] rounded-full text-xs text-[#A0A0A0] px-3 py-1"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Apply */}
          <div className="mt-4">
            <GradientButton size="sm">Apply Now</GradientButton>
          </div>
        </div>
      </div>
    </div>
  );
}
