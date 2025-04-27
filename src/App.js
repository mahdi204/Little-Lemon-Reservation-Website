import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom'; // 👈 add this

function App() {
  const location = useLocation(); // 👈 get the current URL

  const hideMenuAndFooter = location.pathname === '/booking'; // 👈 if current path is /booking

  return (
    <>
      <Nav />
      <Main />
      {!hideMenuAndFooter && <Menu />}  {/* 👈 if NOT booking page, show Menu */}
      {!hideMenuAndFooter && <Footer />} {/* 👈 if NOT booking page, show Footer */}
    </>
  );
}

export default App;
