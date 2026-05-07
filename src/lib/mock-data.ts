export interface Artist {
  id: string;
  name: string;
  username: string;
  title: string;
  city: string;
  skills: string[];
  bio: string;
  initials: string;
  color: string;
  followers: number;
  projects: number;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  skills: string[];
  description: string;
  posted: string;
  initials: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  artist: string;
  skills: string[];
  views: number;
  gradient: string;
}

export interface Event {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  rules?: string[];
  startDate: string;
  deadline: string;
  prize: string;
  participants: number;
  gradient: string;
}

export interface FeedPost {
  id: string;
  artist: Artist;
  caption: string;
  likes: number;
  comments: number;
  gradient: string;
  timeAgo: string;
}

export const artists: Artist[] = [
  { id: '1', name: 'Alex Solis', username: 'alexmdc', title: 'Illustrator & Character Designer', city: 'Miami, FL', skills: ['Illustration', 'Character Design', 'Pop Art', 'Digital Art'], bio: 'Known for iconic pop-culture mashup illustrations. Co-founder of AJ Creative.', initials: 'AS', color: '#7C3AED', followers: 485000, projects: 124 },
  { id: '2', name: 'Maya Chen', username: 'mayavisuals', title: '3D Artist & Motion Designer', city: 'Los Angeles, CA', skills: ['3D Art', 'Motion Design', 'Cinema 4D', 'After Effects'], bio: 'Creating surreal 3D worlds that blur the line between real and digital.', initials: 'MC', color: '#2563EB', followers: 92000, projects: 67 },
  { id: '3', name: 'Jordan Rivers', username: 'jordanarts', title: 'Brand Identity Designer', city: 'New York, NY', skills: ['Brand Identity', 'Logo Design', 'Typography', 'Print'], bio: 'Building iconic brand identities for startups and Fortune 500s.', initials: 'JR', color: '#DB2777', followers: 45000, projects: 89 },
  { id: '4', name: 'Sofia Martinez', username: 'sofiapaints', title: 'Muralist & Street Artist', city: 'Miami, FL', skills: ['Murals', 'Street Art', 'Acrylic', 'Large Format'], bio: 'Transforming Miami walls into cultural landmarks since 2015.', initials: 'SM', color: '#059669', followers: 128000, projects: 43 },
  { id: '5', name: 'Kai Nakamura', username: 'kai_motion', title: 'Motion Graphics Artist', city: 'Tokyo, Japan', skills: ['Motion Graphics', 'UI Animation', 'After Effects', 'Lottie'], bio: 'Bringing interfaces to life through fluid, purposeful animation.', initials: 'KN', color: '#D97706', followers: 67000, projects: 156 },
  { id: '6', name: 'Zara Williams', username: 'zaradesigns', title: 'UI/UX Designer', city: 'London, UK', skills: ['UI Design', 'UX Research', 'Figma', 'Design Systems'], bio: 'Designing digital products used by millions. Advocate for accessible design.', initials: 'ZW', color: '#7C3AED', followers: 34000, projects: 78 },
  { id: '7', name: 'Marcus Jones', username: 'marcustattoo', title: 'Tattoo Artist & Illustrator', city: 'Atlanta, GA', skills: ['Tattoo Art', 'Fine Line', 'Illustration', 'Custom Design'], bio: 'Where fine art meets skin. Specializing in custom neo-traditional work.', initials: 'MJ', color: '#1D4ED8', followers: 210000, projects: 302 },
  { id: '8', name: 'Elena Volkov', username: 'elenaphoto', title: 'Fashion Photographer', city: 'Paris, France', skills: ['Fashion Photography', 'Editorial', 'Studio', 'Retouching'], bio: "Editorial photography for Vogue, Elle, and the world's top fashion brands.", initials: 'EV', color: '#BE185D', followers: 156000, projects: 234 },
  { id: '9', name: 'Diego Fuentes', username: 'diegotype', title: 'Typographer & Lettering Artist', city: 'Barcelona, Spain', skills: ['Typography', 'Lettering', 'Calligraphy', 'Font Design'], bio: 'Hand-crafting letters that tell stories. Type nerd by trade, artist by heart.', initials: 'DF', color: '#0891B2', followers: 89000, projects: 145 },
  { id: '10', name: 'Priya Sharma', username: 'priyaconcept', title: 'Concept Artist', city: 'Vancouver, Canada', skills: ['Concept Art', 'Environment Design', 'Character Art', 'Sci-Fi'], bio: 'Creating worlds for games and film. Previously at Ubisoft and EA.', initials: 'PS', color: '#7C3AED', followers: 203000, projects: 89 },
  { id: '11', name: 'Leo Fontaine', username: 'leofashion', title: 'Fashion Designer & Illustrator', city: 'Milan, Italy', skills: ['Fashion Design', 'Fashion Illustration', 'Textile Design', 'Couture'], bio: 'Where fashion meets fine art. Bridging couture and contemporary illustration.', initials: 'LF', color: '#DC2626', followers: 74000, projects: 56 },
  { id: '12', name: 'Amara Osei', username: 'amaraceramics', title: 'Ceramic Artist & Sculptor', city: 'Lagos, Nigeria', skills: ['Ceramics', 'Sculpture', 'Hand Building', 'Glaze Design'], bio: 'Merging African craft traditions with contemporary sculptural forms.', initials: 'AO', color: '#B45309', followers: 43000, projects: 67 },
];

