import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

type Item = {
  id: number;
  image: string;
  title: string;
  description: string;
  details: string;
  link: string;
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
    <div>
      <img src={item.image} alt={item.title} />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      {/* More item details here */}
    </div>
  );
}

export default ProjectPage;
