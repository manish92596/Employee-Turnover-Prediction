import streamlit as st
import pandas as pd
import pickle
from sklearn.preprocessing import StandardScaler

# Load the model and the saved scaler
model = pickle.load(open('model/model.pkl', 'rb'))
scaler = pickle.load(open('model/scaler.pkl', 'rb'))

st.title("Employee Turnover Prediction")

satisfaction_level = st.number_input("Satisfaction Level", min_value=0.0, max_value=1.0, value=None, step=None, format="%.2f")
last_evaluation = st.number_input("Last Evaluation", min_value=0.0, max_value=1.0, value=None, step=None, format="%.2f")
time_spend_company = st.number_input("Time Spent in Company (years)", min_value=0, max_value=20, value=None, step=None)
work_accident = st.selectbox("Work Accident (1=Yes, 0=No)", options=[1, 0])
promotion_last_5years = st.selectbox("Promotion in Last 5 Years (1=Yes, 0=No)", options=[0, 1])

departments = {'sales': 9, 'accounting': 8, 'hr': 7, 'technical': 6, 'support': 5, 'management': 4, 'IT': 3, 'product_mng': 2, 'marketing': 1, 'RandD': 0}
sales = st.selectbox("Department", options=list(departments.keys()))

# Ensure a valid department is selected
if sales in departments:
    department_value = departments[sales]
else:
    department_value = None

salary_levels = {'Low': 0, 'Medium': 1, 'High': 2}
salary = st.selectbox("Salary Level", options=list(salary_levels.keys()))

# Ensure a valid salary is selected
if salary in salary_levels:
    salary_value = salary_levels[salary]
else:
    salary_value = None

proj = st.number_input("Project", min_value=0, value=None, step=None)
hour = st.number_input("Hour", min_value=0, value=None, step=None)

# Multiply project and hour to get proj*hour
proj_hour = proj * hour if proj is not None and hour is not None else None

custom_input = pd.DataFrame({
    'satisfaction_level': [satisfaction_level],
    'last_evaluation': [last_evaluation],
    'time_spend_company': [time_spend_company],
    'Work_accident': [work_accident],
    'promotion_last_5years': [promotion_last_5years],
    'sales': [department_value],  # Use numeric value of department
    'salary': [salary_value],     # Use numeric value of salary
    'proj*hour': [proj_hour]
})

if None not in custom_input.values:  # Ensure no missing values before scaling and prediction
    custom_input_scaled = scaler.transform(custom_input)

    if st.button('Predict Employee Turnover'):
        prediction = model.predict(custom_input_scaled)
        result = "Employee is likely to stay" if prediction == 0 else "Employee is likely to leave"
        st.write(f"Prediction: {result}")
else:
    st.write("Please fill in all input fields.")
