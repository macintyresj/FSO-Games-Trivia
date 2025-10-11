# FSO-Games-Trivia
Based on Preguntados Game

Un juego de trivia estilo “Preguntados” para 2 equipos, con ruleta de categorías, preguntas en pop-up modal, temporizador y puntajes automáticos. Hecho con HTML, CSS, JavaScript y Bootstrap.

📝 Características

Dos equipos con nombres personalizados.

Ruleta de 5 categorías con animación colorida.

Preguntas mostradas en modal pop-up.

Temporizador de 30 segundos para responder.

Puntajes automáticos y turnos alternados.

Preguntas cargadas desde un archivo externo (questions.js).

Efectos de neón para botones, texto y temporizador.

📂 Estructura del proyecto
trivia/
│
├── index.html        # Página principal
├── style.css         # Estilos
├── script.js         # Lógica de juego: ruleta, turnos, temporizador
└── questions.js      # Preguntas del juego (puedes reemplazar con tus propias preguntas)

🚀 Cómo usar

Clonar o descargar el repositorio.

Abrir index.html en un navegador moderno.

Ingresar los nombres de los equipos y hacer click en Comenzar.

Girar la ruleta para seleccionar una categoría.

Responder la pregunta dentro del pop-up antes de que se acabe el temporizador.

El puntaje se actualiza automáticamente y se alternan los turnos.

🎨 Personalización

Cambiar categorías: Edita la variable categories en script.js.

Cambiar preguntas: Modifica questionsData en questions.js.

Duración del temporizador: Cambia timeLeft en script.js.

Estilos neón: Ajusta style.css para cambiar colores, sombras o fuentes.

💡 Notas

La ruleta siempre da 2 vueltas completas antes de detenerse en la categoría seleccionada.

Las preguntas no se repiten hasta que se agoten todas de la categoría.

Bootstrap se usa para el modal y estilos responsivos.

🛠 Tecnologías

HTML5

CSS3 + Bootstrap 5

JavaScript (ES6)
