var student = {
    firstName: "Soundhar",
    lastName : "V",
    dept : "CSE",
    regNo : 51,
    courseList : [],
    learntCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function (){
        return `${this.firstName} has enrolled in a total of ${this.courseList.length} courses`;
    }
};

console.log(student.getCourseCount());

student.learntCourse("React JS");

console.log(student.getCourseCount());