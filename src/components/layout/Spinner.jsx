import React from 'react'
import spinner from './assets/spinner.gif'

export default function Spinner() {
  return (
    <div className='flex w-100 justify-center items-center'>
      <img src={spinner} alt='loader not found' className='mx-auto w-40' />
    </div>
  )
}
