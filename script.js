const startBtn = document.getElementById('startBtn');
const setup = document.getElementById('setup');
const game = document.getElementById('game');
const turnTitle = document.getElementById('turnTitle');
const wheel = document.getElementById('wheel');
const spinBtn = document.getElementById('spinBtn');
const scoreText = document.getElementById('scoreText');

// Modal
const questionModal = new bootstrap.Modal(document.getElementById('questionModal'));
const modalCategory = document.getElementById('modalCategory');
const modalQuestion = document.getElementById('modalQuestion');
const modalAnswers = document.getElementById('modalAnswers');
const modalTimer = document.getElementById('modalTimer');

let ctx = wheel.getContext("2d");
const categories = ["Categoría 1", "Categoría 2", "Categoría 3", "Categoría 4", "Categoría 5"];
let currentTeam = 1;
let teamNames = ["Equipo 1", "Equipo 2"];
let scores = [0, 0];
const usedQuestions = {}; // seguimiento de preguntas usadas

// Temporizador
let timer;
let timeLeft = 20;

// 🎨 Dibuja la ruleta
function drawWheel() {
  const arc = 2 * Math.PI / categories.length;
  categories.forEach((cat, i) => {
    ctx.beginPath();
    ctx.fillStyle = `hsl(${i * 72}, 100%, 50%)`;
    ctx.moveTo(150,150);
    ctx.arc(150,150,150,i*arc,(i+1)*arc);
    ctx.fill();
    ctx.save();
    ctx.translate(150,150);
    ctx.rotate(arc * i + arc/2);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(cat, 140, 5);
    ctx.restore();
  });
}

drawWheel();

// 🚀 Inicio del juego
startBtn.onclick = () => {
  teamNames[0] = document.getElementById('team1Name').value || "Equipo 1";
  teamNames[1] = document.getElementById('team2Name').value || "Equipo 2";
  setup.classList.add('d-none');
  game.classList.remove('d-none');
  updateTurn();
  updateScore();
};

function updateTurn() {
  turnTitle.textContent = `Turno de ${teamNames[currentTeam - 1]}`;
}

function updateScore() {
  scoreText.textContent = `${teamNames[0]}: ${scores[0]} pts | ${teamNames[1]}: ${scores[1]} pts`;
}

// 🎡 Girar ruleta
spinBtn.onclick = () => {
  const randomCategory = Math.floor(Math.random() * categories.length);
  
  // Reinicia la rotación antes de girar
  wheel.style.transition = "none";
  wheel.style.transform = "rotate(0deg)";

  // Forzar un pequeño retraso para que el navegador aplique el cambio
  setTimeout(() => {
    const rotation = 720 + (360 / categories.length) * randomCategory;
    wheel.style.transition = "transform 2s ease-out";
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
      showQuestion(categories[randomCategory]);
    }, 2200);
  }, 50); // 50ms suele funcionar
};


// 📋 Mostrar pregunta en modal (sin repetir)
function showQuestion(category) {
  if (!usedQuestions[category]) {
    usedQuestions[category] = [];
  }

  const questions = questionsData[category];
  const available = questions.filter((_, i) => !usedQuestions[category].includes(i));

  if (available.length === 0) {
    alert("Ya no quedan preguntas en esta categoría 😅");
    return;
  }

  const randomIndex = Math.floor(Math.random() * available.length);
  const qIndex = questions.indexOf(available[randomIndex]);
  const q = questions[qIndex];
  usedQuestions[category].push(qIndex);

  modalCategory.textContent = category;
  modalQuestion.textContent = q.text;
  modalAnswers.innerHTML = "";

  q.options.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.className = "btn btn-neon";
    btn.textContent = ans;
    btn.onclick = () => {
      handleAnswer(i === q.correct);
      questionModal.hide();
    };
    modalAnswers.appendChild(btn);
  });

  // Temporizador
  timeLeft = 20;
  updateModalTimer();
  startModalTimer();

  questionModal.show();
}

function handleAnswer(correct) {
  stopTimer();
  if (correct) {
    scores[currentTeam - 1] += 10;
    alert("✅ ¡Correcto!");
  } else {
    alert("❌ Incorrecto!");
  }
  updateScore();
  currentTeam = currentTeam === 1 ? 2 : 1;
  updateTurn();
}

// 🕓 Temporizador del modal
function updateModalTimer() {
  modalTimer.textContent = `⏱️ Tiempo restante: ${timeLeft}s`;
  if (timeLeft <= 5) {
    modalTimer.classList.add("warning");
  } else {
    modalTimer.classList.remove("warning");
  }
}

function startModalTimer() {
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    updateModalTimer();
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("⏰ ¡Tiempo agotado!");
      questionModal.hide();
      handleAnswer(false);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}
