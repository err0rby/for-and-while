let arr = ["javascript", "css", "html", "что", "вам", "здесь", "такого", "нормального", "написать", "сегодня"];
let accumulator = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
        accumulator.push(arr[i]);
    }
}
console.log (accumulator);