import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

function ProjectPage() {
  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    fetch(`/portfolio.json`)
      .then(response => response.json())
      .then(data => setItem(data.find((item: Item) => item.id === Number(id))))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return (
    <div
      style={{
        width: '100%', // Set the width to 100% to make it full-width
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center-align the content horizontally
      }}
    >
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <img src={item.image} style={{ maxWidth: '100%', height: 'auto' }} />
      </a>
      <h1>{item.title}</h1>
      <p>{item.date}</p>
      <p>{item.description}</p>
      <p>{item.tags}</p>
      <Link to={"/work"}>Back</Link>
      {/* More item details here */}
    </div>
  );
}

export default ProjectPage;