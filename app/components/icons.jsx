// icons.js
import React from 'react';

// Dark color scheme based on Jurisprudence
const DARK_COLORS = {
  primary: '#073e4a',     // Dark teal
  secondary: '#19232d',   // Dark blue-gray
  accent: '#2dffe6',      // Bright teal for highlights
  light: '#edf7e7',       // Light background
  white: '#ffffff'        // White
};

export const ManagementIcon = (props) => (
  <svg {...props} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="url(#grad1)"/>
    <circle cx="50" cy="50" r="45" stroke={DARK_COLORS.secondary} stroke-width="2"/>
    <path d="M50 10C70 10 85 25 85 45C85 50 84 55 82 59C78 53 70 49 60 49C50 49 42 53 38 59C36 55 35 50 35 45C35 35 40 25 50 10Z" fill="white" fill-opacity="0.3"/>
    <circle cx="50" cy="40" r="8" fill={DARK_COLORS.white}/>
    <path d="M50 48L50 65" stroke={DARK_COLORS.white} stroke-width="3"/>
    <path d="M50 65L35 80" stroke={DARK_COLORS.white} stroke-width="3"/>
    <path d="M50 65L65 80" stroke={DARK_COLORS.white} stroke-width="3"/>
    <path d="M35 55L65 55" stroke={DARK_COLORS.white} stroke-width="3"/>
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a5266"/>
        <stop offset="100%" stop-color={DARK_COLORS.primary}/>
      </linearGradient>
    </defs>
  </svg>
);

export const JurisprudenceIcon = (props) => (
  <svg {...props} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="url(#grad2)"/>
    <circle cx="50" cy="50" r="45" stroke={DARK_COLORS.secondary} stroke-width="2"/>
    <ellipse cx="50" cy="25" rx="30" ry="15" fill="white" fill-opacity="0.2"/>
    <path d="M30 45L70 45" stroke={DARK_COLORS.white} stroke-width="4"/>
    <path d="M50 45L50 60" stroke={DARK_COLORS.white} stroke-width="4"/>
    <path d="M35 60L35 70" stroke={DARK_COLORS.white} stroke-width="4"/>
    <path d="M65 60L65 70" stroke={DARK_COLORS.white} stroke-width="4"/>
    <circle cx="35" cy="75" r="7" fill={DARK_COLORS.white}/>
    <circle cx="65" cy="75" r="7" fill={DARK_COLORS.white}/>
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a5266"/>
        <stop offset="100%" stop-color={DARK_COLORS.primary}/>
      </linearGradient>
    </defs>
  </svg>
);

export const EconomicsIcon = (props) => (
  <svg {...props} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="url(#grad3)"/>
    <circle cx="50" cy="50" r="45" stroke={DARK_COLORS.secondary} stroke-width="2"/>
    <ellipse cx="50" cy="22" rx="28" ry="12" fill="white" fill-opacity="0.2"/>
    <path d="M35 65L45 55L55 70L65 60" stroke={DARK_COLORS.white} stroke-width="4" stroke-linecap="round"/>
    <path d="M65 65L65 75L55 75L55 65L65 65Z" fill={DARK_COLORS.white}/>
    <text x="50" y="40" text-anchor="middle" fill={DARK_COLORS.white} font-family="Arial, sans-serif" font-size="20" font-weight="bold">₽</text>
    <defs>
      <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a5266"/>
        <stop offset="100%" stop-color={DARK_COLORS.primary}/>
      </linearGradient>
    </defs>
  </svg>
);

export const PublicAdministrationIcon = (props) => (
  <svg {...props} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="url(#grad4)"/>
    <circle cx="50" cy="50" r="45" stroke={DARK_COLORS.secondary} stroke-width="2"/>
    <path d="M25 25C35 20 65 20 75 25C75 30 74 40 70 45C66 40 60 38 50 38C40 38 34 40 30 45C26 40 25 30 25 25Z" fill="white" fill-opacity="0.3"/>
    <rect x="35" y="45" width="30" height="25" fill={DARK_COLORS.primary}/>
    <rect x="40" y="50" width="6" height="10" fill={DARK_COLORS.white}/>
    <rect x="54" y="50" width="6" height="10" fill={DARK_COLORS.white}/>
    <path d="M30 45L70 45" stroke={DARK_COLORS.primary} stroke-width="4"/>
    <path d="M40 35L45 45" stroke={DARK_COLORS.primary} stroke-width="4"/>
    <path d="M60 35L55 45" stroke={DARK_COLORS.primary} stroke-width="4"/>
    <path d="M40 35L60 35" stroke={DARK_COLORS.primary} stroke-width="4"/>
    <defs>
      <linearGradient id="grad4" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a5266"/>
        <stop offset="100%" stop-color={DARK_COLORS.primary}/>
      </linearGradient>
    </defs>
  </svg>
);

export const PsychologyIcon = (props) => (
  <svg {...props} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="url(#grad5)"/>
    <circle cx="50" cy="50" r="45" stroke={DARK_COLORS.secondary} stroke-width="2"/>
    <ellipse cx="50" cy="22" rx="28" ry="12" fill="white" fill-opacity="0.4"/>
    <path d="M40 45C40 40 35 35 35 35C35 35 40 30 45 30C50 30 55 35 55 35C55 35 50 40 50 45C50 50 55 55 55 60C55 65 50 70 45 70C40 70 35 65 35 60C35 55 40 50 40 45Z" fill={DARK_COLORS.primary}/>
    <path d="M45 35C47 33 48 35 50 35C52 35 53 33 55 35C57 37 55 40 55 42C55 44 57 46 55 48C53 50 52 48 50 48C48 48 47 50 45 48C43 46 45 44 45 42C45 40 43 37 45 35Z" fill={DARK_COLORS.accent}/>
    <defs>
      <linearGradient id="grad5" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a5266"/>
        <stop offset="100%" stop-color={DARK_COLORS.primary}/>
      </linearGradient>
    </defs>
  </svg>
);

export const BusinessInformaticsIcon = (props) => (
  <svg {...props} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="45" fill="url(#grad6)"/>
    <circle cx="50" cy="50" r="45" stroke={DARK_COLORS.secondary} stroke-width="2"/>
    <ellipse cx="50" cy="22" rx="28" ry="12" fill="white" fill-opacity="0.2"/>
    <circle cx="50" cy="50" r="20" stroke={DARK_COLORS.accent} stroke-width="3" fill="none"/>
    <path d="M50 30L53 37L61 37L55 42L58 49L50 44L42 49L45 42L39 37L47 37L50 30Z" fill={DARK_COLORS.accent}/>
    <path d="M65 60L70 65L65 70" stroke={DARK_COLORS.accent} stroke-width="4" stroke-linecap="round"/>
    <path d="M35 60L30 65L35 70" stroke={DARK_COLORS.accent} stroke-width="4" stroke-linecap="round"/>
    <defs>
      <linearGradient id="grad6" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a5266"/>
        <stop offset="100%" stop-color={DARK_COLORS.primary}/>
      </linearGradient>
    </defs>
  </svg>
);

// Optional: Export all icons as an object for easy access
export const Icons = {
  management: ManagementIcon,
  jurisprudence: JurisprudenceIcon,
  economics: EconomicsIcon,
  publicAdministration: PublicAdministrationIcon,
  psychology: PsychologyIcon,
  businessInformatics: BusinessInformaticsIcon,
};