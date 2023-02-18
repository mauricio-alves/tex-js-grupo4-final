const app = require('../app/server');

const Coupon = require('../models/Coupon.js');

const useCoupon = (route) => {
  return (
    app.put(route, async (req, res) => {
      try {
        const coupon = await Coupon.findOne({ coupon: req.params.coupon });

        if (!coupon)
          return res.status(404).json({ message: 'Record not found!' });

        await Coupon.updateOne({ _id: coupon._id, expired: true });

        res.status(200).json({ message: `coupon ${coupon.coupon} is now expired` });
      } catch (error) {
        res.status(500).json({ error: error.message });
      };
    })
  );
};

module.exports = useCoupon;
