const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
];


showAveragePoints(students);
showGroupAveragePoint(students);


function showAveragePoints(studentsArr){
    studentsArr.map((item) => {
        console.log(`Средний бал студента ${item.name}: ${getAveragePoint(item)}`);
    });
}

function getAveragePoint(student){
    return ((student.marks.reduce((acc, item) => item + acc)) / student.marks.length);
}

function showGroupAveragePoint(studentsArr){
    const arrOfAveragePoints = studentsArr.map((item) => getAveragePoint(item));
    console.log(`Средний бал всей группы: ${getGroupAveragePoint(arrOfAveragePoints)}`);
}

function getGroupAveragePoint(groupPoints){
    return ((groupPoints.reduce((acc, item) => item + acc)) / groupPoints.length);
}