import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type Item = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  link: string;
  tags: string;
};

function PortfolioPage() {
  const [items, setItems] = useState<Item[]>([]);

  // Fetch your items from your JSON file on component mount
  useEffect(() => {
    fetch('/portfolio.json')
      .then(response => response.json())
      .then((data: Item[]) => setItems(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {items.map((item, index) => (
        <div key={index} style={{ padding: '1rem' }}>
          
          <Link to={`/work/${item.id}`}><img src={item.image} style={{ width: '100%', height: 'auto' }} />
          <h2>{item.title}</h2>
          <p>{item.description}</p></Link>
        </div>
      ))}
    </div>
  );
}

export default PortfolioPage;
