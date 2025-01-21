
export const departments = {
  'sales': 9,
  'accounting': 8,
  'hr': 7,
  'technical': 6,
  'support': 5,
  'management': 4,
  'IT': 3,
  'product_mng': 2,
  'marketing': 1,
  'R&D': 0
} as const;

export const salaryLevels = {
  'Low': 0,
  'Medium': 1,
  'High': 2
} as const;

export const booleanToNumber = (value: boolean): number => {
  return value ? 1 : 0;
};

export const transformFormData = (data: any) => {

  const transformed = {
    satisfactionLevel: data.satisfactionLevel,
    lastEvaluation: data.lastEvaluation,
    timeSpent: data.timeSpent,
    workAccident: booleanToNumber(data.workAccident),
    promotion: booleanToNumber(data.promotion),
    department: typeof data.department === 'string' 
      ? departments[data.department as keyof typeof departments] 
      : data.department,
    salary: typeof data.salary === 'string' 
      ? salaryLevels[data.salary as keyof typeof salaryLevels] 
      : data.salary,
    project: data.project,
    hour: data.hour
  };

  console.log('Raw Form Data:', data);
  console.log('Transformed Form Data:', transformed);

  return transformed;
};