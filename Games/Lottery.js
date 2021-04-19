// Set 45 numbers
let options = Array(45)
	.fill() // make () * 45
	//for matching one on one
	.map((elem, index) => {
		return index + 1;
	});
let suffle = [];
const btnElem = document.querySelector(".lottery_btn");

// Mixed numbers randomly
while (options.length > 0) {
	let pick = options.splice(Math.floor(Math.random() * options.length), 1)[0];
	suffle.push(pick);
}
const bonus = suffle[suffle.length - 1]; // Bonus number (pick last number in suffle)

// Listed sequentially.
// Pick 6 numbers by slice
const numbers = suffle.slice(0, 6).sort((p, c) => {
	return p - c;
});
let result = document.querySelector("#result");

// Control Css in JS
function printBall(numberElem, result) {
	const ball = document.createElement("div");
	ball.textContent = numberElem;
	ball.style.border = "1px solid black";
	ball.style.display = "inline-block";
	ball.style.textAlign = "center";
	ball.style.borderRadius = "20px";
	ball.style.width = "20px";
	ball.style.height = "20px";
	ball.style.marginRight = "5px";
	ball.style.padding = "6px";
	let backColor;
	if (numberElem <= 10) {
		backColor = "red";
	} else {
		backColor = "dodgerblue";
	}
	ball.style.backgroundColor = backColor;
	// add div class in #result for showing ball
	result.appendChild(ball);
}

// Click Event
btnElem.addEventListener(
	"click",
	() => {
		const bonusElem = document.querySelector(".bonus");
		bonusElem.innerHTML = "";
		result.innerHTML = "";
		// Show ball in order of number
		for (let i = 0; i < numbers.length; i++) {
			function closure(j) {
				setTimeout(function callBack() {
					printBall(numbers[j], result);
				}, (j + 1) * 1000);
			}
			closure(i);
		}
		// show bonus after ball
		setTimeout(function callBack() {
			printBall(bonus, bonusElem);
		}, 7000);
	},
	{ once: true }
);
