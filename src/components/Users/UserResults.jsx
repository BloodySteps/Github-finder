import React, { useEffect, useState } from 'react'

const UserResults = () => {
  const [users, setusers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => fetchUsers(), [])

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    })

    const data = await response.json()

    setusers(data)
    setIsLoading(false)
  }

  if (!isLoading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map(user => (
          <h1>jj</h1>
        ))}
      </div>
    )
  } else {
    return <h3>Loading ....</h3>
  }
}

export default UserResults
