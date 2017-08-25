function prossesData(value, array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
}

var value = 4;
var array = [1, 4, 5, 7, 9, 12];
var result = prossesData(value, array);
console.log(result);
