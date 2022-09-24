import React from 'react';
import Select, { SingleValue } from 'react-select';
import { selectStyles } from './Select.styles';

export type SelectOption = {
  value: string;
  label: string;
};

type Props = {
  defaultValue?: SelectOption;
  options?: SelectOption[];
  onChange?: (newValue: SingleValue<SelectOption>) => void;
};

export const SelectCustom = ({ options, defaultValue, onChange }: Props) => {
  return (
    <Select
      options={options}
      styles={selectStyles}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};
