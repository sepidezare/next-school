import React from 'react';

const RussianOnlineSchool = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#073e4a] to-[#19232d] text-white font-sans">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10">
            <svg viewBox="0 0 1420 427" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1152.73 187.581H1111.03V424.5H1152.73V187.581Z" fill="#2dffe6"></path>
              <path d="M1016.63 375.681V187.581H976.733V375.681C976.744 376.437 976.604 377.188 976.323 377.889C976.041 378.591 975.623 379.231 975.093 379.77C974.563 380.309 973.932 380.738 973.235 381.032C972.538 381.325 971.789 381.478 971.033 381.481H887.933C886.411 381.46 884.958 380.838 883.891 379.752C882.823 378.666 882.228 377.203 882.233 375.681V187.581H840.533V383.181C840.544 394.237 844.941 404.837 852.759 412.655C860.577 420.473 871.177 424.87 882.233 424.881H1152.73V381.481H1022.33C1021.58 381.478 1020.83 381.325 1020.13 381.032C1019.43 380.738 1018.8 380.309 1018.27 379.77C1017.74 379.231 1017.32 378.591 1017.04 377.889C1016.76 377.188 1016.62 376.437 1016.63 375.681Z" fill="#2dffe6"></path>
              <path d="M1373.33 187.681L1296 361.181C1292 370.481 1287.1 376.681 1281.5 379.981C1275.9 383.281 1269.1 384.881 1261.2 384.881C1255.7 384.881 1247 384.281 1235.2 383.181V424.481C1245.28 425.892 1255.43 426.693 1265.6 426.881C1284.2 426.881 1298.8 421.881 1309.3 411.781C1319.8 401.681 1331 383.381 1342.9 356.681L1419.9 187.581L1373.3 187.681H1373.33Z" fill="#2dffe6"></path>
              <path d="M1229.65 188.081L1307.1 328.737C1311.11 336.277 1316.02 341.303 1321.63 343.978C1327.23 346.654 1334.05 347.951 1341.96 347.951C1347.47 347.951 1309.81 360.392 1321.63 359.5L1313.5 373.5C1303.41 374.644 1328.69 369.607 1318.5 369.758C1299.87 369.758 1304.3 377.947 1293.78 369.758C1283.26 361.57 1272.05 346.735 1260.13 325.089L1183 188L1229.68 188.081H1229.65Z" fill="#2dffe6"></path>
              <path d="M745.133 303.481C760.433 300.981 772.733 295.381 782.033 286.481C791.333 277.581 795.833 265.581 795.833 250.381C795.833 231.781 789.299 216.847 776.233 205.581C763.166 194.314 745.566 188.647 723.433 188.581H592.433V423.781H723.133C749.233 423.781 769.133 418.181 782.833 406.981C796.533 395.781 803.399 380.214 803.433 360.281C803.433 326.881 783.999 307.947 745.133 303.481ZM638.833 219.281H721.233C729.56 218.973 737.743 221.512 744.433 226.481C757.733 236.781 757.933 252.881 757.933 255.281C757.933 257.681 757.533 273.381 744.333 283.781C737.733 288.817 729.634 291.493 721.333 291.381H638.933C635.833 291.381 633.233 288.281 633.233 284.481V226.181C633.233 222.381 635.733 219.281 638.833 219.281ZM750.433 384.281C746.451 386.789 742.046 388.551 737.433 389.481C731.374 390.676 725.208 391.246 719.033 391.181H638.833C635.733 391.181 633.133 388.081 633.133 384.281V325.481C633.133 321.681 635.633 318.581 638.833 318.581H721.733C732.02 318.763 741.949 322.39 749.933 328.881C753.433 331.781 763.733 340.381 764.933 354.981C766.003 367.581 759.733 378.081 750.433 384.281Z" fill="#2dffe6"></path>
              <path d="M13.9027 26.0905C-31.2173 82.5105 37.1027 212.09 166.503 315.59C295.903 419.09 437.363 457.2 482.503 400.78C527.643 344.36 459.303 214.78 329.913 111.28C200.523 7.78046 59.0027 -30.3295 13.9027 26.0905ZM475.763 398.09C448.763 431.87 306.543 360.36 222.763 293.34C138.983 226.32 120.393 162.87 147.413 129.09C174.433 95.3105 236.743 104 320.553 171C404.363 238 502.773 364.32 475.763 398.1V398.09Z" fill="url(#paint0_linear_1031_19)"></path>
              <path d="M452.663 178.321C419.193 127.461 318.373 134.721 227.473 194.541C136.573 254.361 96.473 340.661 129.973 391.541C163.473 442.421 257.793 438.541 348.683 378.741C439.573 318.941 486.133 229.181 452.663 178.321ZM133.663 389.661C112.663 357.771 156.093 293.831 221.993 250.471C287.893 207.111 339.543 213.251 360.533 245.141C381.523 277.031 363.913 322.591 298.003 366.001C232.093 409.411 154.673 421.551 133.693 389.661H133.663Z" fill="#01a08e"></path>
              <path d="M457.903 250.001C452.839 265.234 445.749 279.717 436.823 293.061C470.323 338.781 489.673 380.721 475.763 398.121C460.763 416.931 409.943 403.121 353.453 375.551C351.887 376.631 350.3 377.694 348.693 378.741C335.769 387.262 322.285 394.903 308.333 401.611C386.663 434.331 453.913 436.531 482.483 400.801C508.373 368.381 496.883 311.851 457.903 250.001ZM222.733 293.351C212.833 285.431 203.833 277.577 195.733 269.791C186.659 261.168 178.152 251.969 170.263 242.251C132.373 195.341 127.413 154.081 147.413 129.091C172.463 97.7406 227.903 103.001 302.673 157.381C325.783 149.551 348.153 145.261 368.503 144.571C356.353 133.261 343.453 122.121 329.883 111.281C200.483 7.81059 59.0032 -30.3394 13.9132 26.0806C-27.4668 77.8206 26.5732 191.171 135.663 289.411C142.623 295.677 149.81 301.884 157.223 308.031C160.283 310.571 163.373 313.081 166.503 315.591C198.341 341.216 232.549 363.748 268.663 382.881C278.768 377.839 288.565 372.202 298.003 366.001C303.69 362.254 309.023 358.494 314.003 354.721C281.423 336.081 249.173 314.501 222.733 293.351Z" fill="url(#paint1_linear_1031_19)"></path>
              <path d="M457.903 250.001C452.839 265.234 445.749 279.717 436.823 293.061C417.773 322.211 389.213 351.181 353.453 375.551C351.886 376.631 350.3 377.694 348.693 378.741C335.769 387.262 322.285 394.903 308.333 401.611C231.213 438.471 158.493 434.861 130.003 391.521C112.173 364.421 115.213 327.251 135.703 289.411C142.663 295.677 149.85 301.884 157.263 308.031C131.963 339.201 121.003 370.311 133.723 389.661C151.653 416.901 210.783 411.941 268.723 382.881C278.808 377.836 288.585 372.2 298.003 366.001C303.69 362.254 309.023 358.494 314.003 354.721C366.643 314.861 379.723 274.321 360.543 245.201C339.543 213.311 287.893 207.201 222.003 250.521C212.913 256.503 204.138 262.952 195.713 269.841C186.639 261.218 178.132 252.019 170.243 242.301C187.379 224.212 206.581 208.199 227.453 194.591C250.844 179.068 276.113 166.581 302.653 157.431C325.763 149.601 348.133 145.311 368.483 144.621C406.103 143.331 436.853 154.391 452.633 178.361C465.473 197.791 466.553 223.001 457.903 250.001Z" fill="url(#paint2_linear_1031_19)"></path>
              <path d="M457.903 250.001C453.423 264.051 446.303 278.581 436.833 293.061C417.783 322.211 389.223 351.181 353.453 375.551C351.886 376.631 350.303 377.694 348.703 378.741C335.774 387.26 322.287 394.901 308.333 401.611C231.223 438.471 158.493 434.861 130.003 391.521C112.183 364.421 115.223 327.251 135.713 289.411C142.673 295.677 149.856 301.884 157.263 308.031C131.973 339.201 121.003 370.311 133.733 389.661C151.653 416.901 210.783 411.941 268.733 382.881C278.814 377.836 288.587 372.2 298.003 366.001C303.689 362.254 309.023 358.494 314.003 354.721C366.653 314.861 379.723 274.321 360.553 245.201C339.553 213.311 287.903 207.201 222.003 250.521C212.912 256.503 204.137 262.952 195.713 269.841C186.645 261.216 178.14 252.017 170.253 242.301C187.386 224.209 206.588 208.196 227.463 194.591C250.85 179.068 276.116 166.581 302.653 157.431C325.763 149.601 348.143 145.311 368.493 144.621C406.113 143.331 436.853 154.391 452.643 178.361C465.483 197.791 466.563 223.001 457.903 250.001Z" fill="url(#paint3_radial_1031_19)"></path>
              <defs>
                <linearGradient id="paint0_linear_1031_19" x1="0.0027346" y1="213.43" x2="496.373" y2="213.43" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#52E5DD"></stop>
                  <stop offset="0.31" stopColor="#18B0A1"></stop>
                  <stop offset="0.65" stopColor="#0D4847"></stop>
                  <stop offset="1" stopColor="#0C3637"></stop>
                </linearGradient>
                <linearGradient id="paint1_linear_1031_19" x1="0.00318779" y1="213.431" x2="496.373" y2="213.431" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#52E5DD"></stop>
                  <stop offset="0.31" stopColor="#18B0A1"></stop>
                  <stop offset="0.65" stopColor="#0D4847"></stop>
                  <stop offset="1" stopColor="#0C3637"></stop>
                </linearGradient>
                <linearGradient id="paint2_linear_1031_19" x1="118.263" y1="285.671" x2="463.503" y2="285.671" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#52E5DD"></stop>
                  <stop offset="0.41" stopColor="#18B0A1"></stop>
                  <stop offset="0.72" stopColor="#2ED4C3"></stop>
                  <stop offset="1" stopColor="#59D6D3"></stop>
                </linearGradient>
                <radialGradient id="paint3_radial_1031_19" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(303.104 275.628) rotate(-124.7) scale(154.71 89.7318)">
                  <stop stopColor="#0E3C3E"></stop>
                  <stop offset="1" stopColor="#0C3637" stopOpacity="0"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
          <span className="text-2xl font-bold">РусскаяОнлайнШкола</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#courses" className="hover:text-[#2dffe6] transition-colors">Курсы</a>
          <a href="#teachers" className="hover:text-[#2dffe6] transition-colors">Преподаватели</a>
          <a href="#about" className="hover:text-[#2dffe6] transition-colors">О нас</a>
          <a href="#contact" className="hover:text-[#2dffe6] transition-colors">Контакты</a>
        </nav>
        
        <button className="bg-[#01a08e] hover:bg-[#2dffe6] text-white px-6 py-2 rounded-full font-medium transition-colors">
          Войти
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Изучайте русский язык <span className="text-[#2dffe6]">онлайн</span> с лучшими преподавателями
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Интерактивные курсы, индивидуальный подход и современные методики обучения для всех уровней подготовки.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-[#01a08e] hover:bg-[#2dffe6] text-white px-8 py-3 rounded-full font-medium transition-colors">
              Начать обучение
            </button>
            <button className="border border-[#2dffe6] text-[#2dffe6] hover:bg-[#2dffe6] hover:text-[#073e4a] px-8 py-3 rounded-full font-medium transition-colors">
              Бесплатный урок
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#01a08e] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#2dffe6] rounded-full opacity-30 animate-pulse delay-1000"></div>
            <div className="relative bg-gradient-to-br from-[#19232d] to-[#073e4a] p-8 rounded-2xl shadow-2xl border border-[#2dffe6]/20">
              <h3 className="text-2xl font-bold mb-4">Популярные курсы</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#2dffe6] rounded-full mr-3"></div>
                  <span>Русский для начинающих</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#2dffe6] rounded-full mr-3"></div>
                  <span>Деловой русский</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#2dffe6] rounded-full mr-3"></div>
                  <span>Подготовка к экзаменам</span>
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-[#2dffe6] rounded-full mr-3"></div>
                  <span>Русская литература</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#0a2d36] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] p-6 rounded-xl border border-[#2dffe6]/20">
              <div className="w-12 h-12 bg-[#01a08e] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Современные методики</h3>
              <p className="text-gray-300">Используем интерактивные технологии и актуальные учебные материалы.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] p-6 rounded-xl border border-[#2dffe6]/20">
              <div className="w-12 h-12 bg-[#01a08e] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Опытные преподаватели</h3>
              <p className="text-gray-300">Наши учителя - носители языка с педагогическим образованием и большим опытом.</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] p-6 rounded-xl border border-[#2dffe6]/20">
              <div className="w-12 h-12 bg-[#01a08e] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия результата</h3>
              <p className="text-gray-300">98% наших студентов достигают поставленных целей в изучении языка.</p>
            </div>
          </div>
        </div>
      </section>
{/* Testimonials Section */}
<section className="py-16 bg-gradient-to-b from-[#0a2d36] to-[#073e4a]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-4">Отзывы наших студентов</h2>
    <p className="text-xl text-center mb-12 text-gray-300 max-w-2xl mx-auto">
      Узнайте, что говорят наши студенты со всего мира о своем опыте обучения
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] p-6 rounded-xl border border-[#2dffe6]/20">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-[#01a08e] rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold text-lg">А</span>
          </div>
          <div>
            <h4 className="font-bold">Анна Коваль</h4>
            <p className="text-sm text-gray-400">Польша</p>
          </div>
        </div>
        <div className="flex text-[#2dffe6] mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-300">
          "За 6 месяцев обучения смогла начать свободно общаться с русскими коллегами. Преподаватели очень внимательные и профессиональные!"
        </p>
      </div>
      
      {/* Testimonial 2 */}
      <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] p-6 rounded-xl border border-[#2dffe6]/20">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-[#01a08e] rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold text-lg">М</span>
          </div>
          <div>
            <h4 className="font-bold">Марко Риччи</h4>
            <p className="text-sm text-gray-400">Италия</p>
          </div>
        </div>
        <div className="flex text-[#2dffe6] mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-300">
          "Изучаю русский для бизнеса. Уроки очень структурированные, материал подается понятно. Уже могу вести переговоры с партнерами!"
        </p>
      </div>
      
      {/* Testimonial 3 */}
      <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] p-6 rounded-xl border border-[#2dffe6]/20">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-[#01a08e] rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold text-lg">С</span>
          </div>
          <div>
            <h4 className="font-bold">София Мюллер</h4>
            <p className="text-sm text-gray-400">Германия</p>
          </div>
        </div>
        <div className="flex text-[#2dffe6] mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-300">
          "Готовилась к экзамену ТРКИ. Благодаря индивидуальному подходу преподавателя сдала на отлично! Спасибо за качественную подготовку."
        </p>
      </div>
    </div>
    
    <div className="text-center mt-12">
      <button className="border border-[#2dffe6] text-[#2dffe6] hover:bg-[#2dffe6] hover:text-[#073e4a] px-6 py-2 rounded-full font-medium transition-colors">
        Все отзывы
      </button>
    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы начать изучать русский язык?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Присоединяйтесь к тысячам студентов со всего мира, которые уже успешно изучают русский с нами.
          </p>
          <button className="bg-[#01a08e] hover:bg-[#2dffe6] text-white px-8 py-3 rounded-full font-medium transition-colors text-lg">
            Записаться на пробный урок
          </button>
        </div>
      </section>

{/* Pricing Section */}
<section className="py-16 bg-gradient-to-b from-[#073e4a] to-[#19232d]">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-4">Выберите подходящий курс</h2>
    <p className="text-xl text-center mb-12 text-gray-300 max-w-2xl mx-auto">
      Гибкие варианты обучения для разных целей и уровней подготовки
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Basic Plan */}
      <div className="bg-gradient-to-b from-[#0a2d36] to-[#073e4a] p-8 rounded-2xl border border-[#2dffe6]/30 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#01a08e] text-white px-4 py-1 rounded-full text-sm font-medium">
            Начинающий
          </span>
        </div>
        <h3 className="text-2xl font-bold text-center mb-2">Базовый курс</h3>
        <p className="text-gray-400 text-center mb-6">Для тех, кто только начинает</p>
        
        <div className="text-center mb-6">
          <span className="text-4xl font-bold">₽2,990</span>
          <span className="text-gray-400">/месяц</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>2 урока в неделю</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Групповые занятия (до 6 человек)</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Доступ к материалам</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Домашние задания</span>
          </li>
        </ul>
        
        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-colors">
          Выбрать план
        </button>
      </div>
      
      {/* Popular Plan */}
      <div className="bg-gradient-to-b from-[#01a08e] to-[#073e4a] p-8 rounded-2xl border-2 border-[#2dffe6] relative transform scale-105 shadow-2xl">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#2dffe6] text-[#073e4a] px-4 py-1 rounded-full text-sm font-medium">
            Популярный
          </span>
        </div>
        <h3 className="text-2xl font-bold text-center mb-2">Интенсивный курс</h3>
        <p className="text-gray-200 text-center mb-6">Для быстрого прогресса</p>
        
        <div className="text-center mb-6">
          <span className="text-4xl font-bold">₽5,990</span>
          <span className="text-gray-200">/месяц</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>4 урока в неделю</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Мини-группы (до 3 человек)</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Индивидуальная программа</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Разговорный клуб</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Персональный куратор</span>
          </li>
        </ul>
        
        <button className="w-full bg-[#2dffe6] hover:bg-[#01a08e] text-[#073e4a] py-3 rounded-lg font-bold transition-colors">
          Выбрать план
        </button>
      </div>
      
      {/* Premium Plan */}
      <div className="bg-gradient-to-b from-[#0a2d36] to-[#073e4a] p-8 rounded-2xl border border-[#2dffe6]/30 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-[#01a08e] text-white px-4 py-1 rounded-full text-sm font-medium">
            Премиум
          </span>
        </div>
        <h3 className="text-2xl font-bold text-center mb-2">Индивидуальный курс</h3>
        <p className="text-gray-400 text-center mb-6">Максимальный результат</p>
        
        <div className="text-center mb-6">
          <span className="text-4xl font-bold">₽11,990</span>
          <span className="text-gray-400">/месяц</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Индивидуальные уроки</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Гибкое расписание</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Специализированная программа</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Подготовка к экзаменам</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-[#2dffe6] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Круглосуточная поддержка</span>
          </li>
        </ul>
        
        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-colors">
          Выбрать план
        </button>
      </div>
    </div>
    
    <div className="text-center mt-8">
      <p className="text-gray-400">
        Все планы включают бесплатный пробный урок и доступ к онлайн-платформе
      </p>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-[#0a2329] py-8 border-t border-[#2dffe6]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8">
                <svg viewBox="0 0 1420 427" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1152.73 187.581H1111.03V424.5H1152.73V187.581Z" fill="#2dffe6"></path>
                  <path d="M1016.63 375.681V187.581H976.733V375.681C976.744 376.437 976.604 377.188 976.323 377.889C976.041 378.591 975.623 379.231 975.093 379.77C974.563 380.309 973.932 380.738 973.235 381.032C972.538 381.325 971.789 381.478 971.033 381.481H887.933C886.411 381.46 884.958 380.838 883.891 379.752C882.823 378.666 882.228 377.203 882.233 375.681V187.581H840.533V383.181C840.544 394.237 844.941 404.837 852.759 412.655C860.577 420.473 871.177 424.87 882.233 424.881H1152.73V381.481H1022.33C1021.58 381.478 1020.83 381.325 1020.13 381.032C1019.43 380.738 1018.8 380.309 1018.27 379.77C1017.74 379.231 1017.32 378.591 1017.04 377.889C1016.76 377.188 1016.62 376.437 1016.63 375.681Z" fill="#2dffe6"></path>
                  <path d="M1373.33 187.681L1296 361.181C1292 370.481 1287.1 376.681 1281.5 379.981C1275.9 383.281 1269.1 384.881 1261.2 384.881C1255.7 384.881 1247 384.281 1235.2 383.181V424.481C1245.28 425.892 1255.43 426.693 1265.6 426.881C1284.2 426.881 1298.8 421.881 1309.3 411.781C1319.8 401.681 1331 383.381 1342.9 356.681L1419.9 187.581L1373.3 187.681H1373.33Z" fill="#2dffe6"></path>
                </svg>
              </div>
              <span className="text-xl font-bold">РусскаяОнлайнШкола</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#2dffe6] transition-colors">Конфиденциальность</a>
              <a href="#" className="text-gray-400 hover:text-[#2dffe6] transition-colors">Условия использования</a>
              <a href="#" className="text-gray-400 hover:text-[#2dffe6] transition-colors">Контакты</a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-gray-500 text-sm">
            © 2023 РусскаяОнлайнШкола. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RussianOnlineSchool;