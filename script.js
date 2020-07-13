const inputValue = document.querySelectorAll('[type="range"]');
const inputColor = document.querySelectorAll('[type="text"]');
const divColor = document.querySelector("#color");

window.addEventListener("load", start);

function start() {
  inputValue.forEach((item) => {
    item.addEventListener("change", (event) => {
      console.log(item.value); //

      const red = inputValue[0].value;
      const green = inputValue[1].value;
      const blue = inputValue[2].value;

      divColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

      inputColor[0].value = red;
      inputColor[1].value = green;
      inputColor[2].value = blue;
    });
  });
}
