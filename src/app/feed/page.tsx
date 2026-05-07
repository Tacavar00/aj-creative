'use client';

import { Heart, MessageCircle, Share2, Trophy, Users } from 'lucide-react';
import { feedPosts, artists, events } from '@/lib/mock-data';

function formatNumber(n: number): string {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return n.toString();
}

export default function FeedPage() {
  const suggestedArtists = artists.slice(4, 7);

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
          The <span className="gradient-text">Feed</span>
        </h1>
        <p className="text-[#A0A0A0] text-lg">Share your work. Get real feedback.</p>
      </section>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feed (2/3) */}
          <div className="lg:col-span-2 space-y-8">
            {feedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#0F0F0F] border border-white/[0.08] rounded-xl overflow-hidden"
              >
                {/* Post header */}
                <div className="flex items-center gap-3 p-5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ backgroundColor: post.artist.color }}
                  >
                    {post.artist.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{post.artist.name}</p>
                    <p className="text-[#555555] text-xs">@{post.artist.username} · {post.timeAgo}</p>
                  </div>
                </div>

                {/* Gradient image placeholder */}
                <div className={`w-full aspect-square bg-gradient-to-br ${post.gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/10 blur-xl" />
                  </div>
                </div>

                {/* Caption */}
                <div className="p-5">
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">{post.caption}</p>

                  {/* Interactions */}
                  <div className="flex items-center gap-6 pt-4 border-t border-white/[0.06]">
                    <button className="flex items-center gap-2 text-[#555555] hover:text-red-400 transition-colors">
                      <Heart size={18} />
                      <span className="text-sm">{formatNumber(post.likes)}</span>
                    </button>
                    <button className="flex items-center gap-2 text-[#555555] hover:text-blue-400 transition-colors">
                      <MessageCircle size={18} />
                      <span className="text-sm">{formatNumber(post.comments)}</span>
                    </button>
                    <button className="flex items-center gap-2 text-[#555555] hover:text-violet-400 transition-colors ml-auto">
                      <Share2 size={18} />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar (1/3) */}
          <div className="space-y-6">
            {/* Trending challenge */}
            <div className="bg-[#0F0F0F] border border-white/[0.08] rounded-xl overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-violet-600 to-pink-600" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                    <Trophy size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Trending Challenge</p>
                    <p className="text-[#555555] text-xs">Active now</p>
                  </div>
                </div>
                <h3 className="font-bold text-white mb-2">{events[0].title}</h3>
                <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">
                  {events[0].description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#A0A0A0] text-sm">
                    <Users size={13} />
                    <span>{events[0].participants.toLocaleString()} joined</span>
                  </div>
                  <a
                    href="/events"
                    className="text-sm font-semibold gradient-text hover:opacity-80 transition-opacity"
                  >
                    Join →
                  </a>
                </div>
              </div>
            </div>

            {/* Suggested artists */}
            <div className="bg-[#0F0F0F] border border-white/[0.08] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Suggested Artists</h3>
              <div className="space-y-4">
                {suggestedArtists.map((artist) => (
                  <div key={artist.id} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ backgroundColor: artist.color }}
                    >
                      {artist.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{artist.name}</p>
                      <p className="text-[#555555] text-xs truncate">{artist.title}</p>
                    </div>
                    <a
                      href={`/artist/${artist.username}`}
                      className="flex-shrink-0 text-xs font-semibold border border-white/20 rounded-lg px-3 py-1.5 text-[#A0A0A0] hover:text-white hover:border-white/40 transition-all"
                    >
                      Follow
                    </a>
                  </div>
                ))}
              </div>
              <a
                href="/discover"
                className="block mt-4 text-center text-sm font-semibold gradient-text hover:opacity-80 transition-opacity"
              >
                Discover more artists →
              </a>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-violet-600/10 to-pink-600/10 border border-violet-500/20 rounded-xl p-6 text-center">
              <p className="text-white font-semibold mb-2">Ready to share your work?</p>
              <p className="text-[#A0A0A0] text-sm mb-4">Join 10,000+ creatives on AJ Creative</p>
              <a
                href="/create-profile"
                className="block w-full py-2.5 text-sm font-semibold bg-gradient-to-r from-violet-600 to-pink-600 rounded-xl text-white hover:opacity-90 transition-opacity"
              >
                Create Free Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
