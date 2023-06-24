import React from 'react';
import { ActionButton } from './ActionButton';
import { TrashCan } from './icon';

export const DeleteButton = ({ ...props }) => {
  return (
    <ActionButton {...props}>
      <TrashCan />
    </ActionButton>
  );
};
