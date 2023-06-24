import React from 'react';

import { Radio, Label, Box, Button, Paragraph } from '@gedesurya125/surya-ui';
import { useField } from 'formik';
import { OptionType } from 'types';

// Types
import { ThemeUIStyleObject } from 'theme-ui';

interface RadioFieldProps {
  name: string;
  label: string;
  value: any;
}

export const RadioField = ({ name, label, value }: RadioFieldProps) => {
  const [field, meta, helper] = useField(name);

  console.log('this is the name', name, field.value);

  return (
    <Label
      htmlFor={name + value}
      className="radio-field"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 'max-content',
      }}
    >
      <Radio
        id={name + value}
        {...field}
        checked={field.value === value}
        value={value}
        onChange={() => {
          helper.setValue(value);
          helper.setTouched(true);
        }}
      />
      <Box
        as="span"
        sx={{
          ml: '0.4rem',
        }}
      >
        {label}
      </Box>
    </Label>
  );
};

interface RadioGroup {
  name: string;
  options?: OptionType[];
  sx?: ThemeUIStyleObject;
  label?: string;
}

export const RadioGroup = ({ name, options, label, sx }: RadioGroup) => {
  return (
    <Box className="radio-group" sx={{ ...sx }}>
      <Paragraph variant="forms.label">{label}</Paragraph>
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
          mt: 'xSmall',
        }}
        className="radio-input-group"
      >
        {options?.map(({ label: radioLabel, value }, index) => {
          return (
            <RadioField
              key={index}
              name={name}
              label={radioLabel}
              value={value}
            />
          );
        })}
      </Box>
    </Box>
  );
};
