// import { useState, useEffect } from "react";
// import Link from "next/link";

// const Index = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     async function fetchUsers() {
//       try {
//         const response = await fetch("https://dummyjson.com/users");
//         const data = await response.json();
//         setUsers(data.users); // 'users' is a key in the returned JSON
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     }

//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map(user => (
//           <Link href={`/user/${user.id}`} key={user.id}>
//             <div>{user.firstName}</div>
//           </Link>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Index;

import Link from "next/link";
import useSWR from "swr";
import { usePathname } from "next/navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const UserPage = () => {
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);

  const pathname = usePathname()

  if (error) {
    return <h1>Error happened!</h1>;
  }

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1 className="font-bold text-2xl text-center">Client side rendering</h1>
      <div className="font-bold text-2xl text-center">path:{pathname}</div>
      {data.users.map((user) => (
        <Link href={`/user/${user.id}`} key={user.id}>
          <div className="mt-5">{user.firstName}</div>
        </Link>
      ))}
      
    </div>
  );
};

export default UserPage;

