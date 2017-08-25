function main() {
  var largest = 0;
  var counts = {};
  var ar = [3, 1, 2, 3];
  for (var i = 0; i < ar.length; i++) {
    var num = ar[i];
    if (num > largest) {
      largest = num;
    }
    counts[num] = (counts[num] || 0) + 1;
  }
  console.log(counts[largest]);
}

main();
