import React from 'react'
import { useFindManyUser } from '~/lib/hooks'

function AppPage() {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useFindManyUser()
  return (
    // <div>AppPage</div>

    <>
      <h1>Users</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul>
          {users?.map((user) => (
            <li key={user.id}> - {user.email} </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default AppPage