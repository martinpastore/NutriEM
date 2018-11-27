var express = require('express');
var endpoints = require('./endpoints');
var router = express.Router();

router.post('/contact', endpoints.sendEmail);

module.exports = router;
