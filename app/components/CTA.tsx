import { useState } from 'react';

const countryCodes = [
  { code: '+7', flag: '🇷🇺', country: 'Russia' },
  { code: '+1', flag: '🇺🇸', country: 'USA' },
  { code: '+44', flag: '🇬🇧', country: 'UK' },
  { code: '+49', flag: '🇩🇪', country: 'Germany' },
  { code: '+33', flag: '🇫🇷', country: 'France' },
  { code: '+39', flag: '🇮🇹', country: 'Italy' },
  { code: '+34', flag: '🇪🇸', country: 'Spain' },
  { code: '+86', flag: '🇨🇳', country: 'China' },
  { code: '+81', flag: '🇯🇵', country: 'Japan' },
  { code: '+82', flag: '🇰🇷', country: 'South Korea' },
  { code: '+91', flag: '🇮🇳', country: 'India' },
  { code: '+55', flag: '🇧🇷', country: 'Brazil' },
  { code: '+61', flag: '🇦🇺', country: 'Australia' },
  { code: '+1', flag: '🇨🇦', country: 'Canada' },
  { code: '+52', flag: '🇲🇽', country: 'Mexico' },
  { code: '+31', flag: '🇳🇱', country: 'Netherlands' },
  { code: '+41', flag: '🇨🇭', country: 'Switzerland' },
  { code: '+46', flag: '🇸🇪', country: 'Sweden' },
  { code: '+47', flag: '🇳🇴', country: 'Norway' },
  { code: '+45', flag: '🇩🇰', country: 'Denmark' },
  { code: '+358', flag: '🇫🇮', country: 'Finland' },
  { code: '+48', flag: '🇵🇱', country: 'Poland' },
  { code: '+420', flag: '🇨🇿', country: 'Czech Republic' },
  { code: '+36', flag: '🇭🇺', country: 'Hungary' },
  { code: '+40', flag: '🇷🇴', country: 'Romania' },
  { code: '+380', flag: '🇺🇦', country: 'Ukraine' },
  { code: '+90', flag: '🇹🇷', country: 'Turkey' },
  { code: '+971', flag: '🇦🇪', country: 'UAE' },
  { code: '+966', flag: '🇸🇦', country: 'Saudi Arabia' },
  { code: '+65', flag: '🇸🇬', country: 'Singapore' },
  { code: '+60', flag: '🇲🇾', country: 'Malaysia' },
  { code: '+62', flag: '🇮🇩', country: 'Indonesia' },
  { code: '+63', flag: '🇵🇭', country: 'Philippines' },
  { code: '+84', flag: '🇻🇳', country: 'Vietnam' },
  { code: '+20', flag: '🇪🇬', country: 'Egypt' },
  { code: '+27', flag: '🇿🇦', country: 'South Africa' },
];

export default function CTA() {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    
    <div className="text-center pt-6 pb-20 lg:mt-16 mt-10 md:px-10 px-6">
      <div className="bg-gradient-to-r from-[#edf7e7] to-[#edf7e7]/50 rounded-3xl p-12 border border-[#01a08e]/10 max-w-4xl mx-auto">
        <h2 className="md:text-3xl text-xl font-semibold text-[#19232d] mb-4">
          Получи высшее образование с государственным дипломом Московского института!
        </h2>
        <p className="text-[#073e4a]/70 mb-8 text-lg font-light max-w-2xl mx-auto">
          Оставь заявку прямо сейчас
        </p>
        
        <div className="max-w-xl mx-auto mb-8">
  <form className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Name Field */}
      <div>
        <input
          type="text"
          placeholder="Ваше имя"
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#01a08e] focus:ring-2 focus:ring-[#01a08e]/20 outline-none transition-all duration-300"
        />
      </div>
      
      {/* Phone Field with Country Code Selector */}
      <div className="flex">
        {/* Country Code Dropdown */}
        <div className="flex-shrink-0">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-xl bg-white hover:bg-gray-50 focus:outline-none focus:border-[#01a08e] transition-all duration-300"
          >
            <span className="text-gray-700">{selectedCountry.code}</span>
            <svg 
              className={`ml-2 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Phone Input */}
        <input
          type="tel"
          placeholder="999 123-45-67"
          className="flex-1 min-w-0 px-4 py-3 rounded-r-xl border border-gray-300 focus:border-[#01a08e] focus:ring-2 focus:ring-[#01a08e]/20 outline-none transition-all duration-300"
        />
      </div>
    </div>
    
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-[#01a08e] to-[#073e4a] text-white font-semibold py-4 rounded-xl text-lg transition-all duration-300 hover:shadow-lg"
    >
      Получить консультацию
    </button>
  </form>
</div>

      </div>
    </div>    
  )
}