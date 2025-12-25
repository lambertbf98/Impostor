/**
 * IMPOSTOR GAME
 * El juego de encontrar al espía
 */

// ============================================
// PALABRAS - Comunes y fáciles de describir
// ============================================

const WORDS = [
    // Lugares
    'playa', 'hospital', 'colegio', 'supermercado', 'cine', 'parque', 'aeropuerto',
    'restaurante', 'biblioteca', 'gimnasio', 'museo', 'zoo', 'banco', 'farmacia',
    'hotel', 'iglesia', 'estadio', 'discoteca', 'piscina', 'montaña', 'camping',
    'gasolinera', 'peluquería', 'dentista', 'veterinario', 'comisaría', 'bomberos',

    // Comida
    'pizza', 'hamburguesa', 'helado', 'chocolate', 'pasta', 'ensalada', 'sushi',
    'tortilla', 'paella', 'bocadillo', 'croissant', 'tarta', 'galleta', 'churros',
    'patatas fritas', 'pollo', 'pescado', 'huevo', 'arroz', 'pan', 'queso',
    'jamón', 'manzana', 'plátano', 'naranja', 'sandía', 'fresa', 'uva',

    // Animales
    'perro', 'gato', 'león', 'elefante', 'jirafa', 'mono', 'delfín', 'tiburón',
    'águila', 'pingüino', 'oso', 'lobo', 'zorro', 'conejo', 'tortuga', 'serpiente',
    'caballo', 'vaca', 'cerdo', 'gallina', 'pato', 'oveja', 'ratón', 'araña',

    // Objetos cotidianos
    'teléfono', 'televisión', 'ordenador', 'coche', 'bicicleta', 'avión', 'barco',
    'reloj', 'gafas', 'paraguas', 'mochila', 'cartera', 'llave', 'cama', 'silla',
    'mesa', 'lámpara', 'espejo', 'nevera', 'lavadora', 'microondas', 'sofá',
    'almohada', 'toalla', 'cepillo de dientes', 'tijeras', 'libro', 'periódico',

    // Deportes y ocio
    'fútbol', 'baloncesto', 'tenis', 'natación', 'ciclismo', 'golf', 'boxeo',
    'esquí', 'surf', 'yoga', 'baile', 'guitarra', 'piano', 'videojuego',
    'película', 'concierto', 'fiesta', 'cumpleaños', 'boda', 'navidad',

    // Profesiones
    'médico', 'profesor', 'policía', 'bombero', 'cocinero', 'piloto', 'astronauta',
    'actor', 'cantante', 'futbolista', 'científico', 'abogado', 'arquitecto',
    'electricista', 'fontanero', 'jardinero', 'cartero', 'conductor', 'camarero',

    // Ropa
    'camiseta', 'pantalón', 'vestido', 'zapatos', 'zapatillas', 'calcetines',
    'chaqueta', 'abrigo', 'bufanda', 'gorro', 'guantes', 'cinturón', 'corbata',
    'pijama', 'bañador', 'bikini', 'gorra', 'sombrero', 'bolso', 'mochila',

    // Naturaleza
    'sol', 'luna', 'estrella', 'nube', 'lluvia', 'nieve', 'arcoíris', 'volcán',
    'río', 'lago', 'mar', 'océano', 'bosque', 'selva', 'desierto', 'isla',
    'flor', 'árbol', 'hierba', 'hoja', 'piedra', 'arena', 'fuego', 'agua',

    // Cuerpo humano
    'cabeza', 'mano', 'pie', 'ojo', 'nariz', 'boca', 'oreja', 'pelo',
    'brazo', 'pierna', 'dedo', 'corazón', 'cerebro', 'hueso', 'músculo',

    // Transporte
    'coche', 'moto', 'autobús', 'tren', 'metro', 'taxi', 'ambulancia',
    'camión', 'tractor', 'helicóptero', 'cohete', 'patinete', 'monopatín',

    // Electrodomésticos y tecnología
    'móvil', 'tablet', 'portátil', 'auriculares', 'altavoz', 'cámara',
    'batidora', 'tostadora', 'cafetera', 'aspiradora', 'ventilador', 'aire acondicionado',

    // Muebles
    'armario', 'estantería', 'escritorio', 'mesita', 'cómoda', 'perchero',

    // Juguetes y juegos
    'pelota', 'muñeca', 'puzzle', 'dado', 'carta', 'globo', 'cometa',

    // Instrumentos
    'tambor', 'flauta', 'violín', 'trompeta', 'batería', 'saxofón',

    // Edificios
    'casa', 'edificio', 'castillo', 'pirámide', 'torre', 'puente', 'faro'
];

