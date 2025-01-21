import React from 'react';

interface ToggleButtonProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  value,
  onChange,
  label
}) => {
  return (
    <div className="w-full flex flex-col items-center">
      <label className="block text-white mb-2 text-center">{label}</label>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => onChange(true)}
          className={`px-6 py-2 rounded-lg ${
            value
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => onChange(false)}
          className={`px-6 py-2 rounded-lg ${
            !value
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          No
        </button>
      </div>
    </div>
  );
}