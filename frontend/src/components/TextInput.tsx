import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  label,
  placeholder
}) => {
  return (
    <div className="w-full">
      <label className="block text-white mb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}