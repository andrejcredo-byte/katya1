import React from 'react';

/**
 * Authentic, unmistakable feather vectors:
 * - Clear, translucent central quill shaft (стержень пера)
 * - Delicate separated barbs with natural feather slits (бородки и расщепы опахала)
 * - Fluffy downy plume fibers at the calamus base (воздушный пух у основания)
 * - Pure feather aesthetics symbolizing weightless, soft somatic touch (3–5 grams)
 */

export const AuthenticSwanFeather: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={`pointer-events-none ${className}`}
    viewBox="0 0 240 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="feather-shaft-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E3A2F" stopOpacity="0.5" />
        <stop offset="40%" stopColor="#2E473B" stopOpacity="0.4" />
        <stop offset="80%" stopColor="#5A7767" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#8DA394" stopOpacity="0.1" />
      </linearGradient>

      <linearGradient id="feather-vane-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E473B" stopOpacity="0.32" />
        <stop offset="50%" stopColor="#5B7868" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#A3B8AC" stopOpacity="0.06" />
      </linearGradient>
    </defs>

    {/* Fluffy downy barbs at the base (пуховая часть) */}
    <g opacity="0.3" stroke="#2E473B" strokeWidth="0.75" strokeLinecap="round">
      <path d="M120 300 C100 315 80 325 65 340" />
      <path d="M122 305 C98 322 82 342 70 360" />
      <path d="M125 310 C105 330 95 355 85 375" />
      <path d="M120 295 C135 315 155 330 170 345" />
      <path d="M122 302 C140 322 160 345 175 365" />
      <path d="M125 310 C138 330 148 355 155 375" />
    </g>

    {/* Left Feather Vane with realistic feather splits (расщепы) */}
    <path
      d="M120 20 
         C108 50 85 90 70 140 
         C62 170 65 195 72 210 
         C66 200 62 185 64 170 
         C58 190 60 215 68 235 
         C63 230 60 220 62 210 
         C56 230 62 255 76 275 
         C90 295 108 305 120 305 
         C120 220 120 110 120 20 Z"
      fill="url(#feather-vane-grad)"
    />

    {/* Right Feather Vane with natural asymmetry */}
    <path
      d="M120 20 
         C132 55 152 95 162 145 
         C168 175 162 200 152 215 
         C158 202 162 188 160 172 
         C166 195 162 220 152 240 
         C156 235 158 225 156 215 
         C158 232 152 258 138 278 
         C128 292 122 302 120 305 
         C120 220 120 110 120 20 Z"
      fill="url(#feather-vane-grad)"
    />

    {/* Delicate fine barb striations (текстура бородок) */}
    <g opacity="0.25" stroke="#1E3A2F" strokeWidth="0.6">
      <path d="M120 60 C100 50 88 56 80 66" />
      <path d="M120 90 C96 80 82 88 74 102" />
      <path d="M120 125 C92 118 78 130 70 148" />
      <path d="M120 160 C90 158 76 175 68 198" />
      <path d="M120 200 C92 202 78 220 72 242" />
      <path d="M120 240 C98 245 86 265 82 280" />

      <path d="M120 65 C138 56 150 62 156 72" />
      <path d="M120 95 C142 85 158 95 162 110" />
      <path d="M120 130 C146 124 162 138 166 156" />
      <path d="M120 165 C148 165 162 184 164 205" />
      <path d="M120 205 C145 208 158 228 156 248" />
      <path d="M120 245 C140 250 148 268 142 282" />
    </g>

    {/* Central Quill / Rachis (выступающий стержень) */}
    <path
      d="M120 15 C120 90 120 190 121 285 C121 320 120 360 119 390"
      stroke="url(#feather-shaft-grad)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const AuthenticDownyFeather: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    className={`pointer-events-none ${className}`}
    viewBox="0 0 180 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="downy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2E473B" stopOpacity="0.35" />
        <stop offset="60%" stopColor="#6E8A7B" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#C2D3C8" stopOpacity="0.04" />
      </linearGradient>
    </defs>

    {/* Curved soft quill shaft */}
    <path
      d="M90 15 C96 70 92 140 78 200 C72 225 64 245 56 255"
      stroke="#1E3A2F"
      strokeWidth="1.25"
      strokeLinecap="round"
      opacity="0.38"
    />

    {/* Soft curved plume body */}
    <path
      d="M90 15 
         C70 45 42 85 36 125 
         C32 155 42 182 54 195 
         C46 182 48 155 54 135 
         C48 152 54 172 64 190 
         C70 200 78 205 78 200 
         C84 145 92 75 90 15 Z"
      fill="url(#downy-grad)"
    />
    <path
      d="M90 15 
         C110 50 138 90 142 130 
         C145 160 132 188 118 200 
         C126 186 125 160 118 138 
         C124 155 120 174 110 190 
         C104 200 95 204 78 200 
         C85 145 90 75 90 15 Z"
      fill="url(#downy-grad)"
    />

    {/* Fluffy downy wisps at the bottom */}
    <g opacity="0.3" stroke="#2E473B" strokeWidth="0.6" strokeLinecap="round">
      <path d="M78 200 C65 212 52 220 42 225" />
      <path d="M76 208 C62 222 54 235 48 245" />
      <path d="M82 202 C94 214 105 224 116 230" />
      <path d="M80 210 C92 225 102 238 108 248" />
    </g>
  </svg>
);

