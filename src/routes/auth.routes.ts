import { Router } from "express";
import { loginValidator } from "../validators/login.validator.ts";
import { login } from "../controllers/login.controller";
import { validate } from "../middlewares/validate";

const authRoutes = Router();

// Login route
authRoutes.post("/", loginValidator, validate, login as any); // Ensure the return type of `login` is properly handled

export default authRoutes; // Ensure you're using default export
