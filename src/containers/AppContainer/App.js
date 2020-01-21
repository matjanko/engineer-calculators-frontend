import React from 'react';

import './App.css';
import theme from '../../styles/theme'
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import FooterContainer from '../FooterContainer/FooterContainer';
import { ThemeProvider } from '@material-ui/core/styles';
import PageContainer from '../PageContainer/PageContainer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HeaderContainer/>
        <div className="App-main">
          <PageContainer/>
        </div>
        <FooterContainer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
