import { Users, Trophy, Calendar, Zap } from 'lucide-react';
import EventCard from '@/components/cards/EventCard';
import GradientButton from '@/components/ui/GradientButton';
import { events } from '@/lib/mock-data';

export default function EventsPage() {
  const featured = events[0];
  const rest = events.slice(1);

  const totalParticipants = events.reduce((sum, e) => sum + e.participants, 0);
  const activeCount = events.length;

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-pink-600/15 blur-[120px] rounded-full" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-violet-600/10 blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 text-center">
          <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 mb-6">
            <Zap size={14} className="text-amber-400" />
            <span className="text-sm text-[#A0A0A0]">{activeCount} active challenges</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
            Challenges & <span className="gradient-text">Events</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-xl mx-auto">
            Compete, collaborate, and grow. Win prizes, earn recognition, build your reputation.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <div className="bg-[#0F0F0F] border border-white/[0.08] rounded-xl px-6 py-3 flex items-center gap-3">
              <Users size={16} className="text-violet-400" />
              <div className="text-left">
                <p className="text-white font-bold text-sm">{totalParticipants.toLocaleString()}+</p>
                <p className="text-[#555555] text-xs">Total participants</p>
              </div>
            </div>
            <div className="bg-[#0F0F0F] border border-white/[0.08] rounded-xl px-6 py-3 flex items-center gap-3">
              <Trophy size={16} className="text-amber-400" />
              <div className="text-left">
                <p className="text-white font-bold text-sm">{activeCount} Active</p>
                <p className="text-[#555555] text-xs">Open challenges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured challenge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-lg font-semibold text-white mb-4">Featured Challenge</h2>
        <div className="relative gradient-border rounded-2xl overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${featured.gradient} opacity-[0.07] pointer-events-none`} />
          <div className="relative z-10 p-8 md:p-12">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex-1 min-w-0">
                <div className={`inline-block h-1.5 w-12 rounded-full bg-gradient-to-r ${featured.gradient} mb-6`} />
                <h3 className="text-2xl md:text-4xl font-black text-white mb-2">{featured.title}</h3>
                <p className="text-lg font-semibold gradient-text mb-4">{featured.subtitle}</p>
                <p className="text-[#A0A0A0] text-base leading-relaxed max-w-2xl mb-6">{featured.description}</p>

                {/* Rules */}
                {featured.rules && (
                  <ul className="space-y-2 mb-6">
                    {featured.rules.map((rule) => (
                      <li key={rule} className="flex items-center gap-2 text-[#A0A0A0] text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                        {rule}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-4 items-center">
                  <GradientButton href="/events/join" size="lg">
                    Join Challenge
                  </GradientButton>
                  <div className="flex items-center gap-1 text-[#A0A0A0] text-sm">
                    <Users size={14} />
                    <span>{featured.participants.toLocaleString()} participants</span>
                  </div>
                </div>
              </div>

              {/* Info card */}
              <div className="bg-[#0F0F0F] border border-white/[0.08] rounded-xl p-6 space-y-4 min-w-[220px]">
                <div>
                  <p className="text-[#555555] text-xs uppercase tracking-wider mb-1">Prize</p>
                  <div className="flex items-center gap-2">
                    <Trophy size={16} className="text-amber-400" />
                    <p className="text-amber-400 font-bold">{featured.prize}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[#555555] text-xs uppercase tracking-wider mb-1">Start Date</p>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#A0A0A0]" />
                    <p className="text-white text-sm">{featured.startDate}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[#555555] text-xs uppercase tracking-wider mb-1">Deadline</p>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-[#A0A0A0]" />
                    <p className="text-white text-sm">{featured.deadline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* More events */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="text-lg font-semibold text-white mb-6">More Challenges</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {rest.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Submit your challenge CTA */}
        <div className="mt-16 bg-[#0F0F0F] border border-white/[0.08] rounded-xl p-10 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">Want to run your own challenge?</h3>
          <p className="text-[#A0A0A0] max-w-lg mx-auto mb-6">
            Partner with AJ Creative to host challenges for the community. Reach 10,000+ creatives with your brand or cause.
          </p>
          <GradientButton href="/partnerships">
            Partner With Us
          </GradientButton>
        </div>
      </div>
    </div>
  );
}
