import { MapPin, Users, Briefcase } from 'lucide-react';
import type { Artist } from '@/lib/mock-data';
import GradientButton from '@/components/ui/GradientButton';

interface Props {
  artist: Artist;
}

function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(0) + 'k';
  return n.toString();
}

export default function ArtistCard({ artist }: Props) {
  return (
    <div className="bg-[#0F0F0F] border border-white/[0.08] rounded-xl p-6 card-hover flex flex-col gap-4 group">
      {/* Avatar + info */}
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg"
          style={{ backgroundColor: artist.color }}
        >
          {artist.initials}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-white text-base leading-tight truncate">{artist.name}</h3>
          <p className="text-[#A0A0A0] text-sm mt-0.5 truncate">@{artist.username}</p>
          <p className="text-[#A0A0A0] text-sm mt-0.5 truncate">{artist.title}</p>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1 text-[#555555] text-sm">
        <MapPin size={12} />
        <span>{artist.city}</span>
      </div>

      {/* Bio */}
      <p className="text-[#A0A0A0] text-sm leading-relaxed line-clamp-2">{artist.bio}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {artist.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="bg-white/[0.06] border border-white/[0.08] rounded-full text-xs text-[#A0A0A0] px-3 py-1"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex gap-4 text-sm border-t border-white/[0.06] pt-4">
        <div className="flex items-center gap-1 text-[#A0A0A0]">
          <Users size={13} />
          <span className="font-semibold text-white">{formatNumber(artist.followers)}</span>
          <span>followers</span>
        </div>
        <div className="flex items-center gap-1 text-[#A0A0A0]">
          <Briefcase size={13} />
          <span className="font-semibold text-white">{artist.projects}</span>
          <span>projects</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-auto">
        <a
          href={`/artist/${artist.username}`}
          className="flex-1 text-center py-2 px-4 text-sm font-semibold border border-white/20 rounded-xl hover:border-white/40 text-white transition-all duration-200"
        >
          View Profile
        </a>
        <GradientButton size="sm" className="flex-1">
          Hire
        </GradientButton>
      </div>
    </div>
  );
}
