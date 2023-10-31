//student_average.js
// WB4 PAGE 31 SECTION 2-17

// BOOK SUGGESTS TWO LOOPS

//OUTER LOOP FOR STUDENTS
//INNER LOOP FOR SCORES

function getAverage(list){
    let total = 0;

    for(let i=0; i < list.length; i++){
        total += list[i];
    }

    //total / length
    const average = total / list.length;
    return average;
}

//IMPLEMENTATION
function showAllStudentAverages(list) {
    // console.log("START" + students.length)
    for (let i = 0; i < list.length; i++) {
        const item = list[i]; //get one from the list
        let total = 0;
        for (let s = 0; s < item.scores.length; s++) {
            total += item.scores[s];
        }
        const average = total / item.scores.length;
        
        // const average = getAverage(item.scores) //could call function instead of all the code above in this block
        console.log(item.name, average);
        
        // console.log(student.name, getAverage(student.scores));
    }
}

//TEST DATA
let students = [
    { name: "Janice", scores: [100, 96, 85, 70] },
    { name: "Miriam", scores: [92, 89, 96, 100, 94] },
    { name: "Alex", scores: [86, 72, 92] },
    { name: "Jodice", scores: [95, 84, 89, 100, 100, 76] },
    { name: "Joshua", scores: [80, 100] },
    { name: "Lillian", scores: [100, 99, 100, 87] }
];
//TEST
showAllStudentAverages(students);