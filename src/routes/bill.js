var express = require('express');
var router = express.Router();
var billApi = require("./billApi");

/* GET users listing. */

router.post('/api/addbill', billApi.addbill);
router.post('/api/delbill', billApi.delbill);
router.post('/api/getbill', billApi.getbill);

module.exports = router;