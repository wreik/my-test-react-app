import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'

import Layout from './components/layout';
/* Import pages here */ 
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
    </Routes>
    </BrowserRouter> 
  )
}

export default App
