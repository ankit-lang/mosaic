"use client";

import React, { useState, useEffect } from 'react';
import { getOperatingStatus } from '@/utils/operatingHours';

export default function OperatingStatusBadge({ className = '' }: { className?: string }) {
  const [status, setStatus] = useState<{ isOpen: boolean; text: string } | null>(null);

  useEffect(() => {
    setStatus(getOperatingStatus());
    const interval = setInterval(() => {
      setStatus(getOperatingStatus());
    }, 30000); // refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md transition-all ${
        status.isOpen
          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
          : 'bg-zinc-800/80 text-zinc-400 border border-zinc-700/80'
      } ${className}`}
    >
      {status.isOpen ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold">{status.text}</span>
        </>
      ) : (
        <>
          <span className="w-2 h-2 rounded-full bg-zinc-500" />
          <span>{status.text}</span>
        </>
      )}
    </div>
  );
}
