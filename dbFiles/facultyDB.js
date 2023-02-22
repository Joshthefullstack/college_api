var config = require("../dbconfig");
const sql = require("mssql");

async function getFaculties() {
  try {
    let pool = await sql.connect(config);
    let faculties = await pool.request().query("SELECT * from Faculty");
    return faculties.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getFaculty(facultyId) {
  try {
    let pool = await sql.connect(config);
    let faculty = await pool
      .request()
      .input("input_parameter", sql.Int, facultyId)
      .query("SELECT * from Faculty WHERE FacultyId = @input_parameter");
    return faculty.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function removeFaculty(facultyId) {
    try {
      let pool = await sql.connect(config);
      let faculty = await pool
        .request()
        .input("input_parameter", sql.Int, facultyId)
        .query("DELETE * from Faculty WHERE FacultyId = @input_parameter");
      return faculty.recordsets;
    } catch (error) {
      console.log(error);
    }
  }

async function addFaculty(faculty) {
  try {
    let pool = await sql.connect(config);
    let insertFaculty = await pool
      .request()
      .input("name", sql.NVarChar, faculty.Name)
      .input("uniqueId", sql.Int, faculty.UniqueID)
      .input("code", sql.NVarChar, faculty.Code)
      .input("status", sql.Int, faculty.Status)
      .execute("InsertFaculty");
    return insertFaculty.recordsets;
  } catch (err) { 
    console.log(err);
  }
}

async function editFaculty(faculty) {
    try {
      let pool = await sql.connect(config);
      let updateFaculty = await pool
        .request()
        .input("facultId", sql.NVarChar, faculty.facultId)
        .input("name", sql.NVarChar, faculty.Name)
        .input("uniqueId", sql.Int, faculty.UniqueID)
        .input("code", sql.NVarChar, faculty.Code)
        .input("status", sql.Int, faculty.Status)
        .execute("UpdateFaculty");
      return updateFaculty.recordsets;
    } catch (err) {
      console.log(err);
    }
  }

module.exports = {
  getFaculties: getFaculties,
  getFaculty: getFaculty,
  removeFaculty: removeFaculty,
  addFaculty: addFaculty,
  editFaculty: editFaculty
};
