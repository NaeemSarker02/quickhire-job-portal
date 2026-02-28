const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");

const app = express();

// ─── CORS — open for all origins ──────────────────────
app.use(cors());
app.use(express.json());

// ─── Health check ─────────────────────────────────────
app.get("/", (req, res) => {
  res.json({ success: true, message: "QuickHire API is running 🚀" });
});

// ─── Routes ───────────────────────────────────────────
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

// ─── 404 ──────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// ─── Global error handler ─────────────────────────────
app.use(errorHandler);

module.exports = app;