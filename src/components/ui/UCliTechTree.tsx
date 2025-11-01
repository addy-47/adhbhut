'use client';

import React, { useState, useRef, MouseEvent, WheelEvent } from 'react';
import {
  Terminal,
  Settings,
  Database,
  HardDrive,
  Undo,
  Eye,
  Shield,
  Zap,
  ZoomIn,
  ZoomOut,
  RefreshCw,
  User,
  Package,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const GoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zM12 22V12M2 7l10 5 10-5"/>
  </svg>
);

const CobraIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6v4H2V3zm0 7h6v4H2v-4zm0 7h6v4H2v-4zm14-17h6v4h-6V3zm0 7h6v4h-6v-4zm0 7h6v4h-6v-4z"/>
  </svg>
);

const BashIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="2" rx="1"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const ZshIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 2v20M2 12h20"/>
  </svg>
);

const FishIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const InotifyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 11H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z"/>
    <path d="M14 11h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Z"/>
  </svg>
);

const ZstdIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <path d="M7 7h10v10H7z"/>
    <path d="M9 9h6v6H9z"/>
  </svg>
);

const BoltDBIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
    <circle cx="12" cy="12" r="3"/>
    <path d="M12 9v6M9 12h6"/>
  </svg>
);

export default function UCliTechTree() {
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
          {/* User Terminal */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center shadow-2xl border-4 border-purple-400/50">
              <User className="w-10 h-10 text-white" />
            </div>
            <span className="text-purple-400 font-bold text-lg">User Terminal</span>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full shadow-lg"></div>

          {/* Shell Integration */}
          <div className="w-[400px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-blue-500/50 shadow-2xl">
            <div className="text-center mb-4">
              <h3 className="text-blue-400 font-bold text-xl mb-2">Shell Integration</h3>
              <p className="text-slate-400 text-sm">Bash • Zsh • Fish Shell Hooks</p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <BashIcon />
              <ZshIcon />
              <FishIcon />
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full shadow-lg"></div>

          {/* u-cli Core */}
          <div className="w-[450px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-cyan-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Terminal className="w-8 h-8 text-cyan-400" />
                <h3 className="text-cyan-300 font-bold text-lg">u-cli (v1.0 → v2.0)</h3>
                <Settings className="w-8 h-8 text-cyan-400" />
              </div>
              <p className="text-slate-400 text-sm">Universal Linux Undo Command</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-green-500 rounded-full shadow-lg"></div>

          {/* Go + Cobra */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
            <div className="px-6 py-4 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-green-500/50 shadow-xl flex flex-col items-center gap-2">
              <GoIcon />
              <h4 className="text-green-300 font-bold text-base">Go Language</h4>
              <p className="text-slate-400 text-xs">High Performance</p>
            </div>

            <div className="px-6 py-4 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-amber-500/50 shadow-xl flex flex-col items-center gap-2">
              <CobraIcon />
              <h4 className="text-amber-300 font-bold text-base">Cobra CLI</h4>
              <p className="text-slate-400 text-xs">Command Framework</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-pink-500 rounded-full shadow-lg"></div>

          {/* Core Features */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
            {/* Command Tracking */}
            <div className="px-6 py-4 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-purple-500/50 shadow-xl flex flex-col items-center gap-2 text-center">
              <Eye className="w-8 h-8 text-purple-400" />
              <h4 className="text-purple-300 font-bold text-base text-center">Command Tracking</h4>
              <p className="text-slate-400 text-xs text-center">Shell Hook Capture</p>
            </div>

            {/* File Monitoring */}
            <div className="px-6 py-4 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-blue-500/50 shadow-xl flex flex-col items-center gap-2 text-center">
              <InotifyIcon />
              <h4 className="text-blue-300 font-bold text-base text-center">File Monitoring</h4>
              <p className="text-slate-400 text-xs text-center">inotify System</p>
            </div>

            {/* Backup System */}
            <div className="px-6 py-4 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-cyan-500/50 shadow-xl flex flex-col items-center gap-2 text-center">
              <Package className="w-8 h-8 text-cyan-400" />
              <h4 className="text-cyan-300 font-bold text-base text-center">Backup System</h4>
              <p className="text-slate-400 text-xs text-center">zstd Compression</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-pink-500 to-red-500 rounded-full shadow-lg"></div>

          {/* System & Database */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
            {/* System Layer */}
            <div className="px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-pink-500/50 shadow-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <HardDrive className="w-8 h-8 text-pink-400" />
                  <h3 className="text-pink-400 font-bold text-xl">System Layer</h3>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <ZstdIcon />
                  <p className="text-pink-400 text-sm font-semibold">zstd</p>
                </div>
              </div>
            </div>

            {/* Database */}
            <div className="px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-amber-500/50 shadow-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Database className="w-8 h-8 text-amber-400" />
                  <h3 className="text-amber-400 font-bold text-xl">BoltDB</h3>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <BoltDBIcon />
                  <p className="text-amber-400 text-sm font-semibold">Command Store</p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-red-500 to-purple-500 rounded-full shadow-lg"></div>

          {/* Undo Operations */}
          <div className="w-[400px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-purple-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Undo className="w-8 h-8 text-purple-400" />
                <h3 className="text-purple-400 font-bold text-xl">Undo Operations</h3>
              </div>
              <p className="text-purple-400 text-sm font-semibold">File Restoration & Rollback</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
