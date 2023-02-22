const students = [
  {
    name: 'R',
    firstGrade: 8,
    secondGrade: 7,
  },
  {
    name: 'G',
    firstGrade: 7,
    secondGrade: 9,
  },
  {
    name: 'V',
    firstGrade: 4,
    secondGrade: 10,
  }
]

function average(firstGrade, secondGrade) {
  return ((firstGrade + secondGrade) / 2).toFixed(2)
} 

function studentsAvg(student) {
  return `O aluno ${student.name} possui a média de
  ${average(student.firstGrade, student.secondGrade)}`
}

for (let student of students) {
  let avg = studentsAvg(student)
  alert(avg)

  let result = (average(student.firstGrade, student.secondGrade)) >= 7

  if (result) {
    alert('Parábens você passou no concurso !')
  } else {
    alert('Infelizmente não foi dessa vez')
  }
}
