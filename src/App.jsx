import './App.css';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Stakes from './pages/Stakes';
import Navbar from './components/Navbar';
import ProjectDetail from './pages/ProjectDetail';

const App = () => {

  return (
    <div className='w-full lg:w-[88%] bg-midnight my-0 mx-auto'>
      <Router>
        <Navbar />  
        <Routes>
          <Route path="/" exact element={<Projects />} />
          <Route path="/stakes" element={<Stakes />} />
          <Route path='/project/:id' element={<ProjectDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
