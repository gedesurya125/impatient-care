import React from 'react';

// External Components
import { Box } from '@gedesurya125/surya-ui';
import { ThemeUIStyleObject } from 'theme-ui';

// Local Components
import { TextField } from '.';

// Types
import type { FormFieldTypes, OptionType } from 'types';
import { TextFieldProps, RadioGroup } from '.';

interface FormFieldsProps extends Omit<TextFieldProps, 'type'> {
  type: FormFieldTypes;
  options?: OptionType[];
}

export const FormField = ({
  type,
  name,
  label,
  defaultValue,
  sx,
  options,
}: FormFieldsProps) => {
  switch (type) {
    case 'text':
      return (
        <TextField
          name={name}
          label={label}
          defaultValue={defaultValue}
          sx={sx}
        />
      );
    case 'number':
      if (name === 'no' || name === 'No') return null;
      return (
        <TextField
          type="number"
          name={name}
          label={label}
          defaultValue={defaultValue}
          sx={sx}
        />
      );
    case 'radio':
      return <RadioGroup name={name} label={label} options={options} sx={sx} />;
    default:
      return null;
  }
};