// ============================================
// ESTADO DEL JUEGO
// ============================================

let gameState = {
    players: 4,
    impostors: 1,
    time: 3,
    mode: 'classic', // 'classic' o 'chaos'
    currentPlayer: 1,
    word: '',
    impostorPlayers: [],
    cardRevealed: false,
    timerRunning: false,
    timerPaused: false,
    timeRemaining: 0,
    timerInterval: null
};

// ============================================
// ELEMENTOS DOM
// ============================================

const screens = {
    home: document.getElementById('screenHome'),
    config: document.getElementById('screenConfig'),
    reveal: document.getElementById('screenReveal'),
    game: document.getElementById('screenGame'),
    result: document.getElementById('screenResult')
};

const elements = {
    // Config
    playersValue: document.getElementById('playersValue'),
    impostorsValue: document.getElementById('impostorsValue'),
    timeValue: document.getElementById('timeValue'),
    summaryPlayers: document.getElementById('summaryPlayers'),
    summaryImpostors: document.getElementById('summaryImpostors'),
    summaryImpostorLabel: document.getElementById('summaryImpostorLabel'),
    summaryTime: document.getElementById('summaryTime'),
    impostorsConfig: document.getElementById('impostorsConfig'),
    btnModeClassic: document.getElementById('btnModeClassic'),
    btnModeChaos: document.getElementById('btnModeChaos'),

    // Reveal
    currentPlayer: document.getElementById('currentPlayer'),
    currentProgress: document.getElementById('currentProgress'),
    totalPlayers: document.getElementById('totalPlayers'),
    card: document.getElementById('card'),
    cardInner: document.getElementById('cardInner'),
    cardBack: document.getElementById('cardBack'),
    cardRole: document.getElementById('cardRole'),
    btnNextPlayer: document.getElementById('btnNextPlayer'),
    btnNextText: document.getElementById('btnNextText'),

    // Game
    timerValue: document.getElementById('timerValue'),
    timerProgress: document.getElementById('timerProgress'),
    gamePlayersInfo: document.getElementById('gamePlayersInfo'),
    gameImpostorsInfo: document.getElementById('gameImpostorsInfo'),
    gameImpostorsCard: document.getElementById('gameImpostorsCard'),
    gameImpostorsLabel: document.getElementById('gameImpostorsLabel'),
    pauseIcon: document.getElementById('pauseIcon'),
    playIcon: document.getElementById('playIcon'),
    pauseText: document.getElementById('pauseText'),

    // Result
    revealWord: document.getElementById('revealWord'),
    impostorsList: document.getElementById('impostorsList'),

    // Modal
    modalRules: document.getElementById('modalRules')
};

// ============================================
// NAVEGACIÓN
// ============================================

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// ============================================
// CONFIGURACIÓN
// ============================================

function updateConfig() {
    elements.playersValue.textContent = gameState.players;
    elements.impostorsValue.textContent = gameState.impostors;
    elements.timeValue.textContent = gameState.time;
    elements.summaryPlayers.textContent = gameState.players;
    elements.summaryTime.textContent = gameState.time;

    // Actualizar según el modo
    if (gameState.mode === 'chaos') {
        elements.impostorsConfig.style.display = 'none';
        elements.summaryImpostors.textContent = '?';
        elements.summaryImpostorLabel.textContent = 'impostores';
    } else {
        elements.impostorsConfig.style.display = 'flex';
        elements.summaryImpostors.textContent = gameState.impostors;
        elements.summaryImpostorLabel.textContent = gameState.impostors === 1 ? 'impostor' : 'impostores';
    }
}

