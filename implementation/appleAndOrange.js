function main() {
    var s_temp = [7, 11];
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = [5, 15];
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = [3, 2];
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = [-2, 2, 1];
    apple = apple.map(Number);
    orange = [5, -6];
    orange = orange.map(Number);

    var fallenApples = apple.filter(function(ap) {
        return (a + ap >= s) && (a + ap <= t);
    });

    var fallenOranges = orange.filter(function(o) {
        return (b + o >= s) && (b + o <= t);
    });

    console.log(fallenApples.length);
    console.log(fallenOranges.length);
}

main();
