const Form1 = document.getElementById("Form1");
const Form2 = document.getElementById("Form2");
const Form3 = document.getElementById("Form3");

let Next1 = document.getElementById("Next1");
let Next2 = document.getElementById("Next2");
let Back1 = document.getElementById("Back1");
let Back2 = document.getElementById("Back2");

const progress = document.getElementById("progress");

function formMulti() {
  Next1.addEventListener("click", () => {
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    progress.style.width = "240px";
  });
  Back1.addEventListener("click", () => {
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    progress.style.width = "120px";
  });
  Next2.addEventListener("click", () => {
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    progress.style.width = "360px";
  });
  Back2.addEventListener("click", () => {
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    progress.style.width = "240px";
  });
}
formMulti();
