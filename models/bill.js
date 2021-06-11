const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    cost: {
      type: String,
      required: [true, 'Please add the monthly cost'],
    },
    dueDate: {
      type: Date,
      default: new Date(),
      required: [true, 'Please enter monthly due date'],
    },
    category: {
      type: String,
      default: 'No Category',
      required: [true, 'Please enter a category'],
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

module.exports = mongoose.models.Bill || mongoose.model('Bill', billSchema);
