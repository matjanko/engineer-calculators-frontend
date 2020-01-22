import React from 'react';

import './App.css';
import theme from '../../styles/theme'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ThemeProvider } from '@material-ui/core/styles';
import Main from '../Main/Main';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <div className="App-main">
          <Main/>
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
