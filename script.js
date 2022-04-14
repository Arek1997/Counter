const inc = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const dec = document.querySelector(".decrease");
const coun = document.querySelector(".counter");

let initNumber = 0;

const colorChanger = function () {
  if (initNumber > 0) {
    coun.style.color = "green";
  } else if (initNumber < 0) {
    coun.style.color = "red";
  } else {
    coun.style.color = "black";
  }
};
inc.addEventListener("click", function () {
  initNumber++;
  coun.textContent = initNumber;
  colorChanger();
});

dec.addEventListener("click", function () {
  initNumber--;
  coun.textContent = initNumber;
  colorChanger();
});

reset.addEventListener("click", function () {
  initNumber = 0;
  coun.textContent = initNumber;
  coun.style.color = "black";
});
