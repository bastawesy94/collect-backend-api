"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const bcrypt_1 = require("bcrypt");
// Hardcoded users
const users = [
    { key: "test-key1", username: "user1", password: (0, bcrypt_1.hashSync)("user1pass", 10) },
    { key: "test-key2", username: "user2", password: (0, bcrypt_1.hashSync)("user2pass", 10) },
];
// Login controller
const login = async (req, res) => {
    const { username, password } = req.body;
    // Find user by username
    const user = users.find((u) => u.username === username);
    // Check if user exists and password is valid
    if (user && (0, bcrypt_1.compareSync)(password, user.password)) {
        const token = jwt.sign({ username: user.username, key: user.key }, process.env.JWT_SECRET, { expiresIn: "1h" });
        return res.status(200).json({ token });
    }
    return res.status(401).json({ message: "Invalid credentials" });
};
exports.login = login;
