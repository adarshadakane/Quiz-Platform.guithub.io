// Quiz questions and answers
const quizData = [
    {
      question: "Which is the fastest bird in the world?",
      choices: ["Bald Eagle", "Peregrine Falcon","Hummingbird", "Raven"],
      correctAnswer: 1
    },

    {
      question: "How many rings appear on the Olympic flag?",
      choices: ["1", "7", "3", "5"],
      correctAnswer: 1
    },
    {
      question: "Which is the longest river in the world?",
      choices: ["Amazon", "Mississippi", "Nile", "Yangtze"],
      correctAnswer: 2
    },

    {
      question: "Which planet is the 3rd closest to the sun?",
      choices: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: 0
    }
    // Add more questions here
  ];
  
  const quizContainer = document.getElementById("quiz");
  const questionElement = document.getElementById("question");
  const choicesList = document.getElementById("choices");
  const submitButton = document.getElementById("submit");
  const resultElement = document.getElementById("result");
  
  let currentQuestion = 0;
  let score = 0;
  let userAnswered = false;
  
  // Function to load a question
  function loadQuestion() {
    const question = quizData[currentQuestion];
    questionElement.textContent = question.question;
  
    choicesList.innerHTML = "";
    question.choices.forEach((choice, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<input type="radio" name="choice" value="${index}" onchange="checkAnswer()"><span>${choice}</span>`;
      choicesList.appendChild(li);
    });
  }
  
  // Function to check the answer
  function checkAnswer() {
    if (userAnswered) {
      return;
    }
  
    const selectedChoice = document.querySelector("input[name=choice]:checked");
    if (!selectedChoice) return;
  
    const answer = Number(selectedChoice.value);
    const correctChoice = quizData[currentQuestion].correctAnswer;
  
    if (answer === correctChoice) {
      score++;
      selectedChoice.parentNode.style.color = "green";
    } else {
      choicesList.children[correctChoice].style.color = "green";
      selectedChoice.parentNode.style.color = "red";
    }
  
    userAnswered = true;
  
    setTimeout(() => {
      currentQuestion++;
      if (currentQuestion === quizData.length) {
        showResult();
      } else {
        userAnswered = false;
        loadQuestion();
      }
    }, 1000);
  }
  
  // Function to show the result
  function showResult() {
    quizContainer.style.display = "none";
    resultElement.textContent = `Your score: ${score}/${quizData.length}`;
    resultElement.style.display = "block";
  }
  
  // Initial question load
  loadQuestion();
  