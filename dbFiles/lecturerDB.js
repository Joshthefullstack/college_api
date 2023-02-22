var config = require("../dbconfig");
const sql = require("mssql");

async function getLecturers() {
  try {
    let pool = await sql.connect(config);
    let lecturers = await pool.request().query("SELECT * from Lecturer");
    return lecturers.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getLecturer(lecturerId) {
  try {
    let pool = await sql.connect(config);
    let lecturer = await pool
      .request()
      .input("input_parameter", sql.Int, lecturerId)
      .query("SELECT * from Lecturer WHERE LecturerId = @input_parameter");
    return lecturer.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function removeLecturer(lecturerId) {
    try {
      let pool = await sql.connect(config);
      let lecturer = await pool
        .request()
        .input("input_parameter", sql.Int, lecturerId)
        .query("DELETE * from Lecturer WHERE LecturerId = @input_parameter");
      return lecturer.recordsets;
    } catch (error) {
      console.log(error);
    }
  }

async function addLecturer(lecturer) {
  try {
    let pool = await sql.connect(config);
    let insertLecturer = await pool
      .request()
      .input("departmentId", sql.NChar, lecturer.DepartmentId)
      .input("surname", sql.NVarChar, lecturer.Surname)  
      .input("firstName", sql.NVarChar, lecturer.FirstName)
      .input("otherName", sql.NVarChar, lecturer.OtherName)
      .input("staffId", sql.Int, lecturer.StaffId)
      .input("status", sql.Int, lecturer.Status)
      .execute("InsertLecturer");
    return insertLecturer.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function editLecturer(lecturer) {
    try {
      let pool = await sql.connect(config);
      let updateLecturer = await pool
        .request()
        .input("departmentId", sql.NChar, lecturer.DepartmentId)
        .input("surname", sql.NVarChar, lecturer.Surname)  
        .input("firstName", sql.NVarChar, lecturer.FirstName)
        .input("otherName", sql.NVarChar, lecturer.OtherName)
        .input("staffId", sql.Int, lecturer.StaffId)
        .input("status", sql.Int, lecturer.Status)
        .execute("UpdateLecturer");
      return updateLecturer.recordsets;
    } catch (err) {
      console.log(err);
    }
  }

module.exports = {
    getLecturers: getLecturers,
    getLecturer: getLecturer,
    removeLecturer: removeLecturer,
    addLecturer: addLecturer,
    editLecturer: editLecturer
};