export const AmbientFeatherBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Soft warm sunbeam washes in corners */}
      <div className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#EBF2ED]/60 via-[#F3EFE6]/40 to-transparent blur-3xl" />
      <div className="absolute top-1/4 -left-48 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#E8F0EA]/50 via-[#F7F4EC]/30 to-transparent blur-3xl" />
      <div className="absolute top-1/2 -right-40 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#E4ECE7]/45 via-[#FAF6ED]/30 to-transparent blur-3xl" />
      <div className="absolute bottom-20 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#EDF3EE]/50 via-[#F4EFE6]/35 to-transparent blur-3xl" />

      {/* Top Right Floating Swan Feather (Hero Corner) - visible on desktop/tablet, sized down on mobile */}
      <div className="absolute top-16 -right-6 sm:right-6 lg:right-16 w-36 sm:w-56 lg:w-68 opacity-45 sm:opacity-55 rotate-[-16deg] animate-tide-drift">
        <AuthenticSwanFeather className="w-full h-auto drop-shadow-xs" />
      </div>

      {/* Top Left Gently Spiraling Down Feather (Hero Left) */}
      <div className="absolute top-28 -left-8 sm:left-6 lg:left-14 w-28 sm:w-44 opacity-40 sm:opacity-50 rotate-[20deg] animate-tide-drift">
        <AuthenticDownyFeather className="w-full h-auto" />
      </div>

      {/* Mid Page Floating Feather (Near "О методе" / Right Side) */}
      <div className="hidden sm:block absolute top-[36%] right-6 sm:right-16 w-36 sm:w-48 opacity-35 rotate-[32deg]">
        <AuthenticDownyFeather className="w-full h-auto" />
      </div>

      {/* Mid Page Feather Plume (Near "С чем работаю" / Left Side) */}
      <div className="hidden sm:block absolute top-[55%] -left-10 sm:left-10 w-44 sm:w-60 opacity-40 rotate-[-22deg] animate-tide-drift">
        <AuthenticSwanFeather className="w-full h-auto" />
      </div>

      {/* Lower Floating Down Feather (Near Reviews / Right Side) */}
      <div className="hidden sm:block absolute top-[74%] right-8 sm:right-14 w-36 sm:w-48 opacity-35 rotate-[-12deg]">
        <AuthenticDownyFeather className="w-full h-auto" />
      </div>

      {/* Bottom Floating Feather (Near Booking / Left Side) */}
      <div className="hidden sm:block absolute bottom-32 -left-6 sm:left-12 w-44 sm:w-56 opacity-40 rotate-[15deg]">
        <AuthenticSwanFeather className="w-full h-auto" />
      </div>
    </div>
  );
};
