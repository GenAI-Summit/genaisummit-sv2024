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

  const isActive = audioUrl !== "";

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handlePlayPause = () => {
    if (!isActive) return;

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

  if (!isActive) return null;

  return (
    <div className="fixed bottom-4 left-4 w-80 bg-white shadow-lg rounded-lg overflow-hidden z-50">
      <div className="bg-gray-100 p-3 flex justify-between items-center">
        <span className="font-medium text-sm truncate flex-1">{title}</span>
        <button
          onClick={handleClose}
          className="p-1 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <X size={16} />
        </button>
      </div>
      <div className="p-4">
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
          <div
            className="bg-blue-600 h-1.5 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-500 mb-3">
          <span>{formatTime((duration * progress) / 100)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={handlePlayPause}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={handleMute}
            className="p-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
