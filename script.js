const questions = [
  {
    question:
      "LEAGUE OF LEGENDS: Neste momento, qual é a versão atual do League of Legends?",
    answers: [
      { text: "Alpha", correct: false },
      { text: "V1.0", correct: false },
      { text: "Infinity 9.3", correct: false },
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
      "VALORANT: Qual arma é conhecida por ter um tiro na cabeça instantâneo, independentemente da armadura do inimigo?",
    answers: [
      { text: "Spectre", correct: false },
      { text: "Ghost", correct: false },
      { text: "Operator", correct: true },
      { text: "Bulldog", correct: false },
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
      "CS:GO: Qual arma é conhecida por ser a 'One Shot Kill' na cabeça, independentemente da distância?",
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
    question: "CS:GO & Valorant: Em Counter-Strike e Valorant, o que significa 'eco round'?",
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
      "Jogos de luta: Qual jogo de luta é tradicionalmente considerado o mais técnico e estratégico nos torneios EVO?",
    answers: [
      { text: "Street Fighter", correct: false },
      { text: "Super Smash Bros", correct: false },
      { text: "Tekken", correct: true },
      { text: "Mortal Kombat", correct: false },
    ],
  },
  {
    question: "Fortnite: Qual a engine que o jogo fortnite usa?",
    answers: [
      { text: "Unity", correct: false },
      { text: "Unreal Engine 5", correct: true },
      { text: "Construct 2", correct: false },
      { text: "Game Maker: Studio", correct: false },
    ],
  },
  {
    question: "Fortnite: Em que ano fortnite foi lançado?",
    answers: [
      { text: "2019", correct: false },
      { text: "2016", correct: false },
      { text: "2017", correct: true },
      { text: "2018", correct: false },
    ],
  },
  {
    question: "Fortnite: Qual a skin mais famosa do Fortnite?",
    answers: [
      { text: "Baby Yoda", correct: false },
      { text: "Raven", correct: true },
      { text: "Pantera Negra", correct: false },
      { text: "Homem de Ferro", correct: false },
    ],
  },
  {
    question: "League of legends: Qual desses campeões não é um yordle?",
    answers: [
      { text: "Gnar", correct: false },
      { text: "Poppy", correct: false },
      { text: "Urgot", correct: true },
      { text: "Tristana", correct: false },
    ],
  },
  {
    question: "CS:GO: Qual é o nome do mapa mais jogado no CS:GO?",
    answers: [
      { text: "Dust II", correct: true },
      { text: "Mirage", correct: false },
      { text: "Inferno", correct: false },
      { text: "Overpass", correct: false },
    ],
  },
  {
    question:
      "Assassin's Creed: Em qual período histórico se passa o jogo Assassin's Creed: Odyssey?",
    answers: [
      { text: "Renascimento Italiano", correct: false },
      { text: "Idade Média", correct: false },
      { text: "Grécia Antiga", correct: true },
      { text: "Revolução Americana", correct: false },
    ],
  },
  {
    question: "Assassin's Creed: Quem é o protagonista em Assassin's Creed: Black Flag?",
    answers: [
      { text: "Ezio Auditore", correct: false },
      { text: "Altair Ibn-La'Ahad", correct: false },
      { text: "Edward Kenway", correct: true },
      { text: "Connor Kenway", correct: false },
    ],
  },
  {
    question:
      "Assassin's Creed: Qual é a organização que os Assassinos enfrentam em Assassin's Creed?",
    answers: [
      { text: "Templários", correct: true },
      { text: "Illuminati", correct: false },
      { text: "Maçons", correct: false },
      { text: "Cruzados", correct: false },
    ],
  },
  {
    question:
      "Assassin's Creed: Qual é a habilidade distintiva de Evie Frye em Assassin's Creed: Syndicate?",
    answers: [
      { text: "Visão de Águia", correct: false },
      { text: "Teletransporte", correct: false },
      { text: "Camuflagem", correct: true },
      { text: "Golpe Duplo", correct: false },
    ],
  },
  {
    question: "Assassin's Creed Quem é o protagonista em Assassin's Creed III?",
    answers: [
      { text: "Ezio Auditore", correct: false },
      { text: "Edward Kenway", correct: false },
      { text: "Arno Dorian", correct: false },
      { text: "Connor Kenway", correct: true },
    ],
  },
  {
    question:
      "Assassin's Creed: Em que cidade se passa a maior parte de Assassin's Creed: Revelations?",
    answers: [
      { text: "Constantinopla", correct: true },
      { text: "Atenas", correct: false },
      { text: "Alexandria", correct: false },
      { text: "Jerusalém", correct: false },
    ],
  },
  {
    question:
      "Valorant: Qual agente do Valorant soltaria a frase - 'Só não dou um AWP Headshot porque não tem acarajé pelo caminho!'?",
    answers: [
      { text: "Jett", correct: false },
      { text: "Viper", correct: false },
      { text: "Phoenix", correct: false },
      { text: "Raze", correct: true },
    ],
  },
  {
    question: "VALORANT: Qual é o nome verdadeiro da agente VIPER?",
    answers: [
      { text: "Sabine Callas", correct: true },
      { text: "Valentina Pereira", correct: false },
      { text: "Vanessa Palmer", correct: false },
      { text: "Larissa Petrov", correct: false },
    ],
  },
  {
    question: "Street Fighther: Em que ano o primeiro street fighter foi lançado?",
    answers: [
      { text: "1987", correct: true },
      { text: "1990", correct: false },
      { text: "2000", correct: false },
      { text: "2010", correct: false },
    ],
  },
  {
    question: "Street Fighther: Qual o personagem de Street Fighter é mais famoso?",
    answers: [
      { text: "Chun-Li", correct: false },
      { text: "Ken", correct: false },
      { text: "Ryu", correct: false },
      { text: "Akuma", correct: true },
    ],
  },
  {
    question: "Injustice: qual o personagem mais escolhido do Injustice?",
    answers: [
      { text: "Adão negro", correct: true },
      { text: "Batman", correct: false },
      { text: "Arlequina", correct: false },
      { text: "Arqueiro verde", correct: false },
    ],
  },
  {
    question: "Minecraft: qual o mob foi criado acidentalmente pelo Notch?",
    answers: [
      { text: "Creeper", correct: true },
      { text: "Enderman", correct: false },
      { text: "Esqueleto", correct: false },
      { text: "Zumbi", correct: false },
    ],
  },
  {
    question: "Minecraft: em qual ano o jogo foi lançado?",
    answers: [
      { text: "2010", correct: false },
      { text: "2009", correct: true },
      { text: "2011", correct: false },
      { text: "2012", correct: false },
    ],
  },
  {
    question: "Minecraft: em qual versão a End City foi adicionada?",
    answers: [
      { text: "1.9.1", correct: false },
      { text: "1.12.1", correct: false },
      { text: "1.9", correct: true },
      { text: "1.7", correct: false },
    ],
  },
  {
    question: "Minecraft: qual a maior lenda do jogo?",
    answers: [
      { text: "Lick", correct: false },
      { text: "Entity303", correct: false },
      { text: "Herobrine", correct: true },
      { text: "Notch", correct: false },
    ],
  },
  {
    question: "Minecraft: qual a maior força que um efeito pode ter em comandos?",
    answers: [
      { text: "355", correct: false },
      { text: "255", correct: true },
      { text: "256", correct: false },
      { text: "356", correct: false },
    ],
  },
    {
    question: "Minecraft: o que acontece se renomear uma ovelha para jeb_?",
    answers: [
      { text: "Nada", correct: false },
      { text: "Começa a te atacar", correct: false },
      { text: "Fica de ponta a cabeça", correct: false },
      { text: "Fica mudando de cor", correct: true },
    ],
  },
    {
    question: "Minecraft: qual item o sapo come?",
    answers: [
      { text: "Cogumelo", correct: false },
      { text: "Vaga-lumes", correct: false },
      { text: "Bola de Slime", correct: true },
      { text: "Beterraba", correct: false },
    ],
  },
    {
    question: "Minecraft: qual era o antigo nome do jogo?",
    answers: [
      { text: "World Craft", correct: false },
      { text: "Block Game", correct: false },
      { text: "Cave Game", correct: true },
      { text: "Block Craft", correct: false },
    ],
  },
];
let currentQuestion = 0;
const totalQuestionsToShow = 5;

const modal = document.getElementById("myModal");
const playerNameInput = document.getElementById("playerNameInput");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function submitName() {
  const playerName = playerNameInput.value.trim();

  if (playerName !== "" && playerName.split(" ").length <= 2) {
    closeModal();
    showWinMessage(playerName);
  } else {
    alert("ERROR: Nome muito extenso, tente com um mais curto.");
  }
}

function startQuiz() {
  shuffleQuestions();
  showQuestions();
}

function startGame(){
  const quizElement = document.querySelector(".quiz");
  const startButton = document.getElementById("startButton");
  const audio = document.getElementById("audioPlayer");
  quizElement.style.display = "block";
  startButton.style.display = "none";
  audio.play();
}



function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

let resetBtn = null;

function showQuestions() {
  const perguntaElement = document.getElementById("pergunta");
  const respostasElement = document.querySelector(".respostas");
  const tryAgainBtn = document.getElementById("try-again");
  const proxBtn = document.getElementById("prox-btn");
  const resetBtn = document.getElementById("reset-btn");

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
    resetBtn.style.display = "none;";
  } else {
    tryAgainBtn.style.display = "none";
    proxBtn.style.display = "none";
    resetBtn.style.display = "block";
    openModal();
  }
}

const listaDeGanhadores = [];

function showWinMessage(playerName) {
  alert(`Parabéns, ${playerName}! Você Venceu!`);
  listaDeGanhadores.push(playerName);
  attListaDeGanhadores();
}

function attListaDeGanhadores() {
  const ganhadoresContainer = document.getElementById("ganhadores-container");
  ganhadoresContainer.innerHTML = "<h5>Lista de Ganhadores</h5>";

  if (listaDeGanhadores.length > 0) {
    const ul = document.createElement("ul");
    listaDeGanhadores.forEach((ganhador) => {
      const li = document.createElement("li");
      li.textContent = ganhador;
      ul.appendChild(li);
    });
    ganhadoresContainer.appendChild(ul);
  } else {
    ganhadoresContainer.innerHTML += "<p>Nenhum vencedor</p>";
  }
  localStorage.setItem("listaDeGanhadores", JSON.stringify(listaDeGanhadores));
}

const historicoDeGanhadores = localStorage.getItem("listaDeGanhadores");
if (historicoDeGanhadores) {
  listaDeGanhadores.push(...JSON.parse(historicoDeGanhadores));
  attListaDeGanhadores();
}

function limparHistorico() {
  listaDeGanhadores.length = 0;
  localStorage.setItem("listaDeGanhadores", JSON.stringify(listaDeGanhadores));
  attListaDeGanhadores();
}

function checkAnswer(index) {
  const proxBtn = document.getElementById("prox-btn");
  const tryAgainBtn = document.getElementById("try-again");
  const respostas = document.querySelectorAll(".btn");

  if (questions[currentQuestion].answers[index].correct) {
    respostas[index].classList.add("correct");
    proxBtn.style.display = "block";
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
  document.getElementById("reset-btn").style.display = "none";
}

function nextQuestion() {
  const proxBtn = document.getElementById("prox-btn");

  if (proxBtn.style.display === "block") {
    currentQuestion++;
    showQuestions();
  }
}

startQuiz();
