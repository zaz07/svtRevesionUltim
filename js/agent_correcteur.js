/**
 * agent_correcteur.js
 * Contrôleur pour la vue de l'Agent Correcteur.
 */

const urlParams = new URLSearchParams(window.location.search);
    const uniteId = urlParams.get('unite') || '1';
    const data = window[`correcteurUnite${uniteId}`];

document.addEventListener("DOMContentLoaded", () => {
    if (!data) {
        document.getElementById('unit-title').innerText = "Erreur : Données introuvables.";
        return;
    }
    document.getElementById('unit-title').innerText = `Unité ${data.unite} : ${data.titre}`;

    // Remplir les erreurs fréquentes
    const erreursContainer = document.getElementById('erreurs-container');
    data.sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'bento-card';
        
        // Titre de la section
        const title = document.createElement('h2');
        title.className = 'text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2';
        title.innerText = section.nom;
        sectionDiv.appendChild(title);

        // Liste des erreurs
        const ul = document.createElement('ul');
        ul.className = 'space-y-3 mb-6';
        section.erreursFrequentes.forEach(erreur => {
            const li = document.createElement('li');
            li.className = 'flex items-start bg-red-50 p-3 rounded-lg border border-red-100';
            // Formater le "Faux :" en gras et rouge
            const formattedErreur = erreur.replace(/(Faux\s*:)/i, '<strong class="text-red-600 uppercase text-xs tracking-wider">$1</strong>');
            li.innerHTML = `<svg class="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                            <span class="text-slate-700 text-sm">${formattedErreur}</span>`;
            ul.appendChild(li);
        });
        sectionDiv.appendChild(ul);

        // Méthode Flash
        const flashBox = document.createElement('div');
        flashBox.className = 'bg-teal-50 border border-teal-200 p-4 rounded-xl flex items-start';
        flashBox.innerHTML = `<span class="text-2xl mr-3">⚡</span>
                              <div>
                                  <strong class="text-teal-800 text-sm uppercase tracking-wide block mb-1">Méthode Flash</strong>
                                  <p class="text-teal-900 font-medium">${section.methodeFlash}</p>
                              </div>`;
        sectionDiv.appendChild(flashBox);

        erreursContainer.appendChild(sectionDiv);
    });

    // Initialiser le parcours 5 min
    window.showParcours('5min');
});

window.showParcours = function(timeStr) {
    if (!data) return;

    // Reset tabs
    document.querySelectorAll('.btn-tab').forEach(btn => btn.classList.remove('active'));
    document.getElementById('tab-' + timeStr).classList.add('active');

    // Mettre à jour le titre
    const titleMap = {
        '5min': 'Plan d\'action (5 min)',
        '15min': 'Parcours Standard (15 min)',
        '30min': 'Parcours Expert (30 min)'
    };
    document.getElementById('parcours-title').innerText = titleMap[timeStr];

    // Remplir la liste
    const list = document.getElementById('parcours-list');
    list.innerHTML = '';
    data.parcours[timeStr].forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        list.appendChild(li);
    });
};
