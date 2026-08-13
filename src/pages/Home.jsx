import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../componets/Users.jsx";
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
    setTimeout(() => {
      fetchUsers();
    }, 500);
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Link to={`/${id}`}>
          <User
            key={user.id}
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
