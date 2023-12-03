/* result should have student Id, found in learner submissions.
avg grade for all assignments submitted, scores in learnersub and points 
possible are in assnGroup*/

//testing variables
const course = { id: 451, name: "Introduction to JavaScript" };
const assignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

const submissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

//Global variable
let aCourse = null;
let total = 0;
let students = [];

function getLearnerData(courseInfo, assnGroup, learnerSub) {
  const result = [];
}
//class to create student objects so that it remains dynamic
class Student {
  constructor(studentID) {
    this.studentID = studentID;
  }
  addAssignment(assignmentID, grade) {
    this[assignmentID] = grade;
  }
  addTotal(total) {
    this.total = total;
  }
}

//param@ courseInfo object
//returns courseNum the value for the courseID
function getCourseID(courseInfo) {
  let courseNum = 0;

  for (const key in courseInfo) {
    if (key === `id`) {
      courseNum = courseInfo[key];
    }
  }
  return courseNum;
}

// console.log(getCourseID(course));

//param@ learner submissions an array of objects
//returns studentID array
function getStudentID(learnerSub) {
  let studentID = [];
  learnerSub.forEach((element) => {
    for (const key in element) {
      if (key === `learner_id`) studentID.push(element[key]);
    }
  });
  return [...new Set(studentID)];
}

function fillStudent(assnGroup, learnerSub, course) {
  aCourse = getCourseID(course);
  let students = getStudentID(learnerSub);
  let assignArr = [];
  let assignLen = 0;
  let pointValues = {};

  //if wrong course throw error
  if (assnGroup.course_id != aCourse) {
    throw `Assignment Group does not match course with ID:${aCourse}.`;
  }
  //changes students array to an array of objects for each student.
  for (index = 0; index < students.length; index++) {
    students[index] = new Student(students[index]);
  }

  //makes an array of just the assignments
  assignArr = assignmentArray(assnGroup);
  assignLen = assignArr.length;

  //Create an object to house the max points per assignment.
  pointValues = maxPoints(assignArr);

  //Add each assignment grade to the proper student
  for (index = 0; index < students.length; index++) {
    learnerSub.forEach((element) => {
      if (element.learner_id == students[index].studentID) {
        students[index].addAssignment(
          element.assignment_id,
          element.submission.score
        );
      }
    });
  }
  students=onTime(assignArr,students, submissions);
  
  //Complete averages for student scores
  //todo total alter score based on due date
  let score = 0;
  let max = 0;
  students.forEach((student) => {
    for (const grade in student) {
      for (const check in pointValues) {
        if (grade == check) {
          score = student[grade];
          max = pointValues[check];
          score /= max;
          student.addAssignment(grade, score);
        }
      }
    }
  });
  //check submission dates

  // students[index].addTotal(total);
  // total = 0;
  return students;
}

students = fillStudent(assignmentGroup, submissions, course);
console.log(students);

function getAverage(students, assnGroup) {}

//makes an array of just the assignments
function assignmentArray(assnGroup) {
  let assignArr = [];
  for (const key in assnGroup) {
    if (key == `assignments`) assignArr = [...assnGroup.assignments];
  }
  return assignArr;
}

//Create an object to house the max points per assignment.
function maxPoints(assignArr) {
  const pointValues = {};
  assignArr.forEach((element) => {
    pointValues[element.id] = element.points_possible;
  });
  return pointValues;
}
//todo fix onTime function
function onTime(assignArr, students, learnerSub) {
  let temp=0;
  let temp2=0;
  learnerSub.forEach((sub) => {
    students.forEach((student) => {
      if (sub.learner_id == student.studentID) {
        assignArr.forEach((assignment) => {
          if (assignment.id == sub.assignment_id) {
            switch (sub.submission.submitted_at) {
              //Late
              case assignment.due_at > sub.submission.submitted_at:
                temp=student[assignment.id]* 0.9;
                console.log(temp);
                temp2=assignment.id;
                student.addAssignment(atemp2, temp);
                break;
              //assignment not yet due
              case assignment.due_at > new Date():
                delete student[assignment.id];
              //turned in on time due nothing.
              default:
                break;
            }
          }
        });
      }
    });
  });
  return students;
}
