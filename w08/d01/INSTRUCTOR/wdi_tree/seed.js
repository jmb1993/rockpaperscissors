var mongoose = require('mongoose'),
    Cohort = require('./models/cohort.js'),
    Student = require('./models/student.js'),
    Instructor = require('./models/instructor.js');

mongoose.connect('mongodb://localhost/wdiApp', function(err) {
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('connection successful');
  }
});


var newCohort = new Cohort({
  name: "WDI Bacon",
  location: "New York City",
  start_date: new Date()
});

newCohort.save(function (err) {
  if(err){
    console.log(err)
  }else{
    console.log("Cohort Saved");
    var student1 = new Student({
      name: {first: "Johnny", last: "Chan"},
      age: 55
    });
    student1.save(function (err) {
      if(err){
        console.log(err)
      }else {
        console.log("Student1 saved");
        newCohort.students.push(student1._id);
        var student2 = new Student({
          name: {first: "Thomas", last: "Kim"},
          age: 53
        });
        student2.save(function (err) {
          if(err){
            console.log(err)
          }else{
            console.log("Student saved");
            newCohort.students.push(student2._id);
            var newInstructor = new Instructor({
              name: {first: "Will", last: "Shaw"},
              age: 95
            });
            newInstructor.save(function (err) {
              if(err){
                console.log(err)
              }else {
                console.log("instructor saved");
                newCohort.instructors.push(newInstructor._id);
                newCohort.save();
              }
            })
          }
        });
      }
    });
  }
});
