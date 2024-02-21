import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import ManropeRegularWoffTwo from './shared/fonts/Manrope-Regular.woff2';
import ManropeRegularWoff from './shared/fonts/Manrope-Regular.woff';

import ManropeMediumWoffTwo from './shared/fonts/Manrope-Medium.woff2';
import ManropeMediumWoff from './shared/fonts/Manrope-Medium.woff';

import ManropeSemiBoldWoffTwo from './shared/fonts/Manrope-Semibold.woff2';
import ManropeSemiBoldWoff from './shared/fonts/Manrope-Semibold.woff';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Manrope';
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: local('Manrope Regular'), 
        local('Manrope-Regular'),
    url(${ManropeRegularWoffTwo}) format('woff2'),
    url(${ManropeRegularWoff}) format('woff');
}

@font-face {
  font-family: 'Manrope';
  font-weight: 500;
  font-style: normal;
  font-display: swap;
  src: local('Manrope Medium'), 
        local('Manrope-Medium'),
    url(${ManropeMediumWoffTwo}) format('woff2'),
    url(${ManropeMediumWoff}) format('woff');
}

@font-face {
  font-family: 'Manrope';
  font-weight: 600;
  font-style: normal;
  font-display: swap;
  src: local('Manrope Semi Bold'), 
        local('Manrope-Semi-Bold'),
    url(${ManropeSemiBoldWoffTwo}) format('woff2'),
    url(${ManropeSemiBoldWoff}) format('woff');
}


body {
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-color: #f8f8f8;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  margin: 0;
	padding: 0;
	list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;
