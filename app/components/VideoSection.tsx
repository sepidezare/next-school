'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';


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

export default function VideoSection({
  stats = [
    { number: "500+", label: "Courses" },
    { number: "50K+", label: "Students" },
    { number: "98%", label: "Success" }
  ],
  primaryButton = { text: "Explore Courses", href: "/courses" },
  secondaryButton = { text: "Start Free Trial", href: "/signup" },
  vimeoVideoId = "998631418",
  thumbnailSrc = "/images/video-back-3.png",
  videoAlt = "Course introduction video"
}: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const MedalIcon = ({ className = "w-5 h-5" }) => (
    <svg 
      className={className}
      viewBox="0 0 360 511.48"
      fill="currentColor"
    >
      <polygon fill="#01a08e" points="144.83,306.61 296.28,280.53 360,429.51 281.2,428.61 216.45,481.14 "/>
      <polygon fill="#2dffe6" points="231.94,290.08 69.57,294.38 0,459.86 78.8,458.95 143.55,511.48 "/>
      <path fill="#01a08e" d="M183.21 0.03c9.35,-0.4 16.72,2.86 24.15,7.59 9.44,5.98 20.06,17.8 33.17,25.3 18.45,10.54 52.61,-4 70.11,21.99 10.21,15.16 10.69,27.04 11.45,38.78 0.82,12.67 3.04,24.32 16,41.47 21.47,28.38 25.94,47.27 14.88,66.96 -7.54,13.42 -23.41,20.88 -27.09,29.38 -7.81,18.09 0.83,31.72 -9.87,52.81 -7.43,14.62 -18.89,24.26 -34.16,29.18 -12.88,4.14 -25.8,-1.85 -36.1,2.48 -18.12,7.61 -31.48,25.3 -45.89,29.77 -5.57,1.73 -11.11,2.58 -16.65,2.54 -5.53,0.04 -11.08,-0.81 -16.64,-2.54 -14.42,-4.47 -27.78,-22.16 -45.9,-29.77 -10.3,-4.33 -23.22,1.66 -36.1,-2.48 -15.26,-4.92 -26.73,-14.56 -34.16,-29.18 -10.7,-21.09 -2.06,-34.72 -9.87,-52.81 -3.68,-8.5 -19.55,-15.96 -27.09,-29.38 -11.06,-19.69 -6.58,-38.58 14.88,-66.96 12.96,-17.15 15.18,-28.8 16,-41.47 0.76,-11.74 1.24,-23.62 11.45,-38.78 17.5,-25.99 51.66,-11.45 70.11,-21.99 13.12,-7.5 23.73,-19.32 33.17,-25.3 7.44,-4.73 14.81,-7.99 24.15,-7.59z"/>
      <path fill="#2dffe6" d="M183.21 0.04c9.35,-0.41 16.71,2.86 24.15,7.58 9.44,5.98 20.06,17.8 33.17,25.3 14.67,8.38 39.28,0.91 57.54,10.56l-206.12 271.42c-2.45,-0.2 -4.92,-0.62 -7.38,-1.41 -15.27,-4.92 -26.73,-14.55 -34.16,-29.18 -10.7,-21.09 -2.06,-34.72 -9.87,-52.81 -3.68,-8.5 -19.55,-15.96 -27.09,-29.38 -11.06,-19.69 -6.58,-38.58 14.87,-66.96 12.97,-17.14 15.19,-28.8 16.01,-41.47 0.76,-11.74 1.24,-23.62 11.44,-38.78 17.51,-26 51.68,-11.45 70.12,-21.99 13.12,-7.5 23.74,-19.32 33.17,-25.3 7.44,-4.72 14.81,-7.99 24.15,-7.58z"/>
      <circle fill="#fff" cx="182.71" cy="176.83" r="130.04"/>
      <path fill="#01a08e" d="M182.71 72.88c57.41,0 103.94,46.54 103.94,103.95 0,57.41 -46.53,103.95 -103.94,103.95 -57.41,0 -103.95,-46.54 -103.95,-103.95 0,-57.41 46.54,-103.95 103.95,-103.95z"/>
      <path fill="#2dffe6" d="M182.71 72.88c27.48,0 52.49,10.67 71.07,28.09l-127.44 163.2c-4.62,-2.98 -8.99,-6.33 -13.07,-9.99 -21.18,-19.02 -34.51,-46.63 -34.51,-77.35 0,-57.41 46.54,-103.95 103.95,-103.95z"/>
      <path fill="#fff" fillRule="nonzero" d="M185.78 116.08l16.31 38.19 41.36 3.71c1.83,0.16 3.18,1.77 3.02,3.59 -0.07,0.89 -0.49,1.67 -1.12,2.21l0 0 -31.29 27.33 9.26 40.5c0.41,1.79 -0.71,3.57 -2.5,3.98 -0.92,0.21 -1.83,0.02 -2.56,-0.45l-35.55 -21.26 -35.66 21.32c-1.57,0.94 -3.61,0.43 -4.55,-1.14 -0.46,-0.77 -0.57,-1.64 -0.39,-2.45l0 0 9.26 -40.5 -31.3 -27.33c-1.38,-1.2 -1.52,-3.3 -0.31,-4.68 0.61,-0.7 1.46,-1.08 2.32,-1.13l41.26 -3.7 16.32 -38.21c0.72,-1.69 2.67,-2.47 4.35,-1.75 0.84,0.35 1.45,1 1.77,1.77l0 0z"/>
    </svg>
  );

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
<section className="relative text-white overflow-hidden lg:py-20 py-5 lg:px-30 px-3">    {/* Background decorative elements */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#01a08e]/10 to-[#2dffe6]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-[#19232d]/5 to-[#01a08e]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Video Section - Now first on mobile, right on desktop */}
        <div className="relative order-1 lg:order-2">
          <div 
            ref={videoContainerRef}
            className="relative group"
          >
            {/* Main Video Container */}
            <div className="group mt-6 relative z-10 bg-gradient-to-br from-[#25CFBA] via-[#00A08E] to-[#006155] p-2 rounded-3xl shadow-2xl shadow-[#01a08e]/25 transform transition-all duration-700 hover:shadow-2xl hover:shadow-[#01a08e]/40">
              <div className="bg-[#19232d] rounded-2xl overflow-hidden relative">
                {isPlaying ? (
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <iframe
                      src={vimeoUrl}
                      className="w-full h-full rounded-xl"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div className="relative aspect-video rounded-xl overflow-hidden cursor-pointer">
                    {/* Video Thumbnail with Gradient Overlay */}
                    <div className="relative w-full h-full">
                      <Image
                        src={thumbnailSrc}
                        alt={videoAlt}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-700"
                        priority
                      />
                      <div onClick={handlePlayVideo} className="absolute inset-0 bg-gradient-to-t from-[#19232d]/60 via-transparent to-[#19232d]/20"></div>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={handlePlayVideo}
                        className="relative group/btn w-20 h-20 bg-black/25 group-hover:bg-white/30 rounded-full shadow-2xl shadow-black/30 cursor-pointer transition-all duration-500 group-hover:scale-110 group-hover:shadow-3xl hover:shadow-black/40 active:scale-105 border border-white/20 border-2 group-hover:border group-hover:border-2 group-hover:border-gray/90"
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1 transition-transform duration-300 group-hover:scale-110"></div>
                        </div>
                      </button>
                    </div>

                    {/* Play text */}
                    <div 
                      onClick={handlePlayVideo} 
                      className="hidden lg:block absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/90 font-medium text-sm backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full border border-white/10 transition-all duration-300 group-hover:bg-black/30 group-hover:border-white/20 whitespace-nowrap"
                    >
                      Нажмите чтобы посмотреть
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#2dffe6] to-[#01a08e] rounded-2xl rotate-12 opacity-20 group-hover:opacity-40 transition-all duration-1000 group-hover:rotate-45"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#19232d] to-[#01a08e] rounded-full opacity-15 group-hover:opacity-35 transition-all duration-1000 group-hover:scale-125"></div>
          </div>
        </div>

        {/* Content Section - Now second on mobile, left on desktop */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-6">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#edf7e7] border border-[#01a08e]/20 lg:mb-3 md:mb-3 mb-5"
            >
              <div className="w-2 h-2 bg-[#01a08e] rounded-full" />
              <span className="text-sm font-medium text-[#073e4a]">Наш путь</span>
            </div>
            {/* Title */}
            <h2 className="text-3xl lg:text-5xl font-bold text-[#19232d] leading-tight">
              Строим будущее{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#01a08e]">вместе</span>
                <div className="absolute bottom-2 left-0 w-full h-3 bg-[#2dffe6]/30 -rotate-1 z-0"></div>
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-700 leading-relaxed font-light">
              В ВШУ ты не просто учишься — ты сразу начинаешь работать с реальными задачами, 
              бизнес-кейсами и проектами. Обучение идёт под руководством менторов из индустрии, 
              а результат — это не абстрактные знания, а практический опыт и готовность выйти на рынок.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="cursor-pointer text-center p-4 pt-2 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:bg-white/80"
                >
                  <div className="text-2xl font-bold text-[#19232d] mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  </section>
);}