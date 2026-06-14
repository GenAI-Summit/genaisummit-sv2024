import React from "react";
import { useAudioContext } from "@/hooks/useAudio";
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react";

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
        setupAudio(audioRef.current);
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

  const setupAudio = React.useCallback((audio) => {
    const handleTimeUpdate = () => {
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setActiveAudioId(null);
      setAudioUrl("");
      setTitle("");
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [
    setActiveAudioId,
    setAudioUrl,
    setDuration,
    setIsPlaying,
    setProgress,
    setTitle,
  ]);

  React.useEffect(() => {
    let cleanupAudio = () => {};

    if (audioUrl) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(audioUrl);
      cleanupAudio = setupAudio(audioRef.current);
      audioRef.current.play();
      setIsPlaying(true);
    }

    return () => {
      cleanupAudio();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [audioRef, audioUrl, setIsPlaying, setupAudio]);

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
          <div className="w-10 h-10 bg-theme1Dark1/20 rounded-full flex items-center justify-center mr-3">
            <button
              onClick={handlePlayPause}
              className="text-white focus:outline-none"
            >
              {isPlaying ? <Pause className="text-theme1Dark1" size={20} /> : <Play className="text-theme1Dark1" size={20} />}
            </button>
          </div>
          <div className="flex-1 truncate">
            <p className="font-semibold text-sm truncate">{title}</p>
            <p className="text-xs text-theme1Dark1/70">{formatTime((duration * progress) / 100)} / {formatTime(duration)}</p>
          </div>
          <button
            onClick={handleMute}
            className="p-2 text-theme1Dark1 hover:text-theme1Light1 focus:outline-none transition-colors"
          >
            {isMuted ? <VolumeX className="text-theme1Dark1" size={18} /> : <Volume2 className="text-theme1Dark1" size={18} />}
          </button>
          <button
            onClick={handleClose}
            className="p-2 text-theme1Dark1 hover:text-theme1Light1 focus:outline-none transition-colors ml-1"
          >
            <X className="text-theme1Dark1" size={18} />
          </button>
        </div>
        <div className="w-full bg-theme1Dark1/20 rounded-full h-1">
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
