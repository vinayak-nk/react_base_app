import React from 'react'
import { Outlet, useParams, useSearchParams } from 'react-router-dom'

export const UserDetails = () => {
  const params = useParams()

  return <p>User details page: {params.id}</p>
}

export const AdminUser = () => <p>Admin User</p>

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
    <div>
      Users
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      <p>{showActiveUsers ? 'Active Users' : 'All users'}</p>
    </div>
  )
}

export default Users