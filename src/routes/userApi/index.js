/*
 * @Author: mikey.gwx 
 * @Date: 2019-03-21 15:04:33 
 * @Last Modified by: mikey.gwx
 * @Last Modified time: 2019-03-21 15:42:51
 */
var Mongo = require('Mongodb-curd');
var batabaseName = "lm";
var collcationName = "user";
module.exports = function(req, res, next) {
    Mongo.find(batabaseName, collcationName, {}, function(result) {
        if (!result) {
            res.send({
                code: 0,
                mes: "error"
            })
        } else {
            res.send({
                code: 1,
                mes: "success",
                data: result
            })
        }
    })
}