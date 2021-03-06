import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import UserDetail from './pages/UserDetail'
import NotFound from './pages/NotFound'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import GithubProvider from './context/github/GithubContext'

const App = () => {
  return (
    <GithubProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />

          <div className='container mx-auto px-2'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/user/:login' element={<UserDetail />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </GithubProvider>
  )
}

export default App
