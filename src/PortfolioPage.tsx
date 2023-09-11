import { useState, useEffect } from 'react';
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

  // Function to shuffle an array using the Fisher-Yates shuffle
  function shuffleArray(array: Item[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
  }

  useEffect(() => {
    fetch('/portfolio.json')
      .then(response => response.json())
      .then((data: Item[]) => {
        shuffleArray(data);  // Shuffle the array before setting it
        setItems(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '5rem',
        margin: '0 auto',
      }}
    >
      {items.map((item, index) => (
        <div key={index} style={{ padding: '1rem' }}>
          <Link to={`/work/${item.id}`}>
            <img src={item.image} style={{ width: '100%', height: '50%', objectFit: 'cover' }} />
            <h2>{item.title}</h2>
            <p>{item.tags}</p>
            <p>{item.date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PortfolioPage;
