/*
 * @Author: mikey.gwx 
 * @Date: 2019-03-22 10:59:31 
 * @Last Modified by: mikey.gwx
 * @Last Modified time: 2019-03-22 14:08:47
 */
var Mongo = require('Mongodb-curd');
var batabaseName = "lm";
module.exports = {
    addbill: function(req, res, next) {
        let = { money, title, type, icon, common } = req.body;
        let now = new Date();
        let Time = {
            y: now.getFullYear(),
            m: now.getMonth() + 1,
            d: now.getDate()
        }
        if (!money || !title || !type || !icon || !common) {
            return res.send({
                code: 2,
                msg: "缺失参数"
            })
        }
        req.body.Time = Time.y + "-" + Time.m + "-" + Time.d;
        Mongo.insert(batabaseName, "bill", req.body, function(result) {
            if (result) {
                res.send({
                    code: 1,
                    msg: "success",
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
    delbill: function(req, res, next) {

    },
    getbill: function(req, res, next) {

    }
}