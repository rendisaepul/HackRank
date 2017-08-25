function main() {
    var arr = [-4, 3, -9, 0, 4, 1] ;

    var positiv = 0;
    var negative = 0;
    var zero = 0;
    for (var i = 0; i < arr.length; i++) {
        var curr = arr[i];
        if (curr > 0) {
            positiv++;
        } else if (curr < 0) {
            negative++;
        } else {
            zero++;
        }
    }
    console.log((positiv /n).toFixed(6));
    console.log((negative /n).toFixed(6));
    console.log((zero /n).toFixed(6));
}

main();
