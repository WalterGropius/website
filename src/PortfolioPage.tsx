// PortfolioPage.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PortfolioPage() {
  const [items, setItems] = useState([]);

  // Fetch your items from your JSON file on component mount
  useEffect(() => {
    fetch('/portfolio.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {items.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ddd', padding: '1rem' }}>
          <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto' }} />
          <h2>{item.title}</h2>
          <Link to={`/work/${item.id}`}>Learn More</Link>
        </div>
      ))}
    </div>
  );
}

export default PortfolioPage;
