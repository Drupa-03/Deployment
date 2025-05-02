import React from 'react'
import { usePathname } from 'next/navigation';

const UsersPage = (props) => {
  const pathname = usePathname()
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Static Site Generation</h1>
      <div className="font-bold text-2xl text-center">path:{pathname}</div>
      {
        props.data.users.map(user => <li className="mt-5" key={user.id}>{user.firstName}</li>)
      }
    </div>
  )
}  

export const getStaticProps = async () =>{
    const data = await (await fetch ("https://dummyjson.com/users")).json();
    
    return{
      props:{
        data,
      },
    };
  };

export default UsersPage
