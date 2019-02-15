var express = require('express');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var data = require('../../data/users');
var router = express.Router();

var saveData = function (data) {
    var filepath = path.join(__dirname, '../../data/users.json')
    fs.writeFile(filepath, JSON.stringify(data))
}

router.get('/', function (req, res) {
    res.json(data.list);
})

router.get('/:id', function (req, res) {
    var id = req.params.id;
    var user = _.find(data.list, function (item) {
        return item.id.toString() === id.toString();
    })
    if (user) res.json(user);
    else res.status(404).send('<h1>Not Found </h1>')
})

router.get('/search/:name', function (req, res) {
    var name = req.params.name;
    var users = _.filter(data.list, function (item) {
        return item.name.indexOf(name) >= 0;
    })
    res.json(users);
});

router.post('/', function (req, res) {
    var last = _.maxBy(data.list, 'id');
    var newUser = Object.assign({ id: last.id + 1, }, req.body);
    newUser.tickets = [];
    data.list.push(newUser);
    saveData(data);
    res.json(data.list);
});

router.delete('/:name', function (req, res) {
    var id = req.params.name;

    var user = _.find(data.list, function (o) {
        return o.id.toString() === id.toString();
    });
    if (user === undefined) {
        res.status(404);
        res.send('<h1> Not Found </h1>');
    }
    var userRemoved = _.remove(data.list, function (o) {
        return o.id.toString() == id.toString();
    })
    saveData(data);
    res.json(data.list);
});

router.put('/:id', function(req, res){
    var id = req.params.id;
    var user = _.find(data.list, function (o) {
        return o.id.toString() === id.toString();
    });
    if (user === undefined) {
        res.status(404);
        res.send('<h1> Not Found </h1>');
    }
    else{   
        var userModified = _.assign(user,req.body);
        saveData(data);
        res.json(data.list); 
    }
});

module.exports = router;