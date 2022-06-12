import React, { useState } from 'react';

interface GithubProps {
  size: number;
  color: string;
}

export function Github({
  size,
  color
}: GithubProps) {
  const [isIconHovered, setIsIconHovered] = useState<boolean>(false);

  return (
    <svg 
      className={`Github ${isIconHovered ? 'Icon-animation' : ''}`} 
      onMouseEnter={() => setIsIconHovered(true)}
      onMouseLeave={() => setIsIconHovered(false)}
      width={size} 
      height={size} 
      version="1.1" 
      viewBox="0 0 16 15.604465" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(0,-2.5788942e-4)">
        <path
          d="M 8,0 C 3.58,0 0,3.58 0,8 c 0,3.54 2.29,6.53 5.47,7.59 0.4,0.07 0.55,-0.17 0.55,-0.38 0,-0.19 -0.01,-0.82 -0.01,-1.49 C 4,14.09 3.48,13.23 3.32,12.78 3.23,12.55 2.84,11.84 2.5,11.65 2.22,11.5 1.82,11.13 2.49,11.12 3.12,11.11 3.57,11.7 3.72,11.94 4.44,13.15 5.59,12.81 6.05,12.6 6.12,12.08 6.33,11.73 6.56,11.53 4.78,11.33 2.92,10.64 2.92,7.58 2.92,6.71 3.23,5.99 3.74,5.43 3.66,5.23 3.38,4.41 3.82,3.31 c 0,0 0.67,-0.21 2.2,0.82 0.64,-0.18 1.32,-0.27 2,-0.27 0.68,0 1.36,0.09 2,0.27 1.53,-1.04 2.2,-0.82 2.2,-0.82 0.44,1.1 0.16,1.92 0.08,2.12 0.51,0.56 0.82,1.27 0.82,2.15 0,3.07 -1.87,3.75 -3.65,3.95 0.29,0.25 0.54,0.73 0.54,1.48 0,1.07 -0.01,1.93 -0.01,2.2 0,0.21 0.15,0.46 0.55,0.38 C 13.71,14.53 16,11.53 16,8 16,3.58 12.42,0 8,0 Z"
          fill={color}
        />
      </g>
    </svg>
  );
}