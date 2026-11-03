import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { Volume2, VolumeX, Play, Sparkles } from 'lucide-react';

export const VimeoPlayer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);
  // Default to 16:9 (56.25%), but will dynamically adjust to the native video aspect ratio
  const [paddingBottom, setPaddingBottom] = useState<string>('56.25%');

  useEffect(() => {
    if (!iframeRef.current) return;

    try {
      const player = new Player(iframeRef.current);
      playerRef.current = player;

      player.ready().then(() => {
        // Query the video's exact native dimensions to eliminate any side black bars / letterboxing
        Promise.all([player.getVideoWidth(), player.getVideoHeight()])
          .then(([width, height]) => {
            if (width && height && width > 0) {
              const ratioPercent = (height / width) * 100;
              setPaddingBottom(`${ratioPercent}%`);
            }
          })
          .catch((e) => console.warn('Could not get video aspect ratio:', e));

        // Attempt autoplay muted
        player.setMuted(true).then(() => {
          player.play().then(() => {
            setIsPlaying(true);
            setAutoplayBlocked(false);
          }).catch(() => {
            // Autoplay blocked by browser policy
            setAutoplayBlocked(true);
            setIsPlaying(false);
          });
        });
      }).catch((err) => {
        console.warn('Vimeo ready failed:', err);
      });

      player.on('play', () => {
        setIsPlaying(true);
        setAutoplayBlocked(false);
      });

      player.on('pause', () => {
        setIsPlaying(false);
      });

      player.on('volumechange', (data: { volume: number }) => {
        if (data.volume > 0) {
          setIsMuted(false);
        }
      });
    } catch (e) {
      console.error('Error initializing Vimeo player:', e);
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy().catch(() => {});
      }
    };
  }, []);

  const handleUnmute = async () => {
    if (!playerRef.current) return;
    try {
      await playerRef.current.setMuted(false);
      await playerRef.current.setVolume(1);
      await playerRef.current.play();
      setIsMuted(false);
      setIsPlaying(true);
      setAutoplayBlocked(false);
    } catch (err) {
      console.warn('Could not unmute:', err);
    }
  };

  const handlePlay = async () => {
    if (!playerRef.current) return;
    try {
      await playerRef.current.play();
      setIsPlaying(true);
      setAutoplayBlocked(false);
    } catch (err) {
      console.warn('Could not start playback:', err);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-6">
      {/* Clean video wrapper with NO borders, NO window header, NO footer bars, NO logo */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-black shadow-2xl">
        <div
          className="relative w-full"
          style={{ paddingBottom }}
        >
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1243040936?autoplay=1&muted=1&playsinline=1&autopause=0&controls=1&title=0&byline=0&portrait=0&badge=0&dnt=1"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Vídeo Dinâmico Pro"
            loading="eager"
          />

          {/* Autoplay blocked fallback banner */}
          {autoplayBlocked && (
            <div className="absolute inset-0 bg-[#06040D]/85 backdrop-blur-sm flex flex-col items-center justify-center gap-4 z-20 p-6 text-center">
              <button
                onClick={handlePlay}
                className="relative group flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#8B3DFF] to-[#7C3AED] text-white font-bold text-base shadow-[0_0_35px_rgba(139,61,255,0.7)] hover:scale-105 transition-all cursor-pointer"
              >
                <Play className="w-6 h-6 fill-white" />
                <span>CLIQUE PARA ASSISTIR AO VÍDEO</span>
              </button>
              <p className="text-xs text-slate-400 max-w-sm">
                Seu navegador pausou a reprodução automática. Clique para iniciar.
              </p>
            </div>
          )}

          {/* Unmute Floating Overlay Button on top of the clean video */}
          {isMuted && isPlaying && (
            <div className="absolute top-4 left-4 z-20 pointer-events-auto">
              <button
                onClick={handleUnmute}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/85 hover:bg-black/95 border border-[#8B3DFF]/80 hover:border-[#8B3DFF] text-white text-xs sm:text-sm font-bold shadow-[0_0_25px_rgba(139,61,255,0.7)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B3DFF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#A855F7]" />
                </span>
                <VolumeX className="w-4 h-4 text-purple-300 group-hover:hidden" />
                <Volume2 className="w-4 h-4 text-[#C084FC] hidden group-hover:inline" />
                <span className="tracking-wide">ATIVAR SOM</span>
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              </button>
            </div>
          )}

          {/* Discreet Unmuted status indicator */}
          {!isMuted && isPlaying && (
            <div className="absolute top-4 left-4 z-20 opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/70 border border-white/10 text-white text-xs backdrop-blur-sm">
                <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-300">Áudio Ativado</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
