var express = require('express');
var cors = require('cors');
var products = require('./products');
var utils = require('./utils');
var users = require('./users');
var tickets = require('./tickets');
var router = express.Router();

router.use(cors());

router.use('/products', products);
router.use('/utils', utils);
router.use('/users', users);
router.use('/tickets', tickets);

module.exports = router;
