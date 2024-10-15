import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "./UserTable";
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <div>
      <h1>user details</h1>
      <UserTable users={users} />
    </div>
  );
};
export default Users;
