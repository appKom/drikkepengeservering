import joi from 'joi';

interface Transaction {
  transactionId: String,
  userId: String,
  coins: number,
  date: Date
}

const transactionSchema = joi.object({
  transactionId: joi.string().required(),
  userId: joi.string().required(),
  coins: joi.number().required(),
  date: joi.date().required()
});

const validateTransaction = (transaction: Transaction) => transactionSchema.validate(transaction);

export default validateTransaction;