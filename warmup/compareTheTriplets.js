function solve (a0, a1, a2, b0, b1, b2) {
var A = [a0, a1, a2];
    var B = [b0, b1, b2];
    var pointA = 0, pointB = 0;

    for (var i = 0; i < A.length; i++) {
        if (A[i] > B[i]) {
            pointA += 1;
        } else if (A[i] < B[i]) {
            pointB += 1;
        }
    }
    console.log(pointA + " " + pointB);
}

function main() {
  solve(5, 6, 7, 3, 6, 10)
}
main();
