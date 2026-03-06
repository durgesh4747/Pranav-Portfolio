"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/app/page";
import Image from "next/image";
import { Play, X } from "lucide-react";

const getYoutubeId = (url: string) => {
  if (!url) return null;
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.searchParams.get("v")) return parsedUrl.searchParams.get("v");
    if (parsedUrl.hostname === "youtu.be") return parsedUrl.pathname.slice(1);
    if (parsedUrl.pathname.includes("/shorts/"))
      return parsedUrl.pathname.split("/shorts/")[1];
    return null;
  } catch {
    return null;
  }
};

const getVimeoId = (url: string) => {
  if (!url || !url.includes("vimeo")) return null;
  return url.split("/").pop();
};

interface WorkProps {
  projects: Project[];
}

export default function WorkSection({ projects }: WorkProps) {
  const [activeVideo, setActiveVideo] = useState<{
    url: string;
    isFile: boolean;
  } | null>(null);

  const getEmbedUrl = (url: string) => {
    const ytId = getYoutubeId(url);
    if (ytId)
      return `https://www.youtube.com/embed/${ytId}?autoplay=1&modestbranding=1&rel=0`;

    const vimeoId = getVimeoId(url);
    if (vimeoId)
      return `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`;

    return url;
  };

  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  if (!projects?.length) return null;

  return (
    <section
      id="work"
      className="relative w-full overflow-hidden bg-[#1D1937] text-slate-100 py-24 md:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#151238_0%,#0B1220_100%)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-6 tracking-tighter">
            Featured{" "}
            <span className="text-[#F5C16C] not-italic font-sans font-black uppercase tracking-tight">
              Work
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {projects.map((data) => {
            const ytId = getYoutubeId(data.videoUrl);
            const vimeoId = getVimeoId(data.videoUrl);

            const thumbUrl =
              data.manualThumb ||
              (ytId
                ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
                : vimeoId
                  ? `https://vumbnail.com/${vimeoId}.jpg`
                  : null);

            return (
              <div
                key={data._id}
                onClick={() => {
                  if (data.directVideo)
                    setActiveVideo({ url: data.directVideo, isFile: true });
                  else
                    setActiveVideo({ url: data.videoUrl || "", isFile: false });
                }}
                className="group relative aspect-9/16 rounded-2xl overflow-hidden cursor-pointer bg-black border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                {thumbUrl ? (
                  <Image
                    src={thumbUrl}
                    alt={data.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-900" />
                )}

                <div className="absolute inset-0 bg-linear-to-t from-[black/90] via-black/20 to-transparent opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-75 group-hover:scale-100">
                  <div className="w-16 h-16 rounded-full bg-[#F5C16C] flex items-center justify-center shadow-lg">
                    <Play size={28} className="text-black ml-1 fill-black" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <p className="text-white font-bold text-xs md:text-sm truncate">
                    {data.title}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-300 opacity-70">
                    {data.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#0B1220]/98 backdrop-blur-xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 transition-colors"
            >
              <X className="text-white" />
            </button>
            <motion.div
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              {activeVideo.isFile ? (
                <video
                  src={activeVideo.url}
                  controls
                  autoPlay
                  className="w-full h-full"
                />
              ) : (
                <iframe
                  src={getEmbedUrl(activeVideo.url)}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Drive Button - Forced Visibility Version */}
      <div className="relative z-30 flex justify-center mt-16 md:mt-24 pb-8">
        <a
          href="https://drive.google.com/drive/folders/1v5YH-cxbTfwen5dqEWZ6c-aDIeDjyWG7?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-8 py-4 rounded-full border border-[#F5C16C]/40 bg-[#F5C16C]/10 hover:bg-[#F5C16C] transition-all duration-300 shadow-[0_0_20px_rgba(245,193,108,0.1)]"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 text-[#F5C16C] group-hover:text-black transition-colors"
            fill="currentColor"
          >
            <path d="M7.71 3.502L1.15 15l3.446 6.002L11.157 9.502h-3.447zm12.58 11.498h-6.894l3.446 6.002L23.4 15h-3.11zm-1.56-1.5l-6.59-11.498h-3.445L15.28 13.5h3.445z" />
          </svg>
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white group-hover:text-black">
            View Full Archive
          </span>
        </a>
      </div>
    </section>
  );
}
