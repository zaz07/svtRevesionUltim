/**
 * agent_coach.js
 * Contrôleur pour la vue de l'Agent Coach.
 * Gère le routage interne vers les 3 modes : Condensé, Quiz Chrono, Boss de Fin.
 */

const urlParams = new URLSearchParams(window.location.search);
    const uniteId = urlParams.get('unite') || '1';
    const data = window[`coachUnite${uniteId}`];

document.addEventListener("DOMContentLoaded", () => {
    if (!data) {
        document.getElementById('unit-title').innerText = "Erreur : Données introuvables.";
        return;
    }
    document.getElementById('unit-title').innerText = data.titre;
});

// Variables globales pour le quiz
let currentMode = '';
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timerInterval;
const TIME_LIMIT = 10; // 10 secondes pour le mode chrono

// Elements DOM
const coachMenu = document.getElementById('coach-menu');
const viewCondense = document.getElementById('view-condense');
const viewQuiz = document.getElementById('view-quiz');
const viewResult = document.getElementById('view-result');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackStatus = document.getElementById('feedback-status');
const feedbackExplanation = document.getElementById('feedback-explanation');
const nextBtn = document.getElementById('next-btn');
const quizProgress = document.getElementById('quiz-progress');
const quizModeTitle = document.getElementById('quiz-mode-title');
const timerContainer = document.getElementById('timer-container');
const timerBar = document.getElementById('timer-bar');

// Navigation principale
window.startMode = function(mode) {
    coachMenu.classList.add('hidden');
    
    if (mode === 'condense') {
        initCondense();
    } else if (mode === 'chrono') {
        initQuiz('chrono', data.quizChrono, "⏱️ QUIZ CHRONO (10s)");
    } else if (mode === 'boss') {
        initQuiz('boss', data.bossDeFin, "💀 LE BOSS DE FIN");
    }
};

window.returnToMenu = function() {
    clearInterval(timerInterval);
    viewCondense.classList.add('hidden');
    viewQuiz.classList.add('hidden');
    viewResult.classList.add('hidden');
    coachMenu.classList.remove('hidden');
};

// Mode 1: Condensé
function initCondense() {
    const list = document.getElementById('condense-list');
    list.innerHTML = '';
    
    data.ficheCondensee.forEach(item => {
        // Remplacer les ** par des balises <strong> pour le bold
        const formattedItem = item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-700">$1</strong>');
        const li = document.createElement('li');
        li.className = "bg-blue-50/50 p-4 rounded-xl border border-blue-100";
        li.innerHTML = formattedItem;
        list.appendChild(li);
    });
    
    viewCondense.classList.remove('hidden');
}

// Mode 2 & 3: Quiz (Chrono / Boss)
function initQuiz(mode, questionsArray, titleText) {
    currentMode = mode;
    currentQuestions = questionsArray;
    currentIndex = 0;
    score = 0;
    quizModeTitle.innerText = titleText;
    
    if (mode === 'boss') {
        timerContainer.classList.add('hidden'); // Pas de timer pour le boss
    } else {
        timerContainer.classList.remove('hidden');
    }

    viewQuiz.classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    feedbackContainer.classList.add('hidden');
    optionsContainer.innerHTML = '';
    
    const q = currentQuestions[currentIndex];
    questionText.innerText = q.enonce;
    quizProgress.innerText = `${currentIndex + 1} / ${currentQuestions.length}`;

    for (const [key, value] of Object.entries(q.choix)) {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = value;
        btn.onclick = () => handleAnswer(key, q, btn);
        optionsContainer.appendChild(btn);
    }

    if (currentMode === 'chrono') {
        startTimer(q);
    }
}

function startTimer(questionObj) {
    clearInterval(timerInterval);
    timerBar.style.width = '100%';
    timerBar.className = 'bg-blue-500 h-full w-full';
    
    let timeLeft = TIME_LIMIT;
    // Forcer le reflow pour que l'animation CSS reparte
    void timerBar.offsetWidth; 
    
    timerBar.style.transition = `width ${TIME_LIMIT}s linear`;
    timerBar.style.width = '0%';

    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft <= 3) {
            timerBar.classList.add('urgent'); // Devient rouge
        }
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleAnswer(null, questionObj, null); // Temps écoulé
        }
    }, 1000);
}

function handleAnswer(selectedKey, questionObj, selectedBtn) {
    clearInterval(timerInterval); // Arrêter le timer
    
    const allBtns = optionsContainer.querySelectorAll('button');
    allBtns.forEach(b => b.disabled = true);

    const isCorrect = (selectedKey === questionObj.reponseCorrecte);

    // Colorer le bouton sélectionné (s'il y en a un, sinon c'est un timeout)
    if (selectedBtn) {
        selectedBtn.classList.add(isCorrect ? 'correct' : 'wrong');
    }

    // Trouver et colorer la bonne réponse
    let correctBtnIndex = -1;
    let i = 0;
    for (const key of Object.keys(questionObj.choix)) {
        if (key === questionObj.reponseCorrecte) correctBtnIndex = i;
        i++;
    }
    if (correctBtnIndex !== -1 && allBtns[correctBtnIndex]) {
        allBtns[correctBtnIndex].classList.add('correct');
    }

    // Feedback
    if (isCorrect) {
        feedbackStatus.innerText = "✅ Exact !";
        feedbackStatus.className = "font-bold text-xl text-emerald-600";
        feedbackContainer.className = "mt-6 p-4 rounded-xl space-y-4 bg-emerald-50 border border-emerald-200";
        score++;
    } else {
        if (selectedKey === null) {
            feedbackStatus.innerText = "⏳ Temps écoulé !";
        } else {
            feedbackStatus.innerText = "❌ Incorrect !";
        }
        feedbackStatus.className = "font-bold text-xl text-red-600";
        feedbackContainer.className = "mt-6 p-4 rounded-xl space-y-4 bg-red-50 border border-red-200";
    }

    // Explication (surtout pour le boss)
    feedbackExplanation.innerText = questionObj.explication || "";
    if(!questionObj.explication) feedbackExplanation.classList.add('hidden');
    else feedbackExplanation.classList.remove('hidden');

    feedbackContainer.classList.remove('hidden');
    
    nextBtn.innerText = (currentIndex === currentQuestions.length - 1) ? "Voir mon score" : "Suivant ➡️";
}

nextBtn.onclick = () => {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    viewQuiz.classList.add('hidden');
    viewResult.classList.remove('hidden');
    const percentage = Math.round((score / currentQuestions.length) * 100);
    document.getElementById('final-score').innerText = `${percentage}% (${score}/${currentQuestions.length})`;
}
