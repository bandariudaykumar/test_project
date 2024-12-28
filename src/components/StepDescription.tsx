import React from 'react';

interface StepDescriptionProps {
  title: string;
  description: string;
  color: string;
}

export function StepDescription({ title, description, color }: StepDescriptionProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-[300px] h-[300px] rounded-lg bg-white shadow-xl p-6 transform transition-all duration-500">
        <h2 className={`text-2xl font-bold mb-4 ${color}`}>
          {title}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}