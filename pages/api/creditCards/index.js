import dbConnect from '../../../utils/dbConnect';
import CreditCard from '../../../models/creditCard';

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const creditCards = await CreditCard.find({});

        res.status(200).json({ success: true, data: creditCards });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const newCreditCard = await CreditCard.create(req.body);

        res.status(201).json({ success: true, data: newCreditCard });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
