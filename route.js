var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/stockx', {useNewUrlParser: true});

var size_api = require("./src/api/size_api");
var Constant = require("./src/utils/const");
var Common = require("./src/utils/common");

var Route = function (app){
    app.post('/api/truetosize/get', function(req, res){
        var brand = req.body.brand ? req.body.brand.trim().toLowerCase() : req.body.brand;
        var style = req.body.style ? req.body.style.trim().toLowerCase() : req.body.style;
        var fullName = req.body.fullName ? req.body.fullName.trim().toLowerCase() : req.body.fullName;

        if (fullName || brand && style){
            size_api.getTrueToSize(brand, style, fullName, function(err, data){
                if (err){
                    res.status(500).send(Constant.error["500"]);
                }else{
                    res.status(200).send(data);
                }
            });
        }else{
            res.status(400).send(JSON.stringify(Constant.error["400"]));
        }
    });

    app.post('/api/truetosize/insert', function(req, res){
        var brand = req.body.brand ? req.body.brand.trim().toLowerCase() : req.body.brand;
        var style = req.body.style ? req.body.style.trim().toLowerCase() : req.body.style;
        var fullName = req.body.fullName ? req.body.fullName.trim().toLowerCase() : req.body.fullName;
        var size = req.body.size;

        if (!Common.checkValidSize(size)){
            res.status(400).send(JSON.stringify(Constant.error["400"]));
            return;
        }

        // Either brand + style or full name should be given to 
        // make data meaningful
        if (fullName || brand && style){
            size_api.insertTrueToSize(brand, style, fullName, Number(size), function(err, data){
                if (err){
                    res.status(500).send(Constant.error["500"]);
                }else{
                    res.status(200).send(data);
                }
            });
        }else{
            res.status(400).send(JSON.stringify(Constant.error["400"]));
        }
    });
};

module.exports = Route;
