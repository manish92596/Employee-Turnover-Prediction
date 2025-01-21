

import React, { useState } from 'react';
import { Slider } from './Slider';
import { Select } from './Select';
import { ToggleButton } from './ToggleButton';
import { NumberInput } from './NumberInput';
import { Modal } from './Modal';
import { formFields } from '../config/formFields';
import { EmployeeData } from '../types/employee';
import { predictTurnover } from '../services/api';


const initialFormState: EmployeeData = {
  satisfactionLevel: 0,
  lastEvaluation: 0,
  timeSpent: 0,
  workAccident: false,
  promotion: false,
  department: 0,
  salary: 0,
  project: 0,
  hour: 0
};

export const FormContainer: React.FC = () => {
  const [formData, setFormData] = useState<EmployeeData>(initialFormState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormData(initialFormState); 
    setPrediction(null);
  };

  const handlePredict = async () => {
    try {
      setIsLoading(true);
      console.log('Raw Form Data:', formData);
      const result = await predictTurnover(formData);
      console.log('API Response:', result);
      setPrediction(
        result.prediction === 1
          ? "Yes, an employee is likely to leave the company."
          : "No, the employee will not leave the company."
      );
      setIsModalOpen(true);
    } catch (error) {
      console.error('Prediction error:', error);
      setPrediction("Error making prediction. Please try again.");
      setIsModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  const renderField = (field: typeof formFields[0]) => {
    switch (field.type) {
      case 'slider':
        return (
          <Slider
            key={field.id}
            value={formData[field.id as keyof EmployeeData] as number}
            onChange={(value) => handleChange(field.id, value)}
            min={field.min!}
            max={field.max!}
            step={field.step!}
            label={field.label}
          />
        );
      
      case 'toggle':
        return (
          <ToggleButton
            key={field.id}
            value={formData[field.id as keyof EmployeeData] as boolean}
            onChange={(value) => handleChange(field.id, value)}
            label={field.label}
          />
        );
      
      case 'number':
        return (
          <NumberInput
            key={field.id}
            value={formData[field.id as keyof EmployeeData] as number}
            onChange={(value) => handleChange(field.id, value)}
            label={field.label}
            min={field.min}
            max={field.max}
          />
        );
      
      case 'select':
        return (
          <Select
            key={field.id}
            value={String(formData[field.id as keyof EmployeeData])}
            onChange={(value) => handleChange(field.id, value)}
            options={field.options!}
            label={field.label}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {formFields.map(renderField)}
      
      <div className="flex flex-col items-center gap-4 mt-8">
        <button
          onClick={handlePredict}
          disabled={isLoading}
          className={`px-8 py-3 bg-blue-600 text-white rounded-lg transition-colors ${
            isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          {isLoading ? 'Predicting...' : 'Predict'}
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-white">Prediction Result</h2>
          <p className="text-lg text-white">{prediction}</p>
        </div>
      </Modal>
    </div>
  );
};