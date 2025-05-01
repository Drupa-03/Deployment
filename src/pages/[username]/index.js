// pages/hello/[username].js
import React from 'react'
import { useRouter } from 'next/router'

const Setting = () => {
  const router = useRouter()
  

  return (
    <div>
      <h1>This is {router.query.username} index page</h1>
      {/* <button onClick={e=>router.push(`/${router.query.username}/setting`)}>go to setting page</button> */}

      <button onClick={(e)=>router.push({
        pathname:"/[username]/setting",
        query: {username:router.query.username},
      })}>go to setting page</button>
    </div>
  )
}

export default Setting
