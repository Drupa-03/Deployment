import React from 'react';

const UserPage = (props) => {
  const user = props.data;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        User Data Based on ID (Static Site Generation)
      </h1>
      <div className="text-center mt-4">
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await (await fetch(`https://dummyjson.com/users`)).json();
  const allUserIds = data.users.map(user => user.id); // Fixed from data.user to data.users

  return {
    paths: allUserIds.map((userId) => ({
      params: { id: `${userId}` }
    })),
    fallback: false, // or true/blocking if you want dynamic fallback
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

export default UserPage;
