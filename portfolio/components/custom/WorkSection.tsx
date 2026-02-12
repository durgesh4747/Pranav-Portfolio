"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/app/page";
import Image from "next/image";

const getYoutubeId = (url: string) => {
  try {
    const parsedUrl = new URL(url);

    // youtube.com/watch?v=
    if (parsedUrl.searchParams.get("v")) {
      return parsedUrl.searchParams.get("v");
    }

    // youtu.be/VIDEOID
    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1);
    }

    // youtube.com/shorts/VIDEOID
    if (parsedUrl.pathname.includes("/shorts/")) {
      return parsedUrl.pathname.split("/shorts/")[1];
    }

    return null;
  } catch {
    return null;
  }
};

interface WorkProps {
  projects: Project[];
}

export default function WorkSection({ projects }: WorkProps) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  /* ----------------------------------
     SAFE YOUTUBE EMBED CONVERTER
  -----------------------------------*/
  const getEmbedUrl = (url: string) => {
    try {
      const parsed = new URL(url);

      let videoId = "";

      if (parsed.searchParams.get("v")) {
        videoId = parsed.searchParams.get("v")!;
      }

      if (parsed.hostname === "youtu.be") {
        videoId = parsed.pathname.slice(1);
      }

      if (parsed.pathname.includes("/shorts/")) {
        videoId = parsed.pathname.split("/shorts/")[1];
      }

      return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`;
    } catch {
      return url;
    }
  };

  /* ----------------------------------
     LOCK BACKGROUND SCROLL
  -----------------------------------*/
  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  if (!projects?.length) return null;

  return (
    <section
      id="work"
      className="relative w-full overflow-hidden bg-[#0B1220] text-slate-100 py-20 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-[#0B1220] via-[#0d1528] to-[#0B1220]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,#ffffff_1px,transparent_0)] bg-size-[24px_24px]" />
      <div className="pointer-events-none absolute top-1/4 left-1/3 w-72 h-72 bg-[#F5C16C]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1.01px] w-8 bg-linear-to-r from-transparent to-[#F5C16C]/50" />
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400/80 font-light">
              My Projects
            </p>
            <div className="h-[1.01px] w-8 bg-linear-to-l from-transparent to-[#F5C16C]/50" />
          </div>

          <h2 className="text-3xl md:text-5xl font-light text-slate-200 mb-4">
            Featured{" "}
            <span className="bg-linear-to-r from-[#F5C16C] to-amber-300 bg-clip-text text-transparent font-normal">
              Work
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-light">
            A showcase of my latest projects and creative endeavors
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {projects.map((data) => (
            <div
              key={data._id}
              onClick={() => setActiveVideo(data.videoUrl)}
              className="
                group relative aspect-9/16 rounded-2xl overflow-hidden cursor-pointer
                transition-transform duration-300
                md:hover:scale-[1.05] hover:
              "
            >
              {/* Thumbnail */}
              {(() => {
                const videoId = getYoutubeId(data.videoUrl);
                if (!videoId) return null;

                return (
                  <Image
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt={data.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover brightness-75 contrast-110"
                    unoptimized
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }}
                  />
                );
              })()}

              {/* Always Visible Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-slate-700/80 flex items-center justify-center transition-all duration-300 md:group-hover:bg-[#F5C16C]">
                  <svg
                    className="w-6 h-6 ml-1 text-slate-300 transition-colors duration-300 md:group-hover:text-[#0B1220]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Info Always Visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-normal text-sm mb-1">
                  {data.title}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">
                    {data.category}
                  </span>
                  {data.duration && (
                    <span className="text-xs text-slate-300">
                      {data.duration}
                    </span>
                  )}
                </div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#F5C16C]/50 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-100 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={getEmbedUrl(activeVideo)}
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
