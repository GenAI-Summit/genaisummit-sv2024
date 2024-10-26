// useAudio.js

"use client";

import React, { createContext, useContext, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react";

// Create context for global audio state
const AudioContext = createContext(null);

// Custom hook to use audio context
export const useAudioContext = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudioContext must be used within an AudioProvider");
  }
  return context;
};

// Provider component
export const AudioProvider = ({ children }) => {
  const [activeAudioId, setActiveAudioId] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [title, setTitle] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const value = {
    activeAudioId,
    setActiveAudioId,
    audioUrl,
    setAudioUrl,
    title,
    setTitle,
    isPlaying,
    setIsPlaying,
    progress,
    setProgress,
    duration,
    setDuration,
    isMuted,
    setIsMuted,
    audioRef,
  };

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
};

// Audio Player Component
const AudioPlayer = () => {
  const {
    activeAudioId,
    setActiveAudioId,
    audioUrl,
    setAudioUrl,
    title,
    setTitle,
    isPlaying,
    setIsPlaying,
    progress,
    setProgress,
    duration,
    setDuration,
    isMuted,
    setIsMuted,
    audioRef,
  } = useAudioContext();

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (!audioUrl) return;

    if (!isPlaying) {
      // If a different audio is active, reset it
      if (audioRef.current && audioRef.current.src !== audioUrl) {
        audioRef.current.pause();
        audioRef.current = new Audio(audioUrl);
        setupAudio();
      }

      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const setupAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(audioUrl);
    }

    audioRef.current.addEventListener("timeupdate", () => {
      setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
    });

    audioRef.current.addEventListener("loadedmetadata", () => {
      setDuration(audioRef.current.duration);
    });

    audioRef.current.addEventListener("ended", () => {
      setIsPlaying(false);
      setActiveAudioId(null);
      setAudioUrl("");
      setTitle("");
    });
  };

  React.useEffect(() => {
    if (audioUrl) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(audioUrl);
      setupAudio();
      audioRef.current.play();
      setIsPlaying(true);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [audioUrl]);

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setActiveAudioId(null);
    setAudioUrl("");
    setTitle("");
  };

  if (!audioUrl) return null;

  return (
    <div className="fixed bottom-4 left-4 w-80 bg-theme1Light1 text-theme1Dark1 shadow-lg rounded-lg overflow-hidden z-50">
      <div className="p-3">
        <div className="flex items-center mb-2">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
            <button
              onClick={handlePlayPause}
              className="text-white focus:outline-none"
            >
              {isPlaying ? <Pause className="text-theme1Dark1" size={20} /> : <Play className="text-theme1Dark1" size={20} />}
            </button>
          </div>
          <div className="flex-1 truncate">
            <p className="font-semibold text-sm truncate">{title}</p>
            <p className="text-xs text-white/70">{formatTime((duration * progress) / 100)} / {formatTime(duration)}</p>
          </div>
          <button
            onClick={handleMute}
            className="p-2 text-white/70 hover:text-white focus:outline-none transition-colors"
          >
            {isMuted ? <VolumeX className="text-theme1Dark1" size={18} /> : <Volume2 className="text-theme1Dark1" size={18} />}
          </button>
          <button
            onClick={handleClose}
            className="p-2 text-white/70 hover:text-white focus:outline-none transition-colors ml-1"
          >
            <X className="text-theme1Dark1" size={18} />
          </button>
        </div>
        <div className="w-full bg-white/20 rounded-full h-1">
          <div
            className="bg-theme1Dark1 h-1 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
