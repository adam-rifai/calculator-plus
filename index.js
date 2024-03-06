const displayEl = document.getElementById("display");
const clearEl = document.getElementById("clear");

function display_content(input) {
  displayEl.value += input;
}

function clear_content() {
  displayEl.value = "";
}

function calculate() {
  displayEl.value = eval(displayEl.value);
}

function delete_last_element() {
  displayEl.value = displayEl.value.slice(0, -1);
}

function copy_content() {
  let input = document.getElementById("display");
  input.select(); // Select the text inside the input element
  document.execCommand("copy"); // Copy the selected text to the clipboard
}
