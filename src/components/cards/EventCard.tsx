import { Users, Trophy, Calendar } from 'lucide-react';
import type { Event } from '@/lib/mock-data';
import GradientButton from '@/components/ui/GradientButton';

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <div className="bg-[#0F0F0F] border border-white/[0.08] rounded-xl overflow-hidden card-hover">
      {/* Gradient accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${event.gradient}`} />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h3 className="font-bold text-white text-lg">{event.title}</h3>
            <p className="text-sm font-medium mt-1 gradient-text">{event.subtitle}</p>
          </div>
          <div className="flex items-center gap-1 text-[#A0A0A0] text-sm bg-white/[0.06] border border-white/[0.08] rounded-full px-3 py-1">
            <Users size={13} />
            <span>{event.participants.toLocaleString()} participants</span>
          </div>
        </div>

        <p className="text-[#A0A0A0] text-sm mt-4 leading-relaxed">{event.description}</p>

        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-2 text-sm">
            <Trophy size={14} className="text-amber-400" />
            <span className="text-amber-400 font-semibold">{event.prize}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#A0A0A0]">
            <Calendar size={14} />
            <span>Deadline: {event.deadline}</span>
          </div>
        </div>

        <div className="mt-5">
          <GradientButton size="sm">Join Challenge</GradientButton>
        </div>
      </div>
    </div>
  );
}
