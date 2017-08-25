let insertIntoSorted = arr => {
    let num = arr[arr.length - 1];
    let placed = false;
    for(let j = arr.length - 2; j >= 0; j--) {
        if(arr[j] > num) {
            arr[j + 1] = arr[j];
            printArray(arr);
        } else {
            arr[j + 1] = num;
            printArray(arr);
            placed = true;
            break;
        }
    }
    if(!placed) {
        arr[0] = num;
        printArray(arr);
    }
};

let printArray = arr => console.log(arr.join(" "));
var arr = [2, 4, 6, 8, 3];
insertIntoSorted(arr);
