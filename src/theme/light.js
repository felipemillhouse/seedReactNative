import { scale } from 'utils/scale';

const FontBaseValue = scale(18);

const standard = {
  dark: false,
  roundness: 2,
  padding: '15px',
  margin: '15px',
  colors: {
    primary: '#F05523',
    primary2: '#53C9FF',
    primary3: '#4A4A4A',
    accent: '#feb401',
    background: '#f2f2f2',
    darkBackground: '#e5e5e5',
    inverseBackground: '#4A4A4A',
    paper: '#fff',
    error: '#ed1c4d',
    success: '#3bd555',
    info: '#53C9FF',
    text: '#4A4A4A',
    inverseText: '#f2f2f2',
    disabled: '#cacaca',
    placeholder: '#cacaca',
    border: '#cacaca',
  },
  fonts: {
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    light: 'Roboto-Light',
    thin: 'Roboto-Light',
  },
  size: {
    h0: scale(32),
    h1: scale(26),
    h2: scale(24),
    h3: scale(20),
    h4: scale(18),
    h5: scale(16),
    h6: scale(15),
    p1: scale(16),
    p2: scale(15),
    p3: scale(14),
    p4: scale(13),
    p5: scale(12),
    p6: scale(11),
    xxsmall: FontBaseValue * 0.3,
    xsmall: FontBaseValue * 0.5,
    small: FontBaseValue * 0.8,
    base: FontBaseValue,
    medium: FontBaseValue * 1.1,
    large: FontBaseValue * 1.2,
    xlarge: FontBaseValue * 1.4,
    xxlarge: FontBaseValue * 1.6,
  },
};

export default standard;