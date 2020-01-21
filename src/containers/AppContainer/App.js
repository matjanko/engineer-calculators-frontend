import React from 'react';

import './App.css';
import theme from '../../styles/theme'
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import FooterContainer from '../FooterContainer/FooterContainer';
import { ThemeProvider } from '@material-ui/core/styles';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HeaderContainer/>
        <div className="App-main">

        </div>
        <FooterContainer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
