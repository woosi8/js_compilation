let numberGroup, rightAnswers;

// pick right numbers
function pickNumbers() {
  numberGroup = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  rightAnswers = [];

  for (let index = 1; index < 5; index++) {
    let pickElem = numberGroup.splice(
      Math.floor(Math.random() * (10 - index)),
      1
    )[0]; // why?[0] : splice has array but it needs number.
    rightAnswers.push(pickElem);
  }
}

pickNumbers();
console.log(rightAnswers);

const resultElem = document.querySelector("#baseball h2");
const formElem = document.querySelector("form");
const inputelem = document.querySelector("input");
const buttonElem = document.querySelector("button");
inputelem.type = "number";

let beWrongNumbers = 0;
inputelem.focus();

function judgeScore(e) {
  e.preventDefault();
  const answer = inputelem.value;

  // answer is string, so it needs to make rightAnswers string by join
  if (answer === rightAnswers.join("")) {
    resultElem.textContent = "HomeRun";
    resultElem.style.color = "#8fceff";
    inputelem.value = "";
    inputelem.focus();
    pickNumbers();
    beWrongNumbers = 0;
  } else {
    // make answer array for comparing with rightAnswers
    const myAnswers = answer.split("");
    let strike = 0;
    let ball = 0;
    beWrongNumbers += 1;
    if (beWrongNumbers > 5) {
      resultElem.style.color = "#ff0000";
      resultElem.textContent = `It can't be more than 5times, the answer is  ${rightAnswers.join(
        ","
      )} `;
      inputelem.value = "";
      inputelem.focus();
      pickNumbers();
      beWrongNumbers = 0;
    } else {
      for (let i = 0; i < 5; i++) {
        // Number : Make myAnswers number for comparing with rightAnswers
        if (Number(myAnswers[i]) === rightAnswers[i]) {
          strike += 1;
        }
        // if there's no myAnswers in rightAnswers, return -1
        // so if it is bigger than -1,
        // it menas it has number in rightAnswers but dosen't match place
        else if (rightAnswers.indexOf(Number(myAnswers[i])) > -1) {
          ball += 1;
        }
      }
      resultElem.style.color = "#000";
      resultElem.textContent =
        "Score: " +
        strike +
        " Strike " +
        ball +
        " Ball " +
        " Trial " +
        beWrongNumbers +
        "";
      inputelem.value = "";
      inputelem.focus();
    }
  }
}

formElem.addEventListener("submit", judgeScore);

// limit length of input key ( link in #baseball > input oninput)
function numberMaxLength(e) {
  if (e.value.length > e.maxLength) {
    e.value = e.value.slice(0, e.maxLength);
  }
}
