var exerciseService = exports;

exerciseService.sayHello = function() {return "Hello"};

exerciseService.getNumberOfExercises = function(db, callback) {

  db.collection('exercises').count(function(err, count) {
    if (err) throw err;
    callback(count);
  });

}

exerciseService.getAllExercises = function(db, callback) {

  db.collection('exercises').find().toArray(function (err, exercises) {
    if (err) throw err;
    callback(exercises);
  });

}

exerciseService.readExercise = function(db, exerciseTitle, callback) {

  db.collection('exercises').findOne(exerciseTitle, function (err, exercise) {
    if (err) throw err;
    callback(exercise);
  });

}

exerciseService.createExercise = function(db, exercise, callback) {

  db.collection('exercises').insert(exercise, function(err, result) {
    if (err) throw err;
    callback(result);
  })

}

exerciseService.deleteExercise = function(db, exerciseFilter, callback) {

  db.collection('exercises').remove(exerciseFilter, true, function(err, result) {
    if (err) throw err;
    callback();
  })

}

exerciseService.updateExercise = function(db, exerciseFilter, updatedExercise, callback) {

  db.collection('exercises').update(exerciseFilter, updatedExercise, {strict: true}, function(err, result) {
    if (err) throw err;
    callback(result);
  })

}
