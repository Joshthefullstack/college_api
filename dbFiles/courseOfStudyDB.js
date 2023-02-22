var config = require("../dbconfig");
const sql = require("mssql");

async function getCourseOfStudies() {
  try {
    let pool = await sql.connect(config);
    let courseOfStudy = await pool.request().query("SELECT * from CourseOfStudy");
    return courseOfStudy.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getCourseOfStudy(courseOfStudyId){
  try {
    let pool = await sql.connect(config);
    let getCourseOfStudy = await pool
      .request()
      .input("input_parameter", sql.Int, courseOfStudyId)
      .query("SELECT * from CourseOfStudy WHERE courseOfStudyId = @input_parameter");
    return getCourseOfStudy.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function removeCourseOfStudy(courseOfStudyId) {
    try {
      let pool = await sql.connect(config);
      let removeCourseOfStudy = await pool
        .request()
        .input("input_parameter", sql.Int, courseOfStudyId)
        .query("DELETE * from CourseOfStudy WHERE courseOfStudyId = @input_parameter");
      return removeCourseOfStudy.recordsets;
    } catch (error) {
      console.log(error);
    }
  }

async function addCourseOfStudy(courseOfStudy) {
  try {
    let pool = await sql.connect(config);
    let insertCourseOfStudy = await pool
      .request()
      .input("departmentId", sql.Int, courseOfStudy.DepartmentId)
      .input("name", sql.NVarChar, courseOfStudy.Name)
      .input("shortName", sql.NChar, courseOfStudy.ShortName)
      .input("uniqueId", sql.NChar, courseOfStudy.UniqueID)
      .input("award", sql.NVarChar, courseOfStudy.Award)
      .input("duration", sql.Int, courseOfStudy.Duration)
      .input("requiredCreditUnits", sql.Int, courseOfStudy.RequiredCreditUnits)
      .input("advisor", sql.NVarChar, courseOfStudy.Code)
      .input("status", sql.Int, courseOfStudy.Status)
      .execute("InsertCourseOfStudy");
    return insertCourseOfStudy.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function editCourseOfStudy(courseOfStudy) {
    try {
      let pool = await sql.connect(config);
      let updateCourse = await pool
        .request()
        .input("courseOfStudyId", sql.Int, courseOfStudy.CourseOfStudyId)
        .input("departmentId", sql.Int, courseOfStudy.DepartmentId)
        .input("name", sql.NVarChar, courseOfStudy.Name)
        .input("shortName", sql.NChar, courseOfStudy.ShortName)
        .input("uniqueId", sql.NChar, courseOfStudy.UniqueID)
        .input("award", sql.NVarChar, courseOfStudy.Award)
        .input("duration", sql.Int, faculty.Duration)
        .input("requiredCreditUnits", sql.Int, courseOfStudy.RequiredCreditUnits)
        .input("advisor", sql.NVarChar, courseOfStudy.Code)
        .input("status", sql.Int, courseOfStudy.Status)
        .execute("UpdateCourse");
      return updateCourse.recordsets;
    } catch (err) {
      console.log(err);
    }
  }

module.exports = {
    getCourseOfStudies: getCourseOfStudies,
    getCourseOfStudy: getCourseOfStudy,
    removeCourseOfStudy: removeCourseOfStudy,
    addCourseOfStudy: addCourseOfStudy,
    editCourseOfStudy: editCourseOfStudy
};