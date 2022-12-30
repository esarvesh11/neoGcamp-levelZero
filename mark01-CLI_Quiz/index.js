var readlinesync = require('readline-sync');

var score = 0;
var highScores = [
  {
    name: "Pranav",
    score: 3
  },
  {
    name: "Rushabh",
    score: 4
  }
];

console.log("Hey folk, ");
var userName = readlinesync.question("May I know your good name? ");
console.log("Welcome " + userName + ", Let's test how well you know about Sarvesh Shirude!!");
console.log("\nSome instructions before we start: \nFor each correct answer you will be awarded 1 point \nAt the end of a Quiz, Leaderboard will be displayed. \nHope to see you there, All the Best!!\n");

var questions = [
  {
    question: "Where do I stay? ",
    answer: "Dombivli"
  },
  {
    question: "What is my height in feet? ",
    answer: "6'2"
  },
  {
    question: "Who is my favourite sportsperson? ",
    answer: "Virat Kohli"
  },
  {
    question: "In which year I was born? ",
    answer: "2002"
  },
  {
    question: "In which year I am currently studying? ",
    answer: "3rd"
  }
];

function check(ques, ans){
  var userAns = readlinesync.question(ques);

  if(userAns.toLowerCase() === ans.toLowerCase()){
    console.log("Yayy, you're right!");
    score++;
  } else{
    console.log("Uff, you're wrong..");
    console.log("Correct answer is: " + ans.toUpperCase());
  }
  console.log("Your score is: ", score);
  console.log("\n======================\n");
  
}

function play(){
  for(var i = 0; i < questions.length; i++){
    var ques = questions[i].question;
    var ans = questions[i].answer;

    check(ques, ans); //iterating over questions array
    for (var j = 0; j < highScores.length; j++) {
      if (score > highScores[j].score) {
        console.log("Awesome, " + userName + " you just broke a record.\n");
        break;
      }
    }
  }
}

//Update Leaderboard
function UpdateLeaderBoard() {
  for (var j = 0; j < highScores.length; j++) {
    if (score > highScores[j].score) {
      console.log("Great, you have made it to the Leaderboard!!");
      var newPlayer = {
        name: userName,
        score: score
      };
      highScores.push(newPlayer);
      break;
    }
  }
}

//Start the quiz
play();
UpdateLeaderBoard();

console.log("\nYour final Score is:", score);
console.log("\n===========Game Over===========");
function leaderBoard() {
  console.log("\nFinal LeaderBoard is: ");
  for (var i = 0; i < highScores.length; i++) {
    var name = highScores[i].name;
    var scored = highScores[i].score;
    console.log(name + " : " + scored);
  }
}
//print
leaderBoard();

