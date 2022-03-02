import React from 'react';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import {createGlobalStyle} from 'styled-components'
import Experiences from './components/Experiences.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <>
    <GlobalStyle />
      <Navbar />
      <About />
      <Experiences />
      <Contact />
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