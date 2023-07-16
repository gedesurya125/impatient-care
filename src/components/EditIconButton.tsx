import React from 'react';

import { ActionButton } from './ActionButton';
import { PenToSquare } from './icon';

export const EditButton = ({ ...props }) => {
  return (
    <ActionButton {...props}>
      <PenToSquare />
    </ActionButton>
  );
};
