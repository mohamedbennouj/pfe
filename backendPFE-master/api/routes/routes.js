'use strict';
module.exports = function(app) {
  var userCtrl = require('../controllers/userCtrl');
  var places = require("../controllers/places");
  var verifyToken = require('../verifyToken');

  // monument Routes
 /* app.route('/monuments')
    .get(verifyToken, customerCtrl.index)
    .post(verifyToken, customerCtrl.store);
*/

    // auth routes
    app.route('/register')
        .post(userCtrl.register);

    app.route('/login')
        .post(userCtrl.login);

    app.route('/users')
        .get(verifyToken, userCtrl.index);

    //places routes
    app.route('/places/type/:type')
       .get(places.index);

    app.route('/places/top')
       .get(places.top);
    
    app.route('/places/type/:type/:name')
       .get(places.index2);
       
    app.route('/avis/vote')
       .post(places.vote);
};