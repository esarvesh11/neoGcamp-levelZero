var readlinesync = require('readline-sync');

var score = 0;
var highScores = [
  {
    name: "Messi",
    score: 5
  },
  {
    name: "Ronaldo",
    score: 7
  }
];

console.log("Hey folk, Welcome to CLI FIFA World Cup-Quiz App.");
var userName = readlinesync.question("May I know your good name? ");
console.log("Hello " + userName + "!");

function welcomeInstructions() {
  console.log("\nSome instructions before we start: \nFor each correct answer you will be awarded 1 point \nAt the end of a Quiz, Leaderboard will be displayed. Hope to see you there.\n");
  console.log("So without further ado, Let's get started! \n");
}

//get started
welcomeInstructions();

var questions = [
  {
    num: "first",
    question: "What is the name of the mascot for the 2023 FIFA Women’s World Cup? ",
    a: "A. Tazuni",
    b: "B. Tiger",
    c: "C. Nenya",
    d: "D. Kappu",
    answer: "a"
  },
  {
    num: "second",
    question: "Which country has won the most world cup titles? ",
    a: "A. Italy",
    b: "B. Brazil",
    c: "C. Argentina",
    d: "D. Portugal",
    answer: "b"
  },
  {
    num: "third",
    question: "Who among the following has won the most world cup titles in the Men’s World cup? ",
    a: "A. Pele",
    b: "B. Beckenbauer",
    c: "C. Del Piero",
    d: "D. Matthaus",
    answer: "a"
  },
  {
    num: "fourth",
    question: "Who is the all-time leading scorer at the men's World Cup? ",
    a: "A. Cristiano Ronaldo",
    b: "B. Lionel Messi",
    c: "C. Thierry Henry",
    d: "D. Miroslav Klose",
    answer: "d"
  },
  {
    num: "fifth",
    question: "Who is the winner of the 2018 FIFA world cup? ",
    a: "A. France",
    b: "B. Belgium",
    c: "C. Portugal",
    d: "D. Argentina",
    answer: "a"
  },
  {
    num: "sixth",
    question: "which 3 countries will host the 2026 World cup tournament? ",
    a: "A. U.S., Mexico and Canada",
    b: "B. US, Brazil, Mexico",
    c: "C. Canada, Mexico, Brazil",
    d: "D. Brazil, Mexico, Colombia",
    answer: "a"
  },
  {
    num: "seventh",
    question: "In what year was the World Cup first broadcast on TV? ",
    a: "A. 1952",
    b: "B. 1953",
    c: "C. 1954",
    d: "D. 1955",
    answer: "c"
  },
  {
    num: "last",
    question: "How many times has Messi won the FIFA World Cup? ",
    a: "A. 2",
    b: "B. 3",
    c: "C. 1",
    d: "D. 0",
    answer: "c"
  }
];

//play the quiz
function play(QnA) {
  var questionNumber = QnA.num;
  console.log("Here is your " + questionNumber + " question -> \n");
  console.log(QnA.question + "\n");
  console.log(QnA.a + "\n");
  console.log(QnA.b + "\n");
  console.log(QnA.c + "\n");
  console.log(QnA.d + "\n");


  var userAnswer = readlinesync.question("Enter your Answer Option: ");

  if (QnA.answer === userAnswer.toLowerCase()) {
    console.log("\nYou're right!");
    score++;
  } else {
    console.log("\nYou're wrong! ");
    console.log("Correct Option is " + QnA.answer.toUpperCase() + ".");
  }
  console.log("Your current score is: ", score + "\n");
}

//start iterating over questions array
function start() {
  for (var i = 0; i < questions.length; i++) {
    play(questions[i]);
  }
  console.log("Cool, you have successfully completed the Quiz.\n");
}

function calScore() {
  console.log("Your final score is: ", score);

  console.log("\n");

  for (var i = 0; i < highScores.length; i++) {
    if (score >= highScores[i].score) {
      console.log("Well done, you have made it to the leaderboard!!\n");
      var newEntry = {
        name: userName,
        score: score
      };
      highScores.push(newEntry);
      break;
    }
  }
}

//final leaderboard
function displayLeaderBoard() {
  console.log("-----------Game Over-----------\n");
  console.log("The final standings are as follows: \n");
  for (var j = 0; j < highScores.length; j++) {
    var name = highScores[j].name;
    var score = highScores[j].score;
    console.log("Name: " + name + ", Score:", score);
    console.log("\n");
  }
}

start();
calScore();
displayLeaderBoard();
console.log("Thanks for playing, Hope you've enjoyed!!");

