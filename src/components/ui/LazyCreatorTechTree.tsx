'use client';

import React, { useState, useRef, MouseEvent, WheelEvent } from 'react';
import {
  User,
  LogIn,
  Sparkles,
  Upload,
  RefreshCw,
  ZoomIn,
  ZoomOut,
  FileText,
  Image,
  Volume2,
  Subtitles,
  Globe,
  Cloud,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FlaskIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 2v2m6-2v2M12 11.5V3.99M12 11.5L9.5 14.5A2.5 2.5 0 0 0 9.5 18H14.5a2.5 2.5 0 0 0 0-3.5L12 11.5z" />
  </svg>
);

const GCPIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zM12 22V12M2 7l10 5 10-5" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186 31.43 31.43 0 0 0 0 12.005a31.43 31.43 0 0 0 .502 5.819 3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136A31.43 31.43 0 0 0 24 12.005a31.43 31.43 0 0 0-.502-5.819zM9.75 15.007V8.993l6.257 3.007-6.257 3.007z" />
  </svg>
);

const FFmpegIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16v16H4zM8 8l8 8M16 8l-8 8" />
  </svg>
);

export default function LazyCreatorTechTree() {
  const [zoom, setZoom] = useState(0.4);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [startPan, setStartPan] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const resetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleZoom = (scale: number) => {
    setZoom((prevZoom) => Math.max(0.5, Math.min(prevZoom * scale, 2.5)));
  };

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsPanning(true);
    setStartPan({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isPanning) return;
    e.preventDefault();
    setPan({ x: e.clientX - startPan.x, y: e.clientY - startPan.y });
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">

      {/* Zoom Controls */}
      <div className="absolute top-6 right-2 z-20 flex flex-col items-center gap-2 bg-slate-900/80 backdrop-blur-md rounded-xl p-2 border border-purple-500/30 shadow-xl">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleZoom(1.2)}
          className="h-9 w-9 text-purple-300 hover:text-white hover:bg-purple-600/50"
        >
          <ZoomIn className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => handleZoom(1 / 1.2)}
          className="h-9 w-9 text-purple-300 hover:text-white hover:bg-purple-600/50"
        >
          <ZoomOut className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={resetView}
          className="h-9 w-9 text-purple-300 hover:text-white hover:bg-purple-600/50"
        >
          <RefreshCw className="h-5 w-5" />
        </Button>
      </div>

      {/* Pannable Container */}
      <div
        ref={containerRef}
        className="w-full h-full overflow-hidden flex items-center justify-center p-8"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isPanning ? 'grabbing' : 'grab' }}
      >
        <div
          className="flex flex-col items-center gap-8 transition-transform"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transition: isPanning ? 'none' : 'transform 0.2s ease',
          }}
        >
          {/* End-to-End Automation */}
          <div className="w-[500px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-purple-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Sparkles className="w-8 h-8 text-purple-400" />
                <h3 className="text-purple-300 font-bold text-xl">End-to-End Automation</h3>
                <Sparkles className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-slate-400 text-sm">Complete Shorts Generation Pipeline</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full shadow-lg"></div>

          {/* User Node */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-2xl border-4 border-pink-400/50">
              <User className="w-10 h-10 text-white" />
            </div>
            <span className="text-pink-400 font-bold text-lg">User</span>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-pink-500 to-purple-600 rounded-full shadow-lg"></div>

          {/* 1. Login */}
          <div className="w-[400px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-purple-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <LogIn className="w-8 h-8 text-purple-400" />
                <h3 className="text-purple-300 font-bold text-lg">1. Login with Google</h3>
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-slate-400 text-sm">Authentication</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full shadow-lg"></div>

          {/* Frontend */}
          <div className="w-[400px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-cyan-500/50 shadow-2xl">
            <div className="text-center mb-4">
              <h3 className="text-cyan-400 font-bold text-xl mb-2">Frontend</h3>
              <p className="text-slate-400 text-sm">React • Vite • Tailwind • Vercel</p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <Globe className="w-8 h-8 text-cyan-400" />
              <Cloud className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          {/* Bidirectional WebSocket Arrows */}
          <div className="relative w-full flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="text-cyan-400 text-xs font-semibold">WebSocket</div>
              <div className="w-1 h-16 bg-gradient-to-b from-cyan-500 to-emerald-500 rounded-full shadow-lg animate-pulse"></div>
              <div className="text-cyan-400 text-xs font-semibold">Real-time</div>
            </div>
          </div>

          {/* 2. Generate */}
          <div className="w-[450px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-pink-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Zap className="w-8 h-8 text-pink-400" />
                <h3 className="text-pink-300 font-bold text-lg">2. Fill Prompt → Generate</h3>
              </div>
              <p className="text-slate-400 text-sm">Script • Style • Voice • Length</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-pink-500 to-emerald-500 rounded-full shadow-lg"></div>

          {/* Backend */}
          <div className="w-[400px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-emerald-500/50 shadow-2xl">
            <div className="text-center mb-4">
              <h3 className="text-emerald-400 font-bold text-xl mb-2">Backend</h3>
              <p className="text-slate-400 text-sm">Flask • GCP Cloud Run • WebSocket</p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <FlaskIcon />
              <GCPIcon />
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-emerald-500 to-purple-500 rounded-full shadow-lg"></div>

          {/* Pipeline Stages */}
          <div className="grid grid-cols-4 gap-6 w-full max-w-5xl">
            {/* Script */}
            <div className="px-6 py-5 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-purple-500/50 shadow-xl flex flex-col items-center gap-3">
              <FileText className="w-10 h-10 text-purple-400" />
              <h4 className="text-purple-300 font-bold text-base">Script</h4>
              <p className="text-slate-400 text-xs">GPT-4</p>
            </div>

            {/* Background */}
            <div className="px-6 py-5 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-cyan-500/50 shadow-xl flex flex-col items-center gap-3">
              <Image className="w-10 h-10 text-cyan-400" />
              <h4 className="text-cyan-300 font-bold text-base">Background</h4>
              <p className="text-slate-400 text-xs">Pexels</p>
            </div>

            {/* Voiceover */}
            <div className="px-6 py-5 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-pink-500/50 shadow-xl flex flex-col items-center gap-3">
              <Volume2 className="w-10 h-10 text-pink-400" />
              <h4 className="text-pink-300 font-bold text-base">Voiceover</h4>
              <p className="text-slate-400 text-xs">GTTS</p>
            </div>

            {/* Subtitles */}
            <div className="px-6 py-5 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-amber-500/50 shadow-xl flex flex-col items-center gap-3">
              <Subtitles className="w-10 h-10 text-amber-400" />
              <h4 className="text-amber-300 font-bold text-base">Subtitles</h4>
              <p className="text-slate-400 text-xs">Custom</p>
            </div>
          </div>

          {/* Convergence Arrows */}
          <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-amber-500 rounded-full shadow-lg"></div>

          {/* FFmpeg Merge */}
          <div className="w-[450px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-amber-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <FFmpegIcon />
                <h3 className="text-amber-400 font-bold text-xl">FFmpeg Merge</h3>
              </div>
              <p className="text-slate-400 text-sm">video + audio + subtitles → MP4</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-red-500 rounded-full shadow-lg"></div>

          {/* Upload to YouTube */}
          <div className="w-[400px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-red-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Upload className="w-8 h-8 text-red-400" />
                <h3 className="text-red-400 font-bold text-xl">Upload to YouTube</h3>
              </div>
              <div className="flex items-center justify-center gap-4">
                <YouTubeIcon />
                <p className="text-red-400 text-sm font-semibold">Direct API Upload</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}