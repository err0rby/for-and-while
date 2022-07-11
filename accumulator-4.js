let arr = ["Салман", "Адам", "Иса", "Я", "Ахмед"];
let accumulator = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == "А") {
        accumulator.push(arr[i]);
    }
}
console.log (accumulator);