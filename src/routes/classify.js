var express = require('express');
var router = express.Router();
var classifyApi = require("./classifyApi");

/* GET users listing. */
router.get('/api/getcustom', classifyApi.custom);
router.post('/api/addcustom', classifyApi.addcustom);
router.get('/api/getclassify', classifyApi.getclassify);

module.exports = router;