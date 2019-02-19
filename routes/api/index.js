var express = require('express');
var cors = require('cors');
var products = require('./products');
var users = require('./users');
var tickets = require('./tickets');
var authentication = require('./authentication');
var router = express.Router();

router.use(cors());

router.use('/products', products);
router.use('/users', users);
router.use('/tickets', tickets);
router.use('/authentication', authentication)

module.exports = router;
