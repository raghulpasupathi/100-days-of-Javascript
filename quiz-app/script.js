// CREATE A QUIZ CLASS
class Quiz {
  constructor(questions) {
      this.score = 0;
      this.questions = questions;
      this.questionIndex = 0;
  }

  getQuestionIndex() {
      return this.questions[this.questionIndex];
  }

  guess(answer) {
      if (this.getQuestionIndex().isCorrectAnswer(answer)) {
          this.score++;
      }
      this.questionIndex++;
  }

  isEnded() {
      return this.questionIndex === this.questions.length;
  }
}

class Question {
  constructor(text, choices, answer) {
      this.text = text;
      this.choices = choices;
      this.answer = answer;
  }

  isCorrectAnswer(choice) {
      return this.answer === choice;
  }
}

function displayQuestion() {
  if (quiz.isEnded()) {
      showScores();
  } else {
      // show question
      let questionElement = document.getElementById("question");
      questionElement.innerHTML = quiz.getQuestionIndex().text;

      // show options
      let choices = quiz.getQuestionIndex().choices;
      for (let i = 0; i < choices.length; i++) {
          let choiceElement = document.getElementById("choice" + i);
          choiceElement.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }

      showProgress();
  }
};

// Answer validation
function guess(id, guess) {
  let button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      displayQuestion();
  }
};

// quiz progress
function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let ProgressElement = document.getElementById("progress");
  ProgressElement.innerHTML =
      `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
};

// display scores
function showScores() {
  let quizEndHTML =
      `
  <h1>Quiz Completed</h1>
  <h2 id='score'> Your scored: ${quiz.score} of ${quiz.questions.length}</h2>
  <div class="quiz-repeat">
      <a href="index.html">Take Quiz Again</a>
  </div>
  `;
  let quizElement = document.getElementById("quiz");
  quizElement.innerHTML = quizEndHTML;
};


let questions = [
  new Question(
      "Which of the following is not a kind of system software?", ["BIOS software", "Unix, Linux", "Microsoft Windows, and Mac OS", "Microsoft Word"], "Microsoft Word"
  ),
  new Question(
      "What is the full form of GUI?", ["Graphical Universal Interface", "Graphical User Interface", "General Utility Interface", "General Universal Interface"], "Graphical User Interface"
  ),
  new Question(
      "What is the full form of a Virus?", ["Very Information Record User Search", "Very Interchanged Result Until Source", "Vital Information Resources Under Siege", "Vital Information Resources Under Search"], "Vital Information Resources Under Siege"
  ),
  new Question(
      "What are the main functions of system utilities?", ["Data recovery", "Backup", "Virus protection", "All of the above"], "All of the above"
  ),
  new Question(
      "Which is not a type of utility system software?", ["Antivirus", "Firewalls", "Disk defragmenter", "MS-DOS"], "MS-DOS"
  )
];

// start quiz
let quiz = new Quiz(questions);

// display questions
displayQuestion();


// quiz timer feature
let quizTime = 600; //in secs

let counting = document.getElementById("count-down");

function startCountdown() {
  let quizTimer = setInterval(function() {
      if (quizTime <= 0) {
          clearInterval(quizTimer);
          showScores();
      } else {
          quizTime--;
          let sec = Math.floor(quizTime % 60);
          let min = Math.floor(quizTime / 60) % 60;
          counting.innerHTML = `TIME: ${min} : ${sec}`;
      }
  }, 1000);
}

startCountdown();