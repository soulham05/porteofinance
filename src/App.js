import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Login from "./Login";
import Dashboard from "./Dashboard";
import RapportCa from "./RapportCa";
import PnlSynth from "./PnlSynth";
import PnlAnnuel from "./PnlAnnuel";
import PnlMois from "./PnlMois";
import PnlDetail from "./PnlDetail";
import PnlTree from "./PnlTree";
import Cashflow from "./Cashflow";
import CashflowAnalysis from "./CashflowAnalysis";
import PmtFourn from "./PmtFourn";
import Avances from "./Avances";
import GlCompta from "./GlCompta";
import BalCompta from "./BalCompta";
import PrivateRoute from "./PrivateRoute";
import AdminPanel from "./AdminPanel";

const App = () => {
  const [user, setUser] = useState(null); // Stocker les infos utilisateur (email, rôle, pages autorisées)

  const menuItems = [
    { path: "/dashboard", name: "Dashboard", allowedRole: "dashboard" },
    { path: "/rapport-ca", name: "Rapport CA", allowedRole: "rapport-ca" },
    { path: "/pnl-synth", name: "P&L synthétique", allowedRole: "pnl-synth" },
    { path: "/pnl-annuel", name: "P&L annuel", allowedRole: "pnl-annuel" },
    { path: "/pnl-mois", name: "P&L mensuel", allowedRole: "pnl-mois" },
    { path: "/pnl-detail", name: "P&L détaillé", allowedRole: "pnl-detail" },
    { path: "/pnl-tree", name: "Arborescence P&L", allowedRole: "pnl-tree" },
    { path: "/tft", name: "Tableau des Flux de trésorerie", allowedRole: "cashflow-tft" },
    { path: "/analyse-treso", name: "Analyse trésorerie", allowedRole: "cashflow-analyse" },
    { path: "/pmt-fourn", name: "Paiements fournisseurs", allowedRole: "paiements-fournisseurs" },
    { path: "/avances", name: "Avances de Fonds", allowedRole: "avances-fonds" },
    { path: "/gl-compta", name: "Grand livre comptable", allowedRole: "gl-compta" },
    { path: "/bal-compta", name: "Balance comptable", allowedRole: "bal-compta" },
    { path: "/admin", name: "Console d'administration", alloweddRole: "admin"}
  ];

  const getAllowedMenuItems = () =>
    user
      ? menuItems.filter((item) => user.allowedPages.includes(item.allowedRole))
      : [];

  return (
    <Router>
      {user ? (
        <div className="app-container">
          <Sidebar menuItems={getAllowedMenuItems()} />
          <div className="main-content">
            <Routes>
              <Route path="/dashboard" element={<PrivateRoute user={user} requiredRole="dashboard"><Dashboard /></PrivateRoute>} />
              <Route path="/rapport-ca" element={<PrivateRoute user={user} requiredRole="rapport-ca"><RapportCa /></PrivateRoute>} />
              <Route path="/pnl-synth" element={<PrivateRoute user={user} requiredRole="pnl-synth"><PnlSynth /></PrivateRoute>} />
              <Route path="/pnl-annuel" element={<PrivateRoute user={user} requiredRole="pnl-annuel"><PnlAnnuel /></PrivateRoute>} />
              <Route path="/pnl-mois" element={<PrivateRoute user={user} requiredRole="pnl-mois"><PnlMois /></PrivateRoute>} />
              <Route path="/pnl-detail" element={<PrivateRoute user={user} requiredRole="pnl-detail"><PnlDetail /></PrivateRoute>} />
              <Route path="/pnl-tree" element={<PrivateRoute user={user} requiredRole="pnl-tree"><PnlTree /></PrivateRoute>} />
              <Route path="/tft" element={<PrivateRoute user={user} requiredRole="cashflow-tft"><Cashflow /></PrivateRoute>} />
              <Route path="/analyse-treso" element={<PrivateRoute user={user} requiredRole="cashflow-analyse"><CashflowAnalysis /></PrivateRoute>} />
              <Route path="/pmt-fourn" element={<PrivateRoute user={user} requiredRole="paiements-fournisseurs"><PmtFourn /></PrivateRoute>} />
              <Route path="/avances" element={<PrivateRoute user={user} requiredRole="avances-fonds"><Avances /></PrivateRoute>} />
              <Route path="/gl-compta" element={<PrivateRoute user={user} requiredRole="gl-compta"><GlCompta /></PrivateRoute>} />
              <Route path="/bal-compta" element={<PrivateRoute user={user} requiredRole="bal-compta"><BalCompta /></PrivateRoute>} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
              <Route path="/admin" element={<PrivateRoute user={user} requiredRole="admin"><AdminPanel /></PrivateRoute>} />
            </Routes>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;