"use client";

import { useState, useRef } from 'react';
import { Play, Pause, Volume2, Maximize } from 'lucide-react';

export default function VideoSection_white() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && duration) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      videoRef.current.currentTime = percent * duration;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 text-black">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-[#2dffe6]">Story</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Crafting exceptional experiences through innovation, passion, and dedication
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Player */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#19232d]">
                <video
                  ref={videoRef}
                  className="w-full aspect-video"
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleTimeUpdate}
                  poster="/api/placeholder/800/450"
                >
                  <source src="/about-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Custom Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  {/* Progress Bar */}
                  <div 
                    className="h-1 bg-gray-600 rounded-full mb-3 cursor-pointer"
                    onClick={handleProgressClick}
                  >
                    <div 
                      className="h-full bg-[#2dffe6] rounded-full transition-all"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={togglePlay}
                        className="p-2 rounded-full bg-[#01a08e] hover:bg-[#2dffe6] transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-white" />
                        ) : (
                          <Play className="w-5 h-5 text-white" />
                        )}
                      </button>
                      
                      <div className="flex items-center space-x-2 text-white">
                        <Volume2 className="w-4 h-4" />
                        <span className="text-sm">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>
                    </div>
                    
                    <button className="p-2 text-white hover:text-[#2dffe6] transition-colors">
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-[#edf7e7] text-[#01a08e] rounded-full text-sm font-semibold">
                Our Journey
              </div>
              
              <h2 className="text-4xl font-bold text-[#19232d]">
                Building the Future <span className="text-[#01a08e]">Together</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to revolutionize the industry, we combine cutting-edge 
                technology with human-centric design to create solutions that matter.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#2dffe6]"></div>
                  <p className="text-gray-600">
                    <strong className="text-[#073e4a]">Innovation</strong> - Pushing boundaries with creative solutions
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#2dffe6]"></div>
                  <p className="text-gray-600">
                    <strong className="text-[#073e4a]">Quality</strong> - Excellence in every detail
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-[#2dffe6]"></div>
                  <p className="text-gray-600">
                    <strong className="text-[#073e4a]">Impact</strong> - Making a difference in people's lives
                  </p>
                </div>
              </div>
              
              <button className="px-8 py-3 bg-[#01a08e] hover:bg-[#073e4a] text-white rounded-full font-semibold transition-colors">
                Learn More About Our Mission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#edf7e7]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#073e4a] mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#073e4a] mb-2">15+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#073e4a] mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#073e4a] mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#073e4a] to-[#19232d] text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-[#2dffe6]">Collaborate</span>?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create something amazing together. Get in touch with our team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#01a08e] hover:bg-[#2dffe6] text-white rounded-full font-semibold transition-colors">
              Contact Us
            </button>
            <button className="px-8 py-3 border-2 border-[#2dffe6] text-[#2dffe6] hover:bg-[#2dffe6] hover:text-[#073e4a] rounded-full font-semibold transition-colors">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}