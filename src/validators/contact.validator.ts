import { body } from 'express-validator';

export const createContactValidator = [
  body('key').isString().notEmpty().withMessage('Key is required'),
  body('phone').isString().notEmpty().withMessage('Phone number is required'),
  body('address').isString().optional(), // Optional field
  body('notes').isString().optional(), // Optional field
];

export const updateContactValidator = [
    body('key').isString().notEmpty().withMessage('Key is required'),
    body('phone').isString().notEmpty().withMessage('Phone number is required'),
    body('address').isString().optional(), // Optional field
    body('notes').isString().optional(), // Optional field
  ];
