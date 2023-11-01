// Initialize class information and availability
const classes = [
    { name: "Psychology", capacity: 2 },
    { name: "Sociology", capacity: 15 },
    { name: "Topics in Mathematics", capacity: 20 },
    { name: "History", capacity: 18 },
    { name: "Philosophy", capacity: 12 },
];

// Initialize arrays to track registered students and waiting list
const registeredStudents = [];
const waitingList = [];

// Function to register a student for a class
function registerForClass(studentName, className) {
    const classIndex = classes.findIndex((cls) => cls.name === className);

    if (classIndex === -1) {
        console.log("Invalid class name.");
        return;
    }

    const selectedClass = classes[classIndex];

    if (selectedClass.capacity > 0) {
        // If there are open seats, register the student
        selectedClass.capacity--;
        registeredStudents.push({ student: studentName, class: className });
        console.log(`${studentName} registered for ${className}.`);
    } else {
        // If there are no open seats, add to the waiting list
        waitingList.push({ student: studentName, class: className });
        console.log(`${studentName} added to the waiting list for ${className}.`);
    }
}

// Example registrations
registerForClass("Janice", "Psychology");
registerForClass("Alice", "Psychology");
registerForClass("Nash", "Topics in Mathematics");
registerForClass("David", "Sociology");
registerForClass("Jonathan", "History");
registerForClass("Marie", "Philosophy");
registerForClass("Katherine", "Psychology"); // This will be on the waiting list

// Display class and registration information
console.log("Class Availability:");
classes.forEach((cls) => {
    console.log(`${cls.name}: ${cls.capacity} seats available`);
});

console.log("Registered Students:");
registeredStudents.forEach((student) => {
    console.log(`${student.student} is registered for ${student.class}`);
});

console.log("Waiting List:");
waitingList.forEach((student) => {
    console.log(`${student.student} is on the waiting list for ${student.class}`);
});
