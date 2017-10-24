const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const calendarRoutes = require("./calendar"); 
const noteRoutes = require("./note");

// Auth routes
router.use("/auth", authRoutes);
router.use("/calendar", calendarRoutes);
router.use("/note", noteRoutes);

module.exports = router;
