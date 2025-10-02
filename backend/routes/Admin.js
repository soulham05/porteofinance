const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Middleware pour vérifier le rôle admin
const isAdmin = async (req, res, next) => {
  const { role } = req.body.user;
  if (role !== "admin") return res.status(403).json({ message: "Accès refusé" });
  next();
};

// Ajouter un utilisateur
router.post("/add-user", isAdmin, async (req, res) => {
  const { email, password, role, allowedPages } = req.body;

  try {
    const newUser = new User({ email, password, role, allowedPages });
    await newUser.save();
    res.status(201).json({ message: "Utilisateur créé avec succès", newUser });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
});

// Récupérer la liste des utilisateurs
router.get("/users", isAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
});

module.exports = router;