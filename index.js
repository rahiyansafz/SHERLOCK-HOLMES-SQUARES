// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

("use strict");

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

// Complete the squares function below.
function countSquares(lower, upper) {
  var lowerSquare = Math.ceil(Math.sqrt(lower));
  var upperSquare = Math.floor(Math.sqrt(upper));
  if (lowerSquare > upperSquare) return 0;
  else return upperSquare - lowerSquare + 1;
}

function main() {
  var t = parseInt(readLine());
  for (var i = 0; i < t; i++) {
    var numbers = readLine()
      .split(" ")
      .map(function(x) {
        return parseInt(x);
      });
    console.log(countSquares(numbers[0], numbers[1]));
  }
}
////////////////////////

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

//////////////////////////////////////////////////////

function countSquares(lower, upper) {
  var lowerSquare = Math.ceil(Math.sqrt(lower));
  var upperSquare = Math.floor(Math.sqrt(upper));
  if (lowerSquare > upperSquare) return 0;
  else return upperSquare - lowerSquare + 1;
}

function main() {
  var t = parseInt(readLine());
  for (var i = 0; i < t; i++) {
    var numbers = readLine()
      .split(" ")
      .map(function(x) {
        return parseInt(x);
      });
    console.log(countSquares(numbers[0], numbers[1]));
  }
}
/////////////////////////////////////////////////
var set = [];
var i = 1;

function processData(input) {
  set = input.split(/\n| /);
  while (i < set.length) {
    var counter = 0;
    a = set[i];
    b = set[i + 1];
    for (j = a; j <= b; j++) {
      if (Math.sqrt(j) % 1 === 0) counter++;
    }
    console.log(counter);
    i = i + 2;
  }
}
