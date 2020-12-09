import { createGlobalStyle } from 'styled-components';

import MundoSansProMediumWoff from './MundoSansPro-Medium.woff';
import MundoSansProMediumWoff2 from './MundoSansPro-Medium.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'MundoSansPro-Medium';
        src: local('MundoSansPro-Medium'), local('MundoSansPro-Medium'),
        url(${MundoSansProMediumWoff2}) format('woff2'),
        url(${MundoSansProMediumWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
