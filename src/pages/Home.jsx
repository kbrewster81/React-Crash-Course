import React, { useEffect, useState } from "react";
import axios from "axios";
import Users from "../pages/Users";
import { Link } from "react-router-dom";
function Home() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUsers(data);
    console.log(data);
  }

  useEffect(() => {
      fetchUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Link to={`/users/${users.id}`} key={user.id}>
          <Users
            id={user.id}
            name={user.name}
            email={user.email}
            username={user.username}
          />
        </Link>
      ))}
    </div>
  );
}

export default Home;
