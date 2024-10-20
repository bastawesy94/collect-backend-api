// src/app.ts
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import contactRoutes from "./routes/contact.routes";

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3030" }));

// Routes
app.use("/api/contacts", contactRoutes);
app.use("/api/login", authRoutes);

export default app;
