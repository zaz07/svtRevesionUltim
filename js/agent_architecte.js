/**
 * agent_architecte.js
 * Contrôleur pour la vue de l'Agent Architecte.
 * Il s'attend à ce qu'une variable globale contenant les données (ex: architecteUnite1)
 * soit chargée avant lui via une balise <script>.
 */

document.addEventListener("DOMContentLoaded", () => {
    // Pour l'instant, on mappe en dur sur l'Unité 1 (architecteUnite1)
    // Dans une version finale, on pourrait utiliser des paramètres d'URL (?unite=1) pour choisir la variable.
    const urlParams = new URLSearchParams(window.location.search);
    const uniteId = urlParams.get('unite') || '1';
    const data = window[`architecteUnite${uniteId}`];

    if (!data) {
        document.getElementById('unit-title').innerText = "Erreur : Données introuvables.";
        return;
    }

    // Titre
    document.getElementById('unit-title').innerText = `Unité ${data.unite} : ${data.titre}`;

    // Concepts Piliers
    const conceptsList = document.getElementById('concepts-list');
    data.conceptsPiliers.forEach(concept => {
        const li = document.createElement('li');
        li.className = "flex items-start bg-blue-50 p-3 rounded-lg border border-blue-100";
        li.innerHTML = `<svg class="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>${concept}</span>`;
        conceptsList.appendChild(li);
    });

    // Détails Critiques
    const detailsList = document.getElementById('details-list');
    data.detailsCritiques.forEach(detail => {
        const li = document.createElement('li');
        li.className = "bg-purple-50 p-3 rounded-lg border border-purple-100";
        li.innerHTML = `<span class="inline-block px-2 py-1 bg-purple-200 text-purple-800 text-xs font-bold rounded mb-1 uppercase tracking-wider">${detail.type}</span>
                        <p class="text-slate-800 mt-1">${detail.contenu}</p>`;
        detailsList.appendChild(li);
    });

    // Zones de Confusion
    const confusionsList = document.getElementById('confusions-list');
    data.zonesConfusion.forEach(zone => {
        const div = document.createElement('div');
        div.className = "bg-red-50 p-4 rounded-xl border border-red-100 relative";
        div.innerHTML = `<div class="absolute -left-2 top-4 w-4 h-4 rounded-full bg-red-400 border-4 border-white shadow-sm"></div>
                         <h3 class="font-bold text-red-800 mb-2 ml-2">${zone.notions}</h3>
                         <p class="text-sm text-slate-700 ml-2 bg-white p-3 rounded shadow-sm border border-slate-100">${zone.explication}</p>`;
        confusionsList.appendChild(div);
    });

    // Matrice d'Objectifs
    const fillList = (id, items) => {
        const ul = document.getElementById(id);
        items.forEach(item => {
            const li = document.createElement('li');
            li.innerText = item;
            ul.appendChild(li);
        });
    };

    fillList('obj-debutant', data.tableauObjectifs.debutant);
    fillList('obj-intermediaire', data.tableauObjectifs.intermediaire);
    fillList('obj-expert', data.tableauObjectifs.expert);
});
