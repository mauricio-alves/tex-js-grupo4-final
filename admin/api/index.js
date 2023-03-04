const { connect } = require('./database/conn');

(async () => {
  await connect();
})();

// accommodations routes
require('./commonMethods/getAllRecords')('/accommodations', 'accommodation');
require('./routes/accommodations/getAccommodationById');
require('./routes/accommodations/createAccommodation');

// banners routes
require('./commonMethods/getAllRecords')('/banners', 'banner');
require('./commonMethods/deleteRecord')('/banners', 'banner');
require('./routes/banners/updateBanner');
require('./routes/banners/createBanner');

// reservations routes
require('./commonMethods/getAllRecords')('/reservations', 'reservation');
require('./routes/reservations/createReservation');
require('./routes/reservations/createCoupon');
require('./commonMethods/getAllRecords')('/reservations/services', 'reservationServices');
require('./routes/reservations/createReservationServices');

// users routes
require('./commonMethods/getAllRecords')('/users', 'user');
require('./routes/users/createUser');
require('./routes/users/createPermission');
require('./routes/users/createAddress');
require('./routes/users/login');


// services routes
require('./commonMethods/getAllRecords')('/services', 'service');
require('./routes/services/createService');
