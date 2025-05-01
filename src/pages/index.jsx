import React from 'react'
import Link from 'next/link';

function Index() {
  return (
    <div className="text-center mt-10">
      <h1 className="font-bold text-2xl mb-8">
        This is my Next.js learning application
      </h1>
      <div className="flex flex-col gap-4 items-center ">
        <Link href="/server/users">
          <span className=" text-bold cursor-pointer text-2xl rounded-lg px-2 py-2">Server Side Rendering</span>
        </Link>
        <Link href="/static/users">
          <span className=" text-bold cursor-pointer text-2xl rounded-lg px-2 py-2">Static Site Generation</span>
        </Link>
        <Link href="/user">
          <span className=" text-bold cursor-pointer text-2xl rounded-lg px-2 py-2">Client Side Rendering </span>
        </Link>
      </div>
    </div>
  )
}

export default Index
