var mongoose = require('mongoose');

var Common = require('../utils/common');

// model file import
var SneakerSize = require('../../model/SneakerSize');

var insertTrueToSize = function(brand, style, fullName, size, cb){
    var newSize = new SneakerSize({
        brand: brand,
        style: style,
        fullName: fullName,
        trueToSize: size,
    });

    newSize.save(function(err){
        if (err){
            console.log("[Error] [Saving Shoe TrueToSize] details: " + err.toString());
            cb(new Error("e"), null);
        }else{
            cb(null, JSON.stringify({ success:  "1" }));
        }
    });
};


var getTrueToSize = function(brand, style, fullName, cb){
    // if given full name, search full name, else search brand and style
    var query = {};

    if (fullName){
        query.fullName = fullName;
    }else{
        query.brand = brand;
        query.style = style;
    }

    SneakerSize.aggregate([
        {
            "$match" : query, 
        },
        {
            "$group" : {
                _id:null, 
                avg:{$avg:"$trueToSize"},
            },
        }
    ], function(err, data){
        if (err){
            console.log("[Error] [Get Shoe TrueToSize] details:" + err.toString());
            cb(new Error("e"), null);
        }else{
            if (data.length === 0){
                cb(null, JSON.stringify({
                    avgTrueToSize: -1,
                }));
            }else{
                cb(null, JSON.stringify({
                    avgTrueToSize: data[0].avg,
                }));
            }
        }
    });
};

module.exports = {
    insertTrueToSize: insertTrueToSize,
    getTrueToSize:getTrueToSize,
};
