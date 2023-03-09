import { OptionType } from '.';

export type FormFieldTypes =
  | 'text'
  | 'number'
  | 'checkbox'
  | 'radio'
  | 'text-area'
  | 'date'
  | 'select'
  | 'submit';

export interface FormFieldProps {
  label: string;
  key: string;
  type: FormFieldTypes;
  options?: OptionType[];
}
