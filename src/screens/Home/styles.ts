import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  align-self: center;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.colors.primaryVariant};
`;

export const Scroll = styled(ScrollView)``;

export const Content = styled.View`
  flex: 1;
  padding-top: 48px;
`;

export const ListItem = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({ theme }) => theme.colors.primaryVariant};
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 8px;
`;

export const ListItemText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
`;
