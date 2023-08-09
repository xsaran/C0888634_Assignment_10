// Name: Sarandeep Singh
// ID: C0888634
// Assignment 10
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const brushSizeSlider = document.getElementById("brushSizeSlider");
const eraserBtn = document.getElementById("erase");
const blueBrushBtn = document.getElementById("blue");
const blackBrushBtn = document.getElementById("black");
const pinkBrushBtn = document.getElementById("pink");
const yellowBrushBtn = document.getElementById("yellow");
const cleanBtn = document.getElementById("new");

let painting = false;
let brushColor = "black";
let brushSize = brushSizeSlider.value;

canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", stopPainting);
canvas.addEventListener("mousemove", draw);

eraserBtn.addEventListener("click", () => setBrushColor("white"));
blueBrushBtn.addEventListener("click", () => setBrushColor("#2979ff"));
blackBrushBtn.addEventListener("click", () => setBrushColor("#000000"));
pinkBrushBtn.addEventListener("click", () => setBrushColor("#f50057"));
yellowBrushBtn.addEventListener("click", () => setBrushColor("#ffd600"));
cleanBtn.addEventListener("click", clearCanvas);

brushSizeSlider.addEventListener("input", () => {
  brushSize = brushSizeSlider.value;
  document.getElementById("brushSize").innerHTML = brushSize;

});

function startPainting(event) {
  painting = true;
  draw(event);
}

function stopPainting() {
  painting = false;
  context.beginPath();
}

function draw(event) {
  if (!painting) return;
  context.lineWidth = brushSize;
  context.lineCap = "round";
  context.strokeStyle = brushColor;

  context.lineTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
  context.stroke();
  context.beginPath();
  context.moveTo(
    event.clientX - canvas.offsetLeft,
    event.clientY - canvas.offsetTop
  );
}

function setBrushColor(color) {
  brushColor = color;
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
