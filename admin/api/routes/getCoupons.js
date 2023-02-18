const app = require('../app/server');

const Coupon = require('../models/Coupon.js');

const getCoupons = (route) => {
  return (
    app.get(route, async (_, res) => {
      try {
        const coupons = await Coupon.find();

        if (!coupons)
          return res.status(404).json({ message: 'Record not found!' });

        res.status(200).json(coupons);
      } catch (error) {
        res.status(500).json({ error: error.message });
      };
    })
  );
};

module.exports = getCoupons;
