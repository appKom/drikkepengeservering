// import mongoose from 'mongoose';
import joi from 'joi';

interface User {
  userId: number,
  coins: number,
  createdAt: Date
}

const userSchema = joi.object({
  userId: joi.string().required(),
  coins: joi.number().required(),
  createdAt: joi.date().required()
});

const validateUser = (user: User) => userSchema.validate(user);

export default validateUser;