import { transformFormData } from '../utils/dataTransform';

// export const API_URL = 'http://backend:5000';

export const API_URL = 'https://employee-turnover-prediction-qwh7.onrender.com';
// export const API_URL = 'http://localhost:5000';

export const predictTurnover = async (employeeData: any) => {
  try {
    const transformedData = transformFormData(employeeData);
    
    const response = await fetch(`${API_URL}/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transformedData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


