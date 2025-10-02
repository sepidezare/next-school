import React, { useState, useRef } from 'react';


interface StudentVideo {
  id: number;
  name: string;
  course: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  quote: string;
}

const StudentVideosSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const studentVideos: StudentVideo[] = [
    {
      id: 1,
      name: 'Максим Иванов',
      
      course: 'Менеджмент',
      duration: '2:15',
      thumbnail: '/images/student1.png',
      videoUrl: '/videos/student1.mp4',
      quote: 'Курс изменил мой подход к программированию.'
    },
    {
      id: 2,
      name: 'Анна Петрова',
      course: 'Юриспруденция',
      duration: '1:45',
      thumbnail: '/images/student2.png',
      videoUrl: '/videos/student2.mp4',
      quote: 'Практические задания помогли закрепить теорию.'
    },
    {
      id: 3,
      name: 'Дмитрий Козлов',
      
      course: 'Психология',
      duration: '2:30',
      thumbnail: '/images/student3.png',
      videoUrl: '/videos/student3.mp4',
      quote: 'Преподаватели всегда на связи и готовы помочь.'
    },
    {
      id: 4,
      name: 'Елена Смирнова',
      course: 'бИЗНЕС-ИНФОРМАТИКА',
      duration: '1:55',
      thumbnail: '/images/student4.png',
      videoUrl: '/videos/student4.mp4',
      quote: 'После курса получил предложение о работе.'
    }
  ];

  const handleVideoPlay = (id: number) => {
    if (activeVideo === id) {
      // Toggle play/pause for current video
      const video = videoRefs.current[id - 1];
      if (video) {
        if (isPlaying) {
          video.pause();
          setIsPlaying(false);
        } else {
          video.play();
          setIsPlaying(true);
        }
      }
    } else {
      // Stop current video and play new one
      if (activeVideo !== null) {
        const currentVideo = videoRefs.current[activeVideo - 1];
        if (currentVideo) {
          currentVideo.pause();
          currentVideo.currentTime = 0;
        }
      }
      
      setActiveVideo(id);
      const newVideo = videoRefs.current[id - 1];
      if (newVideo) {
        newVideo.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <section className="student-videos-section lg:px-23 lg:px-4 mt-10">
      <div className="container">
<div className="text-center lg:mb-18 mb-15"
        >
          {/* <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#edf7e7] border border-[#01a08e]/20 mb-8"
          >
            <div className="w-2 h-2 bg-[#01a08e] rounded-full" />
            <span className="text-sm font-medium text-[#073e4a]">студенты</span>
          </div> */}

          <h1
          
            className="text-3xl lg:text-5xl md:text-6xl font-light text-[#19232d] mb-6 tracking-tight"
          >
            Что говорят 
            <span className="inline font-semibold text-[#01a08e] mt-2"> наши студенты</span>
          </h1>

          <p
           
            className="text-xl text-[#073e4a]/70 max-w-3xl mx-auto leading-relaxed font-light"
          >
           Узнайте о впечатлениях от обучения из первых уст
          </p>
        </div>
        <div className="videos-grid lg:gap-20 gap-10">
          {studentVideos.map((student, index) => (
            <div 
              key={student.id}
              className={`video-card ${activeVideo === student.id ? 'active' : ''}`}
            >
              <div className="video-container">
                <video
                  src={student.videoUrl}
                  poster={student.thumbnail}
                  onEnded={handleVideoEnd}
                  className="student-video"
                  preload="metadata"
                />
                
                <div className="video-overlay">
                  <button
                    className="play-button"
                    onClick={() => handleVideoPlay(student.id)}
                    aria-label={activeVideo === student.id && isPlaying ? 'Пауза' : 'Воспроизвести'}
                  >
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none"
                    >
                      {activeVideo === student.id && isPlaying ? (
                        // Pause icon
                        <>
                          <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                          <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
                        </>
                      ) : (
                        // Play icon
                        <path 
                          d="M8 5v14l11-7z" 
                          fill="currentColor"
                        />
                      )}
                    </svg>
                  </button>
                  
                  <div className="video-info">
                    <span className="duration">{student.duration}</span>
                  </div>
                </div>
              </div>

              <div className="student-info">
                <h3 className="student-name">{student.name}</h3>
                <p className="student-course">{student.course}</p>
                <blockquote className="student-quote">
                  "{student.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentVideosSection;