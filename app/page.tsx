"use client";
import React, { useState } from "react";
import { Play, ArrowRight, CheckCircle, Users, Video, Mail, Phone, MapPin, Component } from "lucide-react";
import VideoSection from "./components/VideoSection";
import Hero2 from "./components/Hero2";
import Fields from "./components/Fields";
import FindWay from "./components/FindWay";
import Payment from "./components/Payment";
import Students from "./components/Students";
import Sdark from './components/dark';
import Footer from './components/Footer';
import CTA from './components/CTA';
// -------------------------
// Translation types
// -------------------------
interface Translation {
  login: string;
  courses: string;
  teachers: string;
  about: string;
  contact: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroDescription: string;
  applyButton: string;
  consultationButton: string;
  featuresTitle: string;
  feature1: string;
  feature2: string;
  feature3: string;
  feature4: string;
  menu: string;
}

interface Translations {
  ru: Translation;
  en: Translation;
}

// -------------------------
// Translations
// -------------------------
const translations: Translations = {
  ru: {
    login: "Войти",
    courses: "Курсы",
    teachers: "Преподаватели",
    about: "О нас",
    contact: "Контакты",
    heroTitle: "ПОСТУПИ В ИНСТИТУТ С ",
    heroHighlight: "ПРОФЕССИОНАЛЬНЫМ",
    heroSubtitle: "СТАРТОМ",
    heroDescription:
      "Интерактивные курсы, индивидуальный подход и современные методики обучения для всех уровней подготовки.",
    applyButton: "ПОСТУПИТЬ →",
    consultationButton: "ЛИЧНАЯ КОНСУЛЬТАЦИЯ →",
    featuresTitle: "НОВАЯ ЭРА ОБУЧЕНИЯ",
    feature1: "80% занятий — практика",
    feature2: "Индивидуальный образовательный трек",
    feature3: "Менторы из топовых компаний",
    feature4: "Погружение в профессию с первого дня",
    menu: "Меню",
  },
  en: {
    login: "Login",
    courses: "Courses",
    teachers: "Teachers",
    about: "About",
    contact: "Contact",
    heroTitle: "ENTER THE INSTITUTE WITH A REAL",
    heroHighlight: "PROFESSIONAL",
    heroSubtitle: "START",
    heroDescription:
      "Interactive courses, individual approach and modern teaching methods for all levels of training.",
    applyButton: "APPLY →",
    consultationButton: "PERSONAL CONSULTATION →",
    featuresTitle: "NEW ERA OF LEARNING",
    feature1: "80% of classes are practice",
    feature2: "Individual educational track",
    feature3: "Mentors from top companies",
    feature4: "Immersion in the profession from day one",
    menu: "Menu",
  },
};

// -------------------------
// Component
// -------------------------
const RussianOnlineSchool: React.FC = () => {
  const [language, setLanguage] = useState<"ru" | "en">("ru");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleLanguageChange = (lang: "ru" | "en") => {
    setLanguage(lang);
    // Close mobile menu when language changes
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const t = translations[language];

  return (    
    
    <div>
    <div className="relative px-0 mx-0 ">
      
  {/* <div className="absolute inset-0 z-0">
    <img 
      src="/images/h2.jpg" 
      alt="Overlay" 
      className="w-full h-full object-cover opacity-5" 
    />
  </div>  */}
  
      <div className="bg-gradient-to-br from-[#073e4a] to-[#19232d] text-white lg:px-20 px-3">
        {/* Header */}
        <header className="w-full z-50 backdrop-blur-sm md:px-2 px-3 items-center">
          <div className="flex container mx-auto flex justify-between items-center">
            
            <div className="flex items-center space-x-2">
              <div className="w-20 h-20 lg:h-30 lg:w-30 flex items-center justify-center">
                {/* LOGO */}
              <svg viewBox="0 0 1420 427" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M1152.73 187.581H1111.03V424.5H1152.73V187.581Z" fill="#fff"></path>
              <path d="M1016.63 375.681V187.581H976.733V375.681C976.744 376.437 976.604 377.188 976.323 377.889C976.041 378.591 975.623 379.231 975.093 379.77C974.563 380.309 973.932 380.738 973.235 381.032C972.538 381.325 971.789 381.478 971.033 381.481H887.933C886.411 381.46 884.958 380.838 883.891 379.752C882.823 378.666 882.228 377.203 882.233 375.681V187.581H840.533V383.181C840.544 394.237 844.941 404.837 852.759 412.655C860.577 420.473 871.177 424.87 882.233 424.881H1152.73V381.481H1022.33C1021.58 381.478 1020.83 381.325 1020.13 381.032C1019.43 380.738 1018.8 380.309 1018.27 379.77C1017.74 379.231 1017.32 378.591 1017.04 377.889C1016.76 377.188 1016.62 376.437 1016.63 375.681Z" fill="#fff"></path>
              <path d="M1373.33 187.681L1296 361.181C1292 370.481 1287.1 376.681 1281.5 379.981C1275.9 383.281 1269.1 384.881 1261.2 384.881C1255.7 384.881 1247 384.281 1235.2 383.181V424.481C1245.28 425.892 1255.43 426.693 1265.6 426.881C1284.2 426.881 1298.8 421.881 1309.3 411.781C1319.8 401.681 1331 383.381 1342.9 356.681L1419.9 187.581L1373.3 187.681H1373.33Z" fill="#fff"></path>
              <path d="M1229.65 188.081L1307.1 328.737C1311.11 336.277 1316.02 341.303 1321.63 343.978C1327.23 346.654 1334.05 347.951 1341.96 347.951C1347.47 347.951 1309.81 360.392 1321.63 359.5L1313.5 373.5C1303.41 374.644 1328.69 369.607 1318.5 369.758C1299.87 369.758 1304.3 377.947 1293.78 369.758C1283.26 361.57 1272.05 346.735 1260.13 325.089L1183 188L1229.68 188.081H1229.65Z" fill="#fff"></path>
              <path d="M745.133 303.481C760.433 300.981 772.733 295.381 782.033 286.481C791.333 277.581 795.833 265.581 795.833 250.381C795.833 231.781 789.299 216.847 776.233 205.581C763.166 194.314 745.566 188.647 723.433 188.581H592.433V423.781H723.133C749.233 423.781 769.133 418.181 782.833 406.981C796.533 395.781 803.399 380.214 803.433 360.281C803.433 326.881 783.999 307.947 745.133 303.481ZM638.833 219.281H721.233C729.56 218.973 737.743 221.512 744.433 226.481C757.733 236.781 757.933 252.881 757.933 255.281C757.933 257.681 757.533 273.381 744.333 283.781C737.733 288.817 729.634 291.493 721.333 291.381H638.933C635.833 291.381 633.233 288.281 633.233 284.481V226.181C633.233 222.381 635.733 219.281 638.833 219.281ZM750.433 384.281C746.451 386.789 742.046 388.551 737.433 389.481C731.374 390.676 725.208 391.246 719.033 391.181H638.833C635.733 391.181 633.133 388.081 633.133 384.281V325.481C633.133 321.681 635.633 318.581 638.833 318.581H721.733C732.02 318.763 741.949 322.39 749.933 328.881C753.433 331.781 763.733 340.381 764.933 354.981C766.003 367.581 759.733 378.081 750.433 384.281Z" fill="#fff"></path>
              <path d="M13.9027 26.0905C-31.2173 82.5105 37.1027 212.09 166.503 315.59C295.903 419.09 437.363 457.2 482.503 400.78C527.643 344.36 459.303 214.78 329.913 111.28C200.523 7.78046 59.0027 -30.3295 13.9027 26.0905ZM475.763 398.09C448.763 431.87 306.543 360.36 222.763 293.34C138.983 226.32 120.393 162.87 147.413 129.09C174.433 95.3105 236.743 104 320.553 171C404.363 238 502.773 364.32 475.763 398.1V398.09Z" fill="url(#paint0_linear_1031_19)"></path>
              <path d="M452.663 178.321C419.193 127.461 318.373 134.721 227.473 194.541C136.573 254.361 96.473 340.661 129.973 391.541C163.473 442.421 257.793 438.541 348.683 378.741C439.573 318.941 486.133 229.181 452.663 178.321ZM133.663 389.661C112.663 357.771 156.093 293.831 221.993 250.471C287.893 207.111 339.543 213.251 360.533 245.141C381.523 277.031 363.913 322.591 298.003 366.001C232.093 409.411 154.673 421.551 133.693 389.661H133.663Z" fill="#01a08e"></path>
              <path d="M457.903 250.001C452.839 265.234 445.749 279.717 436.823 293.061C470.323 338.781 489.673 380.721 475.763 398.121C460.763 416.931 409.943 403.121 353.453 375.551C351.887 376.631 350.3 377.694 348.693 378.741C335.769 387.262 322.285 394.903 308.333 401.611C386.663 434.331 453.913 436.531 482.483 400.801C508.373 368.381 496.883 311.851 457.903 250.001ZM222.733 293.351C212.833 285.431 203.833 277.577 195.733 269.791C186.659 261.168 178.152 251.969 170.263 242.251C132.373 195.341 127.413 154.081 147.413 129.091C172.463 97.7406 227.903 103.001 302.673 157.381C325.783 149.551 348.153 145.261 368.503 144.571C356.353 133.261 343.453 122.121 329.883 111.281C200.483 7.81059 59.0032 -30.3394 13.9132 26.0806C-27.4668 77.8206 26.5732 191.171 135.663 289.411C142.623 295.677 149.81 301.884 157.223 308.031C160.283 310.571 163.373 313.081 166.503 315.591C198.341 341.216 232.549 363.748 268.663 382.881C278.768 377.839 288.565 372.202 298.003 366.001C303.69 362.254 309.023 358.494 314.003 354.721C281.423 336.081 249.173 314.501 222.733 293.351Z" fill="url(#paint1_linear_1031_19)"></path>
              <path d="M457.903 250.001C452.839 265.234 445.749 279.717 436.823 293.061C417.773 322.211 389.213 351.181 353.453 375.551C351.886 376.631 350.3 377.694 348.693 378.741C335.769 387.262 322.285 394.903 308.333 401.611C231.213 438.471 158.493 434.861 130.003 391.521C112.173 364.421 115.213 327.251 135.703 289.411C142.663 295.677 149.85 301.884 157.263 308.031C131.963 339.201 121.003 370.311 133.723 389.661C151.653 416.901 210.783 411.941 268.723 382.881C278.808 377.836 288.585 372.2 298.003 366.001C303.69 362.254 309.023 358.494 314.003 354.721C366.643 314.861 379.723 274.321 360.543 245.201C339.543 213.311 287.893 207.201 222.003 250.521C212.913 256.503 204.138 262.952 195.713 269.841C186.639 261.218 178.132 252.019 170.243 242.301C187.379 224.212 206.581 208.199 227.453 194.591C250.844 179.068 276.113 166.581 302.653 157.431C325.763 149.601 348.133 145.311 368.483 144.621C406.103 143.331 436.853 154.391 452.633 178.361C465.473 197.791 466.553 223.001 457.903 250.001Z" fill="url(#paint2_linear_1031_19)"></path>
              <path d="M457.903 250.001C453.423 264.051 446.303 278.581 436.833 293.061C417.783 322.211 389.223 351.181 353.453 375.551C351.886 376.631 350.303 377.694 348.703 378.741C335.774 387.26 322.287 394.901 308.333 401.611C231.223 438.471 158.493 434.861 130.003 391.521C112.183 364.421 115.223 327.251 135.713 289.411C142.673 295.677 149.856 301.884 157.263 308.031C131.973 339.201 121.003 370.311 133.733 389.661C151.653 416.901 210.783 411.941 268.733 382.881C278.814 377.836 288.587 372.2 298.003 366.001C303.689 362.254 309.023 358.494 314.003 354.721C366.653 314.861 379.723 274.321 360.553 245.201C339.553 213.311 287.903 207.201 222.003 250.521C212.912 256.503 204.137 262.952 195.713 269.841C186.645 261.216 178.14 252.017 170.253 242.301C187.386 224.209 206.588 208.196 227.463 194.591C250.85 179.068 276.116 166.581 302.653 157.431C325.763 149.601 348.143 145.311 368.493 144.621C406.113 143.331 436.853 154.391 452.643 178.361C465.483 197.791 466.563 223.001 457.903 250.001Z" fill="url(#paint3_radial_1031_19)"></path>
              <defs>
                <linearGradient id="paint0_linear_1031_19" x1="0.0027346" y1="213.43" x2="496.373" y2="213.43" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#fff"></stop>
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
            </div>

            {/* Desktop Navigation */}
            <nav className="z-10 hidden lg:flex space-x-6 xl:space-x-8">
              
              <a href="#courses" className="cursor-pointer hover:text-[#2dffe6] transition-colors duration-300 text-sm xl:text-base">
                {t.courses}
              </a>
              <a href="#teachers" className="cursor-pointer hover:text-[#2dffe6] transition-colors duration-300 text-sm xl:text-base">
                {t.teachers}
              </a>
              <a href="#about" className="cursor-pointer hover:text-[#2dffe6] transition-colors duration-300 text-sm xl:text-base">
                {t.about}
              </a>
              <a href="#contact" className="cursor-pointer hover:text-[#2dffe6] transition-colors duration-300 text-sm xl:text-base">
                {t.contact}
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="cursor-pointer bg-[#01a08e] hover:bg-[#2dffe6] text-white px-4 py-2.5 xl:px-6 xl:py-2 rounded-full font-medium transition-colors duration-300 text-sm xl:text-base">
                {t.login}
              </button>

              {/* Language Toggle */}
              <div className="flex items-center gap-1 bg-[#073e4a] hover:bg-[#0a4d5c] text-white px-2 py-1 xl:px-2 xl:py-1 rounded-full transition-colors duration-300 border border-[#2dffe6]/30">
                <button
                  onClick={() => handleLanguageChange("ru")}
                  className={`cursor-pointer px-2 py-2 rounded-full transition-all duration-300 text-xs ${
                    language === "ru" ? "bg-[#01a08e] text-white" : "text-white/70 cursor-pointer"
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`px-2 py-2 rounded-full transition-all duration-300 text-xs ${
                    language === "en" ? "bg-[#01a08e] text-white" : "text-white/70 cursor-pointer"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-1">
              {/* Language Toggle - Mobile */}
              <div className="flex items-center gap-1 bg-[#073e4a] hover:bg-[#0a4d5c] text-white px-2 py-1 rounded-full transition-colors duration-300 border border-[#2dffe6]/30">
                <button
                  onClick={() => handleLanguageChange("ru")}
                  className={`px-2 py-1 rounded-full transition-all duration-300 text-xs ${
                    language === "ru" ? "bg-[#01a08e] text-white" : "text-white/75"
                  }`}
                >
                  RU
                </button>
                <button
                  onClick={() => handleLanguageChange("en")}
                  className={`px-2 py-1 rounded-full transition-all duration-300 text-xs ${
                    language === "en" ? "bg-[#01a08e] text-white" : "text-white/75"
                  }`}
                >
                  EN
                </button>
              </div>

              <button onClick={toggleMobileMenu} className="text-white hover:text-[#2dffe6] transition-colors duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-[#073e4a] border-t border-[#2dffe6]/20 py-4">
              <nav className="flex flex-col space-y-4 px-4">
                {["courses", "teachers", "about", "contact"].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    className="hover:text-[#2dffe6] transition-colors duration-300 py-2 border-b border-[#2dffe6]/10"
                    onClick={closeMobileMenu}
                  >
                    {t[section as keyof Translation]}
                  </a>
                ))}
                <button className="bg-[#01a08e] hover:bg-[#2dffe6] text-white w-full py-3 rounded-full font-medium transition-colors duration-300 mt-4">
                  {t.login}
                </button>
              </nav>
            </div>
          )}
        </header>

        {/* Hero & Features Section */}
        <section className="relative lg:pb-10 md:pb-35 pb-20 pt-10 lg:pt-25 lg:pb-50 md:pt-10 md:pb-10 flex flex-col lg:flex-row items-center justify-center lg:gap-[0.1vw]">

          {/* Hero Content */}
          <div className="lg:px-0 w-full mb-8 lg:mb-0 text-center lg:text-left">
            <h1 className="lg:text-[clamp(1.4rem,3.4vw,3.5rem)] text-[1.5rem] font-extrabold mb-6 leading-tight sm:leading-snug">
              {t.heroTitle}
              <span className="text-[#2dffe6] font-extrabold lg:text-[clamp(1.4rem,3.4vw,3.5rem)] text-[1.5rem]">
               {" "} {t.heroHighlight}
              </span>{" "}
              {t.heroSubtitle}
            </h1>

            <p className="text-lg sm:text-xl mb-8 text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <button className="cursor-pointer bg-[#01a08e] hover:bg-[#2dffe6] font-bold text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-colors duration-300 text-sm sm:text-base">
                {t.applyButton}
              </button>
              <button className="cursor-pointer border border-[#2dffe6] font-bold text-[#2dffe6] hover:bg-[#2dffe6] hover:text-[#073e4a] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-colors duration-300 text-sm ">
                {t.consultationButton}
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="w-full lg:w-2/3 flex justify-center">
            <div className="relative w-full max-w-lg lg:mr-24 m-1">
              <div className="absolute -top-9 -left-9 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#01a08e] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-9 -right-9 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-[#2dffe6] rounded-full opacity-30 animate-pulse delay-1000"></div>
              <div className="relative bg-gradient-to-br from-[#19232d] to-[#073e4a] p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#2dffe6]/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">{t.featuresTitle}</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[t.feature1, t.feature2, t.feature3, t.feature4].map((feature, i) => (
                    <li key={i} className="flex items-center leading-relaxed">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-[#2dffe6] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
      </div>
      </div>
       <VideoSection/>
      <Fields/>
     <Payment/>       
      <FindWay/>

      {/* <Sdark />  */}
      <Students/>
            <CTA />
      <Footer/> 
    </div>
  );
};

export default RussianOnlineSchool;