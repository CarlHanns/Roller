//variables
const rollButton = document.querySelector("#rollButton");
let Die = document.querySelector("#Die");
let totalScore = document.querySelector("#totalScore");
const showRolls = document.querySelector("#showRolls");
let rollsList = document.querySelector("#rollsList");
let dieRoll = []; // will record die roll

// event listeners

rollButton.addEventListener("click", function () {
  if (rollButton.innerHTML === "Rest") reset();
  else {
    let count = Number(Die.value);
    let sum = 0;

    while (count > 0) {
      let roll = Math.ceil(Math.random() * 6);
      sum = sum + roll;
      dieRoll.push(roll);

      count--;
    }
    totalScore.innerHTML = sum;
    rollButton.innerHTML = "Rest";
  }
});

showRolls.addEventListener("click", function () {
  let index = 0;

  while (index < dieRoll.length) {
    rollsList.innerHTML += "<li>" + dieRoll[index] + "</li>";
    index++;
  }
});
