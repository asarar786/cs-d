let students = [

    { name: "Alice",suject:"English", marks: 85 },

    { name: "Bob", marks: 92 },

    { name: "Charlie", marks: 78 },

    { name: "Diana", marks: 88 },

    { name: "Edward", marks: 95 }

];



function renderTable() {

    const tbody = document.getElementById("studentTableBody");

    tbody.innerHTML = "";

    students.forEach(s => {

        let row = <td><tr><td>${s.name}</td><td><td>${s.subjest}</td><td>${s.marks}</td></tr>;

        tbody.innerHTML += row;

    });

}



function addStudent() {

    const nameInput = document.getElementById("studentName");

    const subjectInput = document.getElementById("studentSubject");

    const marksInput = document.getElementById("studentMarks");



    const name = nameInput.value.trim();

    const marks = parseInt(marksInput.value);



    if (!name || isNaN(marks) || marks < 0 || marks > 100) {

        alert("Please enter valid name and marks (0-100)");

        return;

    }



    students.push({ name,subject, marks });

    renderTable();



    // Clear input fields

    nameInput.value = "";

    subjectInput.value = "";

    marksInput.value = "";

}



function removeStudent() {

    students.pop();

    renderTable();

}



function sortStudents() {

    students.sort((a, b) => b.marks - a.marks);

    renderTable();

}



function calculateAverage() {

    if (students.length === 0) {

        alert("No students in the list.");

        return;

    }

    const total = students.reduce((sum, s) => sum + s.marks, 0);

    const avg = (total / students.length).toFixed(2);

    alert(Average Marks: ${avg});

}



function findTopper() {

    if (students.length === 0) {

        alert("No students in the list.");

        return;

    }



    const topper = students.reduce((max, s) => (s.marks > max.marks ? s : max));

    alert(Topper: ${topper.name} with ${topper.marks} marks);

}



// Initial table render

renderTable();