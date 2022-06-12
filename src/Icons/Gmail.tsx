import React from 'react';

interface GmailProps {
  size: number;
  color: string;
}

export function Gmail({
  size,
  color
}: GmailProps) {
  return (
    <svg width={size} height={size} version="1.1" viewBox="0 0 10.164 7.6159" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-432.34 -285.13)">
        <g transform="matrix(.04799 0 0 .04799 409.94 313.16)">
          <path d="m478.17-425.79c-2.8846-0.55188-6.2236-2.579-8.2753-5.0241-1.3574-1.6176-2.6506-4.437-2.997-6.5337-0.20896-1.265-0.27212-16.724-0.22019-53.891l0.0729-63.144 48.052 36.048v92.849l-17.672-0.0296c-9.7196-0.0163-18.252-0.14053-18.96-0.27609zm152.06-40.541v-51.873l48.184-36.145-5e-3 63.392c-4e-3 44.418-0.0621 52.637-0.3837 54.154-1.1157 5.2659-5.6629 9.8141-10.928 10.93-1.4481 0.30692-5.1313 0.38005-19.329 0.38378l-17.54 5e-3z" fill={color} strokeWidth=".26478"/>
          <path d="m519.58-503.74-52.829-39.621v-10.627c0-11.217 0.11887-12.678 1.3086-16.081 2.448-7.0018 8.8719-12.38 16.512-13.824 2.5682-0.48553 6.8973-0.35222 9.2996 0.28637 4.0222 1.0692 4.8453 1.6489 42.634 30.027l36.071 27.088 36.369-27.272c38.234-28.67 38.161-28.618 42.486-29.837 2.3883-0.67315 7.8775-0.68321 10.451-0.0192 2.635 0.67993 6.8584 2.837 8.8014 4.4952 3.3336 2.845 5.837 6.7661 7.009 10.978 0.52854 1.8994 0.57141 2.7696 0.66311 13.46l0.098 11.43-23.896 17.89c-13.143 9.8393-36.924 27.645-52.846 39.569s-29.029 21.679-29.126 21.679c-0.0968 0-23.949-17.829-53.005-39.621z" fill={color} strokeWidth=".26458"/>
        </g>
      </g>
    </svg>
  );
}