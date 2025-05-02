import React from 'react'
import { usePathname } from 'next/navigation';

const UserPage = (props) => {
  const pathname = usePathname()
  console.log("props",props)
  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Server side rendering</h1>
      <h1 className="font-bold text-2xl text-center">pathname:{pathname}</h1>
      {
        props.data.users.map(user => <li className="mt-5" key={user.id}>{user.firstName}</li>)
      }
    </div>
  );
};

export const getServerSideProps = async () =>{
  const data = await (await fetch ("https://dummyjson.com/users")).json();
  return{
    props:{
      data,
    },
  };
};

export default UserPage
