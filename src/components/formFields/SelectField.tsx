import React from 'react';

// External Components
import { Select, Box, Label } from '@gedesurya125/surya-ui';
import { OptionType } from 'types';
import { useField } from 'formik';
import { ThemeUIStyleObject } from 'theme-ui';

interface SelectFieldProps {
  name: string;
  label?: string;
  options?: OptionType[];
  sx?: ThemeUIStyleObject;
}

export const SelectField = ({ name, label, options, sx }: SelectFieldProps) => {
  const [field, meta, helpers] = useField(name);

  return (
    <Box className="select-field" sx={{ ...sx }}>
      <Label htmlFor={label + name}>{label}</Label>
      <Select
        {...field}
        sx={{
          mt: 'xSmall',
        }}
      >
        {options?.map(({ value, label: optionLabel }) => {
          return (
            <option key={optionLabel + value} value={value}>
              {optionLabel}
            </option>
          );
        })}
      </Select>
    </Box>
  );
};
