import styled from 'styled-components';
import theme from 'theme/light';
import { Title } from 'react-native-paper';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.background};
`;
const ViewContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};
`;
const PaperText = styled(Title)`
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.thin};
`;

export { Container, ViewContainer, PaperText };
