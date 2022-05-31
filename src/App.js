import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { BlogProvider } from './context/BlogContext';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './components/blog/Blog';
import Session from './pages/Session';
import Partner from './pages/Partner';
import Career from './pages/Career';
import Project from './pages/projects/Project'


function App() {
  return (
    <div className='overflow-hidden'>
      {/* <BlogProvider> */}
        <Router>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/session' element={<Session />} />
            <Route path='/career' element={<Career />} />
            <Route path='/partner' element={<Partner />} />
            <Route path='/project/:projectName' element={<Project />} />
          </Routes>

          <Footer />
        </Router>
      {/* </BlogProvider> */}

    </div>
  );
}

export default App;
