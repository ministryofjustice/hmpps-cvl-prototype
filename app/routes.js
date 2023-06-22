//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


//require('./routes/routes.js')(router);
require('./routes/v21.js')(router);

//require('./views/'+version+'/routes/mainrouter.js')(router);
module.exports = router;
