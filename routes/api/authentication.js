var express = require('express');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var data = require('../../data/users');
var router = express.Router();
var jwt = require('jsonwebtoken');


router.post('/', function (req,res){
    var email = req.body.email;
    var password = req.body.password;
    var asd = _.find(data.list, function(item) {
        return (item.email === email && item.password === password);
    })
    if(asd)
    {
        const token = jwt.sign({
            email:asd.email,
            password:asd.password
        }, process.env.JWT_KEY,{expiresIn: "1h"});
        res.status(200).json({
            message : "Success",
            token: token
        });
    }
    else{
        res.status(404).json({
            message : "Error"
        })
    }
})

module.exports = router;