//importing our database entities
var courseDb = require("./dbFiles/courseDB");
var courseStudyDb = require("./dbFiles/courseOfStudyDB");
var departmentDb = require("./dbFiles/departmentDB");
var facultyDb = require("./dbFiles/facultyDB");
var lecturerDb = require("./dbFiles/lecturerDB");

// importing our database objects
var Faculty = require("./dbObjects/faculty");
var Course = require("./dbObjects/course");
var CourseOfStudy = require("./dbObjects/courseOfStudy");
var Department = require("./dbObjects/department");
var Lecturer = require("./dbObjects/lecturer");

//importing express,cors and body_parser
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");


// instatiating express and router
var app = express();
var router = express.Router();


// middleware for using body_parser and cors
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

//routes for each faculties
router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/faculties").get((request, response) => {
  facultyDb.getFaculties().then((data) => {
    response.json(data[0]);
  });
});

router.route("/faculties/:id").get((request, response) => {
  facultyDb.getFaculty(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/faculties").post((request, response) => {
  let faculty = { ...request.body };
  facultyDb.addFaculty(faculty).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/faculties").put((request, response) => {
  let faculty = { ...request.body };
  facultyDb.editFaculty(faculty).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/faculties/:id").delete((request, response) => {
  facultyDb.removeFaculty(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

//========================DEPARTMENTS
router.route("/departments").get((request, response) => {
  departmentDb.getDepartments().then((data) => {
    response.json(data[0]);
  });
});

router.route("/departments/:id").get((request, response) => {
  departmentDb.getDepartment(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/departments").post((request, response) => {
  let dept = { ...request.body };
  departmentDb.addDepartment(dept).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/departments").put((request, response) => {
  let dept = { ...request.body };
  departmentDb.editDepartment(dept).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/departments/:id").delete((request, response) => {
  departmentDb.removeDepartment(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

//========================COURSE OF STUDY
router.route("/courseofstudies").get((request, response) => {
  courseStudyDb.getCourseOfStudies().then((data) => {
    response.json(data[0]);
  });
});

router.route("/courseofstudies/:id").get((request, response) => {
  courseStudyDb.getCourseOfStudy(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/courseofstudies").post((request, response) => {
  let courseofstudy = { ...request.body };
  courseStudyDb.addCourseOfStudy(courseofstudy).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/courseofstudies").put((request, response) => {
  let courseofstudy = { ...request.body };
  courseStudyDb.editCourseOfStudy(courseofstudy).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/courseofstudies/:id").delete((request, response) => {
  courseStudyDb.removeCourseOfStudy(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

//===========COURSE
router.route("/courses").get((request, response) => {
  courseDb.getCourses().then((data) => {
    response.json(data[0]);
  });
});

router.route("/course/:id").get((request, response) => {
  courseDb.getCourse(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/course").post((request, response) => {
  let course = { ...request.body };
  courseDb.addCourse(course).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/course").put((request, response) => {
  let course = { ...request.body };
  courseDb.editCourse(course).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/course/:id").delete((request, response) => {
  courseDb.removeCourse(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

//===============LECTURER
router.route("/lecturer").get((request, response) => {
  lecturerDb.getLecturers().then((data) => {
    response.json(data[0]);
  });
});

router.route("/lecturer/:id").get((request, response) => {
  lecturerDb.getLecturer(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

router.route("/lecturer").post((request, response) => {
  let lecturer = { ...request.body };
  lecturerDb.addLecturer(lecturer).then((data) => {
    response.status(201).json(data);
  });
});

router.route("/lecturer").put((request, response) => {
  let lecturer = { ...request.body };
  lecturerDb.editLecturer(lecturer).then((data) => {
    response.status(200).json(data);
  });
});

router.route("/lecturer/:id").delete((request, response) => {
  lecturerDb.removeLecturer(request.params.id).then((data) => {
    response.json(data[0]);
  });
});

var port = process.env.PORT || 8091;
app.listen(port);
console.log("Academics API is runnning at " + port);
