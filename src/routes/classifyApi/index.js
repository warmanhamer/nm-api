/*
 * @Author: mikey.gwx 
 * @Date: 2019-03-21 15:37:27 
 * @Last Modified by: mikey.gwx
 * @Last Modified time: 2019-03-22 13:37:30
 */
var Mongo = require('Mongodb-curd');
var batabaseName = "lm";
module.exports = {
    custom: function(req, res, next) {
        Mongo.find(batabaseName, "custom", function(result) {
            if (result) {
                res.send({
                    code: 1,
                    data: result
                })
            } else {
                res.send({
                    code: 0,
                    msg: error
                })
            }
        })
    },
    addcustom: function(req, res, next) {
        let { icon, title, type, common } = req.body;
        if (!icon || !title || !type || !common) {
            res.send({
                code: 2,
                msg: "缺少参数"
            })
        }
        Mongo.insert(batabaseName, "classify", req.body, function(result) {
            if (result) {
                res.send({
                    code: 1,
                    data: result
                })
            } else {
                res.send({
                    code: 0,
                    msg: "error"
                })
            }
        })
    },
    getclassify: function(req, res, next) {
        let = { common, type } = req.query;
        Mongo.find(batabaseName, "classify", {
            "common": { $in: ["all", common] },
            "type": "收入"
        }, function(result) {
            if (result) {
                res.send({
                    code: 1,
                    data: result
                })
            } else {
                res.send({
                    code: 0,
                    msg: error
                })
            }
        })
    }
}