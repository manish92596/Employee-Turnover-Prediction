import pickle
import pandas as pd
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import StandardScaler

# Load the dataset
# df = pd.read_csv('data.csv')
df = pd.read_csv('4\data.csv')


# Map categorical variables to numeric
df['salary'] = df['salary'].map({'high': 2, 'medium': 1, 'low': 0}).astype(int)
df['sales'] = df['sales'].map({
    'sales': 9, 'accounting': 8, 'hr': 7, 'technical': 6, 'support': 5,
    'management': 4, 'IT': 3, 'product_mng': 2, 'marketing': 1, 'RandD': 0
}).astype(float)

# Discretize 'satisfaction_level'
df.loc[df['satisfaction_level'] <= 0.25, 'satisfaction_level'] = 0
df.loc[(df['satisfaction_level'] > 0.25) & (df['satisfaction_level'] <= 0.5), 'satisfaction_level'] = 1
df.loc[(df['satisfaction_level'] > 0.5) & (df['satisfaction_level'] <= 0.75), 'satisfaction_level'] = 0
df.loc[df['satisfaction_level'] > 0.75, 'satisfaction_level'] = 1
df['satisfaction_level'] = df['satisfaction_level'].astype(int)

# Discretize 'last_evaluation'
df.loc[df['last_evaluation'] <= 0.56, 'last_evaluation'] = 0
df.loc[(df['last_evaluation'] > 0.56) & (df['last_evaluation'] <= 0.80), 'last_evaluation'] = 1
df.loc[df['last_evaluation'] > 0.80, 'last_evaluation'] = 0
df['last_evaluation'] = df['last_evaluation'].astype(int)

# Create 'proj*hour' feature and drop unnecessary columns
df["proj*hour"] = df.number_project * df.average_montly_hours
df = df.drop(['number_project', 'average_montly_hours'], axis=1)

# Define features (X) and target (y)
X = df.drop("left", axis=1).values
y = df["left"].values

# Standardize the feature set
scaler = StandardScaler()
X = scaler.fit_transform(X)

# Split dataset into training and testing sets
X_train, X_test, Y_train, Y_test = train_test_split(X, y, test_size=0.20, random_state=42)

# KNN Hyperparameter tuning using GridSearchCV
param_grid = {
    'n_neighbors': range(1, 31),
    'weights': ['uniform', 'distance'],
    'metric': ['euclidean', 'manhattan', 'minkowski']
}

knn = KNeighborsClassifier()
grid_search = GridSearchCV(knn, param_grid, cv=10, scoring='accuracy')
grid_search.fit(X_train, Y_train)

# Best KNN model
best_knn = grid_search.best_estimator_

# Accuracy of the best KNN model
knn_accuracy = best_knn.score(X_test, Y_test)
print(f"Optimized KNN Model Accuracy: {knn_accuracy * 100:.2f}%")

# Save the model using pickle
pickle.dump(best_knn, open("model.pkl", "wb"))
