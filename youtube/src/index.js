import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalStyle from './utils/globalStyle';

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
