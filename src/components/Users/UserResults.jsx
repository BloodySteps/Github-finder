import React, { useEffect } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import { useGithubContext } from '../../context/github/GithubContext'

const UserResults = () => {
  const { users, isLoading } = useGithubContext()

  if (!isLoading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
