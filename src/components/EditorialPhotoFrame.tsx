import React, { useState } from 'react';
import { Camera, User, Laptop, Sparkles } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';

interface EditorialPhotoFrameProps {
  type: 'profile' | 'working' | 'contact';
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  showUploadTrigger?: boolean;
}

export const EditorialPhotoFrame: React.FC<EditorialPhotoFrameProps> = ({
  type,
  className = '',
  aspectRatio = 'portrait',
  showUploadTrigger = true,
}) => {
  const { profilePhoto, workingPhoto, contactPhoto, setPhoto } = usePhotos();
  const [loadError, setLoadError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const currentSrc = type === 'profile' ? profilePhoto : type === 'working' ? workingPhoto : contactPhoto;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setPhoto(type, event.target.result as string);
          setLoadError(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const ratioClass =
    aspectRatio === 'portrait'
      ? 'aspect-[3/4]'
      : aspectRatio === 'square'
      ? 'aspect-square'
      : 'aspect-[16/11]';

  return (
    <div
      className={`relative group rounded-3xl overflow-hidden border border-white/15 bg-[#121418] shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-[#7C5CFF]/50 hover:shadow-[#7C5CFF]/15 ${ratioClass} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Liquid Glass top reflection highlight */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-10" />

      {currentSrc && !loadError ? (
        <div className="w-full h-full relative">
          <img
            src={currentSrc}
            alt="M. Asif - Web Developer & UI/UX Designer"
            referrerPolicy="no-referrer"
            onError={() => setLoadError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
          {/* Subtle natural film-grade vignette scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/85 via-transparent to-transparent opacity-60 pointer-events-none" />
        </div>
      ) : (
        /* Realistic Editorial Workspace Display (M. Asif at MacBook with dark overshirt & monitor) */
        <div className="w-full h-full flex flex-col items-center justify-between p-8 text-center bg-gradient-to-b from-[#181a20] via-[#121418] to-[#0a0b0d] relative overflow-hidden">
          {/* Ambient workspace warm lighting glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute top-10 right-10 w-48 h-48 bg-[#7C5CFF]/15 blur-[70px] rounded-full pointer-events-none" />

          {/* Top verified creator pill */}
          <div className="z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md text-[11px] text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-[#35D07F]" />
            <span>M.ASIF · Real Creator Workspace</span>
          </div>

          {/* Central graphic anchor */}
          <div className="z-10 my-auto flex flex-col items-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#1f222a] to-[#2c303c] border border-white/20 shadow-xl flex items-center justify-center text-white mb-4 group-hover:scale-105 transition-transform duration-300">
              <Laptop className="w-9 h-9 text-[#4DA3FF]" />
            </div>
            <h4 className="text-lg font-bold text-white tracking-tight font-display">M. Asif Working at Desk</h4>
            <p className="text-xs text-zinc-400 mt-1 max-w-xs leading-relaxed">
              MacBook Pro setup · Dark overshirt · Active Web & UI/UX Engineering
            </p>
          </div>

          {/* Bottom Prompt to Attach/Drop Real Photo */}
          <div className="z-10 w-full pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <User className="w-3.5 h-3.5 text-[#7C5CFF]" />
              <span>Independent Web Developer</span>
            </span>
            <span className="text-[#35D07F] font-mono">100% Genuine</span>
          </div>
        </div>
      )}

      {/* Upload & Select Photo Trigger for M. Asif */}
      {showUploadTrigger && (
        <label
          htmlFor={`photo-upload-${type}`}
          className={`absolute bottom-4 right-4 z-20 cursor-pointer flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#08090B]/90 backdrop-blur-xl border border-white/20 text-xs font-semibold text-white shadow-2xl transition-all duration-300 hover:border-[#7C5CFF] hover:bg-[#7C5CFF] hover:scale-105 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
          title="Click to select or drop M. Asif's photo file"
        >
          <Camera className="w-3.5 h-3.5 text-[#35D07F]" />
          <span>Upload Real Photo</span>
          <input
            id={`photo-upload-${type}`}
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </label>
      )}

      {/* Liquid Glass Perimeter Highlight */}
      <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/5 group-hover:border-[#7C5CFF]/30 transition-colors duration-500" />
    </div>
  );
};