export const jobs: Job[] = [
  { id: '1', title: 'Creative Visual Designer', company: 'Interwoven Design Studio', location: 'Miami, FL', type: 'Full-time', salary: '$75k–$95k', skills: ['Brand Identity', 'Illustration', 'Adobe Suite'], description: "Join our boutique studio creating visual identities for Miami's most ambitious brands.", posted: '2 days ago', initials: 'IS', color: '#7C3AED' },
  { id: '2', title: 'Motion Graphics Freelancer', company: 'Pixel Factory', location: 'Remote', type: 'Freelance', salary: '$80–$120/hr', skills: ['After Effects', 'Motion Design', 'Cinema 4D'], description: 'Short-term project creating animated content for a global product launch.', posted: '1 day ago', initials: 'PF', color: '#2563EB' },
  { id: '3', title: 'Brand Identity Designer', company: 'Miami Arts Collective', location: 'Miami, FL', type: 'Part-time', salary: '$50–$70/hr', skills: ['Logo Design', 'Typography', 'Brand Strategy'], description: "Help shape the visual identity of Miami's premier arts organization.", posted: '3 days ago', initials: 'MA', color: '#DB2777' },
  { id: '4', title: '3D Environment Artist', company: 'Nexus Games', location: 'Austin, TX', type: 'Full-time', salary: '$90k–$120k', skills: ['3D Art', 'Unreal Engine', 'Environment Design'], description: 'Creating immersive game environments for our upcoming AAA title.', posted: '5 days ago', initials: 'NG', color: '#059669' },
  { id: '5', title: 'Social Media Creative Director', company: 'Vibe Agency', location: 'Remote', type: 'Freelance', salary: '$5k–$8k/month', skills: ['Art Direction', 'Social Media', 'Branding'], description: 'Lead creative strategy for a portfolio of lifestyle and fashion brands.', posted: '1 day ago', initials: 'VA', color: '#D97706' },
  { id: '6', title: 'Editorial Illustrator', company: 'The Atlantic', location: 'New York, NY', type: 'Freelance', salary: '$800–$2k/piece', skills: ['Illustration', 'Editorial Art', 'Concept Art'], description: "Create editorial illustrations for one of America's most respected publications.", posted: '4 days ago', initials: 'TA', color: '#1D4ED8' },
  { id: '7', title: 'UX Designer', company: 'Craft Studio', location: 'San Francisco, CA', type: 'Full-time', salary: '$110k–$140k', skills: ['UX Design', 'Figma', 'User Research'], description: 'Design intuitive experiences for a creative tools platform used by 2M+ artists.', posted: '6 days ago', initials: 'CS', color: '#7C3AED' },
  { id: '8', title: 'Mural Artist', company: 'City of Miami', location: 'Miami, FL', type: 'Gig', salary: '$15k–$30k/project', skills: ['Murals', 'Large Format', 'Community Art'], description: "Transform public spaces in Miami's Wynwood district with bold, community murals.", posted: '1 week ago', initials: 'CM', color: '#BE185D' },
  { id: '9', title: 'Character Designer', company: 'Cartoon Network', location: 'Atlanta, GA', type: 'Full-time', salary: '$85k–$110k', skills: ['Character Design', 'Animation', 'Illustration'], description: 'Develop iconic characters for original animated series.', posted: '3 days ago', initials: 'CN', color: '#F59E0B' },
  { id: '10', title: 'Fashion Illustrator', company: 'Vogue Magazine', location: 'New York, NY', type: 'Freelance', salary: '$1.5k–$4k/piece', skills: ['Fashion Illustration', 'Editorial', 'Digital Art'], description: "Create stunning fashion illustrations for Vogue's print and digital editions.", posted: '2 days ago', initials: 'VM', color: '#0891B2' },
];

