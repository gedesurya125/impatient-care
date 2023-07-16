import { FormFieldProps, FormFieldTypes, OptionType } from 'types';

export interface FormValue {
  [key: string]: any;
}

export const createFormInitialValue = (
  formFields: FormFieldProps[],
  data?: FormValue
) => {
  return formFields.reduce<FormValue>((acc, cur): FormValue => {
    return {
      ...acc,
      [cur.key]: !!data
        ? data[cur.key]
        : getEmptyValueByFieldType(cur.type, cur?.options),
    };
  }, {});
};

const getEmptyValueByFieldType = (
  fieldType: FormFieldTypes,
  options?: OptionType[]
) => {
  switch (fieldType) {
    case 'text':
      return '';
    case 'text-area':
      return '';
    case 'number':
      return 0;
    case 'radio':
      return options && options[0].value;
    case 'select':
      return options && options[0].value;
    case 'checkbox':
      return options && options[0].value;
    case 'date':
      return new Date().toISOString().substring(0, 10);
    default:
      return null;
  }
};
