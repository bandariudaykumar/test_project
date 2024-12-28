import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepIconProps {
  Icon: LucideIcon;
  color: string;
  isActive: boolean;
  onClick: () => void;
  isHovered: boolean;
  angle: number;
}

export function StepIcon({ Icon, color, isActive, onClick, isHovered, angle }: StepIconProps) {
  return (
    <div
      className={`absolute w-16 h-16 -ml-8 -mt-8 transition-all duration-500 cursor-pointer
        ${isActive ? 'scale-125' : 'scale-100'}
        ${isHovered && !isActive ? 'opacity-50' : 'opacity-100'}`}
      style={{
        left: '50%',
        top: '50%',
        transform: `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`,
      }}
      onClick={onClick}
    >
      <div className={`w-full h-full rounded-full bg-white shadow-lg
        flex items-center justify-center ${isActive ? 'ring-4 ring-blue-400' : ''}`}>
        <Icon className={`w-8 h-8 ${color}`} />
      </div>
    </div>
  );
}