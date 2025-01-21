import React from 'react';
import { FormContainer } from './components/FormContainer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8 flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Employee Turnover Prediction</h1>
        <FormContainer />
      </div>
    </div>
  );
};

export default App;