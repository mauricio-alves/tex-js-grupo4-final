const mongoose = require('mongoose');

const Coupon = mongoose.model('Coupon', {
  coupon: String,
  date: Date,
  expired: Boolean
});

module.exports = Coupon;
