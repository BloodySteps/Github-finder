import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='p-10 footer bg-neutral text-neutral-content place-items-center'>
      <p className='text-center text-lg'>
        Copyright &copy; {year} All right reserved
      </p>
    </div>
  )
}

export default Footer
