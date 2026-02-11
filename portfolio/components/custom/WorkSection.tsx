// Demo data - replace with Sanity data later
const reelsData = [
  {
    id: 1,
    title: "Product Launch Reel",
    category: "Social Media",
    thumbnail: "/demo-reel-1.jpg", // Replace with actual image
    videoUrl: "https://youtube.com/...",
    duration: "0:30",
  },
  {
    id: 2,
    title: "Brand Story Short",
    category: "Instagram",
    thumbnail: "/demo-reel-2.jpg",
    videoUrl: "https://youtube.com/...",
    duration: "0:45",
  },
  {
    id: 3,
    title: "Event Highlight",
    category: "TikTok",
    thumbnail: "/demo-reel-3.jpg",
    videoUrl: "https://youtube.com/...",
    duration: "0:25",
  },
  {
    id: 4,
    title: "Fashion Promo",
    category: "Reels",
    thumbnail: "/demo-reel-4.jpg",
    videoUrl: "https://youtube.com/...",
    duration: "0:35",
  },
];

const projectsData = [
  {
    id: 1,
    title: "Luxury Wedding Film",
    category: "Wedding",
    description:
      "A cinematic journey capturing every precious moment of Sarah & John's special day.",
    thumbnail: "/demo-project-1.jpg",
    videoUrl: "https://youtube.com/...",
    duration: "8:45",
  },
  {
    id: 2,
    title: "Real Estate Showcase",
    category: "Property",
    description:
      "Professional property tour featuring stunning architecture and interior design.",
    thumbnail: "/demo-project-2.jpg",
    videoUrl: "https://youtube.com/...",
    duration: "5:20",
  },
  {
    id: 3,
    title: "Corporate Brand Film",
    category: "Commercial",
    description:
      "Telling the story of innovation and excellence for a leading tech company.",
    thumbnail: "/demo-project-3.jpg",
    videoUrl: "https://youtube.com/...",
    duration: "3:15",
  },
];

export default function WorkSection() {
  // Only render sections if data exists
  const hasReels = reelsData && reelsData.length > 0;
  const hasProjects = projectsData && projectsData.length > 0;

  // Don't render anything if no data
  if (!hasReels && !hasProjects) {
    return null;
  }

  return (
    <section
      id="work"
      className="relative w-full bg-[#0B1220] text-slate-100 py-20 md:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0d1528] to-[#0B1220]" />
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-[length:24px_24px]" />

      {/* Floating accents */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-[#F5C16C]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#F5C16C]/50" />
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400/80 font-light">
              My Projects
            </p>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#F5C16C]/50" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-slate-200 mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#F5C16C] to-amber-300 bg-clip-text text-transparent font-normal">
              Work
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light">
            A showcase of my latest projects and creative endeavors
          </p>
        </div>

        {/* Reels Section - Only shows if data exists */}
        {hasReels && (
          <div className="mb-24">
            {/* Reels Header */}
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl md:text-3xl font-light text-slate-200">
                Reels & Short Videos
              </h3>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-700/50 to-transparent" />
            </div>

            {/* Reels Grid - Portrait orientation */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {reelsData.map((reel) => (
                <div
                  key={reel.id}
                  className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Thumbnail placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                    {/* Replace with actual thumbnail: <img src={reel.thumbnail} alt={reel.title} className="w-full h-full object-cover" /> */}
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        className="w-16 h-16 text-slate-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#F5C16C] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <svg
                          className="w-6 h-6 text-[#0B1220] ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-normal text-sm mb-1">
                        {reel.title}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-300">
                          {reel.category}
                        </span>
                        <span className="text-xs text-slate-300">
                          {reel.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F5C16C]/50 rounded-2xl transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Large Projects Section - Only shows if data exists */}
        {hasProjects && (
          <div>
            {/* Projects Header */}
            <div className="flex items-center gap-4 mb-10">
              <h3 className="text-2xl md:text-3xl font-light text-slate-200">
                Cinematic Projects
              </h3>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-slate-700/50 to-transparent" />
            </div>

            {/* Projects Grid - Landscape orientation */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                >
                  {/* Thumbnail container */}
                  <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                    {/* Replace with actual thumbnail: <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" /> */}
                    <div className="w-full h-full flex items-center justify-center">
                      <svg
                        className="w-20 h-20 text-slate-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[#F5C16C] flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <svg
                            className="w-7 h-7 text-[#0B1220] ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                      <span className="text-xs text-white">
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  {/* Info section */}
                  <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 backdrop-blur-sm border border-slate-700/30 border-t-0 rounded-b-2xl p-6 group-hover:border-[#F5C16C]/30 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg md:text-xl font-normal text-slate-100 group-hover:text-[#F5C16C] transition-colors duration-300">
                        {project.title}
                      </h4>
                      <span className="px-3 py-1 text-xs rounded-full bg-slate-800/50 text-slate-300 border border-slate-700/50">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Border glow on hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F5C16C]/30 rounded-2xl transition-all duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
