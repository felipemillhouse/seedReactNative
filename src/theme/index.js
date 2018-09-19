import createTheme from 'styled-components-theme';
import light from './light';

const theme = createTheme(...Object.keys(light));

export default theme;
