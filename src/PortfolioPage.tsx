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
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for search term

  // Fisher-Yates shuffle
  function shuffleArray(array: Item[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    fetch('/portfolio.json')
      .then(response => response.json())
      .then((data: Item[]) => {
        shuffleArray(data);
        setItems(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.tags.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.date.includes(searchTerm)
  ); // Filtering items based on the search term

  return (
    <div><br/><br/><br/>
      {/* Search Bar */}
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        className='search-bar'
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '5rem',
          margin: '0 auto',
        }}
      >
        {filteredItems.map((item, index) => (
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
    </div>
  );
}

export default PortfolioPage;
