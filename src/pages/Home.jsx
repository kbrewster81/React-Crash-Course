import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../componets/Users.jsx";
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

  const pixels = "3px";

  return (
    <div>
      {users.map((user) => (
        <User />
      ))}
    </div>
  );
}

export default Home;
