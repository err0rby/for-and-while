let arr = [1, 2, 3, -4, 5, 6, -7, 8, -9, 10];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log (arr[i]);
    }
}
let j = 0;
while (j < arr.length) {
    if (arr[j] % 2 != 0) {
        console.log (arr[j]);
    }
    j++
}