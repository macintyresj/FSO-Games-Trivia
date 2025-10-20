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
const categories = ["Deportes", "Mundi", "Cultura", "Ciencias", "Categoría 5"];
let currentTeam = 1;
let teamNames = ["Equipo 1", "Equipo 2"];
let scores = [0, 0];
const usedQuestions = {}; // seguimiento de preguntas usadas
let highlightedCategory = null; // para resaltar el segmento ganador
let spinning = false;
// Temporizador
let timer;
let timeLeft = 20;

// Dibuja la ruleta
function drawWheel() {
  const arc = 2 * Math.PI / categories.length;
  const pastelColors = [
    getComputedStyle(document.documentElement).getPropertyValue('--powder-blue'),
    getComputedStyle(document.documentElement).getPropertyValue('--salmon-pink'),
    getComputedStyle(document.documentElement).getPropertyValue('--lemon-lime'),
    getComputedStyle(document.documentElement).getPropertyValue('--aquamarine'),
    getComputedStyle(document.documentElement).getPropertyValue('--veronica')
  ];

  ctx.clearRect(0, 0, wheel.width, wheel.height);

  categories.forEach((cat, i) => {
    ctx.beginPath();
    ctx.moveTo(150,150);
    ctx.fillStyle = pastelColors[i % pastelColors.length].trim();
    ctx.arc(150,150,150,i*arc,(i+1)*arc);
    ctx.fill();
    ctx.save();

    // Texto de categoría
    ctx.translate(150,150);
    ctx.rotate(arc * i + arc/2);
    ctx.fillStyle = "#333";
    ctx.font = "600 14px Poppins, sans-serif";
    ctx.textAlign = "right";
    ctx.fillText(cat, 130, 5);
    ctx.restore();
  });

  //Borde decorativo
  ctx.lineWidth = 4;
  ctx.strokeStyle = "#fff";
  ctx.beginPath();
  ctx.arc(150,150,150,0,2*Math.PI);
  ctx.stroke();

  // ✨ Resaltar categoría seleccionada
  if (highlightedCategory !== null) {
    const start = highlightedCategory * arc;
    const end = (highlightedCategory + 1) * arc;

    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 150, start, end);
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
    ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
    ctx.shadowBlur = 20;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }
}

drawWheel();

//Inicio del juego
startBtn.onclick = () => {
  teamNames[0] = document.getElementById('team1Name').value || "Equipo 1";
  teamNames[1] = document.getElementById('team2Name').value || "Equipo 2";
  setup.classList.add('d-none');
  game.classList.remove('d-none');
  updateScore(); // 👈 esto ahora actualiza nombres y puntajes
  updateTurn();
};


function updateTurn() {
  turnTitle.textContent = `Turno de ${teamNames[currentTeam - 1]}`;
  document.getElementById('player1Box').classList.toggle('active-player', currentTeam === 1);
  document.getElementById('player2Box').classList.toggle('active-player', currentTeam === 2);
}


//Actualizar puntaje

function updateScore() {
  document.getElementById("player1Name").textContent = teamNames[0];
  document.getElementById("player2Name").textContent = teamNames[1];
  document.getElementById("player1Score").textContent = scores[0];
  document.getElementById("player2Score").textContent = scores[1];
}
//Girar ruleta
spinBtn.onclick = () => {
  const randomCategory = Math.floor(Math.random() * categories.length);
  
  // Reinicia la rotación antes de girar
  wheel.style.transition = "none";
  wheel.style.transform = "rotate(0deg)";

  setTimeout(() => {
    const rotation = 720 + (360 / categories.length) * randomCategory;
    wheel.style.transition = "transform 2s ease-out";
    wheel.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
      highlightedCategory = randomCategory;
      drawWheel(); // Redibuja con la categoría iluminada
      showQuestion(categories[randomCategory]);
    }, 2200);
  }, 50);
};

//Mostrar pregunta en modal (sin repetir)
function showQuestion(category) {
  if (!usedQuestions[category]) usedQuestions[category] = [];

  const questions = questionsData[category];
  const available = questions.filter((_, i) => !usedQuestions[category].includes(i));

  if (available.length === 0) {
    Swal.fire({
      title: "Sin preguntas",
      text: "Ya no quedan preguntas en esta categoría 😅",
      icon: "info",
      confirmButtonColor: "#84f9be"
    });
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
      questionModal.hide();
      setTimeout(() => handleAnswer(i === q.correct), 400);
    };
    modalAnswers.appendChild(btn);
  });

  // Temporizador
  timeLeft = 30;
  updateModalTimer();
  startModalTimer();

  questionModal.show();
}

//Evaluar respuesta
function handleAnswer(correct) {
  stopTimer();
  if (correct) {
    scores[currentTeam - 1] += 10000;
    Swal.fire({
      title: '¡Correcto!',
      text: '🎉 Muy bien hecho.',
      icon: 'success',
      confirmButtonColor: '#7fd1ae',
      background: '#fffafc',
      timer: 1600,
      showConfirmButton: false
    });
  } else {
    Swal.fire({
      title: 'Incorrecto',
      text: '❌ Intenta de nuevo en la próxima.',
      icon: 'error',
      confirmButtonColor: '#f29ca3',
      background: '#fffafc',
      timer: 1600,
      showConfirmButton: false
    });
  }
  updateScore();
  currentTeam = currentTeam === 1 ? 2 : 1;
  updateTurn();
}

//Temporizador del modal
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
      questionModal.hide();
      Swal.fire({
        title: '⏰ ¡Tiempo agotado!',
        text: 'No alcanzaste a responder.',
        icon: 'warning',
        confirmButtonColor: '#6bebffff',
        background: '#fffafc',
        timer: 1600,
        showConfirmButton: false
      });
      setTimeout(() => handleAnswer(false), 400);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}


