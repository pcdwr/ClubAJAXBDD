describe("get list of exercises", function() {
  it("should return a list of 2", function(done) {
    var exercises;
    var jqxhr = $.get( "/exercises", function(data) {
    }, 'json')
      .done(function(data) {
        exercises = data;
      })
    jqxhr.always(function() {
      Should.exist(exercises);
      exercises.length.should.equal(2);
      done();
    });
  });
  it("should contain pushup", function(done) {
    var exercises;
    var jqxhr = $.get( "/exercises", function(data) {
    }, 'json')
      .done(function(data) {
        exercises = data;
      })
    jqxhr.always(function() {
      Should.exist(exercises);
      var foundExercise;
      exercises.forEach(function(exercise) {
        if (exercise.title === 'pushup') {
          foundExercise = exercise;
          return;
        }
      })
      Should.exist(foundExercise);
      done();
    });
  });
  it("should contain situp", function(done) {
    var exercises;
    var jqxhr = $.get( "/exercises", function(data) {
    }, 'json')
      .done(function(data) {
        exercises = data;
      })
    jqxhr.always(function() {
      Should.exist(exercises);
      var foundExercise;
      exercises.forEach(function(exercise) {
        if (exercise.title === 'situp') {
          foundExercise = exercise;
          return;
        }
      })
      Should.exist(foundExercise);
      done();
    });
  });
});

describe('createExercise', function () {
  it('should add an exercise', function (done) {
    var exercise = {title:'jumping jack', desc: 'Jump up and down'};
    var newEntry;
    var jqxhr = $.post( "/exercise", exercise, function(data) {
    }, 'json')
      .done(function(data) {
        newEntry = data;
      })
      .fail(function(result) {
        alert(result.responseText);
      })
    jqxhr.always(function() {
      Should.exist(newEntry);
      // if it was added to the database it should have an id
      Should.exist(newEntry._id);
      newEntry.title.should.equal('jumping jack');
      done();
    });
  })
})

describe('updateExercise', function () {
  it('should update an exercise', function (done) {
    var exerciseUpdateFilter = { title: { $in: ['jumping jack']}};
    var exerciseFilter = 'jumping jack';
    var newExercise = { title: 'jumping jack', desc: 'ghi'};
    var exerciseRequest = {filter: exerciseUpdateFilter, exercise: newExercise };
    var exerciseWasUpdated;
    var jqxhr = $.ajax({
      url: '/exercise',
      type: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(exerciseRequest),
      accepts: 'json'}
    )
      .done(function(data) {
        exerciseWasUpdated = data;
      })
      .fail(function(result) {
        alert("update update Result = " + result.responseText);
      })
    jqxhr.always(function() {
      var exercise2;
      var jqxhr2 = $.get( "/exercise/" + exerciseFilter, function(data) {
      }, 'json')
        .done(function(data) {
          exercise2 = data;
        })
        .fail(function(result) {
          alert("update read Result = " + result.responseText);
        })
      jqxhr2.always(function() {
        Should.exist(exercise2);
        exercise2.title.should.equal('jumping jack');
        exercise2.desc.should.equal('ghi')
        done();
      });
    });
  })
})


describe('deleteExercise', function () {
  it('should delete an exercise', function (done) {
    var exerciseFilter = {title:'jumping jack'};
    var success;
    var jqxhr = $.ajax({
      url: '/exercise',
      type: 'DELETE',
      contentType: 'application/json',
      data: JSON.stringify(exerciseFilter)}
    )
      .done(function(data) {
        success = data;
      })
      .fail(function(result) {
        alert(result.responseText);
      })
    jqxhr.always(function() {
      Should.exist(success);
      done();
    });
  })
})

describe('readExercise', function () {
  it('should read an exercise', function (done) {
    var exerciseFilter = 'situp';
    var exercise;
    var jqxhr = $.get( "/exercise/" + exerciseFilter, function(data) {
    }, 'json')
      .done(function(data) {
        exercise = data;
      })
      .fail(function(result) {
        alert(result.responseText);
      })
    jqxhr.always(function() {
      Should.exist(exercise);
      exercise.title.should.equal('situp');
      exercise.desc.should.equal('def')
      done();
    });
  })
})
