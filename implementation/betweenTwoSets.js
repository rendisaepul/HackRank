function range (a, b) {
  var ret = [];

  for (var i = a; i <= b; i++) {
    ret.push(i);
  }
  return ret;
}

function main() {
  var a = [2, 4];
  var b = [16, 32, 96];
  var aMax = Math.max(...a);
  var bMin = Math.min(...b);
  var result = range(aMax, bMin).filter(num => a.every(i => num % i === 0) && b.every(j => j % num === 0));
  console.log(result.length);
}

main();
