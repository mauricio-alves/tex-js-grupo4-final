const app = require('../app/server');

const Coupon = require('../models/Coupon.js');
const code = require('../services/createCode');

const createCoupon = (route) => {
  return (
    app.post(route, async (_, res) => {
      try {
        const coupon = code().toUpperCase();

        await Coupon.create({ coupon: coupon, date: new Date(), expired: false })

        res.status(200).json({ message: `coupon created: ${coupon}` });
      } catch (error) {
        res.status(500).json({ error: error.message });
      };
    })
  );
};

module.exports = createCoupon;
