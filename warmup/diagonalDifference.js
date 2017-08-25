function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    var firstDiagonal = 0;
    var secondDiagonal = 0;

    for ( var i = 0; i < a.length; i++) {
        firstDiagonal += a[i][i];
        secondDiagonal += a[i][a.length - i -1];
    }
    var result = Math.abs(firstDiagonal - secondDiagonal);
    console.log(result);
}
main();
