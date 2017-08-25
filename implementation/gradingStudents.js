function solve (grade) {
  var dikali5 = parseInt(grade / 5);
  var dibulat5 = (grade & 5 == 0) ? (dikali5 * 5) : ((dikali5 + 1) * 5);

  if (dibulat5 - grade < 3 && grade >= 38) {
    return dibulat5;
  }
  return grade;
}

function main () {
  var grades = [73, 67, 38, 33];
  for (var i = 0; i < grades.length; i++) {
    var grade = grades[i];
    var finalGrade = solve(grade);
    console.log(finalGrade);
  }
}

main();
