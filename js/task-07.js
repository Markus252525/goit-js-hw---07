let controlFontSize = document.getElementById("font-size-control");

let text = document.getElementById("text");

controlFontSize.oninput = function() {
  text.style.fontSize = controlFontSize.value + "px";
};