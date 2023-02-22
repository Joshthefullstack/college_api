class Course{
    constructor(
        courseId,
        departmentId,
        name,
        uniqueId,
        units,
        code,
        courseLevel,
        courseSemester,
        status
    ){
        this.CourseId = courseId;
        this.DepartmentId = departmentId;
        this.Name = name;
        this.UniqueID = uniqueId;
        this.Units = units;
        this.Code = code;
        this.CourseLevel = courseLevel;
        this.CourseSemester = courseSemester;
        this.Status = status
    }
}