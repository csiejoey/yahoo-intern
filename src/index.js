import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Resume from './Resume';

const App = () => (
	<MuiThemeProvider>
		<Resume />
	</MuiThemeProvider>
);

ReactDOM.render(
	<App />, 
	document.getElementById("root")
);
