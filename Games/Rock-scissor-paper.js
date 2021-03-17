const pic = document.querySelector(".pic");
let ImgElem = "0";

//  Pic's Location
const rsp = {
	rock: "0",
	scissor: "-142px",
	paper: "-284px",
};

// Set computer choice
function computer(ImgElem) {
	// make array
	return Object.entries(rsp).find(function (v) {
		return v[1] === ImgElem; // it's currently rock("0")
	})[0]; // pick text(rock)
}

// make image continuously move
function intervalMaker() {
	IntervalElem = setInterval(function () {
		if (ImgElem === rsp.rock) {
			ImgElem = rsp.scissor;
		} else if (ImgElem === rsp.scissor) {
			ImgElem = rsp.paper;
		} else {
			ImgElem = rsp.rock;
		}
		document.querySelector("#computer").style.background =
			"url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " + ImgElem + " 0";
	}, 100);
}

const startButton = document.querySelector("#start");

// Start(click event)
startButton.addEventListener(
	"click",
	() => {
		intervalMaker();
	},
	{ once: true }
);
// intervalMaker()

// Set score value
const score = {
	scissor: 1,
	rock: 0,
	paper: -1,
};

//click Event
document.querySelectorAll(".btn").forEach(function (btn) {
	btn.addEventListener("click", function () {
		clearInterval(IntervalElem); // when you click, image stop for check the result at the momoent
		setTimeout(function () {
			intervalMaker();
		}, 1000);

		let myPick = this.innerText;
		const myScore = score[myPick];
		const computerScore = score[computer(ImgElem)];
		//결과 내기위한 변수
		const scoreGap = myScore - computerScore; //it's for bringing out the result
		if (scoreGap === 0) {
			pic.innerHTML = "even";
			pic.style.color = "grey";
			// if the score is -1 or -2
		} else if ([-1, 2].includes(scoreGap)) {
			pic.innerHTML = "win";
			pic.style.color = "dodgerblue";
		} else {
			pic.innerHTML = "lost";
			pic.style.color = "red";
		}
	});
});
