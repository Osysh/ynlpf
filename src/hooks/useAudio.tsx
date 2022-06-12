import React, { useEffect, useRef } from 'react'

interface UseAudioProps {
  audioUrl: string
}

type AudioStatus = "play" | "pause";

type UseAudio = [
  boolean,
  (audioStatus: AudioStatus) => void
]

export function useAudio({ audioUrl }: UseAudioProps): UseAudio {
  const audio = useRef<HTMLAudioElement>(new Audio(audioUrl));
  const isPlaying = audio.current.paused;

  const setAudioStatus = (audioStatus: "play" | "pause"): void => {
    switch(audioStatus) {
      case 'play': 
        audio.current.play();
        return;
      case 'pause':
        audio.current.pause();
    }
  }

  useEffect(() => {
    audio.current.loop = true;
    
    const isReading = audio.current.play();
    console.log('ici')
    console.log(isReading)
    
    isReading.then(() => {
      console.log('isReading')
    }).catch(() => {
      console.log('isNotReading')
    }).finally(() => console.log('audioFinally'))
    console.log('la')

  }, [])

  // Management des erreurs

  return [isPlaying, setAudioStatus]
}