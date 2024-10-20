"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// src/middlewares/auth.middleware.ts
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token)
        return res.status(401).json({ message: 'Unauthorized' });
    jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err)
            return res.status(401).json({ message: 'Unauthorized' });
        // Type assertion to extend the Request type
        req.user = {
            key: decoded.key, // Use any to bypass the error temporarily
            username: decoded.username,
        };
        next();
    });
};
exports.authMiddleware = authMiddleware;
