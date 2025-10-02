import React from 'react';

const ModernCTACard = () => {
  return (
<div className="lg:mx-30 mx-6 lg:mt-22 mt-16 bg-[#19232d] rounded-3xl">
      
      {/* Main Card Container */}
  <div className="w-full h-full bg-gradient-to-br from-[#073e4a] via-[#1F2D3D] to-[#01a08e] opacity-90 rounded-3xl shadow-2xl overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#2dffe6] rounded-full -translate-y-36 translate-x-36"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#01a08e] rounded-full translate-y-48 -translate-x-48"></div>
        </div>

        {/* Content Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-12">
          
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Main Heading */}
            <div>
              <h2 className="text-xl lg:text-xl xl:text-3xl font-bold text-white mb-6 leading-tight">
                Нет возможности оплатить <br />обучение сразу?
                {/* <span className="text-[#2dffe6]">обучение сразу?</span> */}
              </h2>
              
              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#00B09D] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <p className="text-xl text-white/90">
                    <span className="text-[#2dffe6] font-semibold">Плати только проценты</span> по кредиту 
                    во время обучения + 9 месяцев после выпуска
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#00B09D] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p className="text-xl text-white/90">
                    <span className="text-[#2dffe6] font-semibold">Основную часть выплачивай</span> 
                    {" "}уже во время работы по новой специальности
                  </p>
                </div>
              </div>
            </div>

            {/* Government Support Badge */}
            <div className="inline-flex items-center gap-4 bg-[#edf7e7]/10 backdrop-blur-sm border border-[#2dffe6]/30 rounded-2xl p-4 pr-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00D9BF] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="white" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-[#2dffe6] font-bold text-lg">Кредит с государственной поддержкой</p>
                <p className="text-white/80 text-sm">Специально для наших студентов</p>
              </div>
            </div>
          </div>

          {/* Right CTA Section */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
            {/* CTA Box */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-4">Начни обучение сейчас</h3>
              
              <div className="space-y-3">
                <button className="cursor-pointer w-full bg-[#00B09D] hover:bg-[#018f7c] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group">
                  <span className="text-lg">Узнать условия</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
                
                <button className="cursor-pointer w-full border-2 border-[#2dffe6] text-[#2dffe6] hover:bg-[#2dffe6] hover:text-[#073e4a] font-semibold py-4 px-6 rounded-xl transition-all duration-200">
                  Бесплатная консультация
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-black/20 rounded-xl p-3">
                <div className="text-white font-bold text-xl">0%</div>
                <div className="text-white/70 text-xs">переплаты в период обучения</div>
              </div>
              <div className="bg-black/20 rounded-xl p-3">
                <div className="text-white font-bold text-xl">9 мес</div>
                <div className="text-white/70 text-xs">льготный период после выпуска</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModernCTACard;