import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const UserInfoPage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;

    if (id) {
      async function getUserById(userId) {
        try {
          const response = await fetch(`https://dummyjson.com/users/${userId}`);
          const data = await response.json();
          setUserInfo(data);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }

      getUserById(id);
    }
  }, [router.query.id]); // Watch for 'id' changes

  return (
    <div>
      <h1>User Info Page</h1>
      {userInfo ? (
        <div>
          <p><strong>Name:</strong> {userInfo.firstName} {userInfo.lastName}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Phone:</strong> {userInfo.phone}</p>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default UserInfoPage;