function setMode(mode) {
    gameState.mode = mode;

    // Actualizar UI de botones de modo
    elements.btnModeClassic.classList.toggle('active', mode === 'classic');
    elements.btnModeChaos.classList.toggle('active', mode === 'chaos');

    updateConfig();
}

function adjustPlayers(delta) {
    const newValue = gameState.players + delta;
    if (newValue >= 3 && newValue <= 15) {
        gameState.players = newValue;
        // Ajustar impostores si hay más impostores que jugadores - 1
        if (gameState.impostors >= gameState.players) {
            gameState.impostors = gameState.players - 1;
        }
        updateConfig();
    }
}

function adjustImpostors(delta) {
    const newValue = gameState.impostors + delta;
    if (newValue >= 1 && newValue <= gameState.players) {
        gameState.impostors = newValue;
        updateConfig();
    }
}

function adjustTime(delta) {
    const newValue = gameState.time + delta;
    if (newValue >= 1 && newValue <= 10) {
        gameState.time = newValue;
        updateConfig();
    }
}

// ============================================
// LÓGICA DEL JUEGO
// ============================================

function startGame() {
    // Seleccionar palabra aleatoria
    gameState.word = WORDS[Math.floor(Math.random() * WORDS.length)];

    // En modo caos, elegir número aleatorio de impostores (1 a players-1, o incluso todos!)
    let numImpostors = gameState.impostors;
    if (gameState.mode === 'chaos') {
        // Puede ser desde 0 hasta todos los jugadores
        // Pero para que sea divertido, mínimo 1 y máximo jugadores
        numImpostors = Math.floor(Math.random() * gameState.players) + 1;
    }

    // Seleccionar impostores aleatoriamente
    const playerNumbers = Array.from({length: gameState.players}, (_, i) => i + 1);
    gameState.impostorPlayers = [];

    for (let i = 0; i < numImpostors; i++) {
        const randomIndex = Math.floor(Math.random() * playerNumbers.length);
        gameState.impostorPlayers.push(playerNumbers[randomIndex]);
        playerNumbers.splice(randomIndex, 1);
    }

    // Resetear estado
    gameState.currentPlayer = 1;
    gameState.cardRevealed = false;

    // Actualizar UI
    elements.totalPlayers.textContent = gameState.players;
    updateRevealScreen();
    showScreen('reveal');
}

function updateRevealScreen() {
    elements.currentPlayer.textContent = gameState.currentPlayer;
    elements.currentProgress.textContent = gameState.currentPlayer;

    // Resetear carta
    elements.cardInner.classList.remove('flipped');
    elements.card.classList.remove('revealed');
    elements.card.classList.remove('seen');
    elements.cardInner.style.transform = 'rotateY(0deg)';
    elements.cardInner.style.transition = 'none';
    gameState.cardRevealed = false;

    // Actualizar botón
    elements.btnNextPlayer.disabled = true;
    if (gameState.currentPlayer === gameState.players) {
        elements.btnNextText.textContent = '¡Jugar!';
    } else {
        elements.btnNextText.textContent = 'Siguiente Jugador';
    }

    // Configurar contenido de la carta
    const isImpostor = gameState.impostorPlayers.includes(gameState.currentPlayer);

    if (isImpostor) {
        elements.cardRole.innerHTML = `
            <span class="role-icon">🕵️</span>
            <p class="role-label">Eres el</p>
            <p class="role-word impostor">IMPOSTOR</p>
        `;
    } else {
        elements.cardRole.innerHTML = `
            <p class="role-label">La palabra es</p>
            <p class="role-word">${gameState.word.toUpperCase()}</p>
        `;
    }
}

