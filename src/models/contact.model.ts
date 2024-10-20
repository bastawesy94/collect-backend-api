// src/models/contact.ts
import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
  key: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  notes: { type: String },
  userKey: { type: String, required: true }, // Association with User
});

export const Contact = model('Contact', contactSchema);
