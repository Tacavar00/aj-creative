import { Shield, Link, DollarSign, Users, CheckCircle, Smartphone, Apple } from 'lucide-react';
import GradientButton from '@/components/ui/GradientButton';
import ArtistCard from '@/components/cards/ArtistCard';
import JobCard from '@/components/cards/JobCard';
import ProjectCard from '@/components/cards/ProjectCard';
import { artists, jobs, projects } from '@/lib/mock-data';

export default function Home() {
  const stats = [
    { value: '10,000+', label: 'Artists' },
    { value: '50,000+', label: 'Jobs Posted' },
    { value: '100+', label: 'Creative Skills' },
    { value: '40+', label: 'Countries' },
  ];

  const commissionFeatures = [
    {
      icon: <Link size={24} className="text-violet-400" />,
      title: 'Commission Links',
      desc: 'Artists create public booking links. Share, hire, pay. Done.',
    },
    {
      icon: <DollarSign size={24} className="text-blue-400" />,
      title: 'Transparent Pricing',
      desc: 'See rates upfront. No hidden fees, no awkward negotiations.',
    },
    {
      icon: <Users size={24} className="text-pink-400" />,
      title: 'Partner Earnings',
      desc: 'Refer a booking and earn. The whole community benefits.',
    },
  ];

  const features = [
    'Vetted studios only',
    'One-click portfolio application',
    'Job alerts for your skills',
  ];

  const aiBadges = ['🔒 AI-Proof Uploads', '🚫 Anti-Scrape', '© Your Rights Protected'];

  return (
    <div className="min-h-screen">
      {/* ─── Section 1: Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="orb absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 blur-[120px] rounded-full" />
          <div className="orb orb-delay absolute top-1/4 right-1/4 w-80 h-80 bg-blue-600/15 blur-[100px] rounded-full" />
          <div className="orb absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-600/15 blur-[80px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          {/* Founders badge */}
          <div className="inline-flex items-center gap-2 gradient-border rounded-full px-5 py-2 mb-8">
            <span className="text-sm font-medium text-[#A0A0A0]">🤝 Alex Solis × Josh Fathi</span>
          </div>

          {/* H1 */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6">
            <span className="text-white">Hire.</span>{' '}
            <span className="gradient-text">Get Hired.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-[#A0A0A0] font-medium mb-4">
            Thousands of vetted professional creatives ready to work
          </p>

          {/* Body */}
          <p className="text-base md:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed mb-10">
            The premium network built by artists, for artists. Apply to freelance, part-time, or full-time
            jobs with one click. Commission custom artwork from verified professionals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <GradientButton href="/discover" size="lg">
              Discover All Artists
            </GradientButton>
            <a
              href="/jobs"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border border-white/20 rounded-xl hover:border-white/40 text-white transition-all duration-200 hover:scale-[1.02]"
            >
              See All Jobs
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {['#7C3AED', '#2563EB', '#DB2777', '#059669', '#D97706'].map((color, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-[#080808] flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: color }}
                >
                  {['AS', 'MC', 'JR', 'SM', 'KN'][i]}
                </div>
              ))}
            </div>
            <p className="text-[#A0A0A0] text-sm font-medium">
              <span className="text-white font-bold">10,000+</span> creatives already here
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Trust Stats ─── */}
      <section className="bg-[#0F0F0F] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-black gradient-text mb-2">{stat.value}</p>
                <p className="text-[#A0A0A0] text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Professional Network ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="bg-white/[0.06] border border-white/[0.08] rounded-full text-sm px-4 py-1.5 text-[#A0A0A0] mb-6 inline-block">
              One-click applications
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Apply to jobs with one click
            </h2>
            <p className="text-[#A0A0A0] text-lg leading-relaxed mb-8">
              Your portfolio does the talking. Browse thousands of creative opportunities and apply
              instantly — no cover letters, no back-and-forth. Just your work.
            </p>
            <ul className="space-y-4">
              {features.map((feat) => (
                <li key={feat} className="flex items-center gap-3 text-[#A0A0A0]">
                  <CheckCircle size={18} className="text-violet-400 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: animated job preview mockup */}
          <div className="space-y-3">
            {jobs.slice(0, 3).map((job) => (
              <div
                key={job.id}
                className="bg-[#0F0F0F] border border-white/[0.08] rounded-xl p-4 flex items-center gap-4 hover:border-white/[0.18] transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: job.color }}
                >
                  {job.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm truncate">{job.title}</p>
                  <p className="text-[#555555] text-xs">{job.company} · {job.location}</p>
                </div>
                <span className="text-emerald-400 text-xs font-semibold flex-shrink-0">{job.salary}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Featured Jobs ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Latest Opportunities</h2>
            <p className="text-[#A0A0A0] mt-2">Fresh creative roles updated daily</p>
          </div>
          <a href="/jobs" className="text-sm font-semibold gradient-text hover:opacity-80 transition-opacity">
            See All Jobs →
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {jobs.slice(0, 3).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* ─── Section 5: Featured Artists ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Discover Top Creatives</h2>
            <p className="text-[#A0A0A0] mt-2">Vetted professionals ready to work</p>
          </div>
          <a href="/discover" className="text-sm font-semibold gradient-text hover:opacity-80 transition-opacity">
            See All Artists →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.slice(0, 4).map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </section>

      {/* ─── Section 6: Commission Services ─── */}
      <section className="bg-[#0F0F0F] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white text-center mb-4">
            Hire Creative Services in One Click
          </h2>
          <p className="text-[#A0A0A0] text-center mb-16 text-lg">Everything you need to commission art and grow your creative business</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commissionFeatures.map((feat) => (
              <div
                key={feat.title}
                className="bg-[#080808] border border-white/[0.08] rounded-xl p-8 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-6">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{feat.title}</h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 7: AI Protection ─── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative gradient-border rounded-2xl p-12 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-blue-600/5 to-pink-600/5 pointer-events-none" />

          <div className="relative z-10">
            {/* Shield icon */}
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center shadow-[0_0_60px_rgba(124,58,237,0.4)]">
              <Shield size={36} className="text-white" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Your Art is Protected
            </h2>
            <p className="text-[#A0A0A0] text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              We built multi-layer AI protection into every upload. Watermarking, metadata encryption,
              anti-scrape tech, and download prevention — your work stays yours.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {aiBadges.map((badge) => (
                <span
                  key={badge}
                  className="bg-white/[0.06] border border-white/[0.08] rounded-full text-sm px-4 py-2 text-[#A0A0A0]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 8: App Download ─── */}
      <section className="bg-[#0F0F0F] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Take AJ Creative Everywhere
              </h2>
              <p className="text-[#A0A0A0] text-lg leading-relaxed mb-8">
                Discover jobs, connect with artists, and manage commissions from your pocket. Available on iOS and Android.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com"
                  className="flex items-center gap-3 bg-white/[0.06] border border-white/[0.08] rounded-xl px-6 py-4 hover:border-white/20 hover:bg-white/[0.09] transition-all duration-200"
                >
                  <Apple size={24} className="text-white" />
                  <div>
                    <p className="text-[#555555] text-xs">Download on the</p>
                    <p className="text-white font-semibold text-sm">App Store</p>
                  </div>
                </a>
                <a
                  href="https://play.google.com"
                  className="flex items-center gap-3 bg-white/[0.06] border border-white/[0.08] rounded-xl px-6 py-4 hover:border-white/20 hover:bg-white/[0.09] transition-all duration-200"
                >
                  <Smartphone size={24} className="text-white" />
                  <div>
                    <p className="text-[#555555] text-xs">Get it on</p>
                    <p className="text-white font-semibold text-sm">Google Play</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: phone mockup */}
            <div className="flex justify-center">
              <div className="relative w-48 h-96 rounded-[2.5rem] bg-[#1A1A1A] border-2 border-white/[0.12] shadow-2xl overflow-hidden flex flex-col">
                {/* Status bar */}
                <div className="h-8 bg-black/60 flex items-center justify-center">
                  <div className="w-16 h-4 bg-black rounded-full" />
                </div>
                {/* Screen gradient */}
                <div className="flex-1 bg-gradient-to-br from-violet-600 via-blue-700 to-pink-700 relative overflow-hidden">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <div className="text-lg font-black text-white leading-tight">aj creative</div>
                    <div className="mt-3 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Users size={20} className="text-white" />
                    </div>
                    <div className="mt-3 text-xs text-white/80">10k+ Artists</div>
                  </div>
                </div>
                {/* Home bar */}
                <div className="h-6 bg-black/60 flex items-center justify-center">
                  <div className="w-24 h-1 bg-white/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 9: Projects Showcase ─── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Creative Projects</h2>
            <p className="text-[#A0A0A0] mt-2">Explore what our community is making</p>
          </div>
          <a href="/projects" className="text-sm font-semibold gradient-text hover:opacity-80 transition-opacity">
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center">
          <a
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border border-white/20 rounded-xl hover:border-white/40 text-white transition-all duration-200 hover:scale-[1.02]"
          >
            Load More
          </a>
        </div>
      </section>
    </div>
  );
}
