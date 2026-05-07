/**
 * agent_forgeron.js
 * Contrôleur pour la vue de l'Agent Forgeron (QCM interactif avec mnémo).
 */

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const uniteId = urlParams.get('unite') || '1';
    const data = window[`forgeronUnite${uniteId}`];

    if (!data) {
        document.getElementById('unit-title').innerText = "Erreur : Données introuvables.";
        return;
    }

    document.getElementById('unit-title').innerText = `Unité ${data.unite} : ${data.titre}`;

    let currentIndex = 0;
    let score = 0;
    const questions = data.questions;

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackStatus = document.getElementById('feedback-status');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    const feedbackMnemo = document.getElementById('feedback-mnemo');
    const mnemoBox = document.getElementById('mnemo-box');
    const nextBtn = document.getElementById('next-btn');
    const progressText = document.getElementById('progress-text');
    const scoreDisplay = document.getElementById('score-display');
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');

    function loadQuestion() {
        // Reset UI
        feedbackContainer.classList.add('hidden');
        optionsContainer.innerHTML = '';
        
        const q = questions[currentIndex];
        questionText.innerText = `Q${currentIndex + 1}. ${q.enonce}`;
        progressText.innerText = `${currentIndex + 1} / ${questions.length}`;

        // Create options
        for (const [key, value] of Object.entries(q.choix)) {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = `${key}. ${value}`;
            btn.onclick = () => handleAnswer(key, q, btn);
            optionsContainer.appendChild(btn);
        }
    }

    function handleAnswer(selectedKey, questionObj, selectedBtn) {
        // Disable all buttons
        const allBtns = optionsContainer.querySelectorAll('button');
        allBtns.forEach(b => b.disabled = true);

        const isCorrect = (selectedKey === questionObj.reponseCorrecte);

        if (isCorrect) {
            selectedBtn.classList.add('correct');
            feedbackStatus.innerText = "✅ Excellente réponse !";
            feedbackStatus.className = "font-bold text-lg text-emerald-600";
            feedbackContainer.className = "mt-6 p-4 rounded-xl space-y-3 bg-emerald-50 border border-emerald-200";
            score++;
            scoreDisplay.innerText = score;
        } else {
            selectedBtn.classList.add('wrong');
            // Find correct btn and highlight it
            const correctIndex = Object.keys(questionObj.choix).indexOf(questionObj.reponseCorrecte);
            if(allBtns[correctIndex]) {
                allBtns[correctIndex].classList.add('correct');
            }
            feedbackStatus.innerText = `❌ Oups ! La bonne réponse était ${questionObj.reponseCorrecte}.`;
            feedbackStatus.className = "font-bold text-lg text-red-600";
            feedbackContainer.className = "mt-6 p-4 rounded-xl space-y-3 bg-red-50 border border-red-200";
        }

        feedbackExplanation.innerText = questionObj.explication;
        
        if (questionObj.mnemotechnique) {
            mnemoBox.classList.remove('hidden');
            feedbackMnemo.innerText = questionObj.mnemotechnique;
        } else {
            mnemoBox.classList.add('hidden');
        }

        feedbackContainer.classList.remove('hidden');

        // Check if last question
        if (currentIndex === questions.length - 1) {
            nextBtn.innerText = "Voir les résultats 🏆";
        } else {
            nextBtn.innerText = "Question Suivante ➡️";
        }
    }

    nextBtn.onclick = () => {
        currentIndex++;
        if (currentIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    };

    function showResults() {
        quizContainer.classList.add('hidden');
        resultContainer.classList.remove('hidden');
        const percentage = Math.round((score / questions.length) * 100);
        document.getElementById('final-score').innerText = `${percentage}% (${score}/${questions.length})`;
    }

    // Start
    loadQuestion();
});
