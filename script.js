let welcoming_messege = prompt(
  "Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variable\n3. math"
);

let answer;

switch (welcoming_messege) {
  case "strings":
    answer = prompt("რა არის რა არის typeof(5)?");
    if (answer.toLowerCase() === "number") {
      alert("სწორია!");
    } else if (answer.toLowerCase() !== "number") {
      alert("არასწორია!");
    }
    break;
  case "variable":
    answer = prompt("შეიძლება თუ არა let-ის რედეკლალირება");
    if (answer.toLowerCase() === "yes") {
      alert("სწორია!");
    } else if (answer.toLowerCase() !== "yes") {
      alert("არასწორია!");
    }
    break;
  case "math":
    answer = prompt("რას აბრუნებს console.log(Math.floor(2.1))");
    if (answer.toLowerCase() === "ori") {
      alert("სწორია!");
    } else if (answer.toLowerCase() !== "ori") {
      alert("არასწორია!");
    }
    break;
}
