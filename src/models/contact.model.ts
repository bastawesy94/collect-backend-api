import { Schema, model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const contactSchema = new Schema({
  key: { type: String, required: true, default: uuidv4, unique: true },
  phone: { type: String, required: true },
  address: { type: String },
  notes: { type: String },
  userKey: { type: String, required: true },
});

export const Contact = model("Contact", contactSchema);
