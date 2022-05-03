/* BONUS ONE-LINER
for (let i = 0; i++ < 100; console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i));
*/

const row = document.querySelector(".row");

for (let i = 1; i <= 100; i++) {
  const col = document.createElement("div");
  col.classList.add("col");
  row.append(col);

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    col.classList.add("fizz-buzz");
    col.innerText = "FizzBuzz";
  } else if (i % 3 === 0) {
    console.log("Fizz");
    col.classList.add("fizz");
    col.innerText = "Fizz";
  } else if (i % 5 === 0) {
    console.log("Buzz");
    col.classList.add("buzz");
    col.innerText = "Buzz";
  } else {
    console.log(i);
    col.innerText = i;
  }
}
