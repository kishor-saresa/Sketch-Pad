function myfun(){
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.innerText = ("");
    container.appendChild(cell).className = "grid-item";
  };
};
var rows=prompt("Enter Row");
var columns=prompt("Enter column");
makeRows(rows, columns);
}
