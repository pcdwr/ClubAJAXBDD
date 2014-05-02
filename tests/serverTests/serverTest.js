var mongo = require('mongoskin');
var assert = require("assert");
var should = require("should");
var exerciseService = require('../../server/exerciseService');

before(function(done) {
  db = mongo.db('mongodb://localhost:27017/BDDTest');
  db.createCollection('exercises', function(err, result) {
      db.collection('exercises').insert([{title: "pushup", desc: 'abc'},
                                          {title: "situp", desc: 'def'}], function(err, result) {
          should.not.exist(err);
          done();
      });
  });
});

after(function(done) {
  db.dropDatabase(function(err) {
    should.not.exist(err);// [Error: no open connections]
    db.close(done);
  });
});

describe('testExerciseService', function(){

  describe('testModuleDefinition', function () {
    it('should say hello', function(done) {
      abc = exerciseService.sayHello();
      abc.should.equal('Hello');
      done();
    })
  })

  describe('countExercises', function () {
    it('should return a count of 2', function(done) {
      exerciseService.getNumberOfExercises(db, function(count) {
        count.should.equal(2);
        done();
      });
    })
  })

  describe('listExercises', function(){
    it('should return 2 exercises', function(done) {
      exerciseService.getAllExercises(db, function(exercises) {
        exercises.length.should.equal(2);
        done();
      });
    })
    it('should contain a pushup exercise', function(done) {
      exerciseService.getAllExercises(db, function(exercises) {
        var foundExercise;
        exercises.forEach(function (exercise) {
          if (exercise.title === 'pushup') {
            foundExercise = exercise;
            return;
          }
        })
        should.exist(foundExercise);
        done();
      });
    })
    it('should contain a situp exercise', function(done) {
      exerciseService.getAllExercises(db, function(exercises) {
        var foundExercise;
        exercises.forEach(function (exercise) {
          if (exercise.title === 'situp') {
            foundExercise = exercise;
            return;
          }
        })
        should.exist(foundExercise);
        done();
      });
    })

  })
  describe('createExercise', function () {
    it('should add an exercise', function (done) {
      var exercise = {title:'jumping jack', desc: 'Jump up and down'};
      var exerciseFilter = { title: { $in: ['jumping jack']}};
      exerciseService.createExercise(db, exercise, function (result) {
        exerciseService.readExercise(db, exerciseFilter, function(exerciseRead) {
          exerciseRead.title.should.equal(exercise.title);
          exerciseRead.desc.should.equal(exercise.desc);
          done()
        })
      })
    })
  })
  describe('deleteExercise', function () {
    it('should delete an exercise', function (done) {
      var exercise = {title:'temp', desc: 'test delete'};
      var exerciseFilter = { title: { $in: ['temp']}};
      exerciseService.createExercise(db, exercise, function (result) {
        exerciseService.readExercise(db, exerciseFilter, function(exerciseRead) {
          exerciseRead.title.should.equal(exercise.title);
          exerciseService.deleteExercise(db, exerciseFilter, function (result) {
            exerciseService.readExercise(db, exerciseFilter, function(exerciseRead) {
              should.not.exist(exerciseRead);
              done()
            })
          })
        })
      })
    })
  })
  describe('readExercise', function () {
    it('should find an exercise', function (done) {
      var exerciseFilter = { title: { $in: ['pushup']}};
      exerciseService.readExercise(db, exerciseFilter, function(exerciseRead) {
        exerciseRead.title.should.equal('pushup');
        exerciseRead.desc.should.equal('abc');
        done()
      })
    })
  })
  describe('updateExercise', function () {
    it('should update an exercise', function (done) {
      var exercise = {title:'temp2', desc: 'test update'};
      var exerciseFilter = { title: { $in: ['temp2']}};
      exerciseService.createExercise(db, exercise, function (result) {
        exerciseService.readExercise(db, exerciseFilter, function(exerciseRead) {
          exerciseRead.title.should.equal(exercise.title);
          exerciseRead.desc = 'test update updated';
          exerciseService.updateExercise(db, exerciseFilter, exerciseRead, function (result) {
            exerciseService.readExercise(db, exerciseFilter, function(exerciseRead) {
              exerciseRead.desc.should.equal('test update updated');
              done()
            })
          })
        })
      })
    })
  })
})
