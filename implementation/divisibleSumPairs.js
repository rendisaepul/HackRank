function main () {
  var divisor = 3;
  var array = [1, 3, 2, 6, 1, 2];
  var count = 0;

  for (var i = 0; i < array.length - 1; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if ((array[i] + array[j]) % divisor === 0) {
        count++;
      }
    }
  }
  console.log(count);
}

main();
