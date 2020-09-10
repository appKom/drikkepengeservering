import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  coins: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Transaction', TransactionSchema);