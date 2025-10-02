'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface VideoSectionProps {
  badgeText?: string;
  title?: string;
  highlightedText?: string;
  description?: string;
  stats?: { number: string; label: string }[];
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  vimeoVideoId?: string;
  thumbnailSrc?: string;
  videoAlt?: string;
}

export default function VideoSection_copy({
  badgeText = "🚀 Transform Your Career",
  title = "Learn from the",
  highlightedText = "World's Best Instructors",
  description = "Unlock your potential with our expert-led courses. From beginner to advanced, we have everything you need to succeed in today's competitive world.",
  stats = [
    { number: "500+", label: "Courses" },
    { number: "50K+", label: "Students" },
    { number: "98%", label: "Success Rate" }
  ],
  primaryButton = { text: "Explore Courses", href: "/courses" },
  secondaryButton = { text: "Start Free Trial", href: "/signup" },
  vimeoVideoId = "998631418",
  thumbnailSrc = "/images/h.jpg",
  videoAlt = "Course introduction video"
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const vimeoUrl = `https://player.vimeo.com/video/${vimeoVideoId}?color=ffffff&badge=0&title=0&byline=0&portrait=0&autoplay=1`;

  return (
    <section className="min-h-screen bg-white text-white overflow-hidden">
      {/* <section className="min-h-screen bg-gradient-to-br from-[#073e4a] via-[#19232d] to-[#073e4a] text-white overflow-hidden"></section> */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-[#01a08e] text-[#edf7e7] rounded-full text-sm font-medium">
                {badgeText}
              </span>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {title}
                {highlightedText && (
                  <span className="text-[#2dffe6] block">{highlightedText}</span>
                )}
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl">
                {description}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#2dffe6]">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={primaryButton.href}
                className="bg-[#01a08e] hover:bg-[#018f7d] text-[#edf7e7] px-8 py-4 rounded-lg font-semibold text-center transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {primaryButton.text}
              </Link>
              <Link 
                href={secondaryButton.href}
                className="border-2 border-[#2dffe6] text-[#2dffe6] hover:bg-[#2dffe6] hover:text-[#073e4a] px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300"
              >
                {secondaryButton.text}
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 bg-gradient-to-r from-[#01a08e] to-[#2dffe6] rounded-full border-2 border-[#073e4a] flex items-center justify-center text-white text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                Join <span className="text-[#2dffe6] font-semibold">50,000+</span> successful learners
              </div>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-[#01a08e] to-[#2dffe6] p-1 rounded-2xl shadow-2xl">
              <div className="bg-[#19232d] rounded-2xl overflow-hidden">
                {/* Vimeo Video Player */}
                {isPlaying ? (
                  <div className="relative aspect-video">
                    <iframe
                      src={vimeoUrl}
                      className="w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative aspect-video">
                    {/* Video Thumbnail */}
                    <Image
                      src={thumbnailSrc}
                      alt={videoAlt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    
                    {/* Play Button with Single Ring Effect */}
                    <div 
                      ref={buttonRef}
                      className="absolute inset-0 rounded-xl flex items-center justify-center"
                    >
                      <button 
                        className="relative grid place-items-center w-20 h-20 bg-white/50  rounded-full shadow-lg shadow-white/10 cursor-pointer border border-white/10 outline-none transition-all duration-300 hover:bg-white/30 hover:scale-105"
                        onClick={handlePlayVideo}
                      >
                        {/* Play Icon */}
                        <svg 
                          className="w-10 h-10 text-white z-10 relative"
                          fill="#ffffffb9" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        
                        {/* Single Ring Effect */}
                        {hasAnimated && (
                          <div 
                            className="absolute w-full h-full border-2 border-white/50 rounded-full"
                            style={{
                              animation: 'singleRing 1.5s ease-out forwards'
                            }}
                          ></div>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
           
            {/* Floating Course Card 1 */}
            <div className="absolute -bottom-8 right-8 bg-[#19232d] p-4 rounded-xl shadow-2xl border border-[#01a08e] transform rotate-6 z-20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#01a08e] to-[#2dffe6] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#edf7e7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">Web Development</div>
                  <div className="text-xs text-[#2dffe6]">4.9 ★</div>
                </div>
              </div>
            </div>

            {/* Floating Course Card 2 */}
            <div className="absolute -top-4 left-4 bg-[#19232d] p-3 rounded-lg shadow-2xl border border-[#2dffe6] transform -rotate-3 z-20">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-[#2dffe6] to-[#01a08e] rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#073e4a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold">Data Science</div>
                  <div className="text-xs text-[#01a08e]">4.8 ★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #2dffe6 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Inline Styles for Animation */}
      <style jsx>{`
        @keyframes singleRing {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}