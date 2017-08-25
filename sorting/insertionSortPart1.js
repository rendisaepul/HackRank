function sorted(array) {
    var num = array[array.length - 1];
    var place = false;
    for (var i = array.length - 2; i >= 0; i--) {
      if (array[i] > num) {
        array[i + 1] = array[i];
        printArray(array);
      } else {
          array[i + 1] = num;
          printArray(array);
          place = true;
          break;
      }
    }
    if (!place) {
      array[0] = num;
      printArray(array);
    }
}
var printArray = array => console.log(array.join(' '));
var array = [2, 4, 6, 8, 3];
sorted(array);