function nextPlayer() {
    if (gameState.currentPlayer < gameState.players) {
        gameState.currentPlayer++;
        updateRevealScreen();
    } else {
        // Todos los jugadores han visto su carta, iniciar timer
        startTimer();
    }
}

// ============================================
// TIMER
// ============================================

function startTimer() {
    gameState.timeRemaining = gameState.time * 60;
    gameState.timerRunning = true;
    gameState.timerPaused = false;

    // Actualizar info del juego
    elements.gamePlayersInfo.textContent = gameState.players;

    // En modo caos, ocultar el número de impostores
    if (gameState.mode === 'chaos') {
        elements.gameImpostorsInfo.textContent = '?';
        elements.gameImpostorsLabel.textContent = 'Impostores';
    } else {
        elements.gameImpostorsInfo.textContent = gameState.impostors;
        elements.gameImpostorsLabel.textContent = gameState.impostors === 1 ? 'Impostor' : 'Impostores';
    }

    updateTimerDisplay();
    showScreen('game');

    gameState.timerInterval = setInterval(() => {
        if (!gameState.timerPaused) {
            gameState.timeRemaining--;
            updateTimerDisplay();

            if (gameState.timeRemaining <= 0) {
                endTimer();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(gameState.timeRemaining / 60);
    const seconds = gameState.timeRemaining % 60;
    elements.timerValue.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Actualizar círculo de progreso
    const totalSeconds = gameState.time * 60;
    const progress = gameState.timeRemaining / totalSeconds;
    const circumference = 2 * Math.PI * 45; // radio = 45
    const offset = circumference * (1 - progress);
    elements.timerProgress.style.strokeDashoffset = offset;

    // Cambiar color cuando queda poco tiempo
    if (gameState.timeRemaining <= 30) {
        elements.timerProgress.style.stroke = '#e74c3c';
    } else if (gameState.timeRemaining <= 60) {
        elements.timerProgress.style.stroke = '#fdcb6e';
    } else {
        elements.timerProgress.style.stroke = '#6c5ce7';
    }
}

function togglePause() {
    gameState.timerPaused = !gameState.timerPaused;

    if (gameState.timerPaused) {
        elements.pauseIcon.style.display = 'none';
        elements.playIcon.style.display = 'block';
        elements.pauseText.textContent = 'Continuar';
    } else {
        elements.pauseIcon.style.display = 'block';
        elements.playIcon.style.display = 'none';
        elements.pauseText.textContent = 'Pausar';
    }
}

function endTimer() {
    clearInterval(gameState.timerInterval);
    gameState.timerRunning = false;
    showResult();
}

function endGame() {
    clearInterval(gameState.timerInterval);
    gameState.timerRunning = false;
    showResult();
}

function showResult() {
    elements.revealWord.textContent = gameState.word.toUpperCase();

    const impostorText = gameState.impostorPlayers
        .map(p => `Jugador ${p}`)
        .join(', ');
    elements.impostorsList.textContent = impostorText;

    showScreen('result');
}

function playAgain() {
    startGame();
}

function goHome() {
    showScreen('home');
}

// ============================================
// GESTOS DE LA CARTA (Swipe)
// ============================================

function setupCardGestures() {
    const card = elements.card;
    let startY = 0;
    let currentY = 0;
    let isDragging = false;
    let hasSeenCard = false; // Controla si el jugador ya vio la carta

    function handleStart(e) {
        // Si ya pasó al siguiente jugador, no permitir
        if (gameState.cardRevealed) return;

        isDragging = true;
        startY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        currentY = startY;
        elements.cardInner.style.transition = 'none';
    }

    function handleMove(e) {
        if (!isDragging) return;
        e.preventDefault();

        currentY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        const deltaY = startY - currentY;

        if (deltaY > 0) {
            // Mientras arrastra hacia arriba, rotar la carta proporcionalmente
            const progress = Math.min(deltaY / 100, 1);
            elements.cardInner.style.transform = `rotateY(${progress * 180}deg)`;

            // Si llegó al máximo, marcar como vista
            if (progress >= 1) {
                hasSeenCard = true;
            }
        }
    }

    function handleEnd() {
        if (!isDragging) return;
        isDragging = false;

        // Siempre volver la carta a su posición original (oculta)
        elements.cardInner.style.transition = 'transform 0.4s ease';
        elements.cardInner.style.transform = 'rotateY(0deg)';

        // Si el jugador vio la carta completamente, habilitar el botón
        if (hasSeenCard && !gameState.cardRevealed) {
            gameState.cardRevealed = true;
            elements.btnNextPlayer.disabled = false;
            elements.card.classList.add('seen');
        }
    }

    // Resetear hasSeenCard cuando cambia de jugador
    const originalUpdateRevealScreen = updateRevealScreen;
    updateRevealScreen = function() {
        hasSeenCard = false;
        originalUpdateRevealScreen();
    };

    card.addEventListener('touchstart', handleStart, { passive: true });
    card.addEventListener('touchmove', handleMove, { passive: false });
    card.addEventListener('touchend', handleEnd);
    card.addEventListener('touchcancel', handleEnd);

    card.addEventListener('mousedown', handleStart);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
}

// ============================================
// MODAL
// ============================================

function showRules() {
    elements.modalRules.classList.add('active');
}

function hideRules() {
    elements.modalRules.classList.remove('active');
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Home
    document.getElementById('btnStart').addEventListener('click', () => showScreen('config'));
    document.getElementById('btnRules').addEventListener('click', showRules);

    // Config
    document.getElementById('btnBackConfig').addEventListener('click', () => showScreen('home'));
    document.getElementById('btnModeClassic').addEventListener('click', () => setMode('classic'));
    document.getElementById('btnModeChaos').addEventListener('click', () => setMode('chaos'));
    document.getElementById('btnPlayersMinus').addEventListener('click', () => adjustPlayers(-1));
    document.getElementById('btnPlayersPlus').addEventListener('click', () => adjustPlayers(1));
    document.getElementById('btnImpostorsMinus').addEventListener('click', () => adjustImpostors(-1));
    document.getElementById('btnImpostorsPlus').addEventListener('click', () => adjustImpostors(1));
    document.getElementById('btnTimeMinus').addEventListener('click', () => adjustTime(-1));
    document.getElementById('btnTimePlus').addEventListener('click', () => adjustTime(1));
    document.getElementById('btnStartGame').addEventListener('click', startGame);

    // Reveal
    document.getElementById('btnNextPlayer').addEventListener('click', nextPlayer);

    // Game
    document.getElementById('btnPauseTimer').addEventListener('click', togglePause);
    document.getElementById('btnEndGame').addEventListener('click', endGame);

    // Result
    document.getElementById('btnPlayAgain').addEventListener('click', playAgain);
    document.getElementById('btnBackHome').addEventListener('click', goHome);

    // Modal
    document.getElementById('closeRules').addEventListener('click', hideRules);
    document.querySelector('.modal-overlay').addEventListener('click', hideRules);

    // Setup
    setupCardGestures();
    updateConfig();

    // Añadir gradiente al SVG del timer
    const timerSvg = document.querySelector('.timer-svg');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.innerHTML = `
        <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#6c5ce7"/>
            <stop offset="100%" style="stop-color:#a29bfe"/>
        </linearGradient>
    `;
    timerSvg.insertBefore(defs, timerSvg.firstChild);
});

// Prevenir scroll en iOS
document.body.addEventListener('touchmove', (e) => {
    if (e.target.closest('.modal-body')) return;
    e.preventDefault();
}, { passive: false });

// Ocultar splash screen después de la animación
setTimeout(() => {
    const splash = document.getElementById('splashScreen');
    if (splash) {
        splash.classList.add('hidden');
    }
}, 2500);
