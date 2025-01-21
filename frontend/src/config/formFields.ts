import { FormField } from '../types/employee';
import { departments, salaryLevels } from '../utils/dataTransform';

export const formFields: FormField[] = [
  {
    id: 'satisfactionLevel',
    label: 'Satisfaction Level',
    type: 'slider',
    min: 0,
    max: 1,
    step: 0.01
  },
  {
    id: 'lastEvaluation',
    label: 'Last Evaluation',
    type: 'slider',
    min: 0,
    max: 1,
    step: 0.01
  },
  {
    id: 'workAccident',
    label: 'Work Accident',
    type: 'toggle',
  },
  {
    id: 'promotion',
    label: 'Promotion in Last 5 Years',
    type: 'toggle',
  },
  {
    id: 'timeSpent',
    label: 'Time Spent in Company (years)',
    type: 'number',
    min: 0,
    max: 50
  },
  {
    id: 'department',
    label: 'Department',
    type: 'select',
    options: Object.keys(departments)
  },
  {
    id: 'salary',
    label: 'Salary Level',
    type: 'select',
    options: Object.keys(salaryLevels)
  },
  {
    id: 'project',
    label: 'Number of Projects',
    type: 'number',
    min: 0,
    max: 100
  },
  {
    id: 'hour',
    label: 'Average Monthly Hours',
    type: 'number',
    min: 0,
    max: 500
  }
];