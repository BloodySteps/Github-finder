import React, { useState } from 'react'
import { useGithubContext } from '../../context/github/GithubContext'
import { searchUsers } from '../../context/github/GithubActions'

const UserSearch = () => {
  const [text, setText] = useState('')
  const { dispatch, users } = useGithubContext()

  const handleSubmit = async e => {
    e.preventDefault()

    if (text === '') {
      alert('please enter something')
    } else {
      dispatch({ type: 'SET_LOADING' })
      const items = await searchUsers(text)
      dispatch({ type: 'GET_USERS', payload: items })

      setText('')
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <div className='relative'>
            <input
              type='text'
              className='w-full pr-40 bg-gray-200 input input-lg text-black'
              placeholder='Search'
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button
              type='submit'
              className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
            >
              Go
            </button>
          </div>
        </div>
      </form>
      <div>
        {users.length ? (
          <button
            className='btn btn-ghost btn-lg'
            onClick={() => dispatch({ type: 'CLEAR_RESULTS' })}
          >
            Clear
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default UserSearch
