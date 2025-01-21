import React from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  label: string;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min,
  max,
  step,
  label
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <label className="text-white">{label}</label>
        <span className="text-white">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between mt-1">
        <span className="text-sm text-gray-400">{min}</span>
        <span className="text-sm text-gray-400">{max}</span>
      </div>
    </div>
  );
}