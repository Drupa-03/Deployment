// pages/hello/[username].js
import React from 'react'
import { useRouter } from 'next/router'

const setting = () => {
  const router = useRouter()
  

  return (
    <div>
      <h1>This is {router.query.username} setting page</h1>
      <button onClick={e=>router.push("/")}>Go to home</button>
    </div>
  )
}

export default setting
