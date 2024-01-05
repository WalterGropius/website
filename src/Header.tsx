import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  // Style for the text color based on the current route
  const linkStyle = {
    color: location.pathname === '/' ? 'black' : 'white',
  };

  // Function to determine the font weight based on the current route
  const fontWeight = (route: string) => {
    return location.pathname === route ? 'bold' : 'normal';
  };

  return (
    <nav>
      <Link to="/" style={{ ...linkStyle, fontWeight: fontWeight('/') }}>Ëzenbauhaus</Link>
      <Link to="/about" style={{ ...linkStyle, fontWeight: fontWeight('/about') }}>about</Link>
      <Link to="/reel" style={{ ...linkStyle, fontWeight: fontWeight('/reel') }}>reel</Link>
      <Link to="/work" style={{ ...linkStyle, fontWeight: fontWeight('/work') }}>work</Link>
      <Link to="/art" style={{ ...linkStyle, fontWeight: fontWeight('/art') }}>art</Link>
      <Link to="/3d" style={{ ...linkStyle, fontWeight: fontWeight('/3d') }}>3d</Link>
      <a href="http://instagram.com/tra5her_sk8" target="_blank" rel="noopener noreferrer" style={linkStyle}>ig</a>
      <a href="http://facebook.com/ezbawa" target="_blank" rel="noopener noreferrer" style={linkStyle}>fb</a>
    </nav>
  );
}

export default Header;
