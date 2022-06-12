import React, { useEffect, useState } from 'react';

interface BackSunProps {
  size: number;
}

export function BackSun({
  size,
}: BackSunProps) {
  const [isLightColored, setIsLightColored] = useState<boolean>(true)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsLightColored(isColored => !isColored);
    }, 1000)

    return () => clearTimeout(interval);
  }, [])

  return (
    <svg className="Back-sun" width={size} height={size} version="1.1" viewBox="0 0 146.24 146.24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="linearGradient20207">
          <stop stopColor="#e9c6af" offset="0"/>
          <stop stopColor="#e9c6af" stopOpacity="0" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient20057">
          <stop stopColor="#fc0" offset="0"/>
          <stop stopColor="#fc0" stopOpacity="0" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient5416" x1="-42.891" x2="5.622" y1="-128.06" y2="-61.609" gradientTransform="matrix(1.0177 0 0 .9444 413.56 -322.89)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3e8cba" offset="0"/>
          <stop stopColor="#76d4cc" offset="1"/>
        </linearGradient>
        <radialGradient id="radialGradient4976" cx="230.67" cy="-164.99" r="68.246" gradientTransform="matrix(.5738 1.6988e-7 -1.1872e-7 .70187 -448.45 188.75)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#d3904a" offset="0"/>
          <stop stopColor="#ffcc7b" offset="1"/>
        </radialGradient>
        <radialGradient id="radialGradient20059" cx="279.89" cy="-394.72" r=".86038" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20057" : "#linearGradient20207"}/>
        <radialGradient id="radialGradient20209" cx="284.58" cy="-409.47" r=".86038" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20207" : "#linearGradient20057"}/>
        <radialGradient id="radialGradient20059-0" cx="279.89" cy="-394.72" r=".86038" gradientTransform="translate(12.314 -28.204)" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20057" : "#linearGradient20207"}/>
        <radialGradient id="radialGradient20059-0-6" cx="279.89" cy="-394.72" r=".86038" gradientTransform="translate(22.319 -39.418)" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20207" : "#linearGradient20057"}/>
        <radialGradient id="radialGradient20059-0-6-5" cx="279.89" cy="-394.72" r=".86038" gradientTransform="translate(34.628 -48.259)" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20057" : "#linearGradient20207"}/>
        <radialGradient id="radialGradient20059-0-6-5-5" cx="279.89" cy="-394.72" r=".86038" gradientTransform="translate(48.108 -54.344)" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20207" : "#linearGradient20057"} />
        <radialGradient id="radialGradient20059-0-6-5-5-3" cx="279.89" cy="-394.72" r=".86038" gradientTransform="translate(62.586 -57.458)" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20057" : "#linearGradient20207"}/>
        <radialGradient id="radialGradient20059-0-6-5-5-3-7" cx="279.89" cy="-394.72" r=".86038" gradientTransform="translate(77.504 -57.444)" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20207" : "#linearGradient20057"}/>
        <radialGradient id="radialGradient20059-0-6-5-5-3-7-1" cx="279.89" cy="-394.72" r=".86038" gradientTransform="translate(92.548 -54.215)" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20057" : "#linearGradient20207"}/>
        <radialGradient id="radialGradient20059-0-6-5-5-3-7-1-8" cx="279.89" cy="-394.72" r=".86038" gradientTransform="translate(106.12 -48.443)" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20207" : "#linearGradient20057"}/>
        <radialGradient id="radialGradient20059-0-6-5-5-3-7-1-8-4" cx="279.89" cy="-394.72" r=".86038" gradientTransform="translate(118.32 -39.374)" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20057" : "#linearGradient20207"}/>
        <radialGradient id="radialGradient20059-0-6-5-5-3-7-1-8-4-3" cx="279.89" cy="-394.72" r=".86038" gradientTransform="translate(128.49 -28.111)" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20207" : "#linearGradient20057"}/>
        <radialGradient id="radialGradient20059-0-6-5-5-3-7-1-8-4-3-7" cx="279.89" cy="-394.72" r=".86038" gradientTransform="translate(135.92 -15.062)" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20057" : "#linearGradient20207"}/>
        <radialGradient id="radialGradient20059-0-6-5-5-3-7-1-8-4-3-7-2" cx="279.89" cy="-394.72" r=".86038" gradientTransform="translate(140.34 -.16403)" gradientUnits="userSpaceOnUse" xlinkHref={isLightColored ? "#linearGradient20207" : "#linearGradient20057"}/>
      </defs>
      <g transform="translate(-277.03 454.52)">
        <circle cx="350.15" cy="-381.4" r="73.12" fill="#d49840"/>
        <circle cx="350.23" cy="-381.07" r="69.055" fill="url(#linearGradient5416)"/>
        <path transform="rotate(188.53)" d="m-220.65 428.94a69.055 69.055 0 0 1-0.25725 5.9551l-68.798-5.9551zm-1.581 14.718a69.055 69.055 0 0 1-1.5228 5.7628l-65.94-20.507zm-4.6422 13.944a69.055 69.055 0 0 1-2.7098 5.3091l-60.094-34.019zm-7.4576 12.578a69.055 69.055 0 0 1-3.7659 4.6202l-51.594-45.899zm-9.8813 10.694a69.055 69.055 0 0 1-4.6524 3.7262l-40.802-55.712zm-11.935 8.2685a69.055 69.055 0 0 1-5.33 2.6682l-28.218-63.027zm-13.313 5.6715a69.055 69.055 0 0 1-5.7696 1.4967l-14.438-67.529zm-86.172-45.629a69.055 69.055 0 0 0 1.9928 5.6176l64.024-25.875zm5.829 13.607a69.055 69.055 0 0 0 3.1463 5.0626l57.023-38.948zm8.5283 11.968a69.055 69.055 45 0 0 4.148 4.2806l47.471-50.151zm10.819 9.8367a69.055 69.055 45 0 0 4.9556 3.3122l35.86-59.014zm12.584 7.3244a69.055 69.055 45 0 0 5.5408 2.1975l22.664-65.23zm13.835 4.4037a69.055 69.055 0 0 0 5.8783 0.98727l8.4881-68.532zm14.391 1.5166a69.055 69.055 0 0 0 5.9549-0.2617l-6.0063-68.793z" fill="url(#radialGradient4976)" strokeMiterlimit="3.7" strokeWidth="03.3378"/>
        <path d="m350.22-311.16a69.976 69.976 0 0 1-69.976-69.977 69.976 69.976 0 0 1 69.976-69.977 69.976 69.976 0 0 1 69.977 69.977 69.976 69.976 0 0 1-69.977 69.977zm-0.10645-0.45217a69.055 69.055 0 0 0 69.055-69.055 69.055 69.055 0 0 0-69.055-69.055 69.055 69.055 0 0 0-69.055 69.055 69.055 69.055 0 0 0 69.055 69.055z" fill="#e8b867"/>
        <circle cx="279.89" cy="-394.72" r=".86038" fill="url(#radialGradient20059)" strokeWidth="0.147"/>
        <circle cx="292.2" cy="-422.92" r=".86038" fill="url(#radialGradient20059-0)" strokeWidth="0.147"/>
        <circle cx="302.21" cy="-434.13" r=".86038" fill="url(#radialGradient20059-0-6)" strokeWidth="0.147"/>
        <circle cx="314.52" cy="-442.98" r=".86038" fill="url(#radialGradient20059-0-6-5)" strokeWidth="0.147"/>
        <circle cx="328" cy="-449.06" r=".86038" fill="url(#radialGradient20059-0-6-5-5)" strokeWidth="0.147"/>
        <circle cx="342.48" cy="-452.17" r=".86038" fill="url(#radialGradient20059-0-6-5-5-3)" strokeWidth="0.147"/>
        <circle cx="357.4" cy="-452.16" r=".86038" fill="url(#radialGradient20059-0-6-5-5-3-7)" strokeWidth="0.147"/>
        <circle cx="372.44" cy="-448.93" r=".86038" fill="url(#radialGradient20059-0-6-5-5-3-7-1)" strokeWidth="0.147"/>
        <circle cx="386.01" cy="-443.16" r=".86038" fill="url(#radialGradient20059-0-6-5-5-3-7-1-8)" strokeWidth="0.147"/>
        <circle cx="398.21" cy="-434.09" r=".86038" fill="url(#radialGradient20059-0-6-5-5-3-7-1-8-4)" strokeWidth="0.147"/>
        <circle cx="408.38" cy="-422.83" r=".86038" fill="url(#radialGradient20059-0-6-5-5-3-7-1-8-4-3)" strokeWidth="0.147"/>
        <circle cx="415.81" cy="-409.78" r=".86038" fill="url(#radialGradient20059-0-6-5-5-3-7-1-8-4-3-7)" strokeWidth="0.147"/>
        <circle cx="420.23" cy="-394.88" r=".86038" fill="url(#radialGradient20059-0-6-5-5-3-7-1-8-4-3-7-2)" strokeWidth="0.147"/>
        <circle cx="284.58" cy="-409.47" r=".86038" fill="url(#radialGradient20209)" strokeWidth="0.147"/>
      </g>
    </svg>
  );
}