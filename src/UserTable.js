import React from "react";

const UserTable = ({ users }) => {
  return (
    <table border="1" cellPadding="4" cellSpacing="0">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>City</th>
        <th>Latitude</th>
      </tr>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.address.city}</td>
          <td>{user.address.geo.lat}</td>
        </tr>
      ))}
    </table>
  );
};

export default UserTable;
