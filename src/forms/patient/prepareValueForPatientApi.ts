import type { FormValue } from 'utils';

export const prepareValueForPatientApi = (formValue: FormValue) => {
  const preparedValue = { ...formValue };
  delete preparedValue.createdAt;
  return preparedValue;
};
