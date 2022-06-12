import React from 'react';

interface MenuProps {
  size: number;
  className: string
}

export function Menu({
  size,
  className
}: MenuProps) {
  return (
    <svg className={className} width={size} height={size} version="1.1" viewBox="0 0 70.23 72.993" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="linearGradient35759" x1="133.15" x2="75.997" y1="-113.9" y2="-170.22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffcc7b" offset="0"/>
          <stop stopColor="#d3904a" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient35761" x1="-42.891" x2="5.622" y1="-128.06" y2="-61.609" gradientTransform="matrix(1.0776 0 0 1 211.6 -74.631)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3e8cba" offset="0"/>
          <stop stopColor="#76d4cc" offset="1"/>
        </linearGradient>
      </defs>
      <g transform="translate(-68.737 -163.7)">
        <g transform="matrix(.43599 0 0 .43599 41.332 261.41)">
          <ellipse cx="143.4" cy="-140.41" rx="80.54" ry="83.71" fill="url(#linearGradient35759)" />
          <circle cx="144.54" cy="-136.24" r="73.12" fill="url(#linearGradient35761)" />
        </g>
      </g>
    </svg>
  );
}