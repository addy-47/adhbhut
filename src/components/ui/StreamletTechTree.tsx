'use client';

import React, { useState, useRef, MouseEvent, WheelEvent } from 'react';
import {
  Users,
  Video,
  Wifi,
  Database,
  Server,
  Globe,
  Headphones,
  Monitor,
  Settings,
  ZoomIn,
  ZoomOut,
  RefreshCw,
  Radio,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ReactIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M8 12h8M12 8v8"/>
  </svg>
);

const GoFiberIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zM12 22V12M2 7l10 5 10-5"/>
  </svg>
);

const MediaMTXIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="23 7 16 12 23 17 23 7"/>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);

const PeerJSIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const NginxIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
  </svg>
);

export default function StreamletTechTree() {
  const [zoom, setZoom] = useState(0.5);
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
          {/* Multiple User Roles */}
          <div className="w-[500px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-purple-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Users className="w-8 h-8 text-purple-400" />
                <h3 className="text-purple-300 font-bold text-xl">Multi-Role Platform</h3>
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-slate-400 text-sm">Admin • Teacher • Student • Viewer</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full shadow-lg"></div>

          {/* Frontend Layer */}
          <div className="w-[400px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-blue-500/50 shadow-2xl">
            <div className="text-center mb-4">
              <h3 className="text-blue-400 font-bold text-xl mb-2">React Frontend</h3>
              <p className="text-slate-400 text-sm">Role-based Routing • Real-time UI</p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <ReactIcon />
              <Video className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full shadow-lg"></div>

          {/* Backend API */}
          <div className="w-[400px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-cyan-500/50 shadow-2xl">
            <div className="text-center mb-4">
              <h3 className="text-cyan-400 font-bold text-xl mb-2">Go Fiber Backend</h3>
              <p className="text-slate-400 text-sm">JWT Auth • WebSocket Hub • Analytics</p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <GoFiberIcon />
              <Settings className="w-8 h-8 text-cyan-400" />
            </div>
          </div>

          {/* Bidirectional Arrows */}
          <div className="relative w-full flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="text-cyan-400 text-xs font-semibold">WebSocket</div>
              <div className="w-1 h-16 bg-gradient-to-b from-cyan-500 to-emerald-500 rounded-full shadow-lg animate-pulse"></div>
              <div className="text-cyan-400 text-xs font-semibold">Real-time</div>
            </div>
          </div>

          {/* Stage Feature */}
          <div className="w-[450px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-emerald-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Monitor className="w-8 h-8 text-emerald-400" />
                <h3 className="text-emerald-300 font-bold text-lg">Stage Feature</h3>
                <Users className="w-8 h-8 text-emerald-400" />
              </div>
              <p className="text-slate-400 text-sm">Teacher-Student P2P Interaction</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-emerald-500 to-pink-500 rounded-full shadow-lg"></div>

          {/* Core Infrastructure & P2P */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
            {/* Core Infrastructure */}
            <div className="px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-pink-500/50 shadow-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Server className="w-8 h-8 text-pink-400" />
                  <h3 className="text-pink-400 font-bold text-xl">Core Infrastructure</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <Database className="w-6 h-6 text-pink-400" />
                    <span className="text-pink-400 text-xs">PostgreSQL</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Server className="w-6 h-6 text-pink-400" />
                    <span className="text-pink-400 text-xs">Redis</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MediaMTXIcon />
                    <span className="text-pink-400 text-xs">MediaMTX</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <NginxIcon />
                    <span className="text-pink-400 text-xs">Nginx</span>
                  </div>
                </div>
              </div>
            </div>

            {/* P2P Network */}
            <div className="px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-amber-500/50 shadow-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Wifi className="w-8 h-8 text-amber-400" />
                  <h3 className="text-amber-400 font-bold text-xl">P2P Network</h3>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <PeerJSIcon />
                    <span className="text-amber-400 text-xs">PeerJS Signaling</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Video className="w-6 h-6 text-amber-400" />
                    <span className="text-amber-400 text-xs">WebRTC Mesh</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Radio className="w-6 h-6 text-amber-400" />
                    <span className="text-amber-400 text-xs">HLS Streaming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Streaming & Communication */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-5xl">
            {/* Video Streaming */}
            <div className="px-6 py-4 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-purple-500/50 shadow-xl flex flex-col items-center gap-2 text-center">
              <Video className="w-8 h-8 text-purple-400" />
              <h4 className="text-purple-300 font-bold text-base text-center">HLS Streaming</h4>
              <p className="text-slate-400 text-xs text-center">CDN Distribution</p>
            </div>

            {/* Real-time Chat */}
            <div className="px-6 py-4 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-cyan-500/50 shadow-xl flex flex-col items-center gap-2 text-center">
              <MessageSquare className="w-8 h-8 text-cyan-400" />
              <h4 className="text-cyan-300 font-bold text-base text-center">WebSocket Chat</h4>
              <p className="text-slate-400 text-xs text-center">Real-time Messaging</p>
            </div>

            {/* Interactive Features */}
            <div className="px-6 py-4 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-pink-500/50 shadow-xl flex flex-col items-center gap-2 text-center">
              <Headphones className="w-8 h-8 text-pink-400" />
              <h4 className="text-pink-300 font-bold text-base text-center">Interactive Features</h4>
              <p className="text-slate-400 text-xs text-center">Hand Raising</p>
            </div>
          </div>

          {/* Final Output */}
          <div className="w-1 h-12 bg-gradient-to-b from-pink-500 to-red-500 rounded-full shadow-lg"></div>

          {/* Live Streaming to Users */}
          <div className="w-[400px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-red-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Globe className="w-8 h-8 text-red-400" />
                <h3 className="text-red-400 font-bold text-xl">Live Streaming</h3>
                <Users className="w-8 h-8 text-red-400" />
              </div>
              <p className="text-red-400 text-sm font-semibold">300K+ Concurrent Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
