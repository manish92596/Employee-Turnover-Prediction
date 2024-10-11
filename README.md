# Employee Turnover Prediction Using K-Nearest Neighbors (KNN)

This repository contains a machine learning model designed to predict employee turnover—whether an employee will leave or stay—based on features such as satisfaction level, last evaluation score, time spent in the company, and more. The model is built using the **K-Nearest Neighbors (KNN)** algorithm, with hyperparameter tuning performed via **GridSearchCV** to optimize accuracy. Additionally, a Streamlit-based web interface allows users to input custom employee data and obtain predictions in real-time.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Dataset](#dataset)
6. [Model Training](#model-training)
7. [Technologies Used](#technologies-used)
8. [Contributing](#contributing)
9. [License](#license)

## Project Overview
Employee turnover is a critical issue for many companies. Predicting when employees are likely to leave can help businesses reduce turnover costs and maintain organizational stability. This project implements a KNN-based classification model to predict employee turnover, utilizing various employee-related factors as inputs.

The project also includes a Streamlit web app that allows users to input specific employee data and receive a prediction on whether the employee will stay or leave.

## Features
- **Data Preprocessing**:
  - Categorical variables like `salary` and `sales` are mapped to numeric values.
  - Feature engineering: A new feature `proj*hour` is created by multiplying the number of projects with average monthly hours.
  
- **Modeling**:
  - K-Nearest Neighbors (KNN) is used for classification.
  - Hyperparameter tuning with **GridSearchCV** optimizes model parameters such as the number of neighbors (`n_neighbors`) and the distance metric.

- **Metrics**:
  - Precision, Recall, F1-score, and Accuracy are calculated and displayed.
  - Confusion matrix visualization to show True Positives, True Negatives, False Positives, and False Negatives.

- **Interactive Web Interface**:
  - Users can input employee data such as satisfaction level, last evaluation, time spent at the company, and more to get real-time predictions.
  - Streamlit-based web app for a user-friendly experience.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/employee-turnover-prediction.git
   cd employee-turnover-prediction
