import React from "react";
import NavBar from "./../Components/NavBar";
const users = ({ users }) => {
  return (
    <div>
      <NavBar />
      <h1>Users list</h1>
      <div>
        {users.map((user) => {
          return (
            <div className="userId" key={user.id}>
              {user.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default users;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
};
