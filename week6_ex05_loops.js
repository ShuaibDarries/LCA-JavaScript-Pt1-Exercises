// Array called "numbers" with 5 elements
const numbers = [1, 2, 3, 4, 5];

// for loop that prints each number in the "numbers" array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// while loop that counts down from 5 to 1
let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}

// Loop that prints the even numbers from the "numbers" array
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// Loop that calculates the sum of all numbers in the "numbers" array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
