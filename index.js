const readlineSync = require("readline-sync");

let score = 0;

const highScores = [
  {
    name: "Hrishikesh",
    score: 5,
  },
  {
    name: "Leena",
    score: 4,
  },
];

const questions = [
  {
    question: "Who is the first Indian chess world champion?",
    answer: "Vishwanathan Anand",
  },
  {
    question: "Name the famous chess streamer from India.",
    answer: "Samay Raina",
  },
  {
    question:
      "Which chess world champion is also known as the magician of Riga?",
    answer: "Mikhail Tal",
  },
  {
    question: "Who is current world champion?",
    answer: "Magnus Carlsen",
  },
  {
    question: "Mikhail Tal's games were famous for his _____ plays?",
    answer: "Sacrificial",
  },
];

const welcome = () => {
  const userName = readlineSync.question("Hey buddy! Can I get your name?");
  console.log(
    `Welcome ${userName} let's see how passionate you are about chess..`
  );
};

const play = (question, answer) => {
  const userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Well done! right answer");
    score++;
  } else {
    console.log("Wrong answer.");
  }

  console.log("Your score is: ", score);
  console.log("---------------------------------------");
};

const game = () => {
  for (let i = 0; i < questions.length; i++) {
    let currQuestion = questions[i];
    play(currQuestion.question, currQuestion.answer);
  }
};

const showHighScores = () => {
  console.log("Hey! you did well, your score is", score);
  console.log(
    "Let me know if you are the new high scorer. I'll update the list"
  );
  console.log("The current highscores are:-");
  highScores.map((score) => console.log(score.name, ":", score.score));
};

welcome();
game();
showHighScores();
