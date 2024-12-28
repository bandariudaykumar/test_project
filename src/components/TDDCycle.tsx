import React, { useState } from 'react';
import { StepIcon } from './StepIcon';
import { StepDescription } from './StepDescription';
import { NavigationDots } from './NavigationDots';
import { tddSteps } from '../data/tddSteps';

export default function TDDCycle() {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % tddSteps.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextStep, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Test Driven Development Cycle</h1>
      
      <div className="relative w-[600px] h-[600px]"
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}>
        {/* Progress Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-[400px] h-[400px] rounded-full border-4 border-gray-200 relative transition-transform duration-500 ${isAutoPlaying ? 'animate-spin-slow' : ''}`}>
            {tddSteps.map((step, index) => {
              const angle = (index * 360) / tddSteps.length;
              const Icon = step.icon;
              
              return (
                <StepIcon
                  key={step.title}
                  Icon={Icon}
                  color={step.color}
                  isActive={activeStep === index}
                  onClick={() => setActiveStep(index)}
                  isHovered={isHovered}
                  angle={angle}
                />
              );
            })}
          </div>
        </div>

        {/* Step Description */}
        <StepDescription
          title={tddSteps[activeStep].title}
          description={tddSteps[activeStep].description}
          color={tddSteps[activeStep].color}
        />
      </div>

      <div className="flex flex-col items-center gap-4 mt-8">
        <NavigationDots
          steps={tddSteps.length}
          activeStep={activeStep}
          onStepClick={setActiveStep}
        />
        
        <button
          onClick={toggleAutoPlay}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          {isAutoPlaying ? 'Stop Auto Play' : 'Start Auto Play'}
        </button>
      </div>
    </div>
  );
}