module.exports = function(app){
    var appMethods = require('./controllers/controller');

    app.get('/', appMethods.welcome);

    app.get('/AboutUs', appMethods.aboutUs);

    app.get('/Services', appMethods.services);

    app.get('/ContactUs', appMethods.contactUs);

  };