var jwt = require('jsonwebtoken');
var config = require('./app-config');


function verifyToken(req, res, next) {
    
    var auth_header = req.get('Authorization');
    var token = (auth_header && auth_header.length > 7)? auth_header.substring(7) : null;
    if (!token)
        return res.status(401).send();
    jwt.verify(token, config.secret, function(err, decoded) {
        if (err)
            return res.status(401).send();
        // if everything good, save to request for use in other routes
        req.userId = decoded.id;
        next();
    });
    
}

module.exports = verifyToken;

