function main () {
  var array = [31415926535897932384626433832795, 1, 3, 10, 3, 5];
  var result = array.sort(function(a, b) {return a - b});
  console.log(result);
}

main();
