// pages/hello/[username].js
import React from 'react'
import { useRouter } from 'next/router'

const SettingComponent = () => {
  const router = useRouter()
  

  return (
    <div>
      <h1>Welcome, {router.query.username}</h1>
      <button onClick={e=>router.push("/")}>Go to home</button>
    </div>
  )
}

export default SettingComponent
