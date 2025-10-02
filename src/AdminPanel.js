import React, { useState, useEffect } from "react";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => setError("Erreur de chargement"));
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#121212", color: "#fff" }}>
      <h1>Console d'administration</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <table style={{ width: "100%", color: "#fff", border: "1px solid #444" }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Rôle</th>
            <th>Pages Autorisées</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.allowedPages.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;