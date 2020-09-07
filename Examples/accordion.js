const btnCollapse = document.querySelector("#btn-collapse"),
  questions = document.querySelectorAll(".panel-question"),
  heading = document.querySelectorAll(".panel-heading"),
  pbody = document.querySelectorAll(".panel-body");

heading.forEach((e) => {
  e.addEventListener("click", (e) => {
    questions.forEach((elem) => {
      // remove active Class from currentTarget(added active panel-questions)
      elem.classList.remove("active");
      // add active Class in clicked panel-questions
      e.target.parentNode.classList.add("active");
      activateBody();
    });
  });
});

// choose activateBody or closeElem for panel-body opened or closed at first
// activateBody();
closeElem();

// close All opend panel-body
btnCollapse.addEventListener("click", () => {
  pbody.forEach((elem) => {
    elem.style.display = "none";
  });
});

function closeElem() {
  for (var i = 0; i < pbody.length; i++) {
    pbody[i].style.display = "none";
  }
}

// If there a panel-questions that has active Class, change panel-body display value into block.
function activateBody() {
  // closeElem()
  const activePanel = document.querySelector(
    ".panel-question.active .panel-body"
  );
  const activeElem = document.querySelector(".panel-question.active");
  if (activeElem != null) {
    activePanel.style.display = "block";
  }
}
