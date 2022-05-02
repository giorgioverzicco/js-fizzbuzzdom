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

// MILESTONE 2-3
const row = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
  const col = document.createElement("div");
  col.classList.add("col");
  row.append(col);

  if (i % 3 === 0 && i % 5 === 0) {
    col.classList.add("fizz-buzz");
    col.innerText = "FizzBuzz";
  } else if (i % 3 === 0) {
    col.classList.add("fizz");
    col.innerText = "Fizz";
  } else if (i % 5 === 0) {
    col.classList.add("buzz");
    col.innerText = "Buzz";
  } else {
    col.innerText = i;
  }
}
