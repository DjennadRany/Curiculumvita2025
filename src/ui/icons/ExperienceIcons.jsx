import React from 'react';

const iconClass = 'experience-icon-svg';

export const CalendarIcon = () => (
  <svg viewBox="0 0 20 20" className={iconClass} aria-hidden="true">
    <rect x="3" y="4" width="14" height="13" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 8h14" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7 2v4M13 2v4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const LocationIcon = () => (
  <svg viewBox="0 0 20 20" className={iconClass} aria-hidden="true">
    <path
      d="M10 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const CodeIcon = () => (
  <svg viewBox="0 0 20 20" className={iconClass} aria-hidden="true">
    <path d="M7 5L3 10l4 5M13 5l4 5-4 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ChartIcon = () => (
  <svg viewBox="0 0 20 20" className={iconClass} aria-hidden="true">
    <path d="M3 17h14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="4" y="9" width="2.5" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="8.75" y="6" width="2.5" height="9" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <rect x="13.5" y="3" width="2.5" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const BuildingIcon = () => (
  <svg viewBox="0 0 20 20" className={iconClass} aria-hidden="true">
    <rect x="4" y="3" width="12" height="14" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 7h2M8 10h2M8 13h2M12 7h2M12 10h2M12 13h2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/** France flag as small SVG (vertical stripes) */
export const FlagFrance = () => (
  <span className="experience-flag experience-flag-fr" aria-label="France" title="France">
    <svg viewBox="0 0 24 18" className="experience-flag-svg" aria-hidden="true">
      <rect x="0" y="0" width="8" height="18" fill="#002395" />
      <rect x="8" y="0" width="8" height="18" fill="#fff" />
      <rect x="16" y="0" width="8" height="18" fill="#ED2939" />
    </svg>
  </span>
);
