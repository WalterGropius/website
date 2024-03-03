// App.js


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
//import HomePage from './HomePage';
//import PortfolioPage from './PortfolioPage';
import ProjectPage from './ProjectPage';
import ReelPage from './ReelPage';
import CVPage from './CVPage';
import ArtPage from './ArtPage';
import Sketchfab from './Sketchfab';
import Proportion from './Proportion';
import HomePageW from './HomePageW';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePageW />} />
        {/* <Route path="/work" element={<PortfolioPage />} /> */}
        <Route path="/work/:id" element={<ProjectPage/>} />
        <Route path="/reel" element={<ReelPage />} />
        <Route path="/about" element={<CVPage />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/3d" element={<Sketchfab />}/>
      <Route path="/proportion" element={<Proportion />} />
      </Routes>
    </Router>
  );
}

export default App;
