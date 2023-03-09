import React from 'react';

// External Components
import { Field, Input, Label, Box } from '@gedesurya125/surya-ui';
import { useField } from 'formik';
import { ThemeUIStyleObject } from 'theme-ui';

export interface TextFieldProps {
  label?: string;
  name: string;
  defaultValue?: string;
  sx?: ThemeUIStyleObject;
  type?: 'text' | 'number';
}

export const TextField = ({
  name,
  sx,
  label,
  defaultValue,
  type = 'text',
}: TextFieldProps) => {
  const [field, meta, helpers] = useField(name);
  return (
    <Box sx={{ ...sx }}>
      <Label>{label}</Label>
      <Input
        type={type}
        defaultValue={defaultValue}
        {...field}
        sx={{
          mt: 'xSmall',
        }}
      />
    </Box>
  );
};
