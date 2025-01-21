import React from 'react';

interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
  max?: number;
}

export const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  label,
  min = 0,
  max = 100
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Allow empty input
    if (newValue === '') {
      onChange(0);
      return;
    }
    
    const parsedValue = parseInt(newValue, 10);
    if (!isNaN(parsedValue)) {
      onChange(parsedValue);
    }
  };

  return (
    <div className="w-full">
      <label className="block text-white mb-2">{label}</label>
      <input
        type="number"
        value={value || ''} // Display empty string if value is 0
        onChange={handleChange}
        min={min}
        max={max}
        className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
    </div>
  );
}