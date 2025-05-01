import React from 'react'
import {useSession, signIn, signOut} from "next-auth/react"

function authentication() {
    const session = useSession()

    if(session.data===null){
        return <button className="bg-black text-white rounded-lg font-semibold text-center justify-center px-2 py-2" onClick={signIn}>Login</button>;
    }
  return (
    <div className="text-center justify-center">
      <h1 className="text-bold  text-2xl">Welcome with github authentication {session?.data?.user?.name}</h1>
      <button className="bg-black text-white rounded-lg font-semibold px-2 py-2 mt-10" onClick={signOut}>Logout</button>
    </div>
  )
}

export default authentication

