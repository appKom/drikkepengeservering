import mongoose from 'mongoose';

export const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;



mongoose.connect(
  MONGO_URL,
  () => console.log(`Connected to database ${MONGO_DB} at ${MONGO_HOSTNAME}:${MONGO_PORT}`)
);