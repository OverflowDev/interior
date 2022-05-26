import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Session from './pages/Session';


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/session' element={<Session />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
