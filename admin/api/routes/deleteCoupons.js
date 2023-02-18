const app = require('../app/server');

const Coupon = require('../models/Coupon.js');

const deleteCoupons = (route) => {
  return (
    app.delete(route, async (_, res) => {
      try {
        await Coupon.deleteMany();

        res.status(200).json({ message: 'coupons deleted' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      };
    })
  );
};

module.exports = deleteCoupons;
