import { CSSProperties } from 'react';
import { GroupBase, StylesConfig } from 'react-select';
import { SelectOption } from './Select';

export const selectStyles: StylesConfig<
  SelectOption,
  false,
  GroupBase<SelectOption>
> = {
  container: (provided: any) => ({
    ...provided,
  }),
  control: (provided: any) => ({
    ...provided,
    borderRadius: 0,
    border: '1px solid #000',
  }),
};
