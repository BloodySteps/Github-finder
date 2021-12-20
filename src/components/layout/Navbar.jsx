import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = ({ title }) => {
  return (
    <div className='navbar mb-2 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <Link to='/'>
            <span className='text-lg font-bold flex items-center space-x-2'>
              <FaGithub />
              <span>{title}</span>
            </span>
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost'>
              Home
            </Link>
            <Link to='/about' className='btn btn-ghost'>
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  title: 'Github Finder',
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
