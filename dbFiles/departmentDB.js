var config = require("../dbconfig");
const sql = require("mssql");

async function getDepartments() {
  try {
    let pool = await sql.connect(config);
    let departments = await pool.request().query("SELECT * from Department");
    return departments.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getDepartment(departmentId) {
  try {
    let pool = await sql.connect(config);
    let department = await pool
      .request()
      .input("input_parameter", sql.Int, departmentId)
      .query("SELECT * from Department where DepartmentId = @input_parameter");
    return department.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function removeDepartment(departmentId) {
    try {
      let pool = await sql.connect(config);
      let deleteDepartment = await pool
        .request()
        .input("input_parameter", sql.Int, departmentId)
        .query("DELETE * from Department where DepartmentId = @input_parameter");
      return deleteDepartment.recordsets;
    } catch (error) {
      console.log(error);
    }
  }

async function addDepartment(department) {
  try {
    let pool = await sql.connect(config);
    let insertDepartment = await pool
      .request()
      .input("departmentId", sql.Int, department.DepartmentId)
      .input("name", sql.NVarChar, department.Name)
      .input("uniqueId", sql.Int, department.UniqueID)
      .input("code", sql.NVarChar, department.Code)
      .input("status", sql.Int, department.Status)
      .input("facultId", sql.Int, department.FacultId)
      .execute("InsertDepartment");
    return insertDepartment.recordsets;
  } catch (err) {
    console.log(err);
  }
}

async function editDepartment(department) {
    try {
      let pool = await sql.connect(config);
      let updateDepartment = await pool
        .request()
        .input("facultId", sql.Int, department.FacultyId)
        .input("name", sql.NVarChar, department.Name)
        .input("uniqueId", sql.Int, department.UniqueID)
        .input("code", sql.NVarChar, department.Code)
        .input("status", sql.Int, department.Status)
        .execute("UpdateDepartment");
      return updateDepartment.recordsets;
    } catch (err) {
      console.log(err);
    }
  }

module.exports = {
    getDepartments: getDepartments,
    getDepartment: getDepartment,
    removeDepartment: removeDepartment,
    addDepartment: addDepartment,
    editDepartment: editDepartment
};