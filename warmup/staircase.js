function main() {
    var n = 6;

    var result = "",
      space = " ",
      hash = "#";
  for(var i = n; i >= 1 ; i--){
      result += space.repeat(i - 1).concat(hash.repeat(n - (i - 1))) + "\n";
  }
  console.log(result);
}

main();
