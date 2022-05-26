import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Session from './pages/Session';
import Footer from './pages/Footer';
import Partner from './pages/Partner';
import Career from './pages/Career';


function App() {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/session' element={<Session />} />
          <Route path='/career' element={<Career />} />
          <Route path='/partner' element={<Partner />} />
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
