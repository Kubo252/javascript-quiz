const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
    correctAnswer: 'Mars'
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'O2', 'CH4'],
    correctAnswer: 'H2O'
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Jane Austen', 'Mark Twain', 'Charles Dickens'],
    correctAnswer: 'William Shakespeare'
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Blue whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Blue whale'
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Pb', 'Fe'],
    correctAnswer: 'Au'
  },
  {
    question: 'What is the capital of Spain?',
    options: ['Paris', 'Berlin', 'London', 'Madrid'],
    correctAnswer: 'Madrid'
  },
  {
    question: 'Which planet is closest to the sun?',
    options: ['Mars', 'Jupiter', 'Venus', 'Mercury'],
    correctAnswer: 'Mercury'
  },
  {
    question: 'What is the chemical symbol for oxygen?',
    options: ['H2O', 'CO2', 'O2', 'CH4'],
    correctAnswer: 'O2'
  },
  {
    question: 'Who wrote "The Great Gatsby"?',
    options: ['F. Scott Fitzgerald', 'Ernest Hemingway', 'Mark Twain', 'Charles Dickens'],
    correctAnswer: 'F. Scott Fitzgerald'
  }
];

let currentQuestion = 0;
let correctAnswers = 0;
let selectedQuestions = [];
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('nextButton');

// Function to shuffle array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Prompt user to input the number of questions
let numberOfQuestions = parseInt(prompt('How many questions would you like to answer?'));

// Ensure the input is valid and within the range of available questions
if (numberOfQuestions <= 0 || numberOfQuestions > quizData.length) {
  alert('Please enter a valid number of questions between 1 and ' + quizData.length + '. Defaulting to 3 questions.');
  numberOfQuestions = 3; // Default to 3 questions if input is invalid
}

// Randomly select the specified number of questions
selectedQuestions = shuffleArray(quizData).slice(0, numberOfQuestions);

function displayQuestion() {
  const currentQuizData = selectedQuestions[currentQuestion];
  questionElement.textContent = currentQuizData.question;

  optionsElement.innerHTML = '';
  currentQuizData.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(answer) {
  const currentQuizData = selectedQuestions[currentQuestion];
  if (answer === currentQuizData.correctAnswer) {
    feedbackElement.textContent = 'Correct!';
    correctAnswers++;
  } else {
    feedbackElement.textContent = 'Incorrect! The correct answer is ' + currentQuizData.correctAnswer;
  }
  nextButton.style.display = 'block'; // Display the "Next Question" button
}

nextButton.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < selectedQuestions.length) {
    displayQuestion();
    feedbackElement.textContent = ''; // Clear feedback text
    nextButton.style.display = 'none'; // Hide the "Next Question" button
  } else {
    endQuiz();
  }
});

function endQuiz() {
  questionElement.textContent = 'End of Quiz!';
  optionsElement.innerHTML = '';
  feedbackElement.textContent = 'You answered ' + correctAnswers + ' out of ' + selectedQuestions.length + ' questions correctly.';
  nextButton.style.display = 'none'; // Hide the "Next Question" button
}

// Display the first question when the page loads
displayQuestion();
