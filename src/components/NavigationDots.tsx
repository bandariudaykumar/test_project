import React from 'react';

interface NavigationDotsProps {
  steps: number;
  activeStep: number;
  onStepClick: (index: number) => void;
}

export function NavigationDots({ steps, activeStep, onStepClick }: NavigationDotsProps) {
  return (
    <div className="flex space-x-2 mt-8">
      {Array.from({ length: steps }).map((_, index) => (
        <button
          key={index}
          className={`w-3 h-3 rounded-full transition-all duration-300
            ${activeStep === index ? 'bg-blue-500 w-6' : 'bg-gray-300'}`}
          onClick={() => onStepClick(index)}
        />
      ))}
    </div>
  );
}