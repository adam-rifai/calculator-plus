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
  displayEl.select();
  displayEl.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(displayEl.value);
}
