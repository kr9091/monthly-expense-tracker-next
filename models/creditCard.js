const mongoose = require('mongoose');

const creditCardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    balance: {
      type: Number,
      required: [true, 'Please add a balance'],
    },
    apr: {
      type: Number,
      required: [true, 'Please enter interest rate'],
    },
    dueDate: {
      type: Date,
      default: new Date(),
      required: [true, 'Please enter monthly due date'],
    },
    paid: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

module.exports =
  mongoose.models.CreditCard || mongoose.model('CreditCard', creditCardSchema);
