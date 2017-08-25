function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2) {
    return 'NO';
  }
  if ((x1 < x2) && (v1 > v2)) {
      var xDif = Math.abs(x1 - x2);
      var vDif = Math.abs(v1 - v2);
      if (xDif % vDif == 0) {
        return 'YES';
      } else {
          return 'NO';
      }
  }
  return 'NO';
}

console.log(kangaroo(0, 2, 5, 3));
