export interface EmployeeData {
  satisfactionLevel: number;
  lastEvaluation: number;
  timeSpent: number;
  workAccident: boolean;
  promotion: boolean;
  department: number;
  salary: number;
  project: number;
  hour: number;
}
export interface FormField {
  id: keyof EmployeeData;
  label: string;
  type: 'slider' | 'toggle' | 'select' | 'number';
  min?: number;
  max?: number;
  step?: number;
  options?: string[];
}