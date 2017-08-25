function main() {
  var difference = 2;
  var array = [1, 5, 3, 4, 2];
  var sortedArray = array.sort((a, b) => a - b);
  var pairs = 0;

  for (var i = 0; i < sortedArray.length - 1; i++) {
    for (var j = i + 1; j < sortedArray.length; j++) {
      if (sortedArray[j] - sortedArray[i] == difference) {
        pairs++;
      }
    }
  }
  console.log(pairs);
}

main();
