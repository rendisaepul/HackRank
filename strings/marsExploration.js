function main () {
  var msg = 'SOSSPSSQSSOR';
  var result = 0;
  for(var i = 0; i < msg.length; i += 3) {
        if(msg.charAt(i) != 'S') {
            result++;
        }
        if(msg.charAt(i + 1) != 'O') {
            result++;
        }
        if(msg.charAt(i + 2) != 'S') {
            result++;
        }
  }
  console.log(result);
}

main();
