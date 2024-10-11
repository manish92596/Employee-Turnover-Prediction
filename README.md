# Employee Turnover Prediction Using K-Nearest Neighbors (KNN)

This repository contains a machine learning model designed to predict employee turnover—whether an employee will leave or stay—based on features such as satisfaction level, last evaluation score, time spent in the company, and more. The model is built using the K-Nearest Neighbors (KNN) algorithm, with hyperparameter tuning performed via GridSearchCV to optimize accuracy. Additionally, a Streamlit-based web interface allows users to input custom employee data and obtain predictions in real-time.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dataset](#dataset)
- [Model Training](#model-training)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Employee turnover is a critical issue for many companies. Predicting when employees are likely to leave can help businesses reduce turnover costs and maintain organizational stability. This project implements a KNN-based classification model to predict employee turnover, utilizing various employee-related factors as inputs.

The project also includes a Streamlit web app that allows users to input specific employee data and receive a prediction on whether the employee will stay or leave.

## Features

### Data Preprocessing:
- Categorical variables like salary and sales are mapped to numeric values.
- Feature engineering: A new feature `proj*hour` is created by multiplying the number of projects with average monthly hours.

### Modeling:
- K-Nearest Neighbors (KNN) is used for classification.
- Hyperparameter tuning with GridSearchCV optimizes model parameters such as the number of neighbors (`n_neighbors`) and the distance metric.

### Metrics:
- Precision, Recall, F1-score, and Accuracy are calculated and displayed.
- Confusion matrix visualization to show True Positives, True Negatives, False Positives, and False Negatives.

### Interactive Web Interface:
- Users can input employee data such as satisfaction level, last evaluation, time spent at the company, and more to get real-time predictions.
- Streamlit-based web app for a user-friendly experience.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/employee-turnover-prediction.git
   cd employee-turnover-prediction
   ```

2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Usage

### Run the Streamlit App:

After installing the dependencies, you can start the Streamlit app:

```bash
streamlit run app.py
```

### Enter Employee Data:

- Satisfaction Level (0.0 to 1.0)
- Last Evaluation (0.0 to 1.0)
- Time Spent in Company (in years)
- Work Accident (1 for Yes, 0 for No)
- Promotion in Last 5 Years (1 for Yes, 0 for No)
- Department (e.g., Sales, HR, IT)
- Salary Level (low, medium, high)
- Projects * Monthly Hours (e.g., 210)

Based on the input data, the app will predict if the employee is likely to leave or stay.

## Dataset

The dataset contains the following features:

- `satisfaction_level`: Employee satisfaction level (0 to 1).
- `last_evaluation`: Last performance evaluation score (0 to 1).
- `time_spend_company`: Number of years spent in the company.
- `Work_accident`: Whether the employee had a work accident (0 or 1).
- `promotion_last_5years`: Whether the employee was promoted in the last 5 years (0 or 1).
- `sales`: Department of the employee (mapped to numerical values).
- `salary`: Salary level (low, medium, high; mapped to 0, 1, 2).
- `proj*hour`: Feature engineered by multiplying the number of projects by the average monthly hours.
- `left`: Target variable indicating whether the employee left (1) or stayed (0).

## Model Training

The model was trained using the K-Nearest Neighbors algorithm. The training process included hyperparameter tuning using GridSearchCV to find the best combination of parameters such as n_neighbors, weights, and metric.

The dataset was split into training and testing sets (80% training, 20% testing). The best-performing model was saved using pickle for future use.

To retrain the model, you can run the following script:

```bash
python model.py
```

## Technologies Used

- Python 3.12
- Scikit-learn: Machine learning model and hyperparameter tuning.
- Pandas & Numpy: Data manipulation and preprocessing.
- Streamlit: Web app framework for building the interactive user interface.
- Matplotlib & Seaborn: For plotting confusion matrix and other visualizations.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This repository is licensed under the MIT License. See the LICENSE file for more details.
