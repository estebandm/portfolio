import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter  as Router } from 'react-router-dom'
import { ThemeProvider } from "@material-ui/core/styles";
import './index.css';
import theme from "./Theme";
import Routes from 'Routes';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Router>
        <Routes />
      </Router>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);
