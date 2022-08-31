import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Input = styled(TextInput)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.font};
  border-radius: 8px;
  padding: 16px;
  font-size: 16px;
`;
