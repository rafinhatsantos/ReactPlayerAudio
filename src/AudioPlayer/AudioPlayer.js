import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioPlayer = ({ audioUrl }) => {
  const waveformRef = useRef(null);
  const wavesurferRef = useRef(null);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [isPlaying, setIsPlaying] = useState(false);

  // Fun??o para formatar o tempo
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    // Criar inst?ncia do WaveSurfer
    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      height: 64,
      waveColor: 'grey',
      progressColor: '#f67828',
      cursorColor: '#ddd5e9',
      url: audioUrl,
      autoplay: true,
    });

    // Eventos do WaveSurfer
    wavesurferRef.current.on('ready', () => {
      setDuration(formatTime(wavesurferRef.current.getDuration()));
    });

    wavesurferRef.current.on('audioprocess', () => {
      setCurrentTime(formatTime(wavesurferRef.current.getCurrentTime()));
    });

    wavesurferRef.current.on('play', () => setIsPlaying(true));
    wavesurferRef.current.on('pause', () => setIsPlaying(false));

    // Cleanup ao desmontar o componente
    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, [audioUrl]);

  // Handler para play/pause
  const handlePlayPause = () => {
    wavesurferRef.current.playPause();
  };

  // Event listener para controles do teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!wavesurferRef.current) return;

      const currentTime = wavesurferRef.current.getCurrentTime();
      const jumpTime = event.shiftKey ? 1 : 5;

      if (event.key === 'ArrowRight') {
        wavesurferRef.current.setTime(
          Math.min(currentTime + jumpTime, wavesurferRef.current.getDuration())
        );
      } else if (event.key === 'ArrowLeft') {
        wavesurferRef.current.setTime(Math.max(currentTime - jumpTime, 0));
      } else if (event.code === 'Space') {
        event.preventDefault();
        wavesurferRef.current.playPause();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="audio-player">
      <div ref={waveformRef} id="waveform" />
      <div className="controls">
  <button onClick={handlePlayPause}>
    {isPlaying ? 'Pause' : 'Play'}
  </button>
  <span id="currentTime" style={{ color: 'white' }}>{currentTime}</span>
  <span style={{ color: 'white' }}> / </span>
  <span id="duration" style={{ color: 'white' }}>{duration}</span>
</div>
    </div>
  );
};

export default AudioPlayer;