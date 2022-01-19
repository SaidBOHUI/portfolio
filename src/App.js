import React from 'react';
import Navbar from './components/Navbar.jsx';
import {createGlobalStyle} from 'styled-components'

const App = () => {
  return (
    <>
    <GlobalStyle />
      <Navbar />
    </>
  )
};
const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  background: #2c3e50;
  font-family: 'Open Sans', 'sans-serif';
  overflow-x:hidden;
}
`




// const Body = styled.div`
// 	font-family: 'Open Sans', 'sans-serif';
// 	background: #2c3e50;
//   margin:0
// `


export default App;