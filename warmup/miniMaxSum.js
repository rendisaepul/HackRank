function main() {

  var arr = [20, 10, 50, 5, 80];
  var minSum = 0;
  var maxSum = 0;
  arr.sort((a, b) => a - b);
  for (var i = 0; i < arr.length - 1; i++) {
    minSum += arr[i];
    maxSum += arr[i + 1];
  }
  console.log(minSum + " " + maxSum);
}

main();
