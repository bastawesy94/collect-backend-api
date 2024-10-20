import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { LoginDto } from '../dtos/login.DTO';
import { compareSync, hashSync } from 'bcrypt';

// Hardcoded users
const users = [
  { key: 'test-key1', username: 'user1', password: hashSync('user1pass', 10) },
  { key: 'test-key2', username: 'user2', password: hashSync('user2pass', 10) },
];

// Login controller
export const login = async (req: Request, res: Response): Promise<Response<void>> => {
  const { username, password }: LoginDto = req.body;

  // Find user by username
  const user = users.find(u => u.username === username);

  // Check if user exists and password is valid
  if (user && compareSync(password, user.password)) {
    const token = jwt.sign({ username: user.username, key: user.key }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};
