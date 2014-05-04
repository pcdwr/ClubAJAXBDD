var express = require('express');
var exerciseService = require('../server/exerciseService');
var mongo = require('mongoskin');
var bodyparser = require('body-parser');

var db = mongo.db('mongodb://localhost:27017/BDDTest');
db.dropDatabase(function(err) {});
db.createCollection('exercises', function(err, result) {
    db.collection('exercises').insert([{title: "pushup", desc: 'abc'},
                                        {title: "situp", desc: 'def'}], function(err, result) {
    });
});

var server = express();
server.use(express.static(__dirname + '/static'));
server.use(bodyparser());
server.listen(8080);

server.get('/exercises', function(req, res){
  exerciseService.getAllExercises(db, function(exercises) {
    res.send(exercises);
  });
});

server.post('/exercise', function(req, res) {
  exerciseService.createExercise(db, req.body, function (result) {
    res.send(result[0]);
  })
});

server.delete('/exercise', function(req, res) {
  exerciseService.deleteExercise(db, req.body, function (result) {
    res.send(result);
  })
});

server.get('/exercise/:filter', function(req, res) {
  exerciseService.readExercise(db, { title: { $in: [req.param('filter')]}}, function(exerciseRead) {
    res.send(exerciseRead);
  })
});

server.put('/exercise', function(req, res) {
  exerciseService.updateExercise(db, req.body.filter, req.body.exercise, function(updatedExercise) {
    res.send(true);
  })
});
