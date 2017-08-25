function main() {

    var ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
    var result = ar.reduce(function(sum, value){
        return sum + value;
    });
    console.log("" + result + "\n");
}

main();
