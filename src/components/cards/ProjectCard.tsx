import { Eye } from 'lucide-react';
import type { Project } from '@/lib/mock-data';

interface Props {
  project: Project;
}

function formatViews(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-[#0F0F0F] border border-white/[0.08] rounded-xl overflow-hidden card-hover group cursor-pointer">
      {/* Gradient image placeholder */}
      <div className={`relative w-full aspect-square bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/40 flex items-center justify-center transition-all duration-300">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
            <Eye size={20} className="text-white" />
          </div>
        </div>
        {/* Decorative abstract shapes */}
        <div className="w-24 h-24 rounded-full bg-white/10 blur-xl" />
        <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white/5 blur-lg" />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-bold text-white text-sm truncate">{project.title}</h3>
        <p className="text-[#A0A0A0] text-xs mt-1">{project.artist}</p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex flex-wrap gap-1">
            {project.skills.slice(0, 2).map((skill) => (
              <span
                key={skill}
                className="bg-white/[0.06] border border-white/[0.08] rounded-full text-xs text-[#A0A0A0] px-2 py-0.5"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1 text-[#555555] text-xs">
            <Eye size={11} />
            <span>{formatViews(project.views)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
