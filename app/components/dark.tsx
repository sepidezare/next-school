import { useRef } from 'react';
export default function dark()
{
    return(
    <div>
<section className="bg-gradient-to-br from-[#073e4a] via-[#19232d] to-[#01a08e] opacity-95 py-16 px-20 mx-30 rounded-2xl">

        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] p-6 rounded-xl border border-[#2dffe6]/20">
              <div className="w-12 h-12 bg-[#01a08e] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="#fff" stroke="#00b9b9ff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Современные методики</h3>
              <p className="text-gray-300">Используем интерактивные технологии и актуальные учебные материалы.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] p-6 rounded-xl border border-[#2dffe6]/20">
              <div className="w-12 h-12 bg-[#01a08e] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="#fff" stroke="#00b9b9ff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Опытные преподаватели</h3>
              <p className="text-gray-300">Наши учителя - носители языка с педагогическим образованием и большим опытом.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] p-6 rounded-xl border border-[#2dffe6]/20">
              <div className="w-12 h-12 bg-[#01a08e] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="#fff" stroke="#00b9b9ff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Гарантия результата</h3>
              <p className="text-gray-300">98% наших студентов достигают поставленных целей в изучении языка.</p>
            </div>
          </div>
        </div>
      </section> 
             </div>);
};
