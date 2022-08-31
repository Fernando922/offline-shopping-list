import React from 'react';
import { TextInput } from 'react-native';
import { Input } from './styles';
import { Props } from './types';

const MainInput = React.forwardRef<TextInput, Props>(({ ...rest }, ref) => (
  <Input ref={ref} {...rest} />
));

export { MainInput };
