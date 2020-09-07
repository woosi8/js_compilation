// Fill Listeners
const empties = document.querySelectorAll(".empty");
const fill = document.querySelector(".fill"); //Img class

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

// Drag Functions
function dragStart() {
  this.className += " hold";
  // to make sure that this happens after we actually move it
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  // empty + hovered
  this.className += " hovered";
}
function dragLeave() {
  // replaces empty
  this.className = "empty";
}
// don't work until dragover prevent
function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