export const projects: Project[] = [
  { id: '1', title: 'Wynwood Mural Series', artist: 'Sofia Martinez', skills: ['Murals', 'Street Art'], views: 45200, gradient: 'from-violet-600 to-pink-600' },
  { id: '2', title: 'Neon Gods – Character Collection', artist: 'Alex Solis', skills: ['Illustration', 'Character Design'], views: 128000, gradient: 'from-blue-600 to-violet-600' },
  { id: '3', title: 'Kinetic Type Experiment', artist: 'Diego Fuentes', skills: ['Typography', 'Motion'], views: 23400, gradient: 'from-pink-600 to-orange-600' },
  { id: '4', title: 'Surreal Architecture Vol.3', artist: 'Priya Sharma', skills: ['Concept Art', 'Environments'], views: 67800, gradient: 'from-emerald-600 to-teal-600' },
  { id: '5', title: 'Void Series – 3D Sculpture', artist: 'Maya Chen', skills: ['3D Art', 'Sculpture'], views: 89000, gradient: 'from-blue-600 to-cyan-600' },
  { id: '6', title: 'Lagos Earth Vessels', artist: 'Amara Osei', skills: ['Ceramics', 'Sculpture'], views: 12300, gradient: 'from-amber-600 to-red-600' },
  { id: '7', title: 'Fade to Silk – Fashion Edit', artist: 'Elena Volkov', skills: ['Photography', 'Fashion'], views: 54600, gradient: 'from-rose-600 to-pink-600' },
  { id: '8', title: 'Identity System: Nova Brand', artist: 'Jordan Rivers', skills: ['Brand Identity', 'Logo'], views: 31200, gradient: 'from-violet-600 to-blue-600' },
];

export const events: Event[] = [
  { id: '1', title: '30 Day Progress Challenge', subtitle: 'Win $200 in Art Supplies', description: 'Post daily work-in-progress for 30 days. Community votes for the most growth. $200 prize in art supplies from our Miami studio partners.', rules: ['Post once daily', 'Must show progress from Day 1', 'Community feedback required', 'Any medium welcome'], startDate: '2026-06-01', deadline: '2026-06-30', prize: '$200 in Art Supplies', participants: 1247, gradient: 'from-violet-600 to-pink-600' },
  { id: '2', title: 'Miami Art Week Showcase', subtitle: 'Official AJ Creative Exhibition', description: 'Submit your best work for a chance to be featured in our official Miami Art Week exhibition. Physical + digital display.', startDate: '2026-11-01', deadline: '2026-10-15', prize: 'Physical Exhibition + $500', participants: 432, gradient: 'from-blue-600 to-violet-600' },
  { id: '3', title: 'Character Design Sprint', subtitle: '72-Hour Design Challenge', description: 'Create an original character in 72 hours based on a secret theme revealed at launch. Top 3 win commission opportunities.', startDate: '2026-06-15', deadline: '2026-06-18', prize: 'Commission Opportunity + Feature', participants: 876, gradient: 'from-pink-600 to-orange-600' },
];

export const feedPosts: FeedPost[] = [
  { id: '1', artist: artists[0], caption: 'New piece dropping tomorrow 🎨 Been working on this series for 3 months. Teaser only...', likes: 12400, comments: 342, gradient: 'from-violet-800 to-pink-800', timeAgo: '2h' },
  { id: '2', artist: artists[1], caption: "Day 12 of the 30-day challenge. 3D every single day is pushing me in ways I didn't expect. The growth is real.", likes: 3200, comments: 89, gradient: 'from-blue-800 to-cyan-800', timeAgo: '5h' },
  { id: '3', artist: artists[3], caption: "The Wynwood piece is finally done. 3 weeks, 40 gallons of paint, one amazing community. Miami 🙌", likes: 28700, comments: 1203, gradient: 'from-emerald-800 to-teal-800', timeAgo: '1d' },
  { id: '4', artist: artists[8], caption: 'Working on a new typeface. This is purely hand-lettered — no digital tools yet. Sometimes you need to feel the letters.', likes: 6800, comments: 234, gradient: 'from-amber-800 to-red-800', timeAgo: '3h' },
];
