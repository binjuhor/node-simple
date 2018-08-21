var storage = require('node-persist');

storage.initSync({
    dir: "students" 
});

function getAllStudents() {
    var students = storage.getItemSync('students');

    if (typeof students === "undefined") {
        return [];
    }

    return students;
}


function getStudent(studentId) {
    var students = getAllStudents();
    var matchedStudent = null;

    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            matchedStudent = students[i];
            break;
        }
    }

    return matchedStudent;
}


function addStudent(id, fullname) {
    var students = getAllStudents();
    students.push({
        id: id,
        fullname: fullname
    });
    storage.setItemSync('students', students);
}

function removeStudent(studentId) {
    var students = getAllStudents();
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            students.splice(i, 1);
        }
    }
    storage.setItemSync('students', students);
}

function editStuent(studentId, studentName) {

    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentId) {
            students[i].fullname = studentName;
        }
    }

    storage.setItemSync('students', students);
}

function showStudents() {
    var students = getAllStudents();
    students.forEach(function (student) {
        console.log('Student: ' + student.fullname + ' (' + student.id + ')');
    });
}

addStudent(1, 'Kiem');
addStudent(2, 'Hoang');
addStudent(3, 'Dinh');
addStudent(4, 'Phuong');

showStudents();
