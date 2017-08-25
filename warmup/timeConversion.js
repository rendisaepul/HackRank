function main() {
  var time = '01:05:45PM';
  var hours = time.substr(0, 2);
  var mins = time.substr(3, 2);
  var secs = time.substr(6, 2);
  var pmOrAm = time.substr(-2, 2);

  if (hours === '12' && pmOrAm === 'AM'){
    console.log(`00:${mins}:${secs}`)
  } else if (hours !== '12' && pmOrAm === 'PM'){
      console.log(`${parseInt(hours) + 12}:${mins}:${secs}`)
  } else {
      console.log(`${hours}:${mins}:${secs}`)
  }
}

main();
