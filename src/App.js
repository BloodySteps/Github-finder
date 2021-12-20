import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />

        <div className='container mx-auto px-2'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
