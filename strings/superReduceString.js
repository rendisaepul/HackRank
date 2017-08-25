function main() {
  var line = 'aaabccddd';
  var acc = "";
    for(var i = 0; i < line.length; i++) {
        var c = line[i];
        if(acc.length > 0 && acc[acc.length - 1] === c) {
            acc = acc.slice(0, acc.length - 1);
        } else {
            acc += c;
        }
    }
    console.log(acc.length === 0 ? "Empty String" : acc);
}
main();
