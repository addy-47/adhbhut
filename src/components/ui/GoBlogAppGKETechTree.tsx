'use client';

import React, { useState, useRef, MouseEvent, WheelEvent } from 'react';
import {
  Code,
  GitBranch,
  Zap,
  Container,
  Cloud,
  Database,
  Shield,
  Settings,
  ZoomIn,
  ZoomOut,
  RefreshCw,
  Server,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const GoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zM12 22V12M2 7l10 5 10-5" />
  </svg>
);

const GKEIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zM12 22V12M2 7l10 5 10-5" />
  </svg>
);

const CloudSQLIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path>
    <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"></path>
  </svg>
);

const WorkloadIdentityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
);

export default function GoBlogAppGKETechTree() {
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
          {/* Developer Push Code */}
          <div className="w-[500px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-purple-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Code className="w-8 h-8 text-purple-400" />
                <h3 className="text-purple-300 font-bold text-xl">Developer Push Code</h3>
                <GitBranch className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-slate-400 text-sm">Git Repository → GitHub</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full shadow-lg"></div>

          {/* GitHub Actions */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl border-4 border-blue-400/50">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <span className="text-blue-400 font-bold text-lg">GitHub Actions</span>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-blue-500 to-green-500 rounded-full shadow-lg"></div>

          {/* Build & Push to GAR */}
          <div className="w-[450px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-green-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Container className="w-8 h-8 text-green-400" />
                <h3 className="text-green-300 font-bold text-lg">Build & Push to GAR</h3>
              </div>
              <p className="text-slate-400 text-sm">Docker Images • Commit SHA Tags</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-cyan-500 rounded-full shadow-lg"></div>

          {/* Deploy to GKE */}
          <div className="w-[450px] px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-cyan-500/50 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Server className="w-8 h-8 text-cyan-400" />
                <h3 className="text-cyan-300 font-bold text-lg">Deploy to GKE</h3>
              </div>
              <p className="text-slate-400 text-sm">Kubernetes Manifests • Rollout Updates</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-cyan-500 to-pink-500 rounded-full shadow-lg"></div>

          {/* GKE Cluster Services */}
          <div className="grid grid-cols-4 gap-4 w-full max-w-5xl">
            {/* Frontend */}
            <div className="px-6 py-4 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-purple-500/50 shadow-xl flex flex-col items-center gap-2">
              <Code className="w-8 h-8 text-purple-400" />
              <h4 className="text-purple-300 font-bold text-sm">Frontend</h4>
              <p className="text-slate-400 text-xs">Go Web Server</p>
            </div>

            {/* Backend */}
            <div className="px-6 py-4 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-blue-500/50 shadow-xl flex flex-col items-center gap-2">
              <Settings className="w-8 h-8 text-blue-400" />
              <h4 className="text-blue-300 font-bold text-sm">Backend</h4>
              <p className="text-slate-400 text-xs">REST API</p>
            </div>

            {/* Worker */}
            <div className="px-6 py-4 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-green-500/50 shadow-xl flex flex-col items-center gap-2">
              <Database className="w-8 h-8 text-green-400" />
              <h4 className="text-green-300 font-bold text-sm">Worker</h4>
              <p className="text-slate-400 text-xs">Background Tasks</p>
            </div>

            {/* Logging Agent */}
            <div className="px-6 py-4 rounded-xl bg-slate-900/60 backdrop-blur-md border-2 border-amber-500/50 shadow-xl flex flex-col items-center gap-2">
              <Cloud className="w-8 h-8 text-amber-400" />
              <h4 className="text-amber-300 font-bold text-sm">Logging Agent</h4>
              <p className="text-slate-400 text-xs">DaemonSet</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="w-1 h-12 bg-gradient-to-b from-amber-500 to-red-500 rounded-full shadow-lg"></div>

          {/* Database & Security */}
          <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
            {/* Cloud SQL */}
            <div className="px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-pink-500/50 shadow-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Database className="w-8 h-8 text-pink-400" />
                  <h3 className="text-pink-400 font-bold text-xl">Cloud SQL</h3>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <CloudSQLIcon />
                  <p className="text-pink-400 text-sm font-semibold">PostgreSQL</p>
                </div>
              </div>
            </div>

            {/* Workload Identity */}
            <div className="px-8 py-6 rounded-2xl bg-slate-900/60 backdrop-blur-md border-2 border-red-500/50 shadow-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-red-400" />
                  <h3 className="text-red-400 font-bold text-xl">Workload Identity</h3>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <WorkloadIdentityIcon />
                  <p className="text-red-400 text-sm font-semibold">Secure Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
