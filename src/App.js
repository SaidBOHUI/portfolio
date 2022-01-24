import React from 'react';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import {createGlobalStyle} from 'styled-components'

const App = () => {
  return (
    <>
    <GlobalStyle />
      <Navbar />
      <About />
    </>
  )
};
const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  /* background: #2c3e50; */
  	background-color: #B8FAF0;
  font-family: 'Open Sans', 'sans-serif';
  overflow-x:hidden;
}
`


export default App;