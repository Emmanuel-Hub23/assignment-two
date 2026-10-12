const totalSeconds = 98765;
const days = Math.floor(totalSeconds / (24 * 60 * 60));
const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
const seconds = totalSeconds % 60;
console.log(`${days} day, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

let total = 0;
total += 5000;
total += 2500;
total += 1500;
console.log("After items:", total);
total *= 0.9;
console.log("After 10% discount:", total);
total *= 1.075;
console.log("After 7.5% VAT:", total);
total /= 3;
console.log("Each person pays:", total.toFixed(2));

let x = 5;
x++;
x **= 2;
x %= 7;
x -= 1;
console.log("Final x:", x);
