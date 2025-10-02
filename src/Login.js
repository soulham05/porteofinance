import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Ajouter du style

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Simuler une base de données d'utilisateurs
  const usersDB = {
    "admin@porteo-group.com": { role: "admin", allowedPages: ["dashboard", "rapport-ca", "pnl-synth", "pnl-annuel", "pnl-mois", "pnl-detail", "pnl-tree", "cashflow-tft", "cashflow-analyse", "paiements-fournisseurs", "avances-fonds", "gl-compta", "bal-compta"] },
    "user@porteo-group.com": { role: "user", allowedPages: ["dashboard", "pnl-detail", "cashflow-tft"] },
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = usersDB[email];
    if (user && password === "password123@2025*") {
      setUser({ email, role: user.role, allowedPages: user.allowedPages });
      navigate("/dashboard");
    } else {
      setError("Email ou mot de passe incorrect.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Connexion</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email professionnel</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;