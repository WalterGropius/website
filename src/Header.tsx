// Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    
  
      <nav >
        <Link to="/">Ëzenbauhaus</Link>
        <Link to="/about">about</Link>
        <Link to="/reel">reel</Link>
        <Link to="/work">work</Link>
        <Link to="/art">art</Link>
        <Link to="/3d">3d</Link>
        <a href="http://instagram.com/tra5her_sk8"target="_blank" rel="noopener noreferrer">ig</a>
        <a href="http://facebook.com/ezbawa"target="_blank" rel="noopener noreferrer">fb</a>
      </nav>
  
  );
}

export default Header;
