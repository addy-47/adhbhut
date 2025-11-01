'use client';

import React, { useState, useRef, MouseEvent, WheelEvent } from 'react';
import {
  Terminal,
  Settings,
  Zap,
  GitBranch,
  Database,
  Container,
  Layers,
  Sparkles,
  ZoomIn,
  ZoomOut,
  RefreshCw,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const GoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zM12 22V12M2 7l10 5 10-5" />
  </svg>
);

const DockerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6v4H2V3zm0 7h6v4H2v-4zm0 7h6v4H2v-4zm14-17h6v4h-6V3zm0 7h6v4h-6v-4zm0 7h6v4h-6v-4z"/>
  </svg>
);

const GitHubActionsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6v4H2V3zm0 7h6v4H2v-4zm0 7h6v4H2v-4zm14-17h6v4h-6V3zm0 7h6v4h-6v-4zm0 7h6v4h-6v-4z"/>
  </svg>
);

const GARIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zM7 7h10v10H7V7z"/>
  </svg>
);

export default function DockerzTechTree() {
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
          {/* Dockerz CLI Tool */}
          <div className="w-[500px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-purple-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Terminal className="w-8 h-8 text-purple-400" />
                <h3 className="text-purple-300 font-bold text-xl">Dockerz CLI v2.0</h3>
                <Settings className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-slate-400 text-sm">Smart Multi-Service Docker Builder</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full shadow-lg"></div>

          {/* User/CI-CD Pipeline */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl border-4 border-blue-400/50">
              <Play className="w-10 h-10 text-white" />
            </div>
            <span className="text-blue-400 font-bold text-lg">CI/CD Pipeline</span>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full shadow-lg"></div>

          {/* Smart Features */}
          <div className="w-[450px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-green-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Zap className="w-8 h-8 text-green-400" />
                <h3 className="text-green-300 font-bold text-lg">Smart Features (v2.0)</h3>
                <Sparkles className="w-8 h-8 text-green-400" />
              </div>
              <p className="text-slate-400 text-sm">Git Change Detection • Multi-Level Caching • Smart Orchestration</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-cyan-500 rounded-full shadow-lg"></div>

          {/* Core Technologies */}
          <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
            {/* Go Backend */}
            <div className="px-6 py-5 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-purple-500/50 shadow-xl flex flex-col items-center gap-3 text-center">
              <GoIcon />
              <h4 className="text-purple-300 font-bold text-base text-center">Go + Cobra</h4>
              <p className="text-slate-400 text-xs text-center">CLI Framework</p>
            </div>

            {/* Git Integration */}
            <div className="px-6 py-5 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-orange-500/50 shadow-xl flex flex-col items-center gap-3 text-center">
              <GitBranch className="w-10 h-10 text-orange-400" />
              <h4 className="text-orange-300 font-bold text-base text-center">Git Integration</h4>
              <p className="text-slate-400 text-xs text-center">Change Detection</p>
            </div>

            {/* Configuration */}
            <div className="px-6 py-5 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-cyan-500/50 shadow-xl flex flex-col items-center gap-3 text-center">
              <Settings className="w-10 h-10 text-cyan-400" />
              <h4 className="text-cyan-300 font-bold text-base text-center">YAML Config</h4>
              <p className="text-slate-400 text-xs text-center">services.yaml</p>
            </div>
          </div>

          {/* Convergence Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-full shadow-lg"></div>

          {/* Build & Registry */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
            {/* Docker Engine */}
            <div className="px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-pink-500/50 shadow-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Container className="w-8 h-8 text-pink-400" />
                  <h3 className="text-pink-400 font-bold text-xl">Docker Engine</h3>
                  <Layers className="w-8 h-8 text-pink-400" />
                </div>
                <div className="flex items-center justify-center gap-4">
                  <DockerIcon />
                  <p className="text-pink-400 text-sm font-semibold">Parallel Builds</p>
                </div>
              </div>
            </div>

            {/* Google Artifact Registry */}
            <div className="px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-amber-500/50 shadow-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Database className="w-8 h-8 text-amber-400" />
                  <h3 className="text-amber-400 font-bold text-xl">GAR</h3>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <GARIcon />
                  <p className="text-amber-400 text-sm font-semibold">Image Push</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
