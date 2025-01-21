import React from 'react';

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  label: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  label
}) => {
  return (
    <div className="w-full">
      <label className="block text-white mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}