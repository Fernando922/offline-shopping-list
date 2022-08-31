import React from 'react';
import { Input } from './styles';
import { Props } from './types';

const MainInput = ({ ...rest }: Props) => {
  return <Input {...rest} />;
};

export { MainInput };
