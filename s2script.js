function dis(val) {
  if (val === 'CE') {
    let current = document.getElementById("res").value;
    document.getElementById("res").value = current.slice(0, -1);
  } else {
    document.getElementById("res").value += val;
  }
}

function solve() {
  try {
    let x = document.getElementById("res").value;
    let y = eval(x);
    document.getElementById("res").value = y;
  } catch (e) {
    document.getElementById("res").value = "Error";
  }
}

function clr() {
  document.getElementById("res").value = "";
}
