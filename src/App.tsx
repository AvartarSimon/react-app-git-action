import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';

function App() {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  console.log("!!! this is from app")
  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }} className='App'>
      <div className='flex'>
        <NavBar selectedKey={selectedKey} setSelectedKey={setSelectedKey} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </div>

    </div>
  )
}

export default App
