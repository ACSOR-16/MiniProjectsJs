console.log("Hello world");
const pressed = [];
const secretCode = "webos";

window.addEventListener('keyup', (event) => {
  console.log(event.key);
  pressed.push(event.key);
  pressed.splice(
    -secretCode.length -1,
    pressed.length - secretCode.length
    );
  
  if (pressed.join("").includes(secretCode)) {
    console.log("DING DING");
    cornify_add();
  }
  console.log(pressed);
});