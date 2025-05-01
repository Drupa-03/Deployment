// pages/hello/[username].js
import React from 'react'
import { useRouter } from 'next/router'

const UsernamePage = () => {
  const {query} = useRouter()
  

  return (
    <div>
      <h1>This is {query.username} dynamic routing page</h1>
    </div>
  )
}

export default UsernamePage
