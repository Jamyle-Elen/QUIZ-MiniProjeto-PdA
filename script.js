const questions = [
  {
    question:
      "LEAGUE OF LEGENDS: Neste momento, qual é a versão atual do League of Legends?",
    answers: [
      { text: "Alpha", correct: false },
      { text: "V1.0", correct: false },
      { text: "Infinity", correct: false },
      { text: "Beta", correct: true },
    ],
  },
  {
    question: "LEAGUE OF LEGENDS: Como o Rammus pede desculpas?",
    answers: [
      { text: '"Desculpe-me, foi sem querer."', correct: false },
      { text: '"Sinto muito, estou indo embora."', correct: false },
      { text: '"OK, OK, OK..."', correct: true },
      { text: '"Errei, bola pra frente."', correct: false },
    ],
  },
  {
    question:
      "VALORANT: Qual arma é conhecida por dar mais dano no jogo Valorant?",
    answers: [
      { text: "Phantom", correct: false },
      { text: "Vandal", correct: false },
      { text: "Operator", correct: true },
      { text: "Sheriff", correct: false },
    ],
  },
  {
    question:
      "FORTNITE: Qual localização foi destruída durante o evento 'The End'?",
    answers: [
      { text: "Tilted Towers", correct: false },
      { text: "Dusty Depot", correct: true },
      { text: "Retail Row", correct: false },
      { text: "Loot Lake", correct: false },
    ],
  },
  {
    question:
      "CS: Qual arma é conhecida por ser a 'One Shot Kill' na cabeça, independentemente da distância?",
    answers: [
      { text: "AK-47", correct: false },
      { text: "AWP", correct: true },
      { text: "M4A4", correct: false },
      { text: "Desert Eagle", correct: false },
    ],
  },
  {
    question:
      "VALORANT: Qual agente tem a habilidade de reviver um aliado morto?",
    answers: [
      { text: "Raze", correct: false },
      { text: "Cypher", correct: false },
      { text: "Sage", correct: true },
      { text: "Reyna", correct: false },
    ],
  },
  {
    question: "Em Counter-Strike e Valorant, o que significa 'eco round'?",
    answers: [
      { text: "Comprar armas mais poderosas", correct: false },
      { text: "Economizar dinheiro para rodadas futuras", correct: true },
      { text: "Utilizar táticas furtivas", correct: false },
      { text: "Jogar agressivamente", correct: false },
    ],
  },
  {
    question:
      "LEAGUE OF LEGENDS: Qual destas opções tem prioridade para Riot Games?",
    answers: [
      { text: "Evolução da Interface", correct: false },
      { text: "Aprimoramento da Jogabilidade", correct: false },
      { text: "Skin nova da Lux", correct: true },
      { text: "Atualização Tecnológica do Cliente", correct: false },
    ],
  },
  {
    question:
      "JOGOS EVO: Qual jogo de luta é tradicionalmente considerado o mais técnico e estratégico nos torneios EVO?",
    answers: [
      { text: "Street Fighter", correct: false },
      { text: "Super Smash Bros", correct: false },
      { text: "Tekken", correct: true },
      { text: "Mortal Kombat", correct: false },
    ],
  },
  {
    question:
     "Qual a engine que o jogo fortnite usa?",
    answers: [
      { text: "Unity", correct: false },
      { text: "Unreal Engine 5", correct: true },
      { text: "Construct 2", correct: false },
      { text: "Game Maker: Studio", correct: false }
    ],
  },
  {
    question:
      "Em que ano fortnite foi lançado?",
    answers: [
      { text: "2019", correct: false },
      { text: "2016", correct: false },
      { text: "2017", correct: true },
      { text: "2018", correct: false },
    ],
  },
  {
    question:
      "Qual a skin mais famosa do Fortnite?",
    answers: [
      { text: "Baby Yoda", correct: false },
      { text: "Raven", correct: true },
      { text: "Pantera Negra", correct: false },
      { text: "Homem de Ferro", correct: false },
    ],
  },
];

let currentQuestion = 0;
const totalQuestionsToShow = 5;

function startQuiz() {
  shuffleQuestions();
  showQuestions();
  playAudio()
}



function playAudio() {
  var audio = document.getElementById("audioPlayer");
  if (audio) {
    document.addEventListener('click', function playAudioOnInteraction() {
      audio.play().catch(function(error) {
        console.error("Reprodução automática bloqueada: ", error);
      });

      document.removeEventListener('click', playAudioOnInteraction);
    });
  } else {
    console.error("Elemento de áudio não encontrado.");
  }
}




function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function showQuestions() {
  const perguntaElement = document.getElementById("pergunta");
  const respostasElement = document.querySelector(".respostas");
  const tryAgainBtn = document.getElementById("try-again");
  const proxBtn = document.getElementById("prox-btn");

  if (currentQuestion < totalQuestionsToShow) {
    const currentQuizData = questions[currentQuestion];

    perguntaElement.textContent = currentQuizData.question;

    respostasElement.innerHTML = "";

    currentQuizData.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.classList.add("btn");
      btn.textContent = answer.text;
      btn.addEventListener("click", () => checkAnswer(index));
      respostasElement.appendChild(btn);
    });

    tryAgainBtn.style.display = "none";
    proxBtn.style.display = "none";
  } else {
    alert("You Win!!!");
  }
}

function checkAnswer(index) {
  const proxBtn = document.getElementById("prox-btn");
  const tryAgainBtn = document.getElementById("try-again");
  const respostas = document.querySelectorAll(".btn");

  if (questions[currentQuestion].answers[index].correct) {
    respostas[index].classList.add("correct");
    proxBtn.style.display = "block"; // Vai exibir o next se a resposta tiver certa
  } else {
    respostas[index].classList.add("incorrect");
    tryAgainBtn.style.display = "block";
  }

  respostas.forEach((btn) => {
    btn.disabled = true;
  });
}

function resetQuiz() {
  currentQuestion = 0;
  shuffleQuestions();
  showQuestions();

  const respostas = document.querySelectorAll(".btn");

  respostas.forEach((btn) => {
    btn.classList.remove("correct", "incorrect");
    btn.disabled = false;
  });

  document.getElementById("try-again").style.display = "none";
  document.getElementById("prox-btn").style.display = "none";
}

function nextQuestion() {
  const proxBtn = document.getElementById("prox-btn");

  if (proxBtn.style.display === "block") {
    currentQuestion++;
    showQuestions();
  }
}



startQuiz();
