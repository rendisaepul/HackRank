function main() {
    ar = [1, 2, 3, 4, 10, 11];
    var result = ar.reduce(function(sum,  value) {
        return sum + value;
    });
    console.log(result);
}

main();
