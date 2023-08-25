console.log("hello world");
const divS = document.querySelectorAll("div");
const button = document.querySelector("button");

divS.forEach( div => div.addEventListener("click", logText, {capture: false, once: true}));
button.addEventListener("click", () => {
  console.log("click");
}, {
  once: true
});

function logText(event) {
  console.log(this.classList.value);
}