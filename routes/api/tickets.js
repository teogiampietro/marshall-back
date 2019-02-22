var express = require('express');
var fs = require('fs');
var path = require('path');
var _ = require('lodash');
var data = require('../../data/tickets');
var router = express.Router();
//var checkout = require('./checkout');

var saveData = function(data){
    var filepath = path.join(__dirname, '../../data/tickets.json')
    fs.writeFile(filepath, JSON.stringify(data))
}

router.get('/', function(req, res){
    res.json(data.list);
})

router.get('/:id', function (req, res){
    var id =req.params.id;
    var tickets = _.find(data.list, function(item){
        return item.id.toString() === id.toString();
    })
    if(tickets) res.json(tickets);
    else throw new error(Error);
})
router.get('/search/:priority', function(req, res) {
    var priority = req.params.priority;
    var tickets = _.filter(data.list, function(item) {
      return item.priority.indexOf(priority) >= 0;
    })
    res.json(tickets);
  });

router.post('/',function(req,res){
    var last = _.maxBy(data.list, 'id');
    var newTicket = Object.assign({ id: last.id + 1, }, req.body);
    data.list.push(newTicket);
    saveData(data);
    res.json(data.list);
})

router.delete('/name', function (req, res) {
    var id = req.params.name;

    var ticket = _.find(data.list, function (o) {
        return o.id.toString() === id.toString();
    });
    if (ticket === undefined) {
        throw new error(Error)
    }
    var ticketRemoved = _.remove(data.list, function (o) {
        return o.id.toString() == id.toString();
    })
    saveData(data);
    res.json(data.list);
});

router.put('/:id', function(req, res){
    var id = req.params.id;
    var ticket = _.find(data.list, function (o) {
        return o.id.toString() === id.toString();
    });
    if (ticket === undefined) {
        throw new error(Error)
    }
    else{   
        var ticketModified = _.assign(user,req.body);
        saveData(data);
        res.json(data.list); 
    }
});


module.exports = router;