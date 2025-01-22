
from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

model = joblib.load('model/model.pkl')
scaler = joblib.load('model/scaler.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        
       
        required_keys = [
            'satisfactionLevel', 'lastEvaluation', 'timeSpent',
            'workAccident', 'promotion', 'department', 'salary', 'project', 'hour'
        ]
        
        missing_keys = [key for key in required_keys if key not in data]
        if missing_keys:
            return jsonify({'error': f'Missing keys: {missing_keys}', 'success': False}), 400
        
      
        try:
            satisfaction_level = float(data['satisfactionLevel'])
            last_evaluation = float(data['lastEvaluation'])
            time_spent_company = int(data['timeSpent'])
            work_accident = int(data['workAccident'])
            promotion_last_5years = int(data['promotion'])
            department = int(data['department'])  
            salary = int(data['salary'])          
            proj = int(data['project'])
            hour = float(data['hour'])
        except ValueError:
            return jsonify({'error': 'Invalid input types', 'success': False}), 400
        
  
        features = np.array([
            satisfaction_level, last_evaluation, time_spent_company,
            work_accident, promotion_last_5years, department, salary,
            proj * hour  
        ]).reshape(1, -1)
        
      
        scaled_features = scaler.transform(features)
        prediction = model.predict(scaled_features)[0]
        
        result = int(prediction) 
        return jsonify({'prediction': result, 'success': True})
    
    except Exception as e:
        return jsonify({'error': str(e), 'success': False}), 500

if __name__ == '__main__':
    app.run(debug=False, port=5000)  

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=5000)
