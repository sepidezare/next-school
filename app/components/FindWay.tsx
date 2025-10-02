'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function CareerStarter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const features = [
    {
      title: "Карьерный старт",
      description: "Поможем с карьерным стартом",
      details: "Комплексная программа адаптации и развития от начала карьеры до первых профессиональных достижений",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 15L7 12L12 9L17 12L12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 3L21 7.5L12 12L3 7.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 12V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 12V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Рекомендации",
      description: "Рекомендательное письмо после стажировки",
      details: "Официальное рекомендательное письмо, подтверждающее ваши достижения и компетенции",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Портфолио",
      description: "Индивидуальное портфолио для каждого студента",
      details: "Разработка профессионального портфолио, отражающего ваши уникальные навыки и проекты",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Подбор вакансий",
      description: "Подбор с учетом пожеланий и специальности",
      details: "Персональный подбор релевантных вакансий от партнерских компаний и карьерный консалтинг",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M21 10.5H3M16 2.5V6.5M8 2.5V6.5M7.8 19.5H16.2C17.8802 19.5 18.7202 19.5 19.362 19.173C19.9265 18.8854 20.3854 18.4265 20.673 17.862C21 17.2202 21 16.3802 21 14.7V9.3C21 7.61984 21 6.77976 20.673 6.13803C20.3854 5.57354 19.9265 5.1146 19.362 4.82698C18.7202 4.5 17.8802 4.5 16.2 4.5H7.8C6.11984 4.5 5.27976 4.5 4.63803 4.82698C4.07354 5.1146 3.6146 5.57354 3.32698 6.13803C3 6.77976 3 7.61984 3 9.3V14.7C3 16.3802 3 17.2202 3.32698 17.862C3.6146 18.4265 4.07354 18.8854 4.63803 19.173C5.27976 19.5 6.11984 19.5 7.8 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section ref={ref} className="bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(1,160,142,0.02)_25%,rgba(1,160,142,0.02)_50%,transparent_50%,transparent_75%,rgba(1,160,142,0.02)_75%)] bg-[length:20px_20px]" />
        <div className="absolute top-1/4 -left-10 w-80 h-80 bg-[#01a08e] opacity-[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-[#073e4a] opacity-[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 lg:mx-20 mx-0 px-6 lg:pt-24 pt-16">
        {/* Header Section */}
        <div className="text-center lg:mb-18 mb-15"
        >
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#edf7e7] border border-[#01a08e]/20 lg:mb-3 md:mb-3 mb-5"
          >
            <div className="w-2 h-2 bg-[#01a08e] rounded-full" />
            <span className="text-sm font-medium text-[#073e4a]">Карьерный рост</span>
          </div>
         <h2 className="text-3xl lg:text-5xl font-bold text-[#19232d] leading-tight mb-7">
  Профессиональный <br />
  <span className="relative inline-block">
    <span className="relative z-10 text-[#01a08e]">старт карьеры</span>
    <div className="absolute bottom-2 left-0 w-full h-3 bg-[#2dffe6]/30 -rotate-1 z-0"></div>
  </span>
</h2>

          <p
           
            className="text-xl text-[#073e4a]/70 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Комплексная программа поддержки для успешного начала профессионального пути 
            с индивидуальным подходом к каждому студенту
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-4">
          {features.map((feature, index) => (
            <div
             
              className="group"
            >
              <div className="cursor-pointer bg-white rounded-2xl p-8 border border-[#edf7e7] hover:border-[#01a08e]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#01a08e]/5 h-full">
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#01a08e] to-[#073e4a] text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-[#19232d] mb-3">
                  {feature.title}
                </h3>
                <p className="text-lg text-[#01a08e] font-medium mb-4">
                  {feature.description}
                </p>
                <p className="text-[#073e4a]/70 leading-relaxed font-light">
                  {feature.details}
                </p>

                {/* Subtle Hover Line */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#01a08e] to-[#2dffe6] mt-6 group-hover:w-12 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}