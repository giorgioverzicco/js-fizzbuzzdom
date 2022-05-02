// MILESTONE 1
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// BONUS ONE-LINER
for (let i = 0; i++ < 100; console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i));
