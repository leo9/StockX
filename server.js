var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var route = require('./route');

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log("IP: " + ip + " Request-api: " + req.originalUrl);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, WorkDL-FingerPrint");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    next();
});


//Middleware
app.use(bodyParser.json({limit: "150mb"}));
app.use(bodyParser.urlencoded({limit: "150mb", extended: true, parameterLimit:150000}));

module.exports = route(app);

if (!module.parent) {
    var port = process.env.PORT || 8081;
    app.listen(port, function(){
        console.log("stockx app is running on port %d", port);
    });
}
