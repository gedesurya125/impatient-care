import { FormFieldProps, FormFieldTypes, OptionType } from 'types';

interface FormInitialValue {
  [key: string]: any;
}

export const createEmptyFormInitialValue = (formFields: FormFieldProps[]) => {
  return formFields.reduce<FormInitialValue>((acc, cur): FormInitialValue => {
    return {
      ...acc,
      [cur.key]: getInitialValueByFieldType(cur.type, cur?.options),
    };
  }, {});
};

const getInitialValueByFieldType = (
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
