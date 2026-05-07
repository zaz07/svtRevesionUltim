/**
 * agent_piegeur.js
 * Contrôleur pour la vue de l'Agent Piégeur (Questions vicieuses et inversées).
 */

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const uniteId = urlParams.get('unite') || '1';
    const data = window[`piegeurUnite${uniteId}`];

    if (!data) {
        document.getElementById('unit-title').innerText = "Erreur : Données introuvables.";
        return;
    }

    document.getElementById('unit-title').innerText = data.titre;

    let currentIndex = 0;
    let score = 0;
    const questions = data.questions;

    const questionText = document.getElementById('question-text');
    const questionTypeBadge = document.getElementById('question-type-badge');
    const optionsContainer = document.getElementById('options-container');
    
    const feedbackContainer = document.getElementById('feedback-container');
    const feedbackStatus = document.getElementById('feedback-status');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    const feedbackPiege = document.getElementById('feedback-piege');
    
    const nextBtn = document.getElementById('next-btn');
    const progressText = document.getElementById('progress-text');
    const scoreDisplay = document.getElementById('score-display');
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');

    function loadQuestion() {
        feedbackContainer.classList.add('hidden');
        optionsContainer.innerHTML = '';
        
        const q = questions[currentIndex];
        questionText.innerText = `Q${currentIndex + 1}. ${q.enonce}`;
        progressText.innerText = `${currentIndex + 1} / ${questions.length}`;

        // Badge Type
        questionTypeBadge.innerText = q.type === 'inversee' ? 'Question Inversée' : 
                                      q.type === 'piege' ? 'Question Piège' : 'Association';
        questionTypeBadge.className = `type-badge type-${q.type}`;

        for (const [key, value] of Object.entries(q.choix)) {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerText = `${key}. ${value}`;
            btn.onclick = () => handleAnswer(key, q, btn);
            optionsContainer.appendChild(btn);
        }
    }

    function handleAnswer(selectedKey, questionObj, selectedBtn) {
        const allBtns = optionsContainer.querySelectorAll('button');
        allBtns.forEach(b => b.disabled = true);

        const isCorrect = (selectedKey === questionObj.reponseCorrecte);

        if (isCorrect) {
            selectedBtn.classList.add('correct');
            feedbackStatus.innerText = "⚡ Parfait. Vous avez déjoué le piège.";
            feedbackStatus.className = "font-bold text-xl text-emerald-400";
            feedbackContainer.className = "mt-6 p-5 rounded-xl space-y-4 bg-emerald-900/20 border border-emerald-500/30";
            score++;
            scoreDisplay.innerText = score;
        } else {
            selectedBtn.classList.add('wrong');
            const correctIndex = Object.keys(questionObj.choix).indexOf(questionObj.reponseCorrecte);
            if(allBtns[correctIndex]) {
                allBtns[correctIndex].classList.add('correct');
            }
            feedbackStatus.innerText = `🩸 Touché. Le Piégeur a frappé. La réponse était ${questionObj.reponseCorrecte}.`;
            feedbackStatus.className = "font-bold text-xl text-red-500";
            feedbackContainer.className = "mt-6 p-5 rounded-xl space-y-4 bg-red-900/20 border border-red-500/30";
        }

        feedbackExplanation.innerText = questionObj.explication;
        feedbackPiege.innerText = questionObj.piegeEvite;

        feedbackContainer.classList.remove('hidden');

        if (currentIndex === questions.length - 1) {
            nextBtn.innerText = "Voir l'analyse finale de l'expert 👁️";
        } else {
            nextBtn.innerText = "Affronter la question suivante";
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
        
        const messageEl = document.getElementById('result-message');
        if(percentage === 100) {
            messageEl.innerText = "Absolument parfait. Aucun piège ne vous échappe.";
            messageEl.className = "text-lg text-emerald-400 mb-8 font-medium italic";
        } else if(percentage >= 70) {
            messageEl.innerText = "Très solide. Vous maîtrisez les subtilités, mais restez vigilant.";
            messageEl.className = "text-lg text-blue-400 mb-8 font-medium italic";
        } else {
            messageEl.innerText = "Le Piégeur a eu raison de vous. Relisez bien les explications et réessayez.";
            messageEl.className = "text-lg text-red-400 mb-8 font-medium italic";
        }
    }

    loadQuestion();
});
