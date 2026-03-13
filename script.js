const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const questionText = document.getElementById('question-text');
const optionsDiv = document.getElementById('options');

const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: "Mars"
  },
  {
    question: "What is the capital city of France?",
    options: ["Rome", "Madrid", "Paris", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Which gas do plants absorb from the atmosphere for photosynthesis?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide"
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  }
];

let score = 0;
let current = 0;

function startQuiz() {
    startScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const { question, options } = questions[current];

    questionText.textContent = question;
    optionsDiv.innerHTML =  options.map((option) => `
        <button class='option-btn'>${option}</button>
    `).join('');
}

startBtn.addEventListener('click', startQuiz);