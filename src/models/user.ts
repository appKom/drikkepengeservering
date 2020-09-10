import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  rfid: {
    type: String,
    required: true
  },
  coins: {
    type: Number,
    required: true
  }
});

export default mongoose.model('User', UserSchema);