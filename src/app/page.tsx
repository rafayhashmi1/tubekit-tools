'use client';

import React, { useState, useRef } from 'react';
import { Upload, Eye, Clock, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [videoTitle, setVideoTitle] = useState('How to Grow on YouTube (2026 Strategy Guide)');
  const [channelName, setChannelName] = useState('Creator Academy');
  const [videoDuration, setVideoDuration] = useState('14:28');
  const [showOverlays, setShowOverlays] = useState(true);
  const [showDangerZone, setShowDangerZone] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageSrc(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20">
            <Sparkles className="w-3.5 h-3.5" /> 100% Free Creator Suite
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            YouTube Thumbnail Safe-Zone Tester
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Test your 1280×720 thumbnail against YouTube’s mobile UI overlays to ensure text and faces are never blocked.
          </p>
        </div>

        {/* Tool Controls */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Upload Thumbnail
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 font-medium text-sm transition-colors text-white"
              >
                <Upload className="w-4 h-4" />
                {imageSrc ? 'Change Image' : 'Upload (1280x720)'}
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Video Title
              </label>
              <input
                type="text"
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-rose-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                Video Duration
              </label>
              <input
                type="text"
                value={videoDuration}
                onChange={(e) => setVideoDuration(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-6 pt-2 border-t border-slate-800">
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={showOverlays}
                onChange={(e) => setShowOverlays(e.target.checked)}
                className="rounded bg-slate-800 border-slate-700 text-rose-600 w-4 h-4"
              />
              <span className="text-slate-300">Show Duration Badge</span>
            </label>

            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={showDangerZone}
                onChange={(e) => setShowDangerZone(e.target.checked)}
                className="rounded bg-slate-800 border-slate-700 text-rose-600 w-4 h-4"
              />
              <span className="text-slate-300">Highlight Danger Zone (Lower-Right)</span>
            </label>
          </div>
        </div>

        {/* Live Preview Container */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
          <div className="max-w-xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video w-full bg-slate-900 flex items-center justify-center overflow-hidden">
              {imageSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={imageSrc} alt="Preview" className="w-full h-full object-cover" />
              ) : (
                <div className="text-center p-6 space-y-2 text-slate-500">
                  <Upload className="w-10 h-10 mx-auto text-slate-600" />
                  <p className="text-sm font-medium">Upload a thumbnail to test</p>
                </div>
              )}

              {showOverlays && (
                <div className="absolute bottom-2 right-2 bg-black/85 text-white text-xs font-semibold px-2 py-0.5 rounded tracking-wide backdrop-blur-xs shadow-md flex items-center gap-1 z-20">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {videoDuration}
                </div>
              )}

              {showDangerZone && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div className="absolute bottom-0 right-0 w-[24%] h-[20%] border-2 border-dashed border-rose-500/80 bg-rose-500/20 rounded-tl-lg flex items-center justify-center p-1 text-center">
                    <span className="text-[10px] font-bold text-rose-300 uppercase leading-none">
                      Covered by Badge
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 flex gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-600 to-amber-500 shrink-0 flex items-center justify-center font-bold text-white text-sm">
                {channelName.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white line-clamp-2 leading-snug">
                  {videoTitle}
                </p>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                  {channelName}
                  <CheckCircle2 className="w-3 h-3 text-slate-500" />
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  145K views • 3 days ago
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Explanatory Guide */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 text-slate-300 text-sm leading-relaxed">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            Why Thumbnail Safe-Zones Are Essential
          </h2>
          <p>
            The lower-right corner of every YouTube thumbnail is automatically covered by YouTube’s timestamp badge on mobile feeds, recommendations, and homepages. Never place critical faces, text, or hooks in the lower-right 20% of your graphic.
          </p>
        </div>

      </div>
    </main>
  );
}
