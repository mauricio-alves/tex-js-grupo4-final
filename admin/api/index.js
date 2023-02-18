// ====== environment variables ======
require('dotenv').config();


// ============ database ============
require('./database/conn');


// ========== custom routes ==========

// get coupons
require('./routes/getCoupons')('/coupons');

// create coupon
require('./routes/createCoupon')('/coupons');

// delete coupon
require('./routes/deleteCoupons')('/coupons');

// use coupon
require('./routes/useCoupon')('/coupons/:coupon');

// check coupon
require('./routes/checkCoupon')('/coupons/:coupon');
