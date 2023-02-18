const app = require('../app/server');

const Coupon = require('../models/Coupon.js');

const checkCoupon = (route) => {
  return (
    app.get(route, async (req, res) => {
      try {
        const coupon = await Coupon.findOne({ coupon: req.params.coupon });

        if (!coupon)
          return res.status(404).json({ message: 'Record not found!' });

        if (!coupon.expired)
          res.status(200).json({ message: `coupon ${coupon.coupon} is valid` })
        else
          res.status(400).json({ message: `coupon ${coupon.coupon} has expired` })
      } catch (error) {
        res.status(500).json({ error: error.message });
      };
    })
  );
};

module.exports = checkCoupon;
