import React from 'react';

interface StairsProps {
  size: number;
}

export function Stairs({
  size,
}: StairsProps) {
  return (
    <svg className="Stairs" width={size * 4.9379} height={size} version="1.1" viewBox="0 0 149.96 30.368" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="linearGradient39067">
          <stop stopColor="#5d689d" offset="0"/>
          <stop stopColor="#5d689d" stopOpacity="0" offset="1"/>
        </linearGradient>
        <radialGradient id="radialGradient39069-0" cx="183.26" cy="210.13" r="74.979" gradientTransform="matrix(.86904 0 0 .011297 19.234 202.25)" gradientUnits="userSpaceOnUse" xlinkHref="#linearGradient39067"/>
        <radialGradient id="radialGradient39069-2-7" cx="183.26" cy="210.13" r="74.979" gradientTransform="matrix(.85584 0 0 .011297 9.3361 197.43)" gradientUnits="userSpaceOnUse" xlinkHref="#linearGradient39067"/>
        <radialGradient id="radialGradient39069-2-2-1" cx="183.26" cy="210.13" r="74.979" gradientTransform="matrix(.85007 0 0 .011297 1.9763 191.51)" gradientUnits="userSpaceOnUse" xlinkHref="#linearGradient39067"/>
      </defs>
      <g transform="translate(-419.2 299.28)">
        <g transform="translate(325.36 -481.18)">
          <rect x="93.844" y="185.75" width="149.96" height="26.518" fill="#1c2639"/>
          <rect x="113.34" y="203.77" width="130.32" height="1.694" fill="url(#radialGradient39069-0)"/>
          <rect x="102.01" y="198.96" width="128.34" height="1.694" fill="url(#radialGradient39069-2-7)"/>
          <rect x="93.844" y="181.9" width="149.96" height="5.4377" fill="#2d3d5c"/>
          <rect x="94.026" y="193.04" width="127.47" height="1.694" fill="url(#radialGradient39069-2-2-1)"/>
        </g>
      </g>
    </svg>
  );
}