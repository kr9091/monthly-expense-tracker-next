import dbConnect from '../../../utils/dbConnect';
import CreditCard from '../../../models/creditCard';

dbConnect();

export default async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'GET':
      try {
        const creditCard = await CreditCard.findById(id);

        if (!CreditCard) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: creditCard });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const creditCard = await CreditCard.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!CreditCard) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: creditCard });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedCreditCard = await CreditCard.deleteOne({ _id: id });

        if (!deletedCreditCard) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
