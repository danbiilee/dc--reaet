import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './app';
import GlobalStyle from './utils/globalStyle';
import { themeColor } from './utils/colorStyle';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={themeColor}>
			<GlobalStyle />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
