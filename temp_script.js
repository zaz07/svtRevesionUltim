
        // --- Global Utilities ---
        function showSvtToast(message, type = 'info', duration = 4000) {
            const container = document.getElementById('svt-toast-container');
            if (!container) return;

            const toast = document.createElement('div');
            toast.className = `svt-toast toast-${type}`;
            
            let icon = 'ℹ️';
            if (type === 'success') icon = '✅';
            if (type === 'error') icon = '❌';
            if (type === 'warning') icon = '⚠️';

            toast.innerHTML = `
                <div class="svt-toast-icon">${icon}</div>
                <div class="svt-toast-content">${message}</div>
            `;

            container.appendChild(toast);

            setTimeout(() => {
                toast.classList.add('toast-fade-out');
                setTimeout(() => toast.remove(), 300);
            }, duration);
        }
        // ================= GENES DATA & LAB 1 SIMULATOR =================
        const GENES_DATABASE = {
            hba: {
                name: "Hémoglobine Saine HbA",
                disease: "Symptômes : Sain (Pas de Drépanocytose). Globules rouges biconcaves normaux.",
                dna: "ATGGTGCACCTGACTCCTGAGGAGAAG", // 27 bp (9 codons)
                mutIndex: 19, // 20th nucleotide (A) (0-indexed)
                substituteVal: "T", // gives HbS
                mutTripletNum: 7,
                normalCodon: "GAG",
                mutatedCodon: "GUG",
                normalAA: "Glu",
                mutatedAA: "Val",
                role: "le transport de l'oxygène dans le sang"
            },
            hbs: {
                name: "Hémoglobine Drépanocytaire HbS",
                disease: "Symptômes : Anémie falciforme, globules rouges en forme de faucille bouchant les capillaires.",
                dna: "ATGGTGCACCTGACTCCTGTGGAGAAG",
                mutIndex: 19,
                substituteVal: "A", // reverts to HbA
                mutTripletNum: 7,
                normalCodon: "GAG",
                mutatedCodon: "GUG",
                normalAA: "Glu",
                mutatedAA: "Val",
                role: "le transport de l'oxygène dans le sang"
            },
            "cftr-normal": {
                name: "Canal CFTR Normal (Poumon)",
                disease: "Symptômes : Sain (Pas de Mucoviscidose). Mucus fluide dans les bronches.",
                dna: "ATCATCTTTGGTGTT", // 15 bp
                mutIndex: 5,
                substituteVal: "C",
                role: "le transport des ions chlorure à travers la membrane cellulaire afin de fluidifier le mucus"
            },
            "cftr-delta": {
                name: "Canal CFTR Muté ΔF508",
                disease: "Symptômes : Mucoviscidose. Mucus épais encombrant les bronches et provoquant de graves infections.",
                dna: "ATCATTGGTGTT", // Missing CTT (Phe at codon 3 is deleted)
                mutIndex: 5,
                substituteVal: "T",
                role: "le transport des ions chlorure à travers la membrane cellulaire afin de fluidifier le mucus"
            },
            "albinos-normal": {
                name: "Tyrosinase Normale (Albinisme)",
                disease: "Symptômes : Pigmentation normale de la peau, des yeux et des cheveux.",
                dna: "ATGGGAAGACGGTGA",
                mutIndex: 5,
                substituteVal: "A",
                role: "la synthèse de mélanine, pigment responsable de la coloration de la peau"
            },
            "albinos-mute": {
                name: "Tyrosinase Mutée (Albinisme)",
                disease: "Symptômes : Albinisme. Absence totale de mélanine (peau blanche, cheveux décolorés, yeux clairs).",
                dna: "ATGGGAAAGACGGTGA", // Inserted A at index 6
                mutIndex: 6,
                substituteVal: "A",
                role: "la synthèse de mélanine, pigment responsable de la coloration de la peau"
            },
            custom: {
                name: "Gène personnalisé",
                disease: "Entrez vos propres nucléotides pour analyser instantanément les conséquences.",
                dna: "ATGGCCTTCGGCTAA",
                mutIndex: 0,
                substituteVal: "T",
                role: "le métabolisme normal de la cellule"
            }
        };

        const GENETIC_CODE_TABLE = {
            "UUU": "Phe", "UUC": "Phe", "UUA": "Leu", "UUG": "Leu",
            "CUU": "Leu", "CUC": "Leu", "CUA": "Leu", "CUG": "Leu",
            "AUU": "Ile", "AUC": "Ile", "AUA": "Ile", "AUG": "Met", // START
            "GUU": "Val", "GUC": "Val", "GUA": "Val", "GUG": "Val",
            "UCU": "Ser", "UCC": "Ser", "UCA": "Ser", "UCG": "Ser",
            "CCU": "Pro", "CCC": "Pro", "CCA": "Pro", "CCG": "Pro",
            "ACU": "Thr", "ACC": "Thr", "ACA": "Thr", "ACG": "Thr",
            "GCU": "Ala", "GCC": "Ala", "GCA": "Ala", "GCG": "Ala",
            "UAU": "Tyr", "UAC": "Tyr", "UAA": "STOP", "UAG": "STOP",
            "CAU": "His", "CAC": "His", "CAA": "Gln", "CAG": "Gln",
            "AAU": "Asn", "AAC": "Asn", "AAA": "Lys", "AAG": "Lys",
            "GAU": "Asp", "GAC": "Asp", "GAA": "Glu", "GAG": "Glu",
            "UGU": "Cys", "UGC": "Cys", "UGA": "STOP", "UGG": "Trp",
            "CGU": "Arg", "CGC": "Arg", "CGA": "Arg", "CGG": "Arg",
            "AGU": "Ser", "AGC": "Ser", "AGA": "Arg", "AGG": "Arg",
            "GGU": "Gly", "GGC": "Gly", "GGA": "Gly", "GGG": "Gly"
        };

        let currentActiveDNA = "";
        let selectedGeneId = "hba";
        let lastSelectedNucIndex = -1;

        // Initialize Tab 1
        function loadSelectedGene() {
            const sel = document.getElementById('gene-selector');
            selectedGeneId = sel.value;

            const customGroup = document.getElementById('custom-sequence-input-group');
            if (selectedGeneId === 'custom') {
                customGroup.style.display = 'flex';
                currentActiveDNA = document.getElementById('custom-sequence-input').value.toUpperCase() || "ATGGCCTTCGGCTAA";
            } else {
                customGroup.style.display = 'none';
                currentActiveDNA = GENES_DATABASE[selectedGeneId].dna;
            }

            renderDnaWorkspace();
            resetInteractiveOutputs();
        }

        function validateAndSetCustomDNA() {
            const input = document.getElementById('custom-sequence-input');
            let val = input.value.toUpperCase().replace(/[^ATCG]/g, '');
            input.value = val;
            currentActiveDNA = val;
            renderDnaWorkspace();
        }

        function renderDnaWorkspace() {
            const rowCodant = document.getElementById('row-dna-codant');
            const rowMatrice = document.getElementById('row-dna-matrice');

            // Clean old nucleotide elements (keep label)
            const codantLabel = rowCodant.querySelector('.strand-label');
            const matriceLabel = rowMatrice.querySelector('.strand-label');
            rowCodant.innerHTML = "";
            rowMatrice.innerHTML = "";
            rowCodant.appendChild(codantLabel);
            rowMatrice.appendChild(matriceLabel);

            // Reconstruct the matching strands
            for (let i = 0; i < currentActiveDNA.length; i++) {
                const baseCodant = currentActiveDNA[i];
                const baseMatrice = getComplementaryBase(baseCodant, false); // DNA complimentary

                // Render Codant Base Element
                const nucC = document.createElement('span');
                nucC.className = `nuc-base nuc-${baseCodant}`;
                nucC.textContent = baseCodant;
                nucC.onclick = () => openMutationDialog(i, baseCodant);
                rowCodant.appendChild(nucC);

                // Render Matrice Base Element
                const nucM = document.createElement('span');
                nucM.className = `nuc-base nuc-${baseMatrice}`;
                nucM.textContent = baseMatrice;
                nucM.onclick = () => openMutationDialog(i, baseCodant); // click binds to same index
                rowMatrice.appendChild(nucM);
            }
        }

        function getComplementaryBase(base, toRNA = false) {
            switch (base) {
                case 'A': return toRNA ? 'U' : 'T';
                case 'T': return 'A';
                case 'C': return 'G';
                case 'G': return 'C';
                default: return 'N';
            }
        }

        function openMutationDialog(index, base) {
            lastSelectedNucIndex = index;
            document.getElementById('mut-dialog-index').textContent = index + 1;
            document.getElementById('mut-dialog-base').textContent = base;
            document.getElementById('mutation-dialog').classList.add('active');
        }

        function closeMutationDialog() {
            document.getElementById('mutation-dialog').classList.remove('active');
        }

        function toggleMutationValueUI() {
            const act = document.getElementById('mut-action-select').value;
            const group = document.getElementById('mut-new-base-group');
            if (act === 'delete') {
                group.style.display = 'none';
            } else {
                group.style.display = 'flex';
            }
        }

        function applyCustomMutation() {
            const action = document.getElementById('mut-action-select').value;
            const newBase = document.getElementById('mut-new-base-select').value;

            let arr = currentActiveDNA.split('');
            let mutDescription = "";
            let mutationType = "";
            let mutNum = Math.floor(lastSelectedNucIndex / 3) + 1;
            let origBase = arr[lastSelectedNucIndex];

            if (action === 'substitute') {
                arr[lastSelectedNucIndex] = newBase;
                mutationType = "substitution";
                mutDescription = `On constate qu'au niveau du triplet n°${mutNum}, il y a eu une mutation par <span class="kw-mut">substitution</span> du nucléotide <span class="kw-mut">${origBase}</span> par <span class="kw-mut">${newBase}</span>`;
            } else if (action === 'delete') {
                arr.splice(lastSelectedNucIndex, 1);
                mutationType = "délétion";
                mutDescription = `On constate qu'au niveau du triplet n°${mutNum}, il y a eu une mutation par <span class="kw-mut">délétion</span> du nucléotide <span class="kw-mut">${origBase}</span>`;
            } else if (action === 'add') {
                arr.splice(lastSelectedNucIndex, 0, newBase);
                mutationType = "addition";
                mutDescription = `On constate qu'au niveau du triplet n°${mutNum}, il y a eu une mutation par <span class="kw-mut">addition</span> (insertion) du nucléotide <span class="kw-mut">${newBase}</span> avant le nucléotide <span class="kw-mut">${origBase}</span>`;
            }

            currentActiveDNA = arr.join('');
            document.getElementById('gene-selector').value = 'custom';
            document.getElementById('custom-sequence-input-group').style.display = 'flex';
            document.getElementById('custom-sequence-input').value = currentActiveDNA;

            renderDnaWorkspace();
            closeMutationDialog();

            // Run simulation instantly with custom explanation
            runTranslationChain(mutDescription, mutationType, lastSelectedNucIndex);
        }

        function resetGeneSimulation() {
            loadSelectedGene();
        }

        function resetInteractiveOutputs() {
            document.getElementById('mrna-codons-container').innerHTML = "";
            document.getElementById('protein-chain-container').innerHTML = "";
            document.getElementById('phrase-model-text').innerHTML = "Cliquez sur 'Lancer Simulation' ou introduisez une mutation pour générer la justification de l'examen.";
            document.getElementById('phrase-card').className = "phrase-output-card card-glow-blue";
        }

        function startExpressionAnimation() {
            // Simply runs translation with default description corresponding to selected preset gene
            let desc = "";
            let mutType = "none";
            let mutIdx = -1;

            if (selectedGeneId === 'hbs') {
                desc = `Dans le cas de l'allèle muté HbS responsable de la drépanocytose, on constate qu'au niveau du triplet n°7, il y a eu une mutation par <span class="kw-mut">substitution</span> du nucléotide <span class="kw-mut">A</span> par <span class="kw-mut">T</span>`;
                mutType = "substitution";
                mutIdx = 19;
            } else if (selectedGeneId === 'cftr-delta') {
                desc = `Dans le cas de l'allèle muté ΔF508 de la mucoviscidose, on observe une mutation par <span class="kw-mut">délétion</span> de trois nucléotides consécutifs (<span class="kw-mut">CTT</span>) au niveau du codon n°508`;
                mutType = "deletion_3";
                mutIdx = 6;
            } else if (selectedGeneId === 'albinos-mute') {
                desc = `Dans le cas de l'albinisme, on constate qu'au niveau du triplet n°3, il y a eu une mutation par <span class="kw-mut">addition</span> du nucléotide <span class="kw-mut">A</span>`;
                mutType = "addition";
                mutIdx = 6;
            } else if (selectedGeneId === 'hba' || selectedGeneId === 'cftr-normal' || selectedGeneId === 'albinos-normal') {
                desc = `Séquence normale (Saine) : La synthèse de la protéine s'effectue sans encombre. L'expression de l'information donne une protéine active et fonctionnelle.`;
                mutType = "normal";
            } else {
                desc = `Analyse personnalisée : Synthèse en cours...`;
                mutType = "custom";
            }

            runTranslationChain(desc, mutType, mutIdx);
        }

        function runTranslationChain(mutationIntroText, mutationType, mutIndex) {
            const mrnaContainer = document.getElementById('mrna-codons-container');
            const proteinContainer = document.getElementById('protein-chain-container');
            mrnaContainer.innerHTML = "";
            proteinContainer.innerHTML = "";

            // 1. Transcribe current DNA to mRNA (monocaténaire based on complimentary to Matrice)
            // Matrice is complimentary to Codant. ARNm is complementary to Matrice, meaning ARNm matches Codant with T replacing U.
            let mrnaSeq = "";
            for (let i = 0; i < currentActiveDNA.length; i++) {
                if (currentActiveDNA[i] === 'T') {
                    mrnaSeq += 'U';
                } else {
                    mrnaSeq += currentActiveDNA[i];
                }
            }

            // Slice mRNA into codons (triplets)
            let codons = [];
            for (let i = 0; i < mrnaSeq.length; i += 3) {
                if (i + 3 <= mrnaSeq.length) {
                    codons.push(mrnaSeq.substring(i, i + 3));
                } else {
                    // trailing bases
                    codons.push(mrnaSeq.substring(i));
                }
            }

            // 2. Animate and Render Codons on screen
            let isFrameShifted = false;
            let mutTripletNum = Math.floor(mutIndex / 3) + 1;
            let finalAminoAcids = [];
            let stopEncountered = false;
            let firstStopCodonIndex = -1;

            codons.forEach((codon, idx) => {
                const cBox = document.createElement('div');
                cBox.className = "mrna-codon-box";

                // Add codon index floating label
                const indexLabel = document.createElement('span');
                indexLabel.className = "codon-index";
                indexLabel.textContent = idx + 1;
                cBox.appendChild(indexLabel);

                // Check frame shift (all codons after addition/deletion of non-multiple-of-3 bases)
                if ((mutationType === 'addition' || mutationType === 'délétion') && (idx + 1) >= mutTripletNum) {
                    isFrameShifted = true;
                }

                if (isFrameShifted) {
                    cBox.classList.add('shifted');
                } else if ((idx + 1) === mutTripletNum && mutationType === 'substitution') {
                    cBox.classList.add('mutated-codon');
                }

                // Render base letters inside codon
                for (let b = 0; b < codon.length; b++) {
                    const l = document.createElement('span');
                    l.className = `nuc-base nuc-${codon[b]}`;
                    l.textContent = codon[b];
                    cBox.appendChild(l);
                }

                mrnaContainer.appendChild(cBox);

                // Calculate matching amino acid
                let aaName = "???";
                if (codon.length === 3) {
                    aaName = GENETIC_CODE_TABLE[codon] || "Inconnu";
                }

                if (aaName === "STOP" && !stopEncountered) {
                    stopEncountered = true;
                    firstStopCodonIndex = idx;
                }

                if (!stopEncountered) {
                    finalAminoAcids.push({
                        name: aaName,
                        isMutated: (idx + 1) === mutTripletNum && mutationType === 'substitution',
                        isShifted: isFrameShifted,
                        codon: codon,
                        triplet: idx + 1
                    });
                } else if (idx === firstStopCodonIndex) {
                    finalAminoAcids.push({
                        name: "STOP",
                        isMutated: false,
                        isShifted: isFrameShifted,
                        codon: codon,
                        triplet: idx + 1
                    });
                }
            });

            // 3. Render Protein Chain
            finalAminoAcids.forEach((aa, idx) => {
                const aaDiv = document.createElement('div');
                aaDiv.className = "prot-aa";
                aaDiv.textContent = aa.name;

                if (aa.name === "STOP") {
                    aaDiv.classList.add('aa-stop');
                } else if (aa.isMutated) {
                    aaDiv.classList.add('aa-mutated');
                } else if (aa.isShifted) {
                    aaDiv.classList.add('aa-shifted');
                }

                proteinContainer.appendChild(aaDiv);
            });

            // 4. Formulate the Perfect "Phrase-Type 20/20"
            const phraseBox = document.getElementById('phrase-model-text');
            const cardElement = document.getElementById('phrase-card');

            if (mutationType === 'none' || mutationType === 'normal') {
                phraseBox.innerHTML = `<strong>Séquence Standard:</strong> Cette séquence d'ADN code pour une protéine normale saine. <br>L'ARNm obtenu est intégralement traduit en une chaîne d'acides aminés fonctionnelle (commençant par Met-). La protéine assure pleinement son rôle physiologique, assurant ainsi un phénotype sain.`;
                cardElement.className = "phrase-output-card card-glow-green";
                return;
            }

            // Build dynamic mutation sentence
            let mutationClause = mutationIntroText;
            let consequencesClause = "";
            let proteinRôle = GENES_DATABASE[selectedGeneId]?.role || "le fonctionnement enzymatique de la cellule";

            if (mutationType === 'substitution') {
                let changedAA = finalAminoAcids[mutTripletNum - 1]?.name || "Inconnu";
                let originalAA = GENES_DATABASE[selectedGeneId]?.normalAA || "Glu";
                let origCodon = GENES_DATABASE[selectedGeneId]?.normalCodon || "GAG";
                let mutCod = codons[mutTripletNum - 1] || "GUG";

                if (originalAA === changedAA) {
                    // Silent Mutation
                    consequencesClause = `, entraînant le remplacement du codon <span class="kw-cod">${origCodon}</span> par le codon <span class="kw-cod">${mutCod}</span>, ce qui code pour le même acide aminé <span class="kw-aa">${changedAA}</span> (mutation silencieuse). La structure primaire de la protéine n'est pas altérée, la protéine reste <span class="kw-prot">fonctionnelle</span> et le phénotype est sain.`;
                    cardElement.className = "phrase-output-card card-glow-green";
                } else if (changedAA === "STOP") {
                    // Non-sense
                    consequencesClause = `, entraînant le remplacement du codon <span class="kw-cod">${origCodon}</span> par le codon STOP <span class="kw-cod">${mutCod}</span>. Cela stoppe prématurément la traduction, libérant une protéine tronquée et <span class="kw-prot">non fonctionnelle</span>, incapable d'assurer son rôle dans <span class="kw-prot">${proteinRôle}</span>, provoquant ainsi l'apparition du phénotype malade.`;
                    cardElement.className = "phrase-output-card card-glow-purple";
                } else {
                    // Missense (faux-sens)
                    consequencesClause = `, entraînant le remplacement du codon <span class="kw-cod">${origCodon}</span> par le codon <span class="kw-cod">${mutCod}</span>, ce qui se traduit par le remplacement de l'acide aminé <span class="kw-aa">${originalAA}</span> par l'acide aminé <span class="kw-aa">${changedAA}</span> au niveau de la protéine. Cette modification structurale produit une protéine <span class="kw-prot">non fonctionnelle</span>, incapable d'assurer son rôle de <span class="kw-prot">${proteinRôle}</span>, ce qui explique l'apparition des symptômes de la maladie chez l'individu atteint.`;
                    cardElement.className = "phrase-output-card card-glow-purple";
                }
            } else if (mutationType === 'délétion' || mutationType === 'addition') {
                let effect = stopEncountered ? "l'apparition d'un codon STOP prématuré arrêtant la traduction" : "un changement complet de la séquence d'acides aminés en aval";
                consequencesClause = `, ce qui a provoqué un <span class="kw-mut">décalage du cadre de lecture</span> (frameshift). Cela se traduit par ${effect}. La protéine ainsi produite est totalement structurée différemment et est donc <span class="kw-prot">non fonctionnelle</span>, incapable d'assurer sa fonction pour <span class="kw-prot">${proteinRôle}</span>, d'où le phénotype malade de l'élève.`;
                cardElement.className = "phrase-output-card card-glow-purple";
            } else if (mutationType === 'deletion_3') {
                // CFTR DeltaF508 specific
                consequencesClause = `, provoquant la perte de l'acide aminé <span class="kw-aa">Phe</span> (Phénylalanine) en position 508 de la protéine CFTR, sans décalage du cadre de lecture. Cette délétion d'un acide aminé rend la protéine CFTR instable et <span class="kw-prot">non fonctionnelle</span> pour <span class="kw-prot">${proteinRôle}</span>, causant un mucus visqueux et le phénotype malade.`;
                cardElement.className = "phrase-output-card card-glow-purple";
            } else {
                consequencesClause = `. La structure de la protéine a été substantiellement modifiée, devenant <span class="kw-prot">non fonctionnelle</span>, affectant ${proteinRôle}, causant le phénotype anormal.`;
                cardElement.className = "phrase-output-card card-glow-purple";
            }

            phraseBox.innerHTML = `🏆 <strong>Phrase modèle rédigée :</strong> <br>« ${mutationClause}${consequencesClause} »`;
        }

        // ================= CHALLENGE STATE ENGINE & MNEMONICS =================
        let activeLabMode = "demo"; // default

        function switchLabMode(mode) {
            activeLabMode = mode;
            const demoBtn = document.getElementById('toggle-mode-demo');
            const challengeBtn = document.getElementById('toggle-mode-challenge');
            const demoWp = document.getElementById('demo-workspace');
            const challengeWp = document.getElementById('challenge-workspace');

            if (mode === 'demo') {
                demoBtn.className = "px-4 py-1.5 text-xs font-extrabold rounded-lg transition-all bg-sky-500 text-white shadow";
                challengeBtn.className = "px-4 py-1.5 text-xs font-extrabold rounded-lg transition-all text-slate-400 hover:text-white";
                demoWp.style.display = "block";
                challengeWp.style.display = "none";
                resetGeneSimulation();
            } else {
                challengeBtn.className = "px-4 py-1.5 text-xs font-extrabold rounded-lg transition-all bg-purple-600 text-white shadow";
                demoBtn.className = "px-4 py-1.5 text-xs font-extrabold rounded-lg transition-all text-slate-400 hover:text-white";
                demoWp.style.display = "none";
                challengeWp.style.display = "block";
                initChallengeSetup();
            }
        }

        function loadGeneticCodeTable() {
            const container = document.getElementById('genetic-code-table-grid');
            if (!container) return;
            container.innerHTML = "";

            for (let codon in GENETIC_CODE) {
                const aaName = GENETIC_CODE[codon];
                const box = document.createElement('div');
                box.className = "p-2 rounded bg-slate-950 border border-slate-800 text-center flex flex-col justify-center items-center";
                box.innerHTML = `
                    <span class="font-mono font-bold text-sky-400 text-[10px]">${codon}</span>
                    <span class="text-[10px] font-extrabold text-white mt-1">${aaName}</span>
                `;
                container.appendChild(box);
            }
        }

        // ================= CHALLENGE STATE VARIABLES =================
        let challengeStep = "setup";
        let challengeSelectedGeneId = "hba";
        let challengeDNA = "";
        let challengeMatrice = "";
        let challengeMRNA = "";
        let challengeProtein = [];
        let challengeNucIndex = 0;
        let challengeCodonIndex = 0;
        let challengeLivesLeft = 3;
        let challengeScoreValue = 0;
        let challengeMistakesArray = [];
        let challengeFeedbackActive = false;

        function initChallengeSetup() {
            challengeStep = "setup";
            document.getElementById('challenge-setup-screen').style.display = "block";
            document.getElementById('challenge-active-screen').style.display = "none";
            document.getElementById('challenge-result-screen').style.display = "none";
            document.getElementById('challenge-feedback-overlay').style.display = "none";
        }

        function toggleChallengeHelperTable() {
            const modal = document.getElementById('genetic-code-modal');
            if (modal.classList.contains('active')) {
                modal.classList.remove('active');
            } else {
                modal.classList.add('active');
            }
        }

        function startChallenge() {
            challengeSelectedGeneId = document.getElementById('challenge-gene-selector').value;
            const geneObj = GENES_DATABASE[challengeSelectedGeneId];

            challengeDNA = geneObj.dna;

            // Build DNA transcrit (Matrice)
            challengeMatrice = "";
            for (let i = 0; i < challengeDNA.length; i++) {
                challengeMatrice += getComplementaryBase(challengeDNA[i], false);
            }

            challengeMRNA = "";
            challengeProtein = [];
            challengeNucIndex = 0;
            challengeCodonIndex = 0;
            challengeLivesLeft = 3;
            challengeScoreValue = 0;
            challengeMistakesArray = [];
            challengeFeedbackActive = false;

            // Switch screen
            document.getElementById('challenge-setup-screen').style.display = "none";
            document.getElementById('challenge-active-screen').style.display = "block";
            document.getElementById('challenge-result-screen').style.display = "none";
            document.getElementById('challenge-feedback-overlay').style.display = "none";

            // Reset header display
            updateChallengeHeader();

            // Draw DNA row and empty ARNm row
            drawChallengeStrands();

            // Set current prompt
            goToChallengeStep("transcription");
        }

        function updateChallengeHeader() {
            // Render Hearts
            let hearts = "";
            for (let i = 0; i < 3; i++) {
                if (i < challengeLivesLeft) {
                    hearts += "❤️";
                } else {
                    hearts += "🖤";
                }
            }
            document.getElementById('challenge-lives').textContent = hearts;
            document.getElementById('challenge-score').textContent = challengeScoreValue;
        }

        function drawChallengeStrands() {
            const dnaRow = document.getElementById('challenge-dna-row');
            const mrnaRow = document.getElementById('challenge-mrna-row');
            const protContainer = document.getElementById('challenge-protein-row-container');
            const protRow = document.getElementById('challenge-protein-row');

            dnaRow.innerHTML = "";
            mrnaRow.innerHTML = "";
            protRow.innerHTML = "";
            protContainer.style.display = "none";

            // Draw DNA bases
            for (let i = 0; i < challengeMatrice.length; i++) {
                const base = challengeMatrice[i];
                const baseEl = document.createElement('span');
                baseEl.className = `nuc-base nuc-${base} challenge-nuc-dna-${i}`;
                baseEl.textContent = base;
                dnaRow.appendChild(baseEl);

                // Draw empty slot for mRNA
                const slotEl = document.createElement('span');
                slotEl.className = `nuc-base nuc-blank challenge-nuc-mrna-${i}`;
                slotEl.textContent = ".";
                mrnaRow.appendChild(slotEl);
            }
        }

        function goToChallengeStep(step) {
            challengeStep = step;
            const promptTitle = document.getElementById('challenge-prompt-title');
            const promptDesc = document.getElementById('challenge-prompt-desc');
            const nucKeyboard = document.getElementById('challenge-nuc-keyboard');
            const aaKeyboard = document.getElementById('challenge-aa-keyboard');

            if (step === "transcription") {
                promptTitle.textContent = "Étape 1 : Transcription de l'ARNm";
                promptDesc.textContent = "Saisissez la base complémentaire pour chaque nucléotide du Brin Transcrit. Cliquez sur les touches A, U, C, G ou T ci-dessous.";
                nucKeyboard.style.display = "flex";
                aaKeyboard.style.display = "none";
                highlightActiveNuc();
                updateChallengeProgressBar(0);
            } else if (step === "translation") {
                promptTitle.textContent = "Étape 2 : Traduction en Acides Aminés";
                promptDesc.textContent = "Traduisez les codons de l'ARNm obtenus (groupe de 3 bases) en utilisant la table du code génétique.";
                nucKeyboard.style.display = "none";
                aaKeyboard.style.display = "block";

                // Draw dynamic AA selector if not drawn
                drawAaSelectorGrid();

                // Show protein row
                document.getElementById('challenge-protein-row-container').style.display = "flex";

                highlightActiveCodon();
                updateChallengeProgressBar(50);
            }
        }

        function updateChallengeProgressBar(basePercent) {
            const bar = document.getElementById('challenge-progress-bar');
            let percent = basePercent;
            if (challengeStep === "transcription") {
                percent += Math.floor((challengeNucIndex / challengeMatrice.length) * 50);
            } else if (challengeStep === "translation") {
                let totalCodons = Math.floor(challengeMatrice.length / 3);
                percent += Math.floor((challengeCodonIndex / totalCodons) * 50);
            }
            bar.style.width = `${percent}%`;
        }

        function highlightActiveNuc() {
            // Remove active classes
            for (let i = 0; i < challengeMatrice.length; i++) {
                const dnaEl = document.querySelector(`.challenge-nuc-dna-${i}`);
                const mrnaEl = document.querySelector(`.challenge-nuc-mrna-${i}`);
                if (dnaEl) {
                    dnaEl.style.transform = "none";
                    dnaEl.style.borderColor = "rgba(255,255,255,0.06)";
                }
                if (mrnaEl) {
                    mrnaEl.style.borderColor = "rgba(255,255,255,0.15)";
                }
            }

            // Highlight current index
            if (challengeNucIndex < challengeMatrice.length) {
                const activeDna = document.querySelector(`.challenge-nuc-dna-${challengeNucIndex}`);
                const activeMrna = document.querySelector(`.challenge-nuc-mrna-${challengeNucIndex}`);
                if (activeDna) {
                    activeDna.style.transform = "scale(1.2)";
                    activeDna.style.borderColor = "#a78bfa";
                }
                if (activeMrna) {
                    activeMrna.style.borderColor = "#fbbf24";
                }

                document.getElementById('challenge-prompt-title').textContent = `Transcrivez le nucléotide n°${challengeNucIndex + 1}`;
                document.getElementById('challenge-prompt-desc').innerHTML = `Base ADN Matrice active : <strong class="text-purple-400 font-black">${challengeMatrice[challengeNucIndex]}</strong>. Saisissez sa base complémentaire sur l'ARNm.`;
            }
        }

        function pressChallengeNuc(base) {
            if (challengeFeedbackActive || challengeStep !== "transcription") return;

            const targetBase = challengeMatrice[challengeNucIndex];
            const correctBase = getComplementaryBase(targetBase, true); // true for RNA complimentary

            // Check if student pressed 'T'
            if (base === 'T') {
                triggerChallengeMistake(
                    "🚨 ATTENTION : LA THYMINE EST STRICTEMENT INTERDITE !",
                    "Erreur de Rigueur de Base (ARN)",
                    "En SVT, l'ARNm est un acide nucléique monocaténaire où la Thymine (T) est rigoureusement absente. Elle est remplacée par l'Uracile (U). Écrire 'T' dans un ARN sur votre copie est une faute éliminatoire qui vous fait perdre tous les points de la question !",
                    "<strong>U</strong>nique à l'<strong>U</strong>racile ! Rappelez-vous : L'ADN a de la <strong>T</strong>enue (Thymine), mais l'ARN a de l'<strong>U</strong>rgences (Uracile) !",
                    "T_instead_of_U"
                );
                return;
            }

            if (base === correctBase) {
                // Correct!
                challengeMRNA += base;

                // Show in UI
                const mrnaEl = document.querySelector(`.challenge-nuc-mrna-${challengeNucIndex}`);
                if (mrnaEl) {
                    mrnaEl.textContent = base;
                    mrnaEl.className = `nuc-base nuc-${base} challenge-nuc-mrna-${challengeNucIndex}`;
                }

                challengeNucIndex++;
                challengeScoreValue += 10;
                updateChallengeHeader();
                updateChallengeProgressBar(0);

                if (challengeNucIndex >= challengeMatrice.length) {
                    // Transition to translation
                    goToChallengeStep("translation");
                } else {
                    highlightActiveNuc();
                }
            } else {
                // Complementarity mistake
                triggerChallengeMistake(
                    "🚨 COMPLÉMENTARITÉ INCORRECTE !",
                    "Erreur d'appariement des bases",
                    `La transcription obéit à la loi stricte d'appariement complémentaire des bases. Face à la base d'ADN Transcrit <strong class="text-purple-400">${targetBase}</strong>, la base correspondante de l'ARNm aurait dû être <strong class="text-amber-400">${correctBase}</strong>, et non ${base}.`,
                    "<strong>C</strong>occinelle va avec <strong>G</strong>irafe (C-G), et <strong>A</strong>nanas va avec <strong>U</strong>kulele (A-U) ! Ne séparez jamais ces deux couples d'élite !",
                    "appariement_incorrect"
                );
            }
        }

        function triggerChallengeMistake(title, subtitle, desc, mnemonic, type) {
            challengeFeedbackActive = true;
            challengeLivesLeft--;
            challengeScoreValue = Math.max(0, challengeScoreValue - 20);

            // Record mistake for final report
            challengeMistakesArray.push({
                type: type,
                title: title,
                desc: desc,
                mnemonic: mnemonic
            });

            updateChallengeHeader();

            // Set overlay text
            document.getElementById('challenge-feedback-title').textContent = title;
            document.getElementById('challenge-feedback-subtitle').textContent = subtitle;
            document.getElementById('challenge-feedback-desc').innerHTML = desc;
            document.getElementById('challenge-feedback-mnemonic').innerHTML = mnemonic;

            // Show overlay
            document.getElementById('challenge-feedback-overlay').style.display = "block";
            document.getElementById('challenge-keyboard-container').style.opacity = "0.2";
            document.getElementById('challenge-board-visual').style.opacity = "0.2";
        }

        function acknowledgeChallengeFeedback() {
            document.getElementById('challenge-feedback-overlay').style.display = "none";
            document.getElementById('challenge-keyboard-container').style.opacity = "1";
            document.getElementById('challenge-board-visual').style.opacity = "1";
            challengeFeedbackActive = false;

            if (challengeLivesLeft <= 0) {
                // Game over -> Go to complete / Rattrapage!
                endChallenge(false);
            } else {
                // Resume
                if (challengeStep === "transcription") {
                    highlightActiveNuc();
                } else if (challengeStep === "translation") {
                    highlightActiveCodon();
                }
            }
        }

        function drawAaSelectorGrid() {
            const grid = document.getElementById('challenge-aa-grid');
            if (grid.innerHTML !== "") return; // Already rendered

            const listAA = [
                { short: "Ala", long: "Alanine" },
                { short: "Arg", long: "Arginine" },
                { short: "Asn", long: "Asparagine" },
                { short: "Asp", long: "Ac. Aspartique" },
                { short: "Cys", long: "Cystéine" },
                { short: "Gln", long: "Glutamine" },
                { short: "Glu", long: "Ac. Glutamique" },
                { short: "Gly", long: "Glycine" },
                { short: "His", long: "Histidine" },
                { short: "Ile", long: "Isoleucine" },
                { short: "Leu", long: "Leucine" },
                { short: "Lys", long: "Lysine" },
                { short: "Met", long: "Méthionine" },
                { short: "Phe", long: "Phénylalanine" },
                { short: "Pro", long: "Proline" },
                { short: "Ser", long: "Sérine" },
                { short: "Thr", long: "Thréonine" },
                { short: "Trp", long: "Tryptophane" },
                { short: "Tyr", long: "Tyrosine" },
                { short: "Val", long: "Valine" },
                { short: "STOP", long: "Codon STOP" }
            ];

            listAA.forEach(aa => {
                const btn = document.createElement('button');
                btn.className = `p-2 rounded-lg font-bold text-center border text-[11px] active:scale-95 transition-all flex flex-col justify-center items-center ${aa.short === 'STOP' ? 'bg-rose-950/40 border-rose-800 text-rose-300 hover:bg-rose-900/50' : 'bg-slate-900/60 border-slate-800 text-slate-200 hover:bg-slate-800'}`;
                btn.onclick = () => pressChallengeAA(aa.short);
                btn.innerHTML = `
                    <span class="font-extrabold text-xs">${aa.short}</span>
                    <span class="text-[8px] text-slate-400 font-medium">${aa.long}</span>
                `;
                grid.appendChild(btn);
            });
        }

        function highlightActiveCodon() {
            let totalCodons = Math.floor(challengeMatrice.length / 3);

            for (let i = 0; i < challengeMatrice.length; i++) {
                const mrnaEl = document.querySelector(`.challenge-nuc-mrna-${i}`);
                if (mrnaEl) {
                    mrnaEl.style.transform = "none";
                    mrnaEl.style.boxShadow = "none";
                    mrnaEl.style.borderColor = "rgba(255,255,255,0.15)";
                }
            }

            if (challengeCodonIndex < totalCodons) {
                let startIdx = challengeCodonIndex * 3;
                let activeCodonStr = challengeMRNA.substring(startIdx, startIdx + 3);

                for (let b = 0; b < 3; b++) {
                    const mrnaEl = document.querySelector(`.challenge-nuc-mrna-${startIdx + b}`);
                    if (mrnaEl) {
                        mrnaEl.style.transform = "scale(1.15)";
                        mrnaEl.style.borderColor = "#fbbf24";
                        mrnaEl.style.boxShadow = "0 0 10px rgba(245, 158, 11, 0.2)";
                    }
                }

                document.getElementById('challenge-prompt-title').textContent = `Traduisez le codon n°${challengeCodonIndex + 1}`;
                document.getElementById('challenge-prompt-desc').innerHTML = `Codon actif : <strong class="text-amber-400 font-black tracking-widest font-mono">${activeCodonStr}</strong>. Trouvez l'acide aminé correspondant dans le Code Génétique et sélectionnez-le ci-dessous.`;
            }
        }

        function pressChallengeAA(aa) {
            if (challengeFeedbackActive || challengeStep !== "translation") return;

            let startIdx = challengeCodonIndex * 3;
            let activeCodonStr = challengeMRNA.substring(startIdx, startIdx + 3);
            let correctAA = GENETIC_CODE[activeCodonStr] || "Inconnu";

            if (aa === correctAA) {
                challengeProtein.push(aa);

                const protRow = document.getElementById('challenge-protein-row');
                const aaEl = document.createElement('span');
                aaEl.className = `prot-aa ${aa === 'STOP' ? 'aa-stop' : ''}`;
                aaEl.textContent = aa;
                protRow.appendChild(aaEl);

                challengeCodonIndex++;
                challengeScoreValue += 25;
                updateChallengeHeader();
                updateChallengeProgressBar(50);

                let totalCodons = Math.floor(challengeMatrice.length / 3);

                if (challengeCodonIndex >= totalCodons || aa === "STOP") {
                    endChallenge(true);
                } else {
                    highlightActiveCodon();
                }
            } else {
                let feedbackTitle = "🚨 DÉCODAGE ERRONÉ !";
                let feedbackDesc = `Le codon <strong class="text-amber-400 font-black font-mono">${activeCodonStr}</strong> code pour l'acide aminé <strong class="text-emerald-400 font-black">${correctAA}</strong>, et non pour l'acide aminé ${aa}.`;
                let feedbackMnemonic = "Prenez toujours le temps de croiser les coordonnées de la table d'examen. La rigueur paie toujours au Bac !";

                if (challengeSelectedGeneId === 'hbs' && activeCodonStr === 'GUG' && aa === 'Glu') {
                    feedbackTitle = "🚨 ERREUR CLASSIQUE DE LA DRÉPANOCYTOSE (HbS) !";
                    feedbackDesc = `Le codon <strong class="text-amber-400 font-black font-mono">GUG</strong> code pour la **Valine (Val)**. L'allèle sain HbA possédait un codon **GAG** codant pour l'**Acide Glutamique (Glu)**. Confondre les deux vous fait rater l'argument clé de votre examen !`;
                    feedbackMnemonic = "Le codon <strong>G</strong>U<strong>G</strong> donne la <strong>V</strong>ALINE (Val). Retenez : <strong>G</strong>rand <strong>U</strong>rgent <strong>G</strong>lobule devient <strong>V</strong>ide (Valine - HbS) !";
                }

                triggerChallengeMistake(
                    feedbackTitle,
                    "Erreur de décodage du Code Génétique",
                    feedbackDesc,
                    feedbackMnemonic,
                    "wrong_aa_translation"
                );
            }
        }

        function endChallenge(success) {
            document.getElementById('challenge-active-screen').style.display = "none";
            document.getElementById('challenge-result-screen').style.display = "block";

            const medal = document.getElementById('challenge-result-medal');
            const resTitle = document.getElementById('challenge-result-title');
            const resDesc = document.getElementById('challenge-result-desc');
            const resGrade = document.getElementById('challenge-result-grade');
            const resScore = document.getElementById('challenge-result-score');
            const checklist = document.getElementById('challenge-result-checklist');

            checklist.innerHTML = "";

            let finalGrade = 10 + (challengeLivesLeft * 3); // max 19
            if (success && challengeMistakesArray.length === 0) finalGrade = 20; // flawless
            if (!success) finalGrade = Math.min(9.5, 5 + Math.floor(challengeScoreValue / 100)); // Rattrapage if no lives left

            resGrade.textContent = `${finalGrade} / 20`;
            saveMasteryScore('genetics', finalGrade);
            if (finalGrade >= 16) {
                resGrade.className = "text-3xl font-black text-emerald-400 animate-pulse";
            } else if (finalGrade >= 10) {
                resGrade.className = "text-3xl font-black text-sky-400";
            } else {
                resGrade.className = "text-3xl font-black text-rose-500";
            }

            resScore.textContent = challengeScoreValue;

            if (success) {
                medal.textContent = "🏆";
                medal.className = "w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto border border-amber-500/30 bg-amber-500/10 text-amber-400 shadow-lg shadow-amber-500/15";
                resTitle.textContent = finalGrade === 20 ? "👑 MAÎTRISE ABSOLUE - LE 20/20 D'ÉLITE !" : "🎉 DÉFI DU BAC RÉUSSI !";
                resDesc.textContent = finalGrade === 20 ? "Aucune erreur de rigueur. Vous êtes un correcteur de SVT né !" : "Vous avez relevé le défi avec une belle rigueur moléculaire !";

                checklist.innerHTML += `
                    <li class="flex items-center gap-2 text-emerald-400">
                        <span>✓</span> <strong>Transcription validée :</strong> Aucun décalage et complémentarité correcte.
                    </li>
                    <li class="flex items-center gap-2 text-emerald-400">
                        <span>✓</span> <strong>Traduction conforme :</strong> Utilisation rigoureuse de la table du code génétique.
                    </li>
                `;
            } else {
                medal.textContent = "🎓";
                medal.className = "w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto border border-rose-500/30 bg-rose-500/10 text-rose-400 shadow-lg shadow-rose-500/15";
                resTitle.textContent = "🚨 SESSION DE RATTRAPAGE ACTIVÉE !";
                resDesc.textContent = "Vous avez perdu toutes vos vies. Pas d'inquiétude : le Bac se prépare avec les erreurs !";
            }

            if (challengeMistakesArray.length > 0) {
                let uniqueMistakes = [];
                challengeMistakesArray.forEach(m => {
                    if (!uniqueMistakes.some(um => um.type === m.type)) {
                        uniqueMistakes.push(m);
                    }
                });

                uniqueMistakes.forEach(m => {
                    checklist.innerHTML += `
                        <li class="p-3 bg-slate-950 rounded-lg border-l-4 border-rose-500 space-y-1">
                            <strong class="text-rose-400 text-xs block">${m.title}</strong>
                            <p class="text-[11px] text-slate-300">${m.desc}</p>
                            <div class="text-[10px] text-amber-400 font-bold mt-1">💡 Mémo-Rappel : ${m.mnemonic}</div>
                        </li>
                    `;
                });
            } else if (success && finalGrade === 20) {
                checklist.innerHTML += `
                    <li class="p-3 bg-emerald-950/20 rounded-lg border-l-4 border-emerald-500 text-xs text-emerald-300">
                        ⭐ <strong>Mention Très Bien :</strong> Votre rigueur est infaillible ! Vous savez parfaitement éviter les pièges de transcription d'ARN et de décodage. Conservez cet automatisme pour le jour J !
                    </li>
                `;
            }

            if (success) {
                triggerCelebrationConfetti();
            }
        }

        function restartChallenge() {
            startChallenge();
        }

        // Initialize defaults
        window.addEventListener('load', () => {
            loadSelectedGene();
            adjustCrossSettings();
            loadGeneticCodeTable();
        });


        // ================= LAB 2: MENDELIAN LAWS SIMULATOR =================
        const CROSS_GENOTYPES = {
            monohybrid: {
                autosomal: {
                    female: [
                        { text: "Pure Dominante [A] — A//A", val: "A//A" },
                        { text: "Pure Récessive [a] — a//a", val: "a//a" },
                        { text: "Hétérozygote [A] — A//a", val: "A//a" }
                    ],
                    male: [
                        { text: "Pure Dominante [A] — A//A", val: "A//A" },
                        { text: "Pure Récessive [a] — a//a", val: "a//a" },
                        { text: "Hétérozygote [A] — A//a", val: "A//a" }
                    ]
                },
                gonosomal: {
                    female: [
                        { text: "Pure Dominante [A] — XA//XA", val: "XA//XA" },
                        { text: "Pure Récessive [a] — Xa//Xa", val: "Xa//Xa" },
                        { text: "Hétérozygote [A] — XA//Xa", val: "XA//Xa" }
                    ],
                    male: [
                        { text: "Dominant [A] — XA//Y", val: "XA//Y" },
                        { text: "Récessif [a] — Xa//Y", val: "Xa//Y" }
                    ]
                }
            },
            dihybrid: {
                autosomal: {
                    female: [
                        { text: "Double Homozygote Dom [A,B] — AB//AB", val: "AB//AB" },
                        { text: "Double Homozygote Rec [a,b] — ab//ab", val: "ab//ab" },
                        { text: "F1 Double Hétérozygote [A,B] — AB//ab", val: "AB//ab" },
                        { text: "Double Hétérozygote Répulsion [A,B] — Ab//aB", val: "Ab//aB" }
                    ],
                    male: [
                        { text: "Double Homozygote Dom [A,B] — AB//AB", val: "AB//AB" },
                        { text: "Double Homozygote Rec [a,b] — ab//ab", val: "ab//ab" },
                        { text: "F1 Double Hétérozygote [A,B] — AB//ab", val: "AB//ab" },
                        { text: "Double Hétérozygote Répulsion [A,B] — Ab//aB", val: "Ab//aB" }
                    ]
                },
                gonosomal: {
                    female: [
                        { text: "Double Homo Dom [A,B] — XAB//XAB", val: "XAB//XAB" },
                        { text: "Double Homo Rec [a,b] — Xab//Xab", val: "Xab//Xab" },
                        { text: "Double Hétérozygote [A,B] — XAB//Xab", val: "XAB//Xab" }
                    ],
                    male: [
                        { text: "Double Dom [A,B] — XAB//Y", val: "XAB//Y" },
                        { text: "Double Rec [a,b] — Xab//Y", val: "Xab//Y" }
                    ]
                }
            }
        };

        // =========================================================================
        // ==================== LABO 2 : MENDEL CHALLENGE LOGIC ====================
        // =========================================================================
        let activeMendelMode = "demo";
        let mendelChallengeScore = 0;
        let mendelChallengeLives = 3;
        let mendelChallengeTarget = null; // Stores the expected frequencies

        function switchMendelMode(mode) {
            activeMendelMode = mode;
            const demoBtn = document.getElementById('mendel-toggle-mode-demo');
            const challengeBtn = document.getElementById('mendel-toggle-mode-challenge');
            const demoWp = document.getElementById('mendel-demo-workspace');
            const challengeWp = document.getElementById('mendel-challenge-workspace');

            if (mode === 'demo') {
                demoBtn.className = "px-5 py-1.5 text-xs font-extrabold rounded-lg transition-all bg-purple-600 text-white shadow";
                challengeBtn.className = "px-5 py-1.5 text-xs font-extrabold rounded-lg transition-all text-slate-400 hover:text-white";
                demoWp.style.display = "flex";
                challengeWp.style.display = "none";
                runMendelianSimulation();
            } else {
                challengeBtn.className = "px-5 py-1.5 text-xs font-extrabold rounded-lg transition-all bg-purple-600 text-white shadow";
                demoBtn.className = "px-5 py-1.5 text-xs font-extrabold rounded-lg transition-all text-slate-400 hover:text-white";
                demoWp.style.display = "none";
                challengeWp.style.display = "block";
                initMendelChallengeSetup();
            }
        }

        function initMendelChallengeSetup() {
            document.getElementById('mendel-challenge-setup-screen').style.display = "block";
            document.getElementById('mendel-challenge-active-screen').style.display = "none";
        }

        function startMendelChallenge() {
            mendelChallengeLives = 3;
            mendelChallengeScore = 0;
            document.getElementById('mendel-challenge-setup-screen').style.display = "none";
            document.getElementById('mendel-challenge-active-screen').style.display = "block";
            generateMendelQuestion();
        }

        function generateMendelQuestion() {
            const types = ['mono', 'di_indep', 'di_linked_abs', 'di_linked_partial'];
            const type = types[Math.floor(Math.random() * types.length)];
            
            let config = {};
            if (type === 'mono') {
                config = { mode: 'monohybrid', rel: 'dom-abs', desc: "Monohybridisme : Dominance Absolue (A > a). Parents lignée pure." };
                mendelChallengeTarget = { "[A]": 75, "[a]": 25 };
            } else if (type === 'di_indep') {
                config = { mode: 'dihybrid', link: 'independent', desc: "Dihybridisme : 2 gènes indépendants. Dominance absolue pour les deux." };
                mendelChallengeTarget = { "[AB]": 56.25, "[Ab]": 18.75, "[aB]": 18.75, "[ab]": 6.25 };
            } else if (type === 'di_linked_abs') {
                config = { mode: 'dihybrid', link: 'linked-absolute', desc: "Dihybridisme : Gènes liés (Liaison Absolue). Dominance absolue." };
                mendelChallengeTarget = { "[AB]": 75, "[ab]": 25 };
            } else {
                const dist = 20; // fixed for challenge
                config = { mode: 'dihybrid', link: 'linked-partial', dist: dist, desc: `Dihybridisme : Gènes liés avec Crossing-Over (Distance = ${dist} cM).` };
                // Calculation: Rec = dist/2 = 10% each. Par = (100-dist)/2 = 40% each.
                // In F2 it's complex, let's use a simpler "Test-Cross" question for partial link
                config.desc = `Test-Cross : (AB/ab) x (ab/ab) avec Distance = ${dist} cM.`;
                mendelChallengeTarget = { "[AB]": 40, "[ab]": 40, "[Ab]": 10, "[aB]": 10 };
            }

            renderMendelQuestionUI(config);
        }

        function renderMendelQuestionUI(config) {
            const container = document.getElementById('mendel-challenge-active-screen');
            let inputsHtml = "";
            Object.keys(mendelChallengeTarget).forEach(pheno => {
                inputsHtml += `
                    <div class="space-y-1">
                        <label class="text-[10px] font-bold text-slate-500 uppercase">${pheno} (%)</label>
                        <input type="number" step="0.01" class="mendel-challenge-input w-full bg-slate-950 border border-slate-800 p-3 rounded-xl text-white font-bold" data-pheno="${pheno}" placeholder="0.00">
                    </div>
                `;
            });

            container.innerHTML = `
                <div class="dashboard-box space-y-6">
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-black text-purple-400">DÉFI GÉNÉTIQUE : PRÉDICTION F2 / TEST-CROSS</span>
                        <div class="flex gap-4">
                            <span class="text-sm">❤️ ${mendelChallengeLives}</span>
                            <span class="text-sm font-bold text-white">${mendelChallengeScore} PTS</span>
                        </div>
                    </div>
                    <div class="p-4 bg-purple-500/5 border border-purple-500/20 rounded-2xl">
                        <h3 class="text-lg font-bold text-white leading-tight">${config.desc}</h3>
                        <p class="text-xs text-slate-400 mt-1 italic">Calculez les pourcentages phénotypiques attendus dans la descendance.</p>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        ${inputsHtml}
                    </div>
                    <button onclick="checkMendelChallenge()" class="btn-lab btn-lab-purple w-full py-4 rounded-2xl font-black text-lg">VALIDER LES PROPORTIONS</button>
                </div>
            `;
        }

        function checkMendelChallenge() {
            const inputs = document.querySelectorAll('.mendel-challenge-input');
            let allCorrect = true;
            let feedback = "";

            inputs.forEach(input => {
                const pheno = input.getAttribute('data-pheno');
                const val = parseFloat(input.value);
                const target = mendelChallengeTarget[pheno];
                
                if (Math.abs(val - target) > 0.1) {
                    allCorrect = false;
                    feedback += `[${pheno}] incorrect. `;
                }
            });

            if (allCorrect) {
                showSvtToast("🏆 PARFAIT ! Votre analyse des gamètes et de l'échiquier est exacte. +1000 pts", "success");
                mendelChallengeScore += 1000;
                generateMendelQuestion();
            } else {
                mendelChallengeLives--;
                showSvtToast(`❌ ERREUR D'ANALYSE : ${feedback}`, "error");
                if (mendelChallengeLives <= 0) {
                    endMendelChallenge(false);
                }
            }
        }

        function endMendelChallenge(success) {
            const container = document.getElementById('mendel-challenge-active-screen');
            container.innerHTML = `
                <div class="dashboard-box text-center space-y-6 p-10">
                    <div class="text-6xl">💀</div>
                    <h3 class="text-2xl font-bold text-white">ÉCHEC DU DÉFI MENDEL</h3>
                    <p class="text-slate-400">Revoyez les lois de Mendel et les calculs de distance génétique (cM).</p>
                    <button onclick="startMendelChallenge()" class="btn-lab btn-lab-purple px-6 py-2 rounded-xl">Recommencer</button>
                </div>
            `;
            saveMasteryScore('mendel', 0); // Logic could be improved to give a partial grade
        }

        function adjustCrossSettings() {

            const crossMode = document.getElementById('cross-mode').value;
            const loc = document.getElementById('gene-loc').value;

            const linkGroup = document.getElementById('link-type-group');
            const coDistanceGroup = document.getElementById('co-distance-group');
            const relMonoGroup = document.getElementById('relationship-mono-group');

            if (crossMode === 'monohybrid') {
                linkGroup.style.display = 'none';
                coDistanceGroup.style.display = 'none';
                relMonoGroup.style.display = 'flex';
            } else {
                linkGroup.style.display = 'flex';
                relMonoGroup.style.display = 'none';
                adjustCrossingOverUI();
            }

            // Repopulate genotypes selections based on mode & localisation
            const motherSel = document.getElementById('mother-genotype');
            const fatherSel = document.getElementById('father-genotype');
            motherSel.innerHTML = "";
            fatherSel.innerHTML = "";

            const mOpts = CROSS_GENOTYPES[crossMode][loc].female;
            const fOpts = CROSS_GENOTYPES[crossMode][loc].male;

            mOpts.forEach(o => {
                const opt = document.createElement('option');
                opt.value = o.val;
                opt.textContent = o.text;
                motherSel.appendChild(opt);
            });

            fOpts.forEach(o => {
                const opt = document.createElement('option');
                opt.value = o.val;
                opt.textContent = o.text;
                fatherSel.appendChild(opt);
            });
        }

        function adjustCrossingOverUI() {
            const link = document.getElementById('chromosome-link').value;
            const coDistanceGroup = document.getElementById('co-distance-group');
            if (link === 'linked-partial') {
                coDistanceGroup.style.display = 'flex';
            } else {
                coDistanceGroup.style.display = 'none';
            }
        }

        function updateCODistanceText() {
            const val = document.getElementById('co-distance').value;
            document.getElementById('co-distance-label').textContent = `Distance génétique : ${val} cM`;
        }

        function runCrossSimulation() {
            const crossMode = document.getElementById('cross-mode').value;
            const loc = document.getElementById('gene-loc').value;
            const mGen = document.getElementById('mother-genotype').value;
            const fGen = document.getElementById('father-genotype').value;

            // Trigger meiosis (gamete derivation)
            let motherGametes = getGametes(mGen, 'female', crossMode, loc);
            let fatherGametes = getGametes(fGen, 'male', crossMode, loc);

            // 1. Animate Meiosis and draw gamete nodes
            renderGametesMeiosis(motherGametes, fatherGametes);

            // 2. Render Interactive Punnett Square
            renderPunnettSquare(motherGametes, fatherGametes, crossMode, loc);

            // 3. Tick off elements checklist
            document.getElementById('chk-pgen').classList.add('active');
            document.getElementById('chk-gam').classList.add('active');
            document.getElementById('chk-table').classList.add('active');
            document.getElementById('chk-cgen').classList.add('active');
            document.getElementById('chk-phen').classList.add('active');

            // 4. Run dynamic scientific tree reasoning
            explainCrossReasoning(mGen, fGen, motherGametes, fatherGametes, crossMode, loc);
        }

        function getGametes(genotype, gender, crossMode, loc) {
            let gametes = []; // list of {alleles: 'AB', freq: 0.25, display: 'AB'}

            if (crossMode === 'monohybrid') {
                if (loc === 'autosomal') {
                    // A//A or a//a or A//a
                    let alleles = genotype.split('//');
                    if (alleles[0] === alleles[1]) {
                        gametes.push({ alleles: alleles[0], freq: 1.0, display: alleles[0] });
                    } else {
                        gametes.push({ alleles: alleles[0], freq: 0.5, display: alleles[0] });
                        gametes.push({ alleles: alleles[1], freq: 0.5, display: alleles[1] });
                    }
                } else {
                    // XA//XA or Xa//Xa or XA//Xa or XA//Y or Xa//Y
                    let alleles = genotype.split('//');
                    if (gender === 'female') {
                        let a1 = alleles[0];
                        let a2 = alleles[1];
                        if (a1 === a2) {
                            gametes.push({ alleles: a1, freq: 1.0, display: a1 });
                        } else {
                            gametes.push({ alleles: a1, freq: 0.5, display: a1 });
                            gametes.push({ alleles: a2, freq: 0.5, display: a2 });
                        }
                    } else {
                        // Male XY : XA//Y or Xa//Y
                        gametes.push({ alleles: alleles[0], freq: 0.5, display: alleles[0] });
                        gametes.push({ alleles: alleles[1], freq: 0.5, display: alleles[1] });
                    }
                }
            } else {
                // Dihybridisme
                if (loc === 'autosomal') {
                    // AB//AB or ab//ab or AB//ab (F1) or Ab//aB
                    if (genotype === 'AB//AB') {
                        gametes.push({ alleles: 'AB', freq: 1.0, display: 'AB' });
                    } else if (genotype === 'ab//ab') {
                        gametes.push({ alleles: 'ab', freq: 1.0, display: 'ab' });
                    } else {
                        // Heterozygote AB//ab or Ab//aB
                        const link = document.getElementById('chromosome-link').value;
                        if (link === 'independent') {
                            gametes.push({ alleles: 'AB', freq: 0.25, display: 'AB' });
                            gametes.push({ alleles: 'Ab', freq: 0.25, display: 'Ab' });
                            gametes.push({ alleles: 'aB', freq: 0.25, display: 'aB' });
                            gametes.push({ alleles: 'ab', freq: 0.25, display: 'ab' });
                        } else if (link === 'linked-absolute') {
                            // Linkage without crossing over
                            if (genotype === 'AB//ab') {
                                gametes.push({ alleles: 'AB', freq: 0.5, display: 'AB' });
                                gametes.push({ alleles: 'ab', freq: 0.5, display: 'ab' });
                            } else {
                                // Ab//aB
                                gametes.push({ alleles: 'Ab', freq: 0.5, display: 'Ab' });
                                gametes.push({ alleles: 'aB', freq: 0.5, display: 'aB' });
                            }
                        } else {
                            // Linked with Crossing Over distance
                            const val = parseInt(document.getElementById('co-distance').value);
                            const recFreq = val / 100;
                            const parFreq = 1.0 - recFreq;

                            if (genotype === 'AB//ab') {
                                gametes.push({ alleles: 'AB', freq: parFreq / 2, display: 'AB' });
                                gametes.push({ alleles: 'ab', freq: parFreq / 2, display: 'ab' });
                                gametes.push({ alleles: 'Ab', freq: recFreq / 2, display: 'Ab' });
                                gametes.push({ alleles: 'aB', freq: recFreq / 2, display: 'aB' });
                            } else {
                                // Ab//aB
                                gametes.push({ alleles: 'Ab', freq: parFreq / 2, display: 'Ab' });
                                gametes.push({ alleles: 'aB', freq: parFreq / 2, display: 'aB' });
                                gametes.push({ alleles: 'AB', freq: recFreq / 2, display: 'AB' });
                                gametes.push({ alleles: 'ab', freq: recFreq / 2, display: 'ab' });
                            }
                        }
                    }
                } else {
                    // Gonosomal dihybrid : XAB//XAB, Xab//Xab, XAB//Xab, XAB//Y, Xab//Y
                    let alleles = genotype.split('//');
                    if (gender === 'female') {
                        if (alleles[0] === alleles[1]) {
                            // pure
                            let baseAlleles = alleles[0].substring(1); // strip X
                            gametes.push({ alleles: alleles[0], freq: 1.0, display: alleles[0] });
                        } else {
                            // Heterozygote XAB//Xab
                            const link = document.getElementById('chromosome-link').value;
                            if (link === 'independent') {
                                gametes.push({ alleles: 'XAB', freq: 0.25, display: 'XAB' });
                                gametes.push({ alleles: 'XAb', freq: 0.25, display: 'XAb' });
                                gametes.push({ alleles: 'XaB', freq: 0.25, display: 'XaB' });
                                gametes.push({ alleles: 'Xab', freq: 0.25, display: 'Xab' });
                            } else if (link === 'linked-absolute') {
                                gametes.push({ alleles: 'XAB', freq: 0.5, display: 'XAB' });
                                gametes.push({ alleles: 'Xab', freq: 0.5, display: 'Xab' });
                            } else {
                                const val = parseInt(document.getElementById('co-distance').value);
                                const recFreq = val / 100;
                                const parFreq = 1.0 - recFreq;
                                gametes.push({ alleles: 'XAB', freq: parFreq / 2, display: 'XAB' });
                                gametes.push({ alleles: 'Xab', freq: parFreq / 2, display: 'Xab' });
                                gametes.push({ alleles: 'XAb', freq: recFreq / 2, display: 'XAb' });
                                gametes.push({ alleles: 'XaB', freq: recFreq / 2, display: 'XaB' });
                            }
                        }
                    } else {
                        // Male: XAB//Y or Xab//Y
                        gametes.push({ alleles: alleles[0], freq: 0.5, display: alleles[0] });
                        gametes.push({ alleles: alleles[1], freq: 0.5, display: alleles[1] });
                    }
                }
            }

            return gametes;
        }

        function renderGametesMeiosis(motherGametes, fatherGametes) {
            const container = document.getElementById('meiosis-stage');
            container.innerHTML = "";

            const stage = document.createElement('div');
            stage.className = "meiosis-visualizer";

            // Left: Mother gametes
            const mSide = document.createElement('div');
            mSide.style.display = "flex";
            mSide.style.flexDirection = "column";
            mSide.style.alignItems = "center";
            mSide.style.gap = "0.5rem";
            mSide.innerHTML = `<span class="badge-lab b-purple" style="font-size:0.7rem;">Ovules (♀)</span>`;

            const mGams = document.createElement('div');
            mGams.style.display = "flex";
            mGams.style.gap = "1rem";
            motherGametes.forEach(g => {
                const node = document.createElement('div');
                node.className = "gamete-circle";
                node.innerHTML = `
                    <span class="g-alleles">${formatDisplayAlleles(g.display)}</span>
                    <span class="g-percent">${Math.round(g.freq * 100)}%</span>
                `;
                mGams.appendChild(node);
            });
            mSide.appendChild(mGams);

            // Center Separator
            const divider = document.createElement('div');
            divider.style.width = "1px";
            divider.style.background = "rgba(255,255,255,0.1)";

            // Right: Father gametes
            const fSide = document.createElement('div');
            fSide.style.display = "flex";
            fSide.style.flexDirection = "column";
            fSide.style.alignItems = "center";
            fSide.style.gap = "0.5rem";
            fSide.innerHTML = `<span class="badge-lab b-blue" style="font-size:0.7rem;">Spermatozoïdes (♂)</span>`;

            const fGams = document.createElement('div');
            fGams.style.display = "flex";
            fGams.style.gap = "1rem";
            fatherGametes.forEach(g => {
                const node = document.createElement('div');
                node.className = "gamete-circle";
                node.style.borderColor = "#38bdf8";
                node.style.background = "rgba(56, 189, 248, 0.1)";
                node.style.boxShadow = "0 0 15px rgba(56, 189, 248, 0.2)";
                node.innerHTML = `
                    <span class="g-alleles" style="color:#ffffff;">${formatDisplayAlleles(g.display)}</span>
                    <span class="g-percent" style="color:#38bdf8;">${Math.round(g.freq * 100)}%</span>
                `;
                fGams.appendChild(node);
            });
            fSide.appendChild(fGams);

            stage.appendChild(mSide);
            stage.appendChild(divider);
            stage.appendChild(fSide);

            container.appendChild(stage);
        }

        function formatDisplayAlleles(all) {
            // Converts XAB to X<sup>AB</sup>
            if (all.startsWith('X')) {
                return `X<sup>${all.substring(1)}</sup>`;
            }
            return all;
        }

        function renderPunnettSquare(motherGametes, fatherGametes, crossMode, loc) {
            const container = document.getElementById('punnett-output-stage');
            container.innerHTML = "";

            const table = document.createElement('table');
            table.className = "punnett-table";

            // Row 1: Header Corner + Male Gametes
            const r1 = document.createElement('tr');
            const corner = document.createElement('td');
            corner.className = "punnett-cell cell-corner";
            corner.innerHTML = `
                <div style="font-size:0.8rem; font-weight:800; display:flex; flex-direction:column; justify-content:space-between; height:100%; padding: 4px;">
                    <span style="color:#e879f9; text-align:left;">♀</span>
                    <span style="color:#38bdf8; text-align:right; margin-top:2px;">♂</span>
                </div>
            `;
            r1.appendChild(corner);

            fatherGametes.forEach((fg, colIdx) => {
                const hCell = document.createElement('td');
                hCell.className = `punnett-cell header-cell p-male col-header-${colIdx}`;
                hCell.innerHTML = `
                    <div class="p-genotype" style="color:#38bdf8;">${formatDisplayAlleles(fg.display)}</div>
                    <div class="p-freq">${Math.round(fg.freq * 100)}%</div>
                `;
                r1.appendChild(hCell);
            });
            table.appendChild(r1);

            // Subsequent rows: Female Gamete + Descendants
            motherGametes.forEach((mg, rowIdx) => {
                const row = document.createElement('tr');

                // Header cell
                const hCell = document.createElement('td');
                hCell.className = `punnett-cell header-cell p-female row-header-${rowIdx}`;
                hCell.innerHTML = `
                    <div class="p-genotype" style="color:#e879f9;">${formatDisplayAlleles(mg.display)}</div>
                    <div class="p-freq">${Math.round(mg.freq * 100)}%</div>
                `;
                row.appendChild(hCell);

                // Children cells
                fatherGametes.forEach((fg, colIdx) => {
                    const cCell = document.createElement('td');
                    cCell.className = "punnett-cell";

                    const childData = calculateZygote(mg.alleles, fg.alleles, crossMode, loc);

                    cCell.innerHTML = `
                        <div class="p-genotype">${childData.genotype}</div>
                        <div class="p-phenotype">${childData.phenotype}</div>
                        <div class="p-freq">${Math.round(mg.freq * fg.freq * 100)}%</div>
                    `;

                    // Add lethal gene override
                    if (childData.isLethal) {
                        cCell.innerHTML = `
                            <div class="p-genotype" style="text-decoration: line-through; opacity:0.5;">${childData.genotype}</div>
                            <div class="p-phenotype" style="background:rgba(239,68,68,0.2); color:#f87171; border: 1px solid #ef4444;">LÉTAL</div>
                            <div class="p-freq" style="color:#ef4444; font-weight:800;">Mort (0%)</div>
                        `;
                    }

                    // Hover crosshair listeners
                    cCell.onmouseover = () => {
                        const rH = table.querySelector(`.row-header-${rowIdx}`);
                        const cH = table.querySelector(`.col-header-${colIdx}`);
                        if (rH) rH.classList.add('highlight-header');
                        if (cH) cH.classList.add('highlight-header');
                    };
                    cCell.onmouseout = () => {
                        const rH = table.querySelector(`.row-header-${rowIdx}`);
                        const cH = table.querySelector(`.col-header-${colIdx}`);
                        if (rH) rH.classList.remove('highlight-header');
                        if (cH) cH.classList.remove('highlight-header');
                    };

                    cCell.onclick = () => showPunnettCellDetail(childData, mg.freq * fg.freq, mg, fg, crossMode, loc);
                    row.appendChild(cCell);
                });

                table.appendChild(row);
            });

            container.appendChild(table);

            // Auto-select first cell to trigger details visualizer
            const firstCell = table.querySelector('.punnett-cell:not(.header-cell):not(.cell-corner)');
            if (firstCell) {
                firstCell.click();
            }
        }

        function calculateZygote(mgAll, fgAll, crossMode, loc) {
            // returns {genotype: 'A//a', phenotype: '[A]', isLethal: false}
            let genotype = "";
            let phenotype = "";
            let isLethal = false;

            if (crossMode === 'monohybrid') {
                if (loc === 'autosomal') {
                    // Sorting alleles: upper-case always comes first
                    let sorted = [mgAll, fgAll].sort((a, b) => {
                        if (a === a.toUpperCase() && b === b.toLowerCase()) return -1;
                        if (b === b.toUpperCase() && a === a.toLowerCase()) return 1;
                        return a.localeCompare(b);
                    });

                    genotype = `<div style="border-bottom: 1px solid rgba(255,255,255,0.4); padding-bottom:1px; width:40px; margin:0 auto;">${sorted[0]}</div><div style="padding-top:1px;">${sorted[1]}</div>`;

                    // Determine phenotype
                    const rel = document.getElementById('allele-relation-mono').value;
                    if (rel === 'dom-abs') {
                        phenotype = sorted[0] === 'A' || sorted[1] === 'A' ? '[A]' : '[a]';
                    } else if (rel === 'codom') {
                        if (sorted[0] === sorted[1]) {
                            phenotype = `[${sorted[0]}]`;
                        } else {
                            // intermediate
                            phenotype = `[AB]`;
                        }
                    } else if (rel === 'letal') {
                        phenotype = sorted[0] === 'A' || sorted[1] === 'A' ? '[A]' : '[a]';
                        if (sorted[0] === 'A' && sorted[1] === 'A') {
                            isLethal = true;
                        }
                    }
                } else {
                    // Gonosomal monohybrid: Mother XA or Xa; Father XA/Xa or Y
                    if (fgAll === 'Y') {
                        // Male zygote: mgAll over Y
                        let alleleLetter = mgAll.substring(1); // 'A' or 'a'
                        genotype = `<div style="border-bottom: 1px solid rgba(255,255,255,0.4); padding-bottom:1px; width:40px; margin:0 auto;">X<sup>${alleleLetter}</sup></div><div style="padding-top:1px;">Y</div>`;
                        phenotype = `[${alleleLetter}] ♂`;
                    } else {
                        // Female zygote: mgAll over fgAll
                        let mLetter = mgAll.substring(1);
                        let fLetter = fgAll.substring(1);
                        let sorted = [mLetter, fLetter].sort((a, b) => {
                            if (a === a.toUpperCase() && b === b.toLowerCase()) return -1;
                            if (b === b.toUpperCase() && a === a.toLowerCase()) return 1;
                            return a.localeCompare(b);
                        });

                        genotype = `<div style="border-bottom: 1px solid rgba(255,255,255,0.4); padding-bottom:1px; width:45px; margin:0 auto;">X<sup>${sorted[0]}</sup></div><div style="padding-top:1px;">X<sup>${sorted[1]}</sup></div>`;
                        phenotype = sorted[0] === 'A' || sorted[1] === 'A' ? '[A] ♀' : '[a] ♀';
                    }
                }
            } else {
                // Dihybridisme
                if (loc === 'autosomal') {
                    // mgAll: 'AB', 'Ab', etc.; fgAll: 'AB', 'ab', etc.
                    // Phenotypes: A vs a, B vs b
                    // Genotype represented by double-bar AB//ab
                    // Sorting alleles for display
                    let a1 = mgAll[0];
                    let b1 = mgAll[1];
                    let a2 = fgAll[0];
                    let b2 = fgAll[1];

                    let sortedA = [a1, a2].sort((x, y) => {
                        if (x === x.toUpperCase() && y === y.toLowerCase()) return -1;
                        return x.localeCompare(y);
                    });
                    let sortedB = [b1, b2].sort((x, y) => {
                        if (x === x.toUpperCase() && y === y.toLowerCase()) return -1;
                        return x.localeCompare(y);
                    });

                    // Determine linkage displays
                    const link = document.getElementById('chromosome-link').value;
                    if (link === 'independent') {
                        // AB, ab written with comma or semicolon
                        genotype = `<div style="border-bottom: 1px solid rgba(255,255,255,0.4); padding-bottom:1px; width:65px; margin:0 auto;">${sortedA[0]} , ${sortedB[0]}</div><div style="padding-top:1px;">${sortedA[1]} , ${sortedB[1]}</div>`;
                    } else {
                        // Linked: written on the same bar
                        genotype = `<div style="border-bottom: 1px solid rgba(255,255,255,0.4); padding-bottom:1px; width:55px; margin:0 auto;">${a1}${b1}</div><div style="padding-top:1px;">${a2}${b2}</div>`;
                    }

                    // Phenotype
                    let pA = sortedA[0] === 'A' || sortedA[1] === 'A' ? 'A' : 'a';
                    let pB = sortedB[0] === 'B' || sortedB[1] === 'B' ? 'B' : 'b';
                    phenotype = `[${pA}, ${pB}]`;
                } else {
                    // Gonosomal dihybrid: mgAll like 'XAB', fgAll like 'XAB' or 'Y'
                    if (fgAll === 'Y') {
                        let mAlleles = mgAll.substring(1);
                        genotype = `<div style="border-bottom: 1px solid rgba(255,255,255,0.4); padding-bottom:1px; width:50px; margin:0 auto;">X<sup>${mAlleles}</sup></div><div style="padding-top:1px;">Y</div>`;

                        let pA = mAlleles[0] === 'A' ? 'A' : 'a';
                        let pB = mAlleles[1] === 'B' ? 'B' : 'b';
                        phenotype = `[${pA}, ${pB}] ♂`;
                    } else {
                        let mAlleles = mgAll.substring(1);
                        let fAlleles = fgAll.substring(1);

                        let sortedA = [mAlleles[0], fAlleles[0]].sort((x, y) => {
                            if (x === x.toUpperCase() && y === y.toLowerCase()) return -1;
                            return x.localeCompare(y);
                        });
                        let sortedB = [mAlleles[1], fAlleles[1]].sort((x, y) => {
                            if (x === x.toUpperCase() && y === y.toLowerCase()) return -1;
                            return x.localeCompare(y);
                        });

                        genotype = `<div style="border-bottom: 1px solid rgba(255,255,255,0.4); padding-bottom:1px; width:70px; margin:0 auto;">X<sup>${sortedA[0]}${sortedB[0]}</sup></div><div style="padding-top:1px;">X<sup>${sortedA[1]}${sortedB[1]}</sup></div>`;

                        let pA = sortedA[0] === 'A' || sortedA[1] === 'A' ? 'A' : 'a';
                        let pB = sortedB[0] === 'B' || sortedB[1] === 'B' ? 'B' : 'b';
                        phenotype = `[${pA}, ${pB}] ♀`;
                    }
                }
            }

            return { genotype, phenotype, isLethal };
        }

        function showPunnettCellDetail(childData, prob, mg, fg, crossMode, loc) {
            const panel = document.getElementById('punnett-detail-panel');
            if (!panel) return;

            const svgHTML = buildChromosomeSVG(mg.alleles, fg.alleles, crossMode, loc);

            let lethalWarningHTML = "";
            if (childData.isLethal) {
                lethalWarningHTML = `
                    <div class="mt-2 bg-red-950/40 border border-red-500/30 rounded-lg p-2 flex items-start gap-1.5">
                        <span class="text-red-400 text-xs">💀</span>
                        <div>
                            <span class="text-[9px] font-extrabold text-red-400 uppercase block">Arrêt de développement</span>
                            <span class="text-[8px] text-red-300 block leading-tight">Zygote homozygote dominant non viable (dose létale double). Lyse cellulaire.</span>
                        </div>
                    </div>
                `;
            }

            panel.innerHTML = `
                <div class="space-y-3 flex-1 flex flex-col justify-between">
                    <div class="space-y-2">
                        <div class="flex justify-between items-center border-b border-slate-800 pb-2">
                            <h4 class="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
                                <span>🔬</span> Loupe de Fécondation
                            </h4>
                            <span class="px-2 py-0.5 text-[8px] font-extrabold rounded bg-violet-500/10 border border-violet-500/30 text-violet-400">2n = Diploïde</span>
                        </div>

                        <!-- Gametes matchup vector -->
                        <div class="grid grid-cols-3 gap-1 items-center text-center bg-slate-950/60 border border-slate-800/80 p-1.5 rounded-xl">
                            <div>
                                <span class="text-[8px] font-extrabold text-slate-500 block uppercase">Gamète ♀</span>
                                <span class="text-xs font-black text-pink-400">${formatDisplayAlleles(mg.display)}</span>
                                <span class="text-[8px] text-slate-500 block">${Math.round(mg.freq * 100)}%</span>
                            </div>
                            <div class="text-slate-600 font-extrabold text-[9px] animate-pulse">⚡ Fusion ⚡</div>
                            <div>
                                <span class="text-[8px] font-extrabold text-slate-500 block uppercase">Gamète ♂</span>
                                <span class="text-xs font-black text-sky-400">${formatDisplayAlleles(fg.display)}</span>
                                <span class="text-[8px] text-slate-500 block">${Math.round(fg.freq * 100)}%</span>
                            </div>
                        </div>

                        <!-- Chromosomal visualizer canvas (SVG) -->
                        <div class="bg-slate-950/80 border border-slate-800/80 rounded-xl p-2 flex flex-col items-center justify-center relative min-h-[135px]">
                            <div class="absolute top-1.5 left-2 text-[8px] font-bold text-slate-500 uppercase tracking-widest">Caryotype Réduit du Zygote</div>
                            ${svgHTML}
                        </div>
                    </div>

                    <!-- Resulting zygote details card -->
                    <div class="bg-violet-950/15 border border-violet-900/25 rounded-xl p-2.5 space-y-1">
                        <div class="flex justify-between items-center">
                            <span class="text-[10px] font-bold text-slate-300">Génotype obtenu :</span>
                            <span class="text-[10px] font-extrabold text-white bg-slate-950 px-2 py-0.5 rounded border border-slate-800/80">${childData.genotype.replace(/<[^>]*>/g, ' ')}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-[10px] font-bold text-slate-300">Phénotype :</span>
                            <span class="text-[10px] font-black text-violet-400">${childData.phenotype}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-[10px] font-bold text-slate-300">Fréquence globale :</span>
                            <span class="text-[10px] font-extrabold text-yellow-500">${Math.round(prob * 100)}% (${formatFraction(prob)})</span>
                        </div>
                        ${lethalWarningHTML}
                    </div>
                </div>
            `;
        }

        function formatFraction(prob) {
            const p = Math.round(prob * 100);
            if (p === 100) return "1/1";
            if (p === 75) return "3/4";
            if (p === 50) return "1/2";
            if (p === 25) return "1/4";
            if (p === 12.5 || p === 13) return "1/8";
            if (p === 6.25 || p === 6) return "1/16";
            if (p === 18.75 || p === 19) return "3/16";
            if (p === 56.25 || p === 56) return "9/16";
            if (p === 37.5 || p === 38) return "6/16";
            if (p === 66.67 || p === 67) return "2/3";
            if (p === 33.33 || p === 33) return "1/3";
            return `${p}/100`;
        }

        function buildChromosomeSVG(mgAll, fgAll, crossMode, loc) {
            // Colors: Maternal (pink/purple), Paternal (blue/sky)
            const mColor = "#f472b6"; // Pink
            const fColor = "#38bdf8"; // Sky

            let svg = `<svg viewBox="0 0 240 130" class="w-full max-h-[120px] animate-fertilize-pulse">`;

            if (crossMode === 'monohybrid') {
                if (loc === 'gonosomal') {
                    // X vs X, or X vs Y
                    const mAllele = mgAll.includes('_') ? mgAll.split('_')[1] : mgAll;
                    const fAllele = fgAll.includes('_') ? fgAll.split('_')[1] : fgAll;

                    const isMaleY = fgAll === 'Y';

                    // Draw Maternal X (left)
                    svg += `
                        <!-- Chromosome X maternel -->
                        <line x1="95" y1="15" x2="95" y2="115" stroke="${mColor}" class="chromosome-rod" />
                        <circle cx="95" cy="65" r="4" class="chromosome-centromere" />
                        <!-- Locus Gène 1 -->
                        <line x1="95" y1="45" x2="110" y2="45" class="chromosome-locus-line" />
                        <circle cx="110" cy="45" r="6" fill="${mColor}" class="chromosome-allele-circle" />
                        <text x="110" y="45" class="chromosome-allele-tag">${mAllele}</text>
                        <text x="95" y="125" class="chromosome-allele-tag" fill="${mColor}">X</text>
                    `;

                    if (isMaleY) {
                        // Draw Paternal Y (right, shorter, hooked)
                        svg += `
                            <!-- Chromosome Y paternel -->
                            <path d="M 145 35 L 145 95 Q 145 110 155 110" fill="none" stroke="${fColor}" stroke-width="9" stroke-linecap="round" class="chromosome-rod" />
                            <circle cx="145" cy="65" r="4" class="chromosome-centromere" />
                            <text x="145" y="125" class="chromosome-allele-tag" fill="${fColor}">Y</text>
                        `;
                    } else {
                        // Draw Paternal X (right)
                        svg += `
                            <!-- Chromosome X paternel -->
                            <line x1="145" y1="15" x2="145" y2="115" stroke="${fColor}" class="chromosome-rod" />
                            <circle cx="145" cy="65" r="4" class="chromosome-centromere" />
                            <!-- Locus Gène 1 -->
                            <line x1="145" y1="45" x2="130" y2="45" class="chromosome-locus-line" />
                            <circle cx="130" cy="45" r="6" fill="${fColor}" class="chromosome-allele-circle" />
                            <text x="130" y="45" class="chromosome-allele-tag">${fAllele}</text>
                            <text x="145" y="125" class="chromosome-allele-tag" fill="${fColor}">X</text>
                        `;
                    }
                } else {
                    // Autosomal Monohybrid
                    svg += `
                        <!-- Paire d'autosomes homologues -->
                        <line x1="95" y1="15" x2="95" y2="115" stroke="${mColor}" class="chromosome-rod" />
                        <circle cx="95" cy="65" r="4" class="chromosome-centromere" />
                        <line x1="95" y1="50" x2="110" y2="50" class="chromosome-locus-line" />
                        <circle cx="110" cy="50" r="6" fill="${mColor}" class="chromosome-allele-circle" />
                        <text x="110" y="50" class="chromosome-allele-tag">${mgAll}</text>

                        <line x1="145" y1="15" x2="145" y2="115" stroke="${fColor}" class="chromosome-rod" />
                        <circle cx="145" cy="65" r="4" class="chromosome-centromere" />
                        <line x1="145" y1="50" x2="130" y2="50" class="chromosome-locus-line" />
                        <circle cx="130" cy="50" r="6" fill="${fColor}" class="chromosome-allele-circle" />
                        <text x="130" y="50" class="chromosome-allele-tag">${fgAll}</text>
                        
                        <text x="120" y="124" class="chromosome-allele-tag" fill="#64748b">Paire Autosomale</text>
                    `;
                }
            } else {
                // Dihybridisme
                const link = document.getElementById('chromosome-link').value;
                if (link === 'independent') {
                    const m1 = mgAll[0];
                    const m2 = mgAll[1];
                    const f1 = fgAll[0];
                    const f2 = fgAll[1];

                    svg += `
                        <!-- Paire 1 (Gène 1) -->
                        <line x1="55" y1="20" x2="55" y2="100" stroke="${mColor}" class="chromosome-rod" />
                        <circle cx="55" cy="60" r="3.5" class="chromosome-centromere" />
                        <line x1="55" y1="50" x2="65" y2="50" class="chromosome-locus-line" />
                        <circle cx="65" cy="50" r="5.5" fill="${mColor}" class="chromosome-allele-circle" />
                        <text x="65" y="50" class="chromosome-allele-tag">${m1}</text>

                        <line x1="85" y1="20" x2="85" y2="100" stroke="${fColor}" class="chromosome-rod" />
                        <circle cx="85" cy="60" r="3.5" class="chromosome-centromere" />
                        <line x1="85" y1="50" x2="75" y2="50" class="chromosome-locus-line" />
                        <circle cx="75" cy="50" r="5.5" fill="${fColor}" class="chromosome-allele-circle" />
                        <text x="75" y="50" class="chromosome-allele-tag">${f1}</text>
                        <text x="70" y="112" class="chromosome-allele-tag" fill="#64748b" style="font-size:7px;">Gène 1</text>

                        <!-- Paire 2 (Gène 2) -->
                        <line x1="155" y1="20" x2="155" y2="100" stroke="${mColor}" class="chromosome-rod" />
                        <circle cx="155" cy="60" r="3.5" class="chromosome-centromere" />
                        <line x1="155" y1="50" x2="165" y2="50" class="chromosome-locus-line" />
                        <circle cx="165" cy="50" r="5.5" fill="${mColor}" class="chromosome-allele-circle" />
                        <text x="165" y="50" class="chromosome-allele-tag">${m2}</text>

                        <line x1="185" y1="20" x2="185" y2="100" stroke="${fColor}" class="chromosome-rod" />
                        <circle cx="185" cy="60" r="3.5" class="chromosome-centromere" />
                        <line x1="185" y1="50" x2="175" y2="50" class="chromosome-locus-line" />
                        <circle cx="175" cy="50" r="5.5" fill="${fColor}" class="chromosome-allele-circle" />
                        <text x="175" y="50" class="chromosome-allele-tag">${f2}</text>
                        <text x="170" y="112" class="chromosome-allele-tag" fill="#64748b" style="font-size:7px;">Gène 2</text>
                        
                        <text x="120" y="124" class="chromosome-allele-tag" fill="#c084fc">Brassage Interchromosomique</text>
                    `;
                } else {
                    // Linked
                    const m1 = mgAll[0];
                    const m2 = mgAll[1];
                    const f1 = fgAll[0];
                    const f2 = fgAll[1];

                    svg += `
                        <!-- Paire Liée (1 paire homologue, 2 gènes) -->
                        <line x1="95" y1="15" x2="95" y2="115" stroke="${mColor}" class="chromosome-rod" />
                        <circle cx="95" cy="65" r="4" class="chromosome-centromere" />
                        
                        <!-- Locus 1 -->
                        <line x1="95" y1="35" x2="110" y2="35" class="chromosome-locus-line" />
                        <circle cx="110" cy="35" r="5.5" fill="${mColor}" class="chromosome-allele-circle" />
                        <text x="110" y="35" class="chromosome-allele-tag">${m1}</text>
                        
                        <!-- Locus 2 -->
                        <line x1="95" y1="85" x2="110" y2="85" class="chromosome-locus-line" />
                        <circle cx="110" cy="85" r="5.5" fill="${mColor}" class="chromosome-allele-circle" />
                        <text x="110" y="85" class="chromosome-allele-tag">${m2}</text>

                        <line x1="145" y1="15" x2="145" y2="115" stroke="${fColor}" class="chromosome-rod" />
                        <circle cx="145" cy="65" r="4" class="chromosome-centromere" />
                        
                        <!-- Locus 1 -->
                        <line x1="145" y1="35" x2="130" y2="35" class="chromosome-locus-line" />
                        <circle cx="130" cy="35" r="5.5" fill="${fColor}" class="chromosome-allele-circle" />
                        <text x="130" y="35" class="chromosome-allele-tag">${f1}</text>
                        
                        <!-- Locus 2 -->
                        <line x1="145" y1="85" x2="130" y2="85" class="chromosome-locus-line" />
                        <circle cx="130" cy="85" r="5.5" fill="${fColor}" class="chromosome-allele-circle" />
                        <text x="130" y="85" class="chromosome-allele-tag">${f2}</text>
                        
                        <text x="120" y="124" class="chromosome-allele-tag" fill="#f472b6">Brassage Intrachromosomique</text>
                    `;
                }
            }

            svg += `</svg>`;
            return svg;
        }

        function explainCrossReasoning(mGen, fGen, mGams, fGams, crossMode, loc) {
            const el = document.getElementById('mendel-analysis-text');

            let q1 = "<strong>Q1: Dominance de l'allèle ?</strong><br> - L'analyse montre ";
            let q2 = "<br><strong>Q2: Liaison au sexe (Gonosomal) ?</strong><br> - ";
            let q3 = "<br><strong>Q3: Nombre de gènes en jeu & Liaison ?</strong><br> - ";

            if (crossMode === 'monohybrid') {
                const rel = document.getElementById('allele-relation-mono').value;
                if (rel === 'dom-abs') {
                    q1 += "une dominance absolue de l'allèle <span class='text-blue'>A</span> sur le récessif <span class='text-red'>a</span>. La F1 homogène valide la 1ère loi de Mendel.";
                } else if (rel === 'codom') {
                    q1 += "une <span class='text-purple'>codominance</span> entre les allèles A et B, créant le phénotype hybride [AB].";
                } else if (rel === 'letal') {
                    q1 += "un cas de <span class='text-orange'>gène létal</span> à l'état homozygote dominant (AA//AA), ce qui élimine 25% de la descendance F2, menant aux proportions typiques 2/3 [A] et 1/3 [a].";
                }

                if (loc === 'gonosomal') {
                    q2 += "Le gène est <span class='text-purple'>lié au chromosome sexuel X</span>. Les croisements réciproques mâles/femelles donnent des proportions différentes, montrant que les mâles F1 héritent directement de l'allèle de leur mère.";
                } else {
                    q2 += "Le gène est <span class='text-green'>autosomal</span>. Les proportions sont équitablement réparties sans distinction de sexe.";
                }

                q3 += "Il s'agit de <span class='text-teal'>monohybridisme</span> (un seul gène codant pour le caractère étudié).";
            } else {
                // Dihybridisme
                q1 += "la dominance absolue de [A] et [B] sur les récessifs respectifs [a] et [b].";

                if (loc === 'gonosomal') {
                    q2 += "Les gènes sont localisés sur la partie homologue de <span class='text-purple'>X</span>, créant des proportions sexuelles asymétriques en F2.";
                } else {
                    q2 += "Les gènes sont portés par des autosomes.";
                }

                const link = document.getElementById('chromosome-link').value;
                if (link === 'independent') {
                    q3 += "Les deux gènes sont <span class='text-green'>INDÉPENDANTS</span> (situés sur des chromosomes différents). Un test-cross générerait 4 phénotypes équiprobables (<strong>25% / 25% / 25% / 25%</strong>) par brassage interchromosomique à l'Anaphase I de méiose.";
                } else if (link === 'linked-absolute') {
                    q3 += "Les deux gènes sont en <span class='text-red'>LIAISON ABSOLUE</span> (très proches sur le même chromosome, sans Crossing-Over). Le test-cross ne donne que 2 phénotypes parentaux (<strong>50% / 50%</strong>).";
                } else {
                    const dist = document.getElementById('co-distance').value;
                    q3 += "Les deux gènes sont en <span class='text-orange'>LIAISON PARTIELLE</span> (sur le même chromosome avec crossing-over). Un test-cross donne 4 phénotypes avec 2 parentaux majoritaires et 2 recombinés minoritaires. La distance calculée est de <strong class='text-green'>${dist} cM</strong>, équivalente aux ${dist}% de recombinés formés en Prophase I.";
                }
            }

            el.innerHTML = `${q1}${q2}${q3}`;
        }


        // ================= LAB 3: GAMES CODE =================
        let gameScoreVal = 0;
        let blitzTimer = null;
        let blitzTimeLeft = 60;
        let blitzQuestions = [
            {
                text: "Un test-cross en dihybridisme donne : 25% [A,B], 25% [A,b], 25% [a,B], 25% [a,b]. Quel est le diagnostic ?",
                opts: [
                    { t: "Gènes en liaison absolue", correct: false },
                    { t: "Gènes indépendants (Chromosomes distincts)", correct: true },
                    { t: "Liaison partielle avec 50 cM de distance", correct: false },
                    { t: "Erreur de manipulation biologique", correct: false }
                ],
                explain: "Un test-cross (F1 x Double récessif) équiprobable (1:1:1:1) démontre l'indépendance des gènes grâce au brassage interchromosomique."
            },
            {
                text: "Un croisement F1 x Double Récessif donne : 41% [A,B], 41% [a,b], 9% [A,b], 9% [a,B]. Quelle est la distance génétique ?",
                opts: [
                    { t: "82 cM (Parentaux)", correct: false },
                    { t: "18 cM (Distance = % Recombinés)", correct: true },
                    { t: "9 cM (Un seul recombiné)", correct: false },
                    { t: "Gènes indépendants", correct: false }
                ],
                explain: "La distance = somme des fréquences recombinées = 9% + 9% = 18 cM (centiMorgan)."
            },
            {
                text: "On obtient en F2 : 75% yeux rouges (mâles et femelles) et 25% yeux blancs (mâles uniquement). Localisation ?",
                opts: [
                    { t: "Gène lié au sexe (porté par X)", correct: true },
                    { t: "Gène lié au sexe (porté par Y)", correct: false },
                    { t: "Gène autosomal récessif", correct: false },
                    { t: "Gène autosomal dominant", correct: false }
                ],
                explain: "La présence du caractère récessif uniquement chez les mâles indique une hérédité liée à l'X."
            },
            {
                text: "En F2, un croisement monohybride donne des proportions : 2/3 [Dom] et 1/3 [Rec]. Quel est le phénomène ?",
                opts: [
                    { t: "Codominance", correct: false },
                    { t: "Gène létal à l'état homozygote", correct: true },
                    { t: "Hérédité gonosomale", correct: false },
                    { t: "Épistasie", correct: false }
                ],
                explain: "Les proportions 2/3 et 1/3 révèlent la mort des homozygotes dominants (AA)."
            },
            {
                text: "Dans un test-cross, on obtient 50% [A,B] et 50% [a,b]. Quel est le diagnostic ?",
                opts: [
                    { t: "Liaison absolue (Pas de Crossing-Over)", correct: true },
                    { t: "Indépendance des gènes", correct: false },
                    { t: "Liaison partielle à 50 cM", correct: false },
                    { t: "Anomalie méiotique", correct: false }
                ],
                explain: "L'absence totale de recombinés (50% parentaux type 1, 50% parentaux type 2) signe une liaison absolue."
            },
            {
                text: "Un individu [A,b] croisé avec [a,b] donne 100% [A,b]. Quel est le géotype du parent dominant ?",
                opts: [
                    { t: "Hétérozygote AaBb", correct: false },
                    { t: "Homozygote AAbb", correct: true },
                    { t: "Hétérozygote Aabb", correct: false },
                    { t: "Hémizygote sur X", correct: false }
                ],
                explain: "S'il n'y a qu'un seul phénotype identique au parent dominant, c'est qu'il est de lignée pure (homozygote)."
            }
        ];
        let currentBlitzIndex = 0;

        function launchBlitzGame() {
            document.getElementById('arcade-hub').classList.add('hidden');
            const stage = document.getElementById('game-stage');
            stage.classList.remove('hidden');

            gameScoreVal = 0;
            blitzTimeLeft = 60;
            currentBlitzIndex = 0;

            renderBlitzLayout();
            startBlitzTimer();
        }

        function renderBlitzLayout() {
            const stage = document.getElementById('game-stage');
            const q = blitzQuestions[currentBlitzIndex];

            if (!q) {
                // Game Finished
                clearInterval(blitzTimer);
                stage.innerHTML = `
                    <div style="text-align:center; padding: 2rem; display:flex; flex-direction:column; gap:1.5rem; align-items:center;">
                        <h3 class="text-3xl font-bold text-green">⚡ Blitz Terminé !</h3>
                        <p class="text-lg">Votre score final est de : <strong style="font-size:2rem; color:#fbbf24;">${gameScoreVal} points</strong></p>
                        <div class="badge-lab b-green" style="font-size:1rem; padding: 0.5rem 1rem;">Badge : Généticien Élite 🎓</div>
                        <p class="text-slate-400 text-sm">Vous avez le réflexe 4x4 gravé en vous. Prêt pour l'examen national !</p>
                        <button class="btn-lab btn-lab-blue" onclick="closeGameStage()">Retour au Labo</button>
                    </div>
                `;
                triggerConfetti();
                return;
            }

            stage.innerHTML = `
                <div class="blitz-header flex items-center justify-between" style="flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 0.75rem; margin-bottom: 1rem;">
                    <div class="flex items-center gap-4">
                        <div class="game-timer" id="bl-timer" style="margin:0;">⏱️ ${blitzTimeLeft}s</div>
                        <h3 class="text-xl font-bold text-sky-400">Le Blitz des Proportions 4×4</h3>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="game-score" style="margin:0; font-weight:800; background:rgba(255,255,255,0.05); padding: 0.25rem 0.75rem; border-radius: 9999px;">Score : ${gameScoreVal}</div>
                        <button class="btn-lab btn-lab-outline" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;" onclick="closeGameStage()">Quitter</button>
                    </div>
                </div>
                <div class="blitz-question-box">
                    Q${currentBlitzIndex + 1}: ${q.text}
                </div>

                <div class="blitz-options-grid" id="bl-opts">
                    <!-- Buttons injected -->
                </div>

                <div id="bl-feedback" class="feedback hidden" style="margin-top:2rem;">
                    <div class="feedback-title" id="bl-fb-title">Explication :</div>
                    <p class="text-sm text-slate-300" id="bl-fb-text">${q.explain}</p>
                    <button class="btn-lab btn-lab-blue mt-md" onclick="nextBlitzQuestion()">Question Suivante</button>
                </div>
            `;

            const optsGrid = document.getElementById('bl-opts');
            q.opts.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = "blitz-opt-btn";
                btn.innerHTML = `<span style="width:24px; height:24px; border-radius:50%; background:rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; font-size:0.8rem; font-weight:800; color:#cbd5e1; flex-shrink:0;">${String.fromCharCode(65 + idx)}</span> ${opt.t}`;
                btn.onclick = () => submitBlitzAnswer(btn, opt.correct, q.explain);
                optsGrid.appendChild(btn);
            });
        }

        function startBlitzTimer() {
            clearInterval(blitzTimer);
            blitzTimer = setInterval(() => {
                blitzTimeLeft--;
                const timerEl = document.getElementById('bl-timer');
                if (timerEl) {
                    timerEl.textContent = `⏱️ ${blitzTimeLeft}s`;
                    if (blitzTimeLeft <= 10) {
                        timerEl.style.color = "#f43f5e";
                        timerEl.style.borderColor = "rgba(244,63,94,0.4)";
                    }
                }
                if (blitzTimeLeft <= 0) {
                    clearInterval(blitzTimer);
                    showSvtToast("⌛ Temps écoulé !", "warning");
                    currentBlitzIndex = 100; // triggers end
                    renderBlitzLayout();
                }
            }, 1000);
        }

        function submitBlitzAnswer(btn, isCorrect, explainText) {
            // Disable all option buttons
            const buttons = document.querySelectorAll('.blitz-opt-btn');
            buttons.forEach(b => b.disabled = true);

            const fb = document.getElementById('bl-feedback');
            const fbTitle = document.getElementById('bl-fb-title');

            fb.classList.remove('hidden');

            if (isCorrect) {
                btn.classList.add('correct');
                gameScoreVal += 10;
                fbTitle.className = "feedback-title correct-t";
                fbTitle.textContent = "✓ Excellent Réflexe ! (+10 pts)";
                fb.className = "feedback correct-fb";
            } else {
                btn.classList.add('wrong');
                // Highlight the correct one
                const correctBtn = Array.from(buttons).find((b, idx) => blitzQuestions[currentBlitzIndex].opts[idx].correct);
                if (correctBtn) correctBtn.classList.add('correct');
                fbTitle.className = "feedback-title wrong-t";
                fbTitle.textContent = "❌ Attention au piège !";
                fb.className = "feedback wrong-fb";
            }
        }

        function nextBlitzQuestion() {
            currentBlitzIndex++;
            renderBlitzLayout();
        }

        function closeGameStage() {
            clearInterval(blitzTimer);
            document.getElementById('game-stage').classList.add('hidden');
            document.getElementById('arcade-hub').classList.remove('hidden');
        }


        // Game 2: Phrase-Type puzzle pieces
        let puzzleCorrectOrder = [
            "On constate qu'au niveau du triplet n°6 du gène de l'hémoglobine,",
            "il y a eu une mutation par substitution du nucléotide A par T,",
            "ce qui a entraîné le remplacement du codon GAG par le codon GUG sur l'ARNm,",
            "donc le remplacement de l'acide aminé Glu par Val au niveau de la protéine.",
            "Cette modification primaire produit une hémoglobine HbS déformée et non fonctionnelle,",
            "ce qui explique les symptômes d'anémie falciforme (drépanocytose) observés chez l'élève."
        ];
        let puzzleSelectedOrder = [];

        function launchPuzzleGame() {
            document.getElementById('arcade-hub').classList.add('hidden');
            const stage = document.getElementById('game-stage');
            stage.classList.remove('hidden');

            puzzleSelectedOrder = [];
            renderPuzzleLayout();
        }

        function renderPuzzleLayout() {
            const stage = document.getElementById('game-stage');

            // Generate randomized index array for scrambled display
            let scrambledIndices = [0, 1, 2, 3, 4, 5];
            scrambledIndices.sort(() => Math.random() - 0.5);

            stage.innerHTML = `
                <div class="blitz-header">
                    <h3 class="text-xl font-bold text-violet-400">Le Puzzle de la Phrase-Type 20/20</h3>
                    <button class="btn-lab btn-lab-outline" onclick="closeGameStage()">Retour</button>
                </div>

                <p class="puzzle-instruction">Assemblez les paragraphes dans le bon ordre logique (de la cause moléculaire à la conséquence phénotypique macroscopique).</p>

                <div class="grid grid-2" style="gap:1.5rem; align-items:start;">
                    
                    <!-- Left column: scrambled pool -->
                    <div>
                        <h4 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Blocs mélangés (Cliquez pour ajouter)</h4>
                        <div class="puzzle-scrambled" id="scrambled-pool">
                            <!-- Injected -->
                        </div>
                    </div>

                    <!-- Right column: selected slots -->
                    <div>
                        <h4 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Votre démonstration scientifique rédigée</h4>
                        <div class="puzzle-slots" id="selected-slots">
                            <div class="text-slate-500 text-sm text-center" style="margin:auto;">Cliquez sur les blocs de gauche pour les ordonner ici.</div>
                        </div>
                        
                        <div style="margin-top:1.5rem; display:flex; gap:0.75rem;">
                            <button class="btn-lab btn-lab-outline" onclick="resetPuzzle()">Vider</button>
                            <button class="btn-lab btn-lab-purple flex-grow" onclick="verifyPuzzle()">Vérifier la Rigueur</button>
                        </div>
                    </div>

                </div>
            `;

            const pool = document.getElementById('scrambled-pool');
            scrambledIndices.forEach(idx => {
                const b = document.createElement('div');
                b.className = "puzzle-piece";
                b.id = `piece-${idx}`;
                b.textContent = puzzleCorrectOrder[idx];
                b.onclick = () => addPieceToSlots(idx, b);
                pool.appendChild(b);
            });
        }

        function addPieceToSlots(idx, element) {
            if (puzzleSelectedOrder.includes(idx)) return; // already added

            puzzleSelectedOrder.push(idx);
            element.classList.add('selected');

            // Redraw slots column
            drawSlots();
        }

        function removePieceFromSlots(idx) {
            puzzleSelectedOrder = puzzleSelectedOrder.filter(item => item !== idx);
            const element = document.getElementById(`piece-${idx}`);
            if (element) {
                element.classList.remove('selected');
            }
            drawSlots();
        }

        function drawSlots() {
            const container = document.getElementById('selected-slots');
            container.innerHTML = "";

            if (puzzleSelectedOrder.length === 0) {
                container.innerHTML = `<div class="text-slate-500 text-sm text-center" style="margin:auto;">Cliquez sur les blocs de gauche pour les ordonner ici.</div>`;
                return;
            }

            puzzleSelectedOrder.forEach((idx, orderIdx) => {
                const item = document.createElement('div');
                item.className = "puzzle-slot-item";
                item.innerHTML = `
                    <div style="display:flex; align-items:center; gap:0.5rem;">
                        <span style="font-weight:800; color:#a78bfa;">${orderIdx + 1}.</span>
                        <span>${puzzleCorrectOrder[idx]}</span>
                    </div>
                    <button style="background:transparent; border:none; color:#f43f5e; font-weight:800; padding:0 0.25rem; font-size:1.1rem; cursor:pointer;" onclick="removePieceFromSlots(${idx})">×</button>
                `;
                container.appendChild(item);
            });
        }

        function resetPuzzle() {
            puzzleSelectedOrder = [];
            const pieces = document.querySelectorAll('.puzzle-piece');
            pieces.forEach(p => p.classList.remove('selected'));
            drawSlots();
        }

        function verifyPuzzle() {
            if (puzzleSelectedOrder.length < puzzleCorrectOrder.length) {
                showSvtToast("⚠️ Assemblez tous les 6 blocs avant de valider !", "warning");
                return;
            }

            let perfect = true;
            for (let i = 0; i < puzzleCorrectOrder.length; i++) {
                if (puzzleSelectedOrder[i] !== i) {
                    perfect = false;
                    break;
                }
            }

            if (perfect) {
                showSvtToast("🏆 FÉLICITATIONS ! Raisonnement parfait (100% rigueur).", "success");
                triggerConfetti();
                closeGameStage();
            } else {
                showSvtToast("❌ FAILLE LOGIQUE : Suivez la chaîne causale (ADN -> ARNm -> Protéine).", "error");
            }
        }


        // ================= CONFETTI & DECORATION SCRIPTS =================
        function triggerConfetti() {
            const canvas = document.getElementById('celebration-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');

            canvas.width = canvas.parentElement.clientWidth;
            canvas.height = canvas.parentElement.clientHeight;

            let particles = [];
            const colors = ['#38bdf8', '#818cf8', '#e879f9', '#10b981', '#fbbf24'];

            for (let i = 0; i < 80; i++) {
                particles.push({
                    x: canvas.width / 2,
                    y: canvas.height / 2,
                    radius: Math.random() * 4 + 2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    vx: (Math.random() - 0.5) * 8,
                    vy: (Math.random() - 0.5) * 8 - 3,
                    alpha: 1.0,
                    decay: Math.random() * 0.015 + 0.01
                });
            }

            function drawConf() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                let alive = false;

                particles.forEach(p => {
                    if (p.alpha > 0) {
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                        ctx.fillStyle = p.color;
                        ctx.globalAlpha = p.alpha;
                        ctx.fill();

                        p.x += p.vx;
                        p.y += p.vy;
                        p.vy += 0.1; // gravity
                        p.alpha -= p.decay;
                        alive = true;
                    }
                });

                if (alive) {
                    requestAnimationFrame(drawConf);
                } else {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            }

            drawConf();
        }

        // =========================================================================
        // ==================== LABO 3 : ATP & CONTRACTION MUSCULAIRE =============
        // =========================================================================
        let activeAtpMode = "demo";
        let atpSarcomereStep = 1;

        function switchAtpMode(mode) {
            activeAtpMode = mode;
            const demoBtn = document.getElementById('atp-toggle-mode-demo');
            const challengeBtn = document.getElementById('atp-toggle-mode-challenge');
            const demoWp = document.getElementById('atp-demo-workspace');
            const challengeWp = document.getElementById('atp-challenge-workspace');

            if (mode === 'demo') {
                demoBtn.className = "px-4 py-1.5 text-xs font-extrabold rounded-lg transition-all bg-rose-500 text-white shadow";
                challengeBtn.className = "px-4 py-1.5 text-xs font-extrabold rounded-lg transition-all text-slate-400 hover:text-white";
                demoWp.style.display = "block";
                challengeWp.style.display = "none";
                runAtpSimulation();
            } else {
                challengeBtn.className = "px-4 py-1.5 text-xs font-extrabold rounded-lg transition-all bg-purple-600 text-white shadow";
                demoBtn.className = "px-4 py-1.5 text-xs font-extrabold rounded-lg transition-all text-slate-400 hover:text-white";
                demoWp.style.display = "none";
                challengeWp.style.display = "block";
                initAtpChallengeSetup();
            }
        }

        function runAtpSimulation() {
            const o2 = document.getElementById('atp-o2').value;
            const athlete = document.getElementById('atp-athlete').value;
            const poison = document.getElementById('atp-poison').value;

            let yieldVal = 38;
            let pathway = "Respiration Aérobie";
            let consequence = "Effort normal maintenu";
            let cytosol = true;
            let matrix = true;
            let crêtes = true;
            let eq = "C₆H₁₂O₆ + 6O₂ + 38ADP + 38Pi → 6CO₂ + 6H₂O + 38ATP";
            let o2Rate = "Très Élevée (~100%)";
            let o2Width = "100%";
            let lacRate = "Nulle (~0%)";
            let lacWidth = "0%";
            let phrase = "";

            if (athlete === 'sedentary' && poison === 'none' && o2 === 'yes') {
                yieldVal = 36;
                eq = "C₆H₁₂O₆ + 6O₂ + 36ADP + 36Pi → 6CO₂ + 6H₂O + 36ATP";
                consequence = "Contraction normale, fatigue modérée";
            }

            // Poison override
            if (poison === 'cyanide') {
                pathway = "Fermentation Lactique (Bloqué mitochondrial)";
                yieldVal = 2;
                consequence = "Asphyxie cellulaire intense & Crampes musculaires";
                matrix = false;
                crêtes = false;
                eq = "C₆H₁₂O₆ + 2ADP + 2Pi → 2 Acide Lactique + 2ATP";
                o2Rate = "Nulle (~0% - Bloqué au Complexe IV)";
                o2Width = "0%";
                lacRate = "Maximale (~100% compensatoire)";
                lacWidth = "100%";
                phrase = "En présence de <span class='kw-mut'>Cyanure</span>, la <span class='kw-prot'>Cytochrome C Oxydase</span> (complexe IV) de la chaîne respiratoire est bloquée. L'O₂ ne peut plus être réduit en H₂O, stoppant le flux d'électrons et la <span class='kw-prot'>phosphorylation oxydative</span>. La mitochondrie (matrice et crêtes) devient inopérante. La cellule musculaire se rabat entièrement sur la <span class='kw-mut'>fermentation lactique</span> dans l'hyaloplasme pour survivre, générant seulement 2 ATP et une forte accumulation d'acide lactique responsable d'acidose et de crampes extrêmes.";
            } else if (poison === 'dnp') {
                pathway = "Respiration Inefficace (Découplée)";
                yieldVal = 0;
                consequence = "Effondrement thermique & Mort cellulaire";
                matrix = true;
                crêtes = true;
                eq = "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + CHALEUR (0 ATP)";
                o2Rate = "Hyperactive (~120% incontrôlée)";
                o2Width = "100%";
                lacRate = "Élevée (~70% panique cellulaire)";
                lacWidth = "70%";
                phrase = "L'exposition au <span class='kw-mut'>DNP</span> détruit la sélectivité de la membrane interne mitochondriale en y créant des fuites de protons H⁺. Le <span class='kw-prot'>gradient de protons</span> s'annule sans passer par l'ATP Synthase. Bien que le cycle de Krebs et la chaîne respiratoire s'accélèrent désespérément en consommant l'O₂, le rendement en ATP s'effondre à <span class='kw-mut'>0 ATP</span>. L'énergie est dissipée sous forme de chaleur mortelle, conduisant à la nécrose.";
            } else if (poison === 'oligomycin') {
                pathway = "Respiration Bloquée (Inhibition F₀F₁)";
                yieldVal = 2;
                consequence = "Fatigue totale & Crampes immédiates";
                matrix = true;
                crêtes = false;
                eq = "C₆H₁₂O₆ + 2ADP + 2Pi → 2 Acide Lactique + 2ATP";
                o2Rate = "Nulle (~0% - Gradient saturé)";
                o2Width = "0%";
                lacRate = "Maximale (~100% de secours)";
                lacWidth = "100%";
                phrase = "L'inhibiteur <span class='kw-mut'>Oligomycine</span> bloque directement la tête de la sphère pédonculée (l'ATP Synthase). Les protons accumulés dans l'espace intermembranaire ne peuvent plus refluer vers la matrice. Le gradient de H⁺ s'accumule jusqu'à saturation, ce qui finit par bloquer par contre-pression thermodynamique la chaîne respiratoire elle-même (conso O₂ à 0%). La cellule se replie sur la <span class='kw-mut'>fermentation hyaloplasmique</span>, produisant un faible bilan de 2 ATP et des crampes douloureuses.";
            } else {
                // No poison
                if (o2 === 'no') {
                    pathway = "Fermentation Lactique";
                    yieldVal = 2;
                    consequence = "Acidose lactique & fatigue rapide";
                    matrix = false;
                    crêtes = false;
                    eq = "C₆H₁₂O₆ + 2ADP + 2Pi → 2 Acide Lactique + 2ATP";
                    o2Rate = "Nulle (~0%)";
                    o2Width = "0%";
                    lacRate = "Élevée (~90%)";
                    lacWidth = "90%";
                    phrase = "En l'absence d'oxygène (<span class='kw-mut'>anaérobiose</span>), l'O₂ ne peut pas agir comme accepteur final d'électrons au bout de la chaîne respiratoire. Le cycle de Krebs et la phosphorylation oxydative mitochondriale s'arrêtent. La cellule régénère ses transporteurs NAD⁺ uniquement via la réduction du pyruvate en lactate (fermentation lactique) dans le <span class='kw-mut'>cytosol</span>. Le rendement est très faible (2 ATP par glucose) car l'acide lactique contient encore une grande part d'énergie inexploitée.";
                } else {
                    // Normal respiration
                    phrase = `En aérobiose (O₂ abondant), la cellule musculaire dégrade complètement le glucose via la <span class='kw-mut'>glycolyse</span> cytosolique, puis le cycle de Krebs matriciel et la <span class='kw-prot'>phosphorylation oxydative</span> dans les crêtes de la membrane interne mitochondriale. Les électrons des transporteurs NADH,H⁺ et FADH₂ sont transférés à l'O₂ via la chaîne respiratoire, créant un gradient de protons H⁺ qui fait tourner l'ATP Synthase. Ce métabolisme d'élite fournit un rendement maximal de <span class='kw-mut'>${yieldVal} ATP</span> par glucose, permettant un effort physique maintenu sans accumulation d'acide lactique.`;
                }
            }

            // Update DOM
            document.getElementById('atp-yield-value').innerText = `${yieldVal} ATP`;
            document.getElementById('atp-active-path').innerText = pathway;
            document.getElementById('atp-consequence').innerText = consequence;
            document.getElementById('atp-equation').innerText = eq;

            document.getElementById('atp-o2-rate').innerText = o2Rate;
            document.getElementById('atp-o2-bar').style.width = o2Width;

            document.getElementById('atp-lactate-rate').innerText = lacRate;
            document.getElementById('atp-lactate-bar').style.width = lacWidth;

            document.getElementById('atp-phrase-model-text').innerHTML = phrase;

            // Highlight compartments
            document.getElementById('comp-cytosol').style.borderColor = cytosol ? 'rgba(52, 211, 153, 0.4)' : 'rgba(255, 255, 255, 0.05)';
            document.getElementById('comp-cytosol').style.background = cytosol ? 'rgba(52, 211, 153, 0.05)' : 'rgba(15, 23, 42, 0.3)';
            document.getElementById('icon-cytosol').innerText = cytosol ? '✓' : '✗';
            document.getElementById('icon-cytosol').className = cytosol ? 'text-emerald-500' : 'text-slate-600';

            document.getElementById('comp-matrix').style.borderColor = matrix ? 'rgba(52, 211, 153, 0.4)' : 'rgba(255, 255, 255, 0.05)';
            document.getElementById('comp-matrix').style.background = matrix ? 'rgba(52, 211, 153, 0.05)' : 'rgba(15, 23, 42, 0.3)';
            document.getElementById('icon-matrix').innerText = matrix ? '✓' : '✗';
            document.getElementById('icon-matrix').className = matrix ? 'text-emerald-500' : 'text-slate-600';

            document.getElementById('comp-membrane').style.borderColor = crêtes ? 'rgba(52, 211, 153, 0.4)' : 'rgba(255, 255, 255, 0.05)';
            document.getElementById('comp-membrane').style.background = crêtes ? 'rgba(52, 211, 153, 0.05)' : 'rgba(15, 23, 42, 0.3)';
            document.getElementById('icon-membrane').innerText = crêtes ? '✓' : '✗';
            document.getElementById('icon-membrane').className = crêtes ? 'text-emerald-500' : 'text-slate-600';

            if (step === 1) {
                if (badge) { badge.innerText = "Repos"; badge.className = "badge-lab b-blue"; }
                if (explain) explain.innerHTML = "<strong>Étape 1 : État de Repos (Pas de calcium).</strong> Le calcium (Ca²⁺) est stocké dans le réticulum sarcoplasmique. Les têtes de myosine sont redressées, chargées en ADP et Pi (état haute énergie), mais ne peuvent pas se lier à l'actine car la tropomyosine bloque les sites de fixation.";
                headList.forEach(h => {
                    const el = document.getElementById(h);
                    if (el) el.style.transform = defaultTransforms[h] + " translateY(0px)";
                });
            } else if (step === 2) {
                if (badge) { badge.innerText = "Fixation Ca²⁺"; badge.className = "badge-lab b-purple"; }
                if (explain) explain.innerHTML = "<strong>Étape 2 : Libération du Calcium & Fixation.</strong> Le calcium se fixe sur la troponine. Cela déplace la tropomyosine, découvrant les sites d'actine. Les têtes de myosine s'y fixent immédiatement, formant les complexes <strong>actomyosine</strong> (ponts d'union).";
                headList.forEach(h => {
                    const el = document.getElementById(h);
                    if (!el) return;
                    let translation = h.includes('top') ? 'translateY(-2px)' : 'translateY(2px)';
                    el.style.transform = defaultTransforms[h] + " " + translation;
                });
            } else if (step === 3) {
                if (badge) { badge.innerText = "Contraction active"; badge.className = "badge-lab b-red"; }
                if (explain) explain.innerHTML = "<strong>Étape 3 : Pivotement des têtes & Glissement.</strong> Les têtes de myosine libèrent l'ADP et le Pi. Ce départ d'énergie provoque le pivotement de la tête de myosine de 90° à 45°. Les filaments fins d'actine sont tirés vers le centre, raccourcissant le sarcomère (les deux disques Z se rapprochent).";
                if (box) box.classList.add('contracted');
                const pivotedTransforms = {
                    'h-tl1': 'rotate(50deg) translateY(-2px)', 'h-tl2': 'rotate(50deg) translateY(-2px)',
                    'h-tr1': 'rotate(-50deg) translateY(-2px)', 'h-tr2': 'rotate(-50deg) translateY(-2px)',
                    'h-bl1': 'rotate(-50deg) translateY(2px)', 'h-bl2': 'rotate(-50deg) translateY(2px)',
                    'h-br1': 'rotate(50deg) translateY(2px)', 'h-br2': 'rotate(50deg) translateY(2px)'
                };
                headList.forEach(h => {
                    const el = document.getElementById(h);
                    if (el) el.style.transform = pivotedTransforms[h];
                });
            } else if (step === 4) {
                if (badge) { badge.innerText = "Détachement"; badge.className = "badge-lab b-green"; }
                if (explain) explain.innerHTML = "<strong>Étape 4 : Détachement (Fixation ATP).</strong> Une nouvelle molécule d'ATP se lie à la tête de myosine, ce qui rompt instantanément le complexe actomyosine. La tête se détache. L'hydrolyse de cet ATP en ADP+Pi va redresser la tête pour entamer un nouveau cycle de contraction.";
                headList.forEach(h => {
                    const el = document.getElementById(h);
                    if (el) el.style.transform = defaultTransforms[h] + " translateY(0px)";
                });
            }
        }
        // --- Challenge ATP Database ---
        let atpChallengeScore = 0;
        let atpChallengeLives = 3;
        let atpChallengeIndex = 0;
        const ATP_QUESTIONS = [
            {
                q: "Pourquoi la fermentation lactique produit-elle beaucoup moins d'ATP (2 ATP) que la respiration cellulaire (38 ATP) ?",
                context: "Raisonnement sur le bilan énergétique.",
                options: [
                    { t: "Car le lactate contient encore une grande quantité d'énergie chimique non exploitée.", correct: true },
                    { t: "Car le glucose n'est pas dégradé lors de la fermentation.", correct: false, memo: "Faux ! La glycolyse a bien lieu." },
                    { t: "Car la fermentation produit trop de CO₂ toxique.", correct: false, memo: "Faux : pas de CO₂ en fermentation lactique !" },
                    { t: "Car le rendement est de 100% dans les deux cas.", correct: false }
                ]
            },
            {
                q: "Quel est l'effet du Cyanure sur la mitochondrie ?",
                context: "Inhibiteurs de la chaîne respiratoire.",
                options: [
                    { t: "Il bloque le complexe IV, stoppant la production d'ATP par la chaîne respiratoire.", correct: true },
                    { t: "Il transforme l'ATP en glucose.", correct: false },
                    { t: "Il accélère la fermentation dans la matrice.", correct: false },
                    { t: "Il détruit les crêtes mitochondriales.", correct: false }
                ]
            },
            {
                q: "Quelle étape de la contraction nécessite l'hydrolyse directe de l'ATP ?",
                context: "Mécanisme moléculaire.",
                options: [
                    { t: "Le redressement de la tête de myosine pour la charger en énergie.", correct: true },
                    { t: "Le pivotement de la tête de myosine fixée sur l'actine.", correct: false, memo: "C'est le départ de l'ADP qui fait pivoter !" },
                    { t: "La sortie du calcium du réticulum.", correct: false },
                    { t: "Le raccourcissement des filaments d'actine.", correct: false }
                ]
            },
            {
                q: "Une forte concentration d'acide lactique dans le muscle provoque :",
                context: "Fatigue musculaire.",
                options: [
                    { t: "Une baisse du pH intracellulaire inhibant les enzymes et la contraction.", correct: true },
                    { t: "Une explosion de la production d'ATP.", correct: false },
                    { t: "La transformation du muscle en graisse.", correct: false },
                    { t: "Une amélioration de l'endurance.", correct: false }
                ]
            },
            {
                q: "Où se déroule précisément le Cycle de Krebs ?",
                context: "Localisation métabolique.",
                options: [
                    { t: "Dans la matrice mitochondriale.", correct: true },
                    { t: "Sur les crêtes de la membrane interne.", correct: false, memo: "C'est le lieu de la chaîne respiratoire." },
                    { t: "Dans l'espace intermembranaire.", correct: false },
                    { t: "Dans le hyaloplasme.", correct: false, memo: "C'est le lieu de la glycolyse." }
                ]
            },
            {
                q: "Quel est le rôle du dioxygène (O₂) dans la respiration cellulaire ?",
                context: "Chaîne respiratoire.",
                options: [
                    { t: "Accepteur final d'électrons et de protons pour former H2O.", correct: true },
                    { t: "Source d'énergie pour le cycle de Krebs.", correct: false },
                    { t: "Produit final de la dégradation du glucose.", correct: false },
                    { t: "Il sert à gonfler la mitochondrie.", correct: false }
                ]
            },
            {
                q: "Comment expliquer la fatigue musculaire lors d'un effort intense ?",
                context: "Métabolisme et fatigue.",
                options: [
                    { t: "L'accumulation d'acide lactique baisse le pH, perturbant la contraction.", correct: true },
                    { t: "Le muscle se transforme en glycogène.", correct: false },
                    { t: "Les mitochondries s'arrêtent de tourner.", correct: false },
                    { t: "Il n'y a plus de calcium sur Terre.", correct: false }
                ]
            },
            {
                q: "Un athlète très entraîné en endurance possède une densité mitochondriale double de celle d'un sédentaire. Quelle en est la conséquence directe ?",
                context: "Adaptation métabolique du muscle.",
                options: [
                    { t: "Il peut oxyder le pyruvate très rapidement via la respiration, repoussant le seuil de fermentation lactique et évitant la fatigue précoce.", correct: true },
                    { t: "Ses muscles sécrètent deux fois plus de lactate pour stimuler la contraction.", correct: false, memo: "Non, le sédentaire produit du lactate beaucoup plus tôt à cause de l'hypoxie mitochondriale." },
                    { t: "Il n'a plus besoin d'oxygène pour vivre et contracter ses muscles.", correct: false, memo: "Totalement faux, la respiration requiert impérativement de l'O₂." },
                    { t: "Ses sarcomères sont deux fois plus longs, ce qui lui donne de plus grands muscles.", correct: false, memo: "La longueur d'un sarcomère sain est constante (~2 à 2.5 µm), c'est le métabolisme qui change." }
                ]
            }
        ];

        function initAtpChallengeSetup() {
            document.getElementById('atp-challenge-setup-screen').style.display = "block";
            document.getElementById('atp-challenge-active-screen').style.display = "none";
            document.getElementById('atp-challenge-result-screen').style.display = "none";
        }

        function startAtpChallenge() {
            atpChallengeScore = 0;
            atpChallengeLives = 3;
            atpChallengeIndex = 0;

            document.getElementById('atp-challenge-setup-screen').style.display = "none";
            document.getElementById('atp-challenge-active-screen').style.display = "block";

            showAtpQuestion();
        }

        function showAtpQuestion() {
            // Update hearts
            let heartsStr = "";
            for (let i = 0; i < 3; i++) {
                heartsStr += i < atpChallengeLives ? "❤️" : "🖤";
            }
            document.getElementById('atp-challenge-lives').innerText = heartsStr;
            document.getElementById('atp-challenge-score').innerText = atpChallengeScore;

            if (atpChallengeIndex >= ATP_QUESTIONS.length) {
                endAtpChallenge(true);
                return;
            }

            const qData = ATP_QUESTIONS[atpChallengeIndex];
            document.getElementById('atp-challenge-step-title').innerText = `Scénario ${atpChallengeIndex + 1} / ${ATP_QUESTIONS.length}`;
            document.getElementById('atp-challenge-question').innerText = qData.q;
            document.getElementById('atp-challenge-context').innerText = `Contexte : ${qData.context}`;

            // Inject options
            const container = document.getElementById('atp-challenge-options');
            container.innerHTML = "";
            qData.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = "p-4 rounded-xl text-left text-xs border border-slate-800 bg-slate-900/60 hover:border-rose-500/50 hover:bg-rose-950/10 transition-all text-slate-200 font-medium leading-relaxed";
                btn.innerHTML = opt.t;
                btn.onclick = () => checkAtpAnswer(opt);
                container.appendChild(btn);
            });
        }

        function checkAtpAnswer(option) {
            if (option.correct) {
                showSvtToast("🏆 EXCELLENT ! Rigueur scientifique parfaite. +200 pts", "success");
                atpChallengeScore += 200;
                atpChallengeIndex++;
                showAtpQuestion();
            } else {
                atpChallengeLives--;
                showSvtToast(`❌ PIÈGE : ${option.memo || "Manque de rigueur."}`, "error");

                if (atpChallengeLives <= 0) {
                    endAtpChallenge(false);
                } else {
                    showAtpQuestion();
                }
            }
        }

        function endAtpChallenge(success) {
            document.getElementById('atp-challenge-active-screen').style.display = "none";
            document.getElementById('atp-challenge-result-screen').style.display = "block";

            const medal = document.getElementById('atp-challenge-result-medal');
            const title = document.getElementById('atp-challenge-result-title');
            const desc = document.getElementById('atp-challenge-result-desc');
            const grade = document.getElementById('atp-challenge-result-grade');
            const scoreDisp = document.getElementById('atp-challenge-result-score-disp');

            scoreDisp.innerText = atpChallengeScore;

            let calculatedGrade = 0;
            if (success) {
                medal.innerHTML = "🏆";
                medal.className = "w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto border border-yellow-500 bg-yellow-500/10 text-yellow-400 shadow-lg shadow-yellow-500/20";
                title.innerText = "DÉFI ATP VALIDÉ AVEC HONNEURS !";
                desc.innerText = "Félicitations. Vos rédactions en physiologie cellulaire sont conformes aux exigences du Bac marocain.";

                calculatedGrade = 14 + atpChallengeLives * 2; // max 20
                grade.innerText = `${calculatedGrade} / 20`;
                triggerConfetti();
            } else {
                medal.innerHTML = "💀";
                medal.className = "w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto border border-rose-500 bg-rose-500/10 text-rose-400 shadow-lg shadow-rose-500/20";
                title.innerText = "ÉCHEC DU DÉFI — ENTRAÎNEMENT REQUIS";
                desc.innerText = "Vous êtes tombé dans les pièges de rigueur du correcteur du Bac.";
                calculatedGrade = Math.min(9, Math.floor(atpChallengeScore / 100));
                grade.innerText = `${calculatedGrade} / 20`;
            }
            saveMasteryScore('atp', calculatedGrade);
        }

        function restartAtpChallenge() {
            startAtpChallenge();
        }


        // =========================================================================
        // ==================== LABO 4 : GEOLOGIE & POLLUTION ======================
        // =========================================================================
        let activeGeologyMode = "demo";
        let geoSelectedZone = "subduction";

        function switchGeologyMode(mode) {
            activeGeologyMode = mode;
            const demoBtn = document.getElementById('geo-toggle-mode-demo');
            const challengeBtn = document.getElementById('geo-toggle-mode-challenge');
            const demoWp = document.getElementById('geology-demo-workspace');
            const challengeWp = document.getElementById('geology-challenge-workspace');

            if (mode === 'demo') {
                demoBtn.className = "px-4 py-1.5 text-xs font-extrabold rounded-lg transition-all bg-yellow-500 text-white shadow";
                challengeBtn.className = "px-4 py-1.5 text-xs font-extrabold rounded-lg transition-all text-slate-400 hover:text-white";
                demoWp.style.display = "block";
                challengeWp.style.display = "none";
                selectMetamorphicZone('subduction');
                runPollutionSimulation();
            } else {
                challengeBtn.className = "px-4 py-1.5 text-xs font-extrabold rounded-lg transition-all bg-purple-600 text-white shadow";
                demoBtn.className = "px-4 py-1.5 text-xs font-extrabold rounded-lg transition-all text-slate-400 hover:text-white";
                demoWp.style.display = "none";
                challengeWp.style.display = "block";
                initGeologyChallengeSetup();
            }
        }

        // ==========================================
        // GEOLOGY & POLLUTION CHALLENGE ENGINE
        // ==========================================
        const GEOLOGY_QUESTIONS = [
            {
                q: "Un géologue trouve une roche contenant du Glaucophane et de la Jadéite. À quel domaine PT cela correspond-il ?",
                context: "Identification de Faciès (Subduction).",
                options: [
                    { t: "Haute Pression / Basse Température (HP/BT) - Faciès Schiste Bleu.", correct: true },
                    { t: "Moyenne Pression / Haute Température (MP/HT) - Faciès Gneiss.", correct: false, memo: "Le Glaucophane est un minéral HP/BT." },
                    { t: "Basse Pression / Haute Température (BP/HT) - Métamorphisme de contact.", correct: false, memo: "La Jadéite requiert une forte compression." },
                    { t: "Fusion partielle de la croûte continentale.", correct: false, memo: "L'éclogite et le schiste bleu ne sont pas des roches de fusion." }
                ]
            },
            {
                q: "Dans une chaîne de collision, à quoi correspond l'apparition de roches contenant de la Sillimanite et présentant des traces d'Anatexie (Migmatites) ?",
                context: "Raisonnement sur le diagramme P/T et histoire de collision.",
                options: [
                    { t: "À un réchauffement intense (HT/MP) menant à la fusion partielle de la croûte continentale épaissie.", correct: true },
                    { t: "À un refroidissement brutal sous haute pression dans une zone de subduction.", correct: false, memo: "La subduction est HP/BT, pas de l'anatexie." },
                    { t: "À un volcanisme explosif recouvrant les sédiments.", correct: false, memo: "L'anatexie est un processus métamorphique profond." },
                    { t: "À l'ouverture d'un nouvel océan par divergence.", correct: false, memo: "La collision est convergente." }
                ]
            },
            {
                q: "Quelle est la séquence normale d'une ophiolite complète de haut en bas ?",
                context: "Structure de la lithosphère océanique.",
                options: [
                    { t: "Sédiments > Basaltes en coussins > Gabbros > Péridotite.", correct: true },
                    { t: "Péridotite > Gabbros > Basaltes > Sédiments.", correct: false, memo: "C'est l'ordre inverse (de bas en haut)." },
                    { t: "Gabbros > Sédiments > Basaltes > Péridotite.", correct: false, memo: "Les sédiments sont toujours au sommet." },
                    { t: "Granite > Basaltes > Gabbros.", correct: false, memo: "Le granite n'appartient pas à l'ophiolite océanique." }
                ]
            },
            {
                q: "Lors d'une pollution organique dans une rivière, quel organisme cause la chute dramatique de l'O₂ dissous (hypoxie) ?",
                context: "Chaîne d'auto-épuration et DBO5.",
                options: [
                    { t: "La prolifération bactérienne aérobie qui oxyde la matière organique.", correct: true },
                    { t: "Les poissons qui stressent et consomment tout l'O₂.", correct: false, memo: "Les poissons sont victimes de l'hypoxie." },
                    { t: "Les vers Tubifex qui absorbent l'O₂ par la peau.", correct: false, memo: "Ils tolèrent l'hypoxie mais ne la causent pas." },
                    { t: "La formation de glace en surface.", correct: false, memo: "La pollution organique est un processus biologique de décomposition." }
                ]
            },
            {
                q: "Une DBO5 très élevée (ex: 200 mg/L) comparée à une DCO moyenne indique :",
                context: "Évaluation de la biodégradabilité des eaux.",
                options: [
                    { t: "Une forte charge en matière organique facilement biodégradable.", correct: true },
                    { t: "Une eau d'excellente qualité potable.", correct: false, memo: "200 mg/L de DBO5 est un rejet très pollué." },
                    { t: "Une pollution purement chimique non organique.", correct: false, memo: "La DBO5 mesure uniquement la part organique biodégradable." },
                    { t: "L'absence totale de micro-organismes.", correct: false, memo: "Au contraire, cela excite l'activité bactérienne." }
                ]
            }
        ];

        let geologyChallengeIndex = 0;
        let geologyChallengeScore = 0;
        let geologyChallengeLives = 3;

        function startGeologyChallenge() {
            geologyChallengeIndex = 0;
            geologyChallengeScore = 0;
            geologyChallengeLives = 3;
            document.getElementById('geology-challenge-setup-screen').style.display = 'none';
            document.getElementById('geology-challenge-active-screen').style.display = 'block';
            document.getElementById('geology-challenge-result-screen').style.display = 'none';
            showGeologyQuestion();
        }

        function showGeologyQuestion() {
            if (geologyChallengeIndex >= GEOLOGY_QUESTIONS.length) {
                endGeologyChallenge(true);
                return;
            }

            const qData = GEOLOGY_QUESTIONS[geologyChallengeIndex];
            document.getElementById('geology-challenge-step-title').innerText = `Raisonnement ${geologyChallengeIndex + 1} / ${GEOLOGY_QUESTIONS.length}`;
            document.getElementById('geology-challenge-question').innerText = qData.q;
            document.getElementById('geology-challenge-context').innerText = `Contexte : ${qData.context}`;

            let hearts = "";
            for (let i = 0; i < 3; i++) hearts += i < geologyChallengeLives ? "❤️" : "🖤";
            document.getElementById('geology-challenge-lives').innerText = hearts;
            document.getElementById('geology-challenge-score').innerText = geologyChallengeScore;

            const container = document.getElementById('geology-challenge-options');
            container.innerHTML = "";
            qData.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = "p-4 rounded-xl text-left text-xs border border-slate-800 bg-slate-900/60 hover:border-yellow-500/50 hover:bg-yellow-950/10 transition-all text-slate-200 font-medium leading-relaxed";
                btn.innerHTML = opt.t;
                btn.onclick = () => checkGeologyAnswer(opt);
                container.appendChild(btn);
            });
        }

        function checkGeologyAnswer(idx) {
            const q = GEOLOGY_QUESTIONS[currentGeoIdx];
            const isCorrect = idx === q.correct;

            if (isCorrect) {
                geoScore += Math.round(20 / GEOLOGY_QUESTIONS.length);
                showSvtToast("✅ Excellent ! Rigueur scientifique validée.", "success");
            } else {
                geoLives--;
                showSvtToast("❌ Erreur d'interprétation. -1 Vie", "error");
            }

            if (geoLives <= 0) {
                endGeologyChallenge(false);
            } else if (currentGeoIdx + 1 >= GEOLOGY_QUESTIONS.length) {
                endGeologyChallenge(true);
            } else {
                currentGeoIdx++;
                renderGeologyQuestion();
            }
        }

        function endGeologyChallenge(success) {
            document.getElementById('geology-challenge-active-screen').style.display = 'none';
            document.getElementById('geology-challenge-result-screen').style.display = 'block';
            
            saveMasteryScore('geology', geoScore);

            const medalEl = document.getElementById('geology-challenge-result-medal');
            const titleEl = document.getElementById('geology-challenge-result-title');
            const descEl = document.getElementById('geology-challenge-result-desc');

            if (success) {
                medalEl.innerText = "🏆";
                medalEl.className = "w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto border border-yellow-500 bg-yellow-500/10 shadow-[0_0_20px_rgba(234,179,8,0.3)]";
                titleEl.innerText = "Maîtrise de Géodynamique Validée !";
                descEl.innerHTML = `Félicitations ! Votre score de <strong class="text-yellow-400">${geoScore}/20</strong> témoigne d'une excellente rigueur en géologie et pollution.`;
            } else {
                medalEl.innerText = "📉";
                medalEl.className = "w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto border border-rose-500 bg-rose-500/10";
                titleEl.innerText = "Rigueur Scientifique Insuffisante";
                descEl.innerHTML = `Vous avez épuisé vos vies. Votre score final est de <strong class="text-rose-400">${geoScore}/20</strong>. Revoyez les indicateurs minéralogiques et thermodynamiques.`;
            }
        }

        function selectMetamorphicZone(zone) {
            geoSelectedZone = zone;

            // Toggle active classes
            document.getElementById('btn-zone-sub').className = "pt-zone-btn zone-subduction" + (zone === 'subduction' ? " active" : "");
            document.getElementById('btn-zone-coll').className = "pt-zone-btn zone-collision" + (zone === 'collision' ? " active" : "");
            document.getElementById('btn-zone-cont').className = "pt-zone-btn zone-contact" + (zone === 'contact' ? " active" : "");

            const infoCard = document.getElementById('geology-info-card');
            let minerals = "";
            let conditions = "";
            let recon = "";
            let phrase = "";

            if (zone === 'subduction') {
                minerals = "Glaucophane (Bleu), Grenat, Jadéite (Éclogite)";
                conditions = "P = 10 à 20 kbar (HP) | T = 150 à 400°C (BT)";
                recon = "1. Convergence lithosphérique entraînant l'enfoncement rapide d'une plaque froide. ➔ 2. Augmentation intense de pression avec réchauffement très lent (HP/BT). Métamorphisme dynamique. ➔ 3. Déshydratation des schistes verts formant le Glaucophane (schistes bleus) puis l'Éclogite.";
                phrase = "La présence de <span class='kw-mut'>Glaucophane</span> et de <span class='kw-prot'>Jadéite/Grenat</span> atteste d'un métamorphisme de haute pression et basse température (<span class='kw-mut'>HP/BT</span>), caractéristique d'une zone de <span class='kw-prot'>subduction</span>. L'enfoncement rapide de la croûte océanique froide empêche l'ajustement thermique, générant une déshydratation intense des roches d'ophiolite.";
            } else if (zone === 'collision') {
                minerals = "Sillimanite, Disthène, Biotite, Gneiss, Migmatite";
                conditions = "P = 4 à 8 kbar (MP) | T = 450 à 750°C (HT)";
                recon = "1. Blocage de la subduction océanique menant à l'affrontement de deux plaques continentales. ➔ 2. Épaississement crustal majeur (racine crustale), enfouissant les sédiments à profondeur moyenne. ➔ 3. Augmentation conjointe de P et T, menant à l'anatexie (fusion partielle et formation de migmatite/granite d'anatexie).";
                phrase = "L'association de <span class='kw-mut'>Disthène</span> et de <span class='kw-prot'>Sillimanite</span> traduit un métamorphisme de moyenne pression et haute température (<span class='kw-mut'>MP/HT</span>), typique d'une zone de <span class='kw-prot'>collision</span>. L'épaississement crustal par empilement de nappes de charriage enfouit les roches, provoquant leur réchauffement thermodynamique.";
            } else if (zone === 'contact') {
                minerals = "Andalousite, Silicates d'Alumine, Cornéenne";
                conditions = "P = 1 à 3 kbar (BP) | T = 500 à 800°C (HT)";
                recon = "1. Intrusion ascendante d'un pluton de magma granitique brûlant à travers des couches sédimentaires de faible profondeur. ➔ 2. Transfert thermique intense par conduction de chaleur (BP/HT) formant une auréole métamorphique de contact. ➔ 3. Cristallisation d'Andalousite.";
                phrase = "Le minéral indicateur <span class='kw-mut'>Andalousite</span> indique des conditions de basse pression et haute température (<span class='kw-mut'>BP/HT</span>). C'est la preuve d'un métamorphisme de <span class='kw-prot'>contact</span> provoqué par l'intrusion thermique d'un magma granitique chaud recuisant les roches encaissantes superficielles froides.";
            }

            document.getElementById('geo-minerals').innerText = minerals;
            document.getElementById('geo-conditions').innerText = conditions;
            document.getElementById('geo-reconstitution').innerHTML = recon;

            document.getElementById('geo-phrase-model-text').innerHTML = phrase;

            // Trigger tectonic cross-section profile updates
            updateTectonicProfile(zone);
        }

        function updateTectonicProfile(zone) {
            const canvas = document.getElementById('tectonic-profile-canvas');
            if (!canvas) return;

            let svgContent = "";

            if (zone === 'subduction') {
                svgContent = `
<svg viewBox="0 0 500 180" class="w-full h-full" style="background:#090d16;">
    <!-- Overriding continental plate -->
    <path d="M 180 180 L 500 180 L 500 40 L 280 40 Z" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
    
    <!-- Ocean -->
    <path d="M 0 40 L 280 40 L 180 180 L 0 180 Z" fill="#082f49" opacity="0.3" />
    
    <!-- Subducting oceanic plate -->
    <path d="M 0 35 L 240 35 L 140 180 L 90 180 L 0 55 Z" fill="#0f172a" stroke="#0284c7" stroke-width="2" stroke-dasharray="4,2" />
    
    <!-- Fault/Benioff zone arrows -->
    <path d="M 230 45 L 135 175" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
    <path d="M 135 175 L 140 165 M 135 175 L 145 175" fill="none" stroke="#ef4444" stroke-width="1.5" />
    
    <!-- Metamorphic minerals markers -->
    <!-- Schiste bleu (HP/BT) -->
    <circle cx="170" cy="110" r="6" fill="#3b82f6" style="filter: drop-shadow(0 0 5px #3b82f6);" />
    <text x="185" y="113" fill="#93c5fd" font-size="9" font-weight="bold">Faciès Schiste Bleu (Glaucophane)</text>
    
    <!-- Eclogite (HP/BT de forte profondeur) -->
    <circle cx="150" cy="150" r="6" fill="#ec4899" style="filter: drop-shadow(0 0 5px #ec4899);" />
    <text x="165" y="153" fill="#fbcfe8" font-size="9" font-weight="bold">Faciès Éclogite (Grenat / Jadéite)</text>
    
    <!-- Labels -->
    <text x="10" y="25" fill="#64748b" font-size="10" font-weight="bold">Fosse océanique</text>
    <text x="350" y="30" fill="#64748b" font-size="10" font-weight="bold">Croûte Continentale</text>
    <text x="10" y="100" fill="#38bdf8" font-size="9" font-weight="bold" transform="rotate(55 10 100)">Lithosphère Océanique</text>
    
    <!-- Heat/Fluid arrows -->
    <path d="M 160 110 Q 185 90 200 70" fill="none" stroke="#60a5fa" stroke-width="1" stroke-dasharray="2,2" />
    <text x="205" y="73" fill="#60a5fa" font-size="8">H2O</text>
</svg>
                `;
            } else if (zone === 'collision') {
                svgContent = `
<svg viewBox="0 0 500 180" class="w-full h-full" style="background:#090d16;">
    <!-- Left Plate -->
    <path d="M 0 180 L 180 180 Q 250 140 250 45 L 0 45 Z" fill="#0f172a" stroke="#334155" stroke-width="1.5" />
    
    <!-- Right Plate colliding -->
    <path d="M 500 180 L 320 180 Q 250 140 250 45 L 500 45 Z" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
    
    <!-- Fold mountains uplift (Alpes/Himalaya style) -->
    <path d="M 180 45 Q 250 -10 320 45 Z" fill="#334155" stroke="#475569" stroke-width="1.5" />
    <path d="M 210 30 Q 250 5 290 30 Z" fill="#475569" />
    
    <!-- Thrust faults (nappes de charriage) -->
    <path d="M 150 130 Q 230 80 270 15" fill="none" stroke="#ef4444" stroke-width="2" />
    <path d="M 350 130 Q 270 80 230 15" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
    
    <!-- Crustal thickening Root (Racine crustale) -->
    <path d="M 180 140 Q 250 200 320 140 Z" fill="#1e1b4b" opacity="0.6" stroke="#4338ca" stroke-width="1" stroke-dasharray="3,3" />
    
    <!-- Metamorphic indicators markers -->
    <circle cx="250" cy="85" r="5" fill="#10b981" style="filter: drop-shadow(0 0 5px #10b981);" />
    <text x="260" y="88" fill="#a7f3d0" font-size="9" font-weight="bold">Faciès Schiste Vert (Moyenne P / T)</text>
    
    <circle cx="250" cy="135" r="5" fill="#f59e0b" style="filter: drop-shadow(0 0 5px #f59e0b);" />
    <text x="260" y="138" fill="#fde68a" font-size="9" font-weight="bold">Faciès Amphibolite (Racine crustale)</text>
    
    <!-- Labels -->
    <text x="20" y="25" fill="#64748b" font-size="10" font-weight="bold">Plaque 1</text>
    <text x="420" y="25" fill="#64748b" font-size="10" font-weight="bold">Plaque 2</text>
    <text x="200" y="15" fill="#fbbf24" font-size="10" font-weight="bold">Chaîne de Collision</text>
    <text x="165" y="170" fill="#818cf8" font-size="8" font-weight="bold">Racine Crustale (Moho profond)</text>
</svg>
                `;
            } else if (zone === 'contact') {
                svgContent = `
<svg viewBox="0 0 500 180" class="w-full h-full" style="background:#090d16;">
    <!-- Layered sedimentary cold rocks -->
    <rect x="0" y="30" width="500" height="25" fill="#1e293b" opacity="0.8" stroke="#334155" stroke-width="0.5" />
    <rect x="0" y="55" width="500" height="30" fill="#334155" opacity="0.8" stroke="#475569" stroke-width="0.5" />
    <rect x="0" y="85" width="500" height="35" fill="#475569" opacity="0.8" stroke="#64748b" stroke-width="0.5" />
    <rect x="0" y="120" width="500" height="60" fill="#0f172a" opacity="0.8" stroke="#1e293b" stroke-width="0.5" />
    
    <!-- Magmatic Pluton intrusion (Granite) -->
    <path d="M 200 180 C 200 80, 300 80, 300 180 Z" fill="#ef4444" opacity="0.9" style="filter: drop-shadow(0 0 15px #ef4444);" />
    <text x="232" y="150" fill="#fef2f2" font-size="10" font-weight="extrabold">PLUTON</text>
    <text x="225" y="163" fill="#fee2e2" font-size="9" font-weight="bold">GRANITIQUE</text>
    
    <!-- Thermal metamorphism aureole (radial border halo) -->
    <path d="M 170 180 C 170 60, 330 60, 330 180 Z" fill="none" stroke="#f59e0b" stroke-width="15" opacity="0.4" style="filter: blur(4px);" />
    
    <!-- Heat arrows -->
    <path d="M 215 110 L 190 95" fill="none" stroke="#fca5a5" stroke-width="1.5" />
    <path d="M 190 95 L 198 94 M 190 95 L 191 103" fill="none" stroke="#fca5a5" stroke-width="1.5" />
    
    <path d="M 285 110 L 310 95" fill="none" stroke="#fca5a5" stroke-width="1.5" />
    <path d="M 310 95 L 309 103 M 310 95 L 302 94" fill="none" stroke="#fca5a5" stroke-width="1.5" />
    
    <!-- Metamorphic marker in the aureole -->
    <circle cx="150" cy="95" r="5" fill="#f59e0b" style="filter: drop-shadow(0 0 5px #f59e0b);" />
    <text x="10" y="110" fill="#fde68a" font-size="9" font-weight="bold">Auréole de métamorphisme (BP/HT)</text>
    
    <circle cx="350" cy="95" r="5" fill="#ef4444" style="filter: drop-shadow(0 0 5px #ef4444);" />
    <text x="360" y="110" fill="#fecaca" font-size="9" font-weight="bold">Roche Cornéenne (Andalousite)</text>
    
    <!-- General title text -->
    <text x="15" y="20" fill="#64748b" font-size="9" font-weight="bold">Roches encaissantes sédimentaires froides</text>
</svg>
                `;
            }

            canvas.innerHTML = svgContent;
        }

        function setRiverStation(stationNumber) {
            // Update backing slider element
            const slider = document.getElementById('pollution-slider');
            if (slider) {
                slider.value = stationNumber;
            }

            // Sync visual active states on the river cards
            for (let i = 1; i <= 5; i++) {
                const card = document.getElementById(`river-card-${i}`);
                if (card) {
                    if (i === stationNumber) {
                        card.classList.add('active');
                    } else {
                        card.classList.remove('active');
                    }
                }
            }

            // Trigger the simulation engine update
            runPollutionSimulation();
        }

        function runPollutionSimulation() {
            const val = parseInt(document.getElementById('pollution-slider').value);
            const eutrophActive = document.getElementById('eutroph-trigger').checked;

            // Sync visual active states on the river cards
            for (let i = 1; i <= 5; i++) {
                const card = document.getElementById(`river-card-${i}`);
                if (card) {
                    if (i === val) {
                        card.classList.add('active');
                    } else {
                        card.classList.remove('active');
                    }
                }
            }

            const sliderDesc = document.getElementById('pollution-slider-desc');
            const standardPanel = document.getElementById('standard-indicators-panel');
            const eutrophPanel = document.getElementById('eutroph-timeline-panel');
            const phraseBox = document.getElementById('water-phrase-model-text');

            if (eutrophActive) {
                // Show eutrophication timeline, hide standard indicators
                standardPanel.classList.add('hidden');
                eutrophPanel.classList.remove('hidden');

                // Toggle steps active
                for (let i = 1; i <= 5; i++) {
                    const stepEl = document.getElementById(`eut-step-${i}`);
                    if (i <= val) {
                        stepEl.className = "eutroph-step active";
                    } else {
                        stepEl.className = "eutroph-step";
                    }
                }

                // Update text descriptions
                let stepText = "";
                let phrase = "";
                if (val === 1) {
                    stepText = "Étape 1 : Apport massif de Nitrates (NO₃⁻) et Phosphates (PO₄³⁻) dans l'eau.";
                    phrase = "La première phase de l'eutrophisation débute par un <span class='kw-mut'>apport excédentaire d'engrais agricoles</span> azotés et phosphatés dans la rivière, rompant l'équilibre trophique naturel.";
                } else if (val === 2) {
                    stepText = "Étape 2 : Bloom algal. Prolifération exponentielle des algues vertes superficielles.";
                    phrase = "Les nitrates et phosphates stimulent le développement excessif des algues de surface (<span class='kw-mut'>bloom algal</span>). Cette couche verte opaque empêche la lumière solaire d'atteindre la flore de fond, stoppant sa photosynthèse.";
                } else if (val === 3) {
                    stepText = "Étape 3 : Mort des algues profondes et prolifération des bactéries décomposeurs.";
                    phrase = "La mort de la végétation profonde privée de lumière génère une immense quantité de matière organique inerte. Les <span class='kw-prot'>bactéries aérobies</span> décomposeurs se multiplient de façon exponentielle pour consommer ce gisement.";
                } else if (val === 4) {
                    stepText = "Étape 4 : Anoxie totale du milieu aquatique (consommation d'O₂).";
                    phrase = "La respiration intensive des bactéries décomposeurs consomme la quasi-totalité de l'O₂ dissous dans l'eau. Le milieu bascule en état d'<span class='kw-mut'>anoxie totale (oxygène à 0 mg/L)</span>, rendant toute respiration branchiale impossible.";
                } else if (val === 5) {
                    stepText = "Étape 5 : Asphyxie de la biodiversité, putréfaction anaérobie anaérobie.";
                    phrase = "L'anoxie sévère entraîne l'asphyxie et la <span class='kw-mut'>mort massive des poissons</span> et invertébrés nobles. Les bactéries anaérobies prennent le relais, produisant des gaz fétides (H₂S, CH₄). C'est le stade ultime de l'eutrophisation.";
                }

                sliderDesc.innerText = `Processus d'Eutrophisation — ${stepText}`;
                phraseBox.innerHTML = phrase;

            } else {
                // Show standard indicators
                standardPanel.classList.remove('hidden');
                eutrophPanel.classList.add('hidden');

                let dbo5 = 1.5; let dboWidth = "10%";
                let dco = 12; let dcoWidth = "15%";
                let o2 = 9.5; let o2Width = "95%";
                let bio = "";
                let title = "";
                let phrase = "";

                if (val === 1) {
                    title = "Station 1 : Amont de la rivière (Sain)";
                    bio = "Poissons nobles (Truite de rivière), Larves de Perles, Éphémères";
                    phrase = "À la station amont, l'eau est hautement oxygénée (9.5 mg/L) avec des indices de pollution <span class='kw-mut'>DBO5 et DCO extrêmement faibles</span>. La faune aquatique est composée d'espèces bio-indicatrices sténothermes très sensibles à la pollution.";
                } else if (val === 2) {
                    title = "Station 2 : Point de rejet d'égouts (Pollution directe)";
                    dbo5 = 45; dboWidth = "75%";
                    dco = 110; dcoWidth = "85%";
                    o2 = 6.0; o2Width = "60%";
                    bio = "Larves de Diptères (Chironomes), quelques Aselles, pas de Truite";
                    phrase = "Au point de déversement, l'introduction soudaine de matière organique augmente brutalement la <span class='kw-mut'>DCO et la DBO5</span>. L'O₂ dissous commence à chuter car les bactéries aérobies commencent à consommer l'oxygène pour biodégrader les polluants.";
                } else if (val === 3) {
                    title = "Station 3 : Aval direct (Zone de dégradation critique)";
                    dbo5 = 60; dboWidth = "100%";
                    dco = 130; dcoWidth = "100%";
                    o2 = 2.1; o2Width = "21%";
                    bio = "Vers Tubifex en colonie dense (indicateur de pollution majeure), Asphyxie";
                    phrase = "Dans la zone critique, la prolifération des <span class='kw-prot'>bactéries aérobies</span> décomposant la MO atteint son apogée, consommant l'O₂ de manière drastique (hypoxie critique à 2.1 mg/L). La DBO5 atteint son maximum. Les espèces exigeantes disparaissent au profit d'espèces d'eaux fétides (<span class='kw-mut'>Tubifex</span>).";
                } else if (val === 4) {
                    title = "Station 4 : Aval moyen (Zone d'auto-épuration en cours)";
                    dbo5 = 15; dboWidth = "35%";
                    dco = 40; dcoWidth = "40%";
                    o2 = 5.5; o2Width = "55%";
                    bio = "Aselles, Larves de Sialis, quelques poissons tolérants (Gardon)";
                    phrase = "En aval moyen, la charge en matière organique commence à s'épuiser. La consommation d'O₂ ralentit, permettant une réoxygénation progressive de l'eau par échange atmosphérique. C'est la phase active d'<span class='kw-prot'>auto-épuration naturelle</span>.";
                } else if (val === 5) {
                    title = "Station 5 : Aval lointain (Eau entièrement régénérée)";
                    dbo5 = 2.0; dboWidth = "12%";
                    dco = 15; dcoWidth = "18%";
                    o2 = 8.8; o2Width = "88%";
                    bio = "Poissons blancs (Gardon, Ablette), Larves d'Éphémères, faune saine";
                    phrase = "Grâce au phénomène biologique d'<span class='kw-prot'>auto-épuration</span>, les bactéries ont minéralisé l'ensemble des déchets organiques. La <span class='kw-mut'>DBO5 s'effondre</span> à 2 mg/L et l'O₂ dissous remonte à 8.8 mg/L, restaurant la biodiversité d'origine.";
                }

                sliderDesc.innerText = title;
                document.getElementById('val-dbo5').innerText = `${dbo5} mg/L` + (val > 1 ? " (Alerte élevée)" : " (Sain)");
                document.getElementById('bar-dbo5').style.width = dboWidth;

                document.getElementById('val-dco').innerText = `${dco} mg/L` + (val > 1 ? " (Charge organique)" : " (Sain)");
                document.getElementById('bar-dco').style.width = dcoWidth;

                document.getElementById('val-o2').innerText = `${o2} mg/L` + (o2 < 3 ? " (Anoxie critique)" : " (Correct)");
                document.getElementById('bar-o2').style.width = o2Width;

                document.getElementById('geo-biodiversity').innerText = bio;
                phraseBox.innerHTML = phrase;
            }
        }

        // =========================================================================
        // ==================== LABO 6 : IMMUNOLOGIE LOGIC =========================
        // =========================================================================
        // =========================================================================
        // ==================== LABO 5 : QUALITÉ DE L'EAU LOGIC ====================
        // =========================================================================
        let waterChallengeScore = 0;
        let waterChallengeLives = 3;
        let waterChallengeIndex = 0;

        const WATER_QUESTIONS = [
            {
                q: "Lors d'une pollution organique, quel paramètre mesure la quantité d'O₂ consommée par les bactéries pour décomposer la matière organique en 5 jours ?",
                context: "Indicateurs de pollution organique.",
                options: [
                    { t: "La DBO5 (Demande Biochimique en Oxygène).", correct: true },
                    { t: "La DCO (Demande Chimique en Oxygène).", correct: false, memo: "La DCO utilise des oxydants chimiques, pas des bactéries." },
                    { t: "Le pH de l'eau.", correct: false, memo: "Le pH mesure l'acidité, pas la consommation d'oxygène." },
                    { t: "La température.", correct: false, memo: "La température influence l'O₂, mais ne mesure pas sa consommation biochimique." }
                ]
            },
            {
                q: "Dans un lac eutrophisé, quel est le facteur limitant qui, en excès, déclenche la prolifération des algues ?",
                context: "Mécanismes de l'eutrophisation.",
                options: [
                    { t: "Les Nitrates (NO₃⁻) et les Phosphates (PO₄³⁻).", correct: true },
                    { t: "Le Dioxyde de Carbone (CO₂).", correct: false, memo: "Le CO₂ est rarement limitant en milieu aquatique." },
                    { t: "Le sel marin.", correct: false, memo: "Le sel n'est pas un nutriment pour les algues de lac." },
                    { t: "Le manque de lumière.", correct: false, memo: "L'excès de lumière favorise les algues, mais les nutriments sont le déclencheur." }
                ]
            },
            {
                q: "Quelle est la conséquence directe de l'accumulation de matière organique morte au fond d'un lac ?",
                context: "Bilan écologique de l'eutrophisation.",
                options: [
                    { t: "Une décomposition bactérienne intense consommant tout l'oxygène (anoxie) et libérant des gaz toxiques.", correct: true },
                    { t: "Une augmentation de la transparence de l'eau.", correct: false, memo: "L'eutrophisation rend l'eau trouble et verte." },
                    { t: "La création de nouveaux récifs coralliens.", correct: false, memo: "Les coraux ne survivent pas en milieu eutrophisé." },
                    { t: "Un refroidissement de l'eau.", correct: false, memo: "La décomposition est souvent exothermique, mais l'effet principal est l'anoxie." }
                ]
            }
        ];

        function switchWaterMode(mode) {
            const demo = document.getElementById('water-demo-workspace');
            const challenge = document.getElementById('water-challenge-workspace');
            const btnDemo = document.getElementById('water-toggle-mode-demo');
            const btnChallenge = document.getElementById('water-toggle-mode-challenge');

            if (mode === 'challenge') {
                demo.style.display = 'none';
                challenge.style.display = 'block';
                btnChallenge.className = "px-5 py-1.5 text-xs font-extrabold rounded-lg transition-all bg-sky-600 text-white shadow";
                btnDemo.className = "px-5 py-1.5 text-xs font-extrabold rounded-lg transition-all text-slate-400 hover:text-white";
                initWaterChallengeSetup();
            } else {
                demo.style.display = 'block';
                challenge.style.display = 'none';
                btnDemo.className = "px-5 py-1.5 text-xs font-extrabold rounded-lg transition-all bg-sky-500 text-white shadow";
                btnChallenge.className = "px-5 py-1.5 text-xs font-extrabold rounded-lg transition-all text-slate-400 hover:text-white";
            }
        }

        function initWaterChallengeSetup() {
            document.getElementById('water-challenge-setup-screen').style.display = "block";
            document.getElementById('water-challenge-active-screen').style.display = "none";
            document.getElementById('water-challenge-result-screen').style.display = "none";
        }

        function startWaterChallenge() {
            waterChallengeScore = 0;
            waterChallengeLives = 3;
            waterChallengeIndex = 0;
            document.getElementById('water-challenge-setup-screen').style.display = "none";
            document.getElementById('water-challenge-active-screen').style.display = "block";
            showWaterQuestion();
        }

        function showWaterQuestion() {
            if (waterChallengeIndex >= WATER_QUESTIONS.length) {
                endWaterChallenge(true);
                return;
            }

            const qData = WATER_QUESTIONS[waterChallengeIndex];
            document.getElementById('water-challenge-step-title').innerText = `Expertise ${waterChallengeIndex + 1} / ${WATER_QUESTIONS.length}`;
            document.getElementById('water-challenge-question').innerText = qData.q;
            document.getElementById('water-challenge-context').innerText = `Contexte : ${qData.context}`;

            let hearts = "";
            for (let i = 0; i < 3; i++) hearts += i < waterChallengeLives ? "❤️" : "🖤";
            document.getElementById('water-challenge-lives').innerText = hearts;
            document.getElementById('water-challenge-score').innerText = waterChallengeScore;

            const container = document.getElementById('water-challenge-options');
            container.innerHTML = "";
            qData.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = "p-4 rounded-xl text-left text-xs border border-slate-800 bg-slate-900/60 hover:border-sky-500/50 hover:bg-sky-950/10 transition-all text-slate-200 font-medium leading-relaxed";
                btn.innerHTML = opt.t;
                btn.onclick = () => checkWaterAnswer(opt);
                container.appendChild(btn);
            });
        }

        function checkWaterAnswer(option) {
            if (option.correct) {
                showSvtToast("🏆 EXCELLENT ! Diagnostic environnemental exact. +500 pts", "success");
                waterChallengeScore += 500;
                waterChallengeIndex++;
                showWaterQuestion();
            } else {
                waterChallengeLives--;
                showSvtToast(`❌ ERREUR : ${option.memo || "Analyse incorrecte."}`, "error");

                if (waterChallengeLives <= 0) {
                    endWaterChallenge(false);
                } else {
                    showWaterQuestion();
                }
            }
        }

        function endWaterChallenge(success) {
            document.getElementById('water-challenge-active-screen').style.display = "none";
            document.getElementById('water-challenge-result-screen').style.display = "block";

            const medal = document.getElementById('water-challenge-result-medal');
            const title = document.getElementById('water-challenge-result-title');
            const desc = document.getElementById('water-challenge-result-desc');
            const grade = document.getElementById('water-challenge-result-grade');
            const scoreDisp = document.getElementById('water-challenge-result-score-disp');

            scoreDisp.innerText = waterChallengeScore;

            let calculatedGrade = 0;
            if (success) {
                medal.innerHTML = "🏆";
                medal.className = "w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto border border-sky-500 bg-sky-500/10 text-sky-400 shadow-lg shadow-sky-500/20";
                title.innerText = "EXPERT ÉCOLOGUE VALIDÉ !";
                desc.innerText = "Votre maîtrise des cycles biogéochimiques et de la gestion des eaux est confirmée.";

                calculatedGrade = 14 + waterChallengeLives * 2; 
                grade.innerText = `${calculatedGrade} / 20`;
                triggerConfetti();
            } else {
                medal.innerHTML = "📉";
                medal.className = "w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto border border-rose-500 bg-rose-500/10 text-rose-400 shadow-lg shadow-rose-500/20";
                title.innerText = "DIAGNOSTIC ERRONÉ — RÉVISION REQUISE";
                desc.innerText = "L'impact des nitrates et des phosphates sur l'O2 dissous est crucial pour le Bac.";
                calculatedGrade = Math.min(9, Math.floor(waterChallengeScore / 100));
                grade.innerText = `${calculatedGrade} / 20`;
            }
            saveMasteryScore('water', calculatedGrade);
        }

        // =========================================================================
        // ==================== LABO 6 : IMMUNOLOGIE LOGIC =========================
        // =========================================================================
        let activeImmunoMode = "demo";
        let immunoChallengeScore = 0;
        let immunoChallengeLives = 3;
        let immunoChallengeIndex = 0;

        function switchImmunoMode(mode) {
            activeImmunoMode = mode;
            const demoBtn = document.getElementById('immuno-toggle-mode-demo');
            const challengeBtn = document.getElementById('immuno-toggle-mode-challenge');
            const demoWp = document.getElementById('immuno-demo-workspace');
            const challengeWp = document.getElementById('immuno-challenge-workspace');

            if (mode === 'demo') {
                demoBtn.className = "px-5 py-1.5 text-xs font-extrabold rounded-lg transition-all bg-pink-600 text-white shadow";
                challengeBtn.className = "px-5 py-1.5 text-xs font-extrabold rounded-lg transition-all text-slate-400 hover:text-white";
                demoWp.style.display = "block";
                challengeWp.style.display = "none";
                setMhcScenario('normal');
                updateHivTimeline();
            } else {
                challengeBtn.className = "px-5 py-1.5 text-xs font-extrabold rounded-lg transition-all bg-purple-600 text-white shadow";
                demoBtn.className = "px-5 py-1.5 text-xs font-extrabold rounded-lg transition-all text-slate-400 hover:text-white";
                demoWp.style.display = "none";
                challengeWp.style.display = "block";
                initImmunoChallengeSetup();
            }
        }

        function setMhcScenario(scenario) {
            const container = document.getElementById('mhc-sim-container');
            const title = document.getElementById('mhc-status-title');
            const desc = document.getElementById('mhc-status-desc');
            const phraseBox = document.getElementById('immuno-phrase-model-text');

            let svg = `<svg viewBox="0 0 400 200" class="w-full h-full">`;
            
            // Bottom Cell (Antigen Presenting Cell or Target Cell)
            svg += `<path d="M 50 180 Q 200 150 350 180" fill="none" stroke="#334155" stroke-width="2" stroke-dasharray="4,4" />`;
            svg += `<text x="200" y="195" text-anchor="middle" fill="#475569" font-size="9" font-weight="bold">MEMBRANE DE LA CELLULE PRÉSENTATRICE</text>`;

            // MHC-I Structure
            svg += `<rect x="170" y="120" width="60" height="40" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5" />`;
            svg += `<text x="200" y="145" text-anchor="middle" fill="#64748b" font-size="10" font-weight="black">CMH-I</text>`;

            // Peptide (The variable part)
            let peptideColor = "#10b981"; // Green for self
            let peptideShape = "M 185 120 L 215 120 L 215 110 L 185 110 Z";
            let statusTitle = "RECONNAISSANCE DU SOI";
            let statusDesc = "Le Lymphocyte T8 reconnaît le peptide du Soi présenté par le CMH-I. Il n'y a pas d'activation : la cellule est respectée.";
            let phrase = "Le <span class='kw-prot'>CMH-I</span> présente un peptide issu de la dégradation normale des protéines endogènes. Le <span class='kw-mut'>TCR</span> du Lymphocyte T ne reconnaît pas ce complexe comme une menace (absence de signal de danger). C'est la tolérance immunitaire au <span class='kw-mut'>Soi</span>.";

            if (scenario === 'infected') {
                peptideColor = "#f43f5e"; // Red for non-self/infected
                peptideShape = "M 185 120 L 200 100 L 215 120 Z"; // Triangle shape
                statusTitle = "SOI MODIFIÉ (CELLULE INFECTÉE)";
                statusDesc = "Un virus a détourné la machinerie cellulaire. Le CMH-I présente un peptide viral étranger. Activation du LT8.";
                phrase = "La cellule infectée présente des <span class='kw-mut'>peptides viraux</span> via ses molécules de <span class='kw-prot'>CMH-I</span>. Le Lymphocyte T8 spécifique reconnaît ce <span class='kw-mut'>Soi modifié</span>, déclenchant sa prolifération et sa différenciation en Lymphocyte T cytotoxique (<span class='kw-prot'>LTc</span>).";
            } else if (scenario === 'non-self') {
                peptideColor = "#fbbf24"; // Yellow/Gold for Allogenic
                peptideShape = "M 180 125 L 220 125 L 220 105 L 180 105 Z"; // Larger box
                statusTitle = "NON-SOI (GREFFE ALLOGÉNIQUE)";
                statusDesc = "Le CMH lui-même est étranger. Les récepteurs TCR le reconnaissent comme une menace majeure. Rejet de greffe.";
                phrase = "Dans le cas d'une greffe non compatible, les molécules de <span class='kw-prot'>CMH</span> du greffon sont perçues comme du <span class='kw-mut'>Non-Soi</span>. Cela provoque une réaction immunitaire massive des lymphocytes T du receveur, aboutissant au <span class='kw-mut'>rejet de la greffe</span>.";
            }

            svg += `<path d="${peptideShape}" fill="${peptideColor}" stroke="white" stroke-width="1" class="animate-pulse" />`;

            // Top TCR (approaching)
            let tcrY = scenario === 'normal' ? 30 : 60; // Closer if infected or non-self
            svg += `<g transform="translate(0, ${tcrY})">`;
            svg += `<rect x="175" y="0" width="50" height="40" rx="4" fill="#ec489922" stroke="#ec4899" stroke-width="1.5" />`;
            svg += `<text x="200" y="25" text-anchor="middle" fill="#ec4899" font-size="10" font-weight="black">TCR</text>`;
            // TCR binding site
            svg += `<path d="M 185 40 L 215 40 L 200 55 Z" fill="#ec4899" opacity="0.6" />`;
            svg += `</g>`;

            // Interaction arrows if activated
            if (scenario !== 'normal') {
                svg += `<path d="M 230 140 Q 280 140 280 100" fill="none" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrowhead)" />`;
                svg += `<text x="285" y="90" fill="#f43f5e" font-size="8" font-weight="bold">ALERTE !</text>`;
            }

            svg += `
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#f43f5e" />
                </marker>
            </defs>
            </svg>`;

            container.innerHTML = svg;
            title.innerText = statusTitle;
            desc.innerText = statusDesc;
            phraseBox.innerHTML = phrase;
        }

        function updateHivTimeline() {
            const val = parseInt(document.getElementById('hiv-time-slider').value);
            const group = document.getElementById('hiv-curves-group');
            const scrubber = document.getElementById('hiv-scrubber');
            const badge = document.getElementById('hiv-phase-badge');
            const desc = document.getElementById('hiv-phase-desc');

            if (!group || !scrubber) return;

            // Move scrubber
            const xPos = 40 + (val * 3.4); // 40 to 380
            scrubber.setAttribute('x1', xPos);
            scrubber.setAttribute('x2', xPos);

            // Phase logic
            if (val < 15) {
                badge.innerText = "Primo-infection";
                badge.className = "badge-lab b-blue";
                desc.innerText = "Entrée du virus, chute initiale des LT4 et pic de charge virale. Apparition des anticorps anti-VIH (Séropositivité).";
            } else if (val < 80) {
                badge.innerText = "Phase de Latence (Asymptomatique)";
                badge.className = "badge-lab b-green";
                desc.innerText = "Équilibre précaire. Le système immunitaire contient le virus, mais les LT4 diminuent lentement et inexorablement sur plusieurs années.";
            } else {
                badge.innerText = "Stade SIDA (Symptomatique)";
                badge.className = "badge-lab b-red";
                desc.innerText = "Effondrement des LT4 (< 200/mm³). Apparition de maladies opportunistes (Candidose, Tuberculose, Sarcome de Kaposi). Issue fatale sans traitement.";
            }

            // Draw Curves
            const lt4Path = "M 40 20 L 70 80 L 100 60 L 300 110 L 380 140";
            const viralPath = "M 40 140 L 70 20 L 110 120 L 300 100 L 380 10";

            group.innerHTML = `
                <path d="${lt4Path}" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" />
                <path d="${viralPath}" fill="none" stroke="#f43f5e" stroke-width="2" stroke-linecap="round" stroke-dasharray="4,2" />
                <circle cx="${xPos}" cy="${getPointOnPath(lt4Path, xPos)}" r="4" fill="#38bdf8" />
                <circle cx="${xPos}" cy="${getPointOnPath(viralPath, xPos)}" r="4" fill="#f43f5e" />
            `;
        }

        function getPointOnPath(pathStr, x) {
            if (x < 70) return 20 + (x - 40) * (60 / 30);
            if (x < 100) return 80 - (x - 70) * (20 / 30);
            if (x < 300) return 60 + (x - 100) * (50 / 200);
            return 110 + (x - 300) * (30 / 80);
        }

        function launchImmunoAnimation(type) {
            const stage = document.getElementById('immuno-battle-stage');
            stage.innerHTML = "";
            
            const canvas = document.createElement('div');
            canvas.className = "w-full h-full relative overflow-hidden bg-slate-950";
            stage.appendChild(canvas);

            if (type === 'humoral') {
                for (let i = 0; i < 8; i++) {
                    const bac = document.createElement('div');
                    bac.innerHTML = "🦠";
                    bac.className = "absolute text-xl animate-bounce";
                    bac.style.left = Math.random() * 80 + 10 + "%";
                    bac.style.top = Math.random() * 60 + 20 + "%";
                    canvas.appendChild(bac);

                    setTimeout(() => {
                        const y = document.createElement('div');
                        y.innerHTML = "Y";
                        y.className = "absolute text-sky-400 font-bold transition-all duration-1000";
                        y.style.left = "50%";
                        y.style.top = "90%";
                        canvas.appendChild(y);
                        
                        setTimeout(() => {
                            y.style.left = bac.style.left;
                            y.style.top = bac.style.top;
                            setTimeout(() => {
                                bac.style.opacity = "0.3";
                                bac.innerHTML = "🔗";
                            }, 1000);
                        }, 100);
                    }, i * 400);
                }
                document.getElementById('immuno-phrase-model-text').innerHTML = "La <span class='kw-prot'>réponse humorale</span> fait intervenir les <span class='kw-mut'>Lymphocytes B</span> qui se différencient en plasmocytes. Ces derniers sécrètent des <span class='kw-prot'>anticorps</span> spécifiques (Y) qui neutralisent les antigènes circulants en formant des complexes immuns.";
            } else {
                const cell = document.createElement('div');
                cell.className = "absolute w-24 h-24 rounded-full border-2 border-pink-500/30 bg-pink-500/5 flex items-center justify-center left-1/4 top-1/3 transition-all duration-1000";
                cell.innerHTML = "🦠";
                canvas.appendChild(cell);

                const ltc = document.createElement('div');
                ltc.className = "absolute w-20 h-20 rounded-full border-2 border-rose-500 bg-rose-950/20 flex items-center justify-center right-1/4 top-1/3 transition-all duration-1000";
                ltc.innerHTML = "⚔️ LTc";
                ltc.style.fontSize = "10px";
                ltc.style.fontWeight = "bold";
                canvas.appendChild(ltc);

                setTimeout(() => {
                    ltc.style.right = "45%";
                    setTimeout(() => {
                        const hole = document.createElement('div');
                        hole.className = "absolute w-4 h-4 bg-rose-500 rounded-full animate-ping";
                        hole.style.left = "35%";
                        hole.style.top = "45%";
                        canvas.appendChild(hole);
                        cell.style.filter = "grayscale(1) blur(2px)";
                        cell.innerHTML = "💀";
                    }, 1000);
                }, 500);
                document.getElementById('immuno-phrase-model-text').innerHTML = "La <span class='kw-prot'>réponse cellulaire</span> est assurée par les <span class='kw-prot'>Lymphocytes T cytotoxiques (LTc)</span>. Ils reconnaissent le complexe CMH-Peptide viral et libèrent des substances (perforines/granzymes) provoquant la <span class='kw-mut'>cytolyse</span> ou l'apoptose de la cellule cible.";
            }
        }

        const IMMUNO_QUESTIONS = [
            {
                q: "Pourquoi un individu de groupe sanguin O- est-il considéré comme un 'Donneur Universel' de globules rouges ?",
                context: "Génétique des groupes sanguins et Immunologie.",
                options: [
                    { t: "Parce que ses hématies ne possèdent aucun antigène (A, B ou Rh) à leur surface, évitant ainsi d'être reconnues et attaquées par les anticorps du receveur.", correct: true },
                    { t: "Parce qu'il possède tous les anticorps du monde dans son plasma.", correct: false, memo: "Faux : le donneur apporte ses hématies, pas ses anticorps." },
                    { t: "Parce que son sang est plus fluide et se mélange mieux.", correct: false, memo: "La fluidité n'a rien à voir avec la compatibilité." },
                    { t: "Parce que le gène O est dominant.", correct: false, memo: "L'allèle O est récessif." }
                ]
            },
            {
                q: "Quel est le rôle exact des Interleukines (comme l'IL-2) sécrétées par les Lymphocytes T4 ?",
                context: "Coopération cellulaire immunitaire.",
                options: [
                    { t: "Elles agissent comme des messagers chimiques qui stimulent la prolifération et la différenciation des LB et des LT8.", correct: true },
                    { t: "Elles percent des trous dans la membrane des bactéries.", correct: false, memo: "C'est le rôle de la perforine." },
                    { t: "Elles transportent l'oxygène.", correct: false, memo: "C'est le rôle de l'hémoglobine." },
                    { t: "Elles bloquent la réplication du VIH.", correct: false, memo: "Non, le VIH détruit justement les LT4." }
                ]
            }
        ];

        function initImmunoChallengeSetup() {
            document.getElementById('immuno-challenge-setup-screen').style.display = "block";
            document.getElementById('immuno-challenge-active-screen').style.display = "none";
        }

        function startImmunoChallenge() {
            immunoChallengeScore = 0;
            immunoChallengeLives = 3;
            immunoChallengeIndex = 0;
            document.getElementById('immuno-challenge-setup-screen').style.display = "none";
            document.getElementById('immuno-challenge-active-screen').style.display = "block";
            showImmunoQuestion();
        }

        function showImmunoQuestion() {
            if (immunoChallengeIndex >= IMMUNO_QUESTIONS.length) {
                endImmunoChallenge(true);
                return;
            }
            const qData = IMMUNO_QUESTIONS[immunoChallengeIndex];
            const container = document.getElementById('immuno-challenge-active-screen');
            let hearts = "";
            for(let i=0; i<3; i++) hearts += i < immunoChallengeLives ? "❤️" : "🖤";
            container.innerHTML = `
                <div class="dashboard-box space-y-6">
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-black text-pink-400">DÉFI IMMUNO : QUESTION ${immunoChallengeIndex + 1}/${IMMUNO_QUESTIONS.length}</span>
                        <div class="flex gap-4">
                            <span class="text-sm">${hearts}</span>
                            <span class="text-sm font-bold text-white">${immunoChallengeScore} PTS</span>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold text-white leading-tight">${qData.q}</h3>
                    <div class="grid grid-cols-1 gap-3" id="immuno-opt-container"></div>
                </div>
            `;
            const optContainer = document.getElementById('immuno-opt-container');
            qData.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = "p-4 rounded-xl text-left text-xs border border-slate-800 bg-slate-950/60 hover:border-pink-500/50 hover:bg-pink-950/10 transition-all text-slate-200 font-medium leading-relaxed";
                btn.innerHTML = opt.t;
                btn.onclick = () => checkImmunoAnswer(opt);
                optContainer.appendChild(btn);
            });
        }

        function checkImmunoAnswer(opt) {
            if (opt.correct) {
                showSvtToast("🏆 EXCELLENT ! Rigueur immunologique parfaite.", "success");
                immunoChallengeScore += 500;
                immunoChallengeIndex++;
                showImmunoQuestion();
            } else {
                immunoChallengeLives--;
                showSvtToast(`❌ ERREUR : ${opt.memo}`, "error");
                if (immunoChallengeLives <= 0) endImmunoChallenge(false);
                else showImmunoQuestion();
            }
        }

        function endImmunoChallenge(success) {
            const container = document.getElementById('immuno-challenge-active-screen');
            const grade = 14 + (success ? immunoChallengeLives * 2 : -6);
            container.innerHTML = `
                <div class="dashboard-box text-center space-y-6 p-10">
                    <div class="text-6xl">${success ? '🏆' : '💀'}</div>
                    <h3 class="text-2xl font-bold text-white">${success ? 'IMMUNOLOGISTE CONFIRMÉ !' : 'DÉFENSES SUBMERGÉES...'}</h3>
                    <div class="text-4xl font-black text-pink-400">${Math.max(0, grade)} / 20</div>
                    <button onclick="startImmunoChallenge()" class="btn-lab btn-lab-purple px-6 py-2 rounded-xl">Réessayer</button>
                </div>
            `;
            if (success) triggerConfetti();
            saveMasteryScore('immuno', Math.max(0, grade));
        }

        function saveMasteryScore(labId, score) {
            let data = JSON.parse(localStorage.getItem('svt_mastery_data') || '{}');
            if (!data[labId] || score > data[labId]) {
                data[labId] = score;
                localStorage.setItem('svt_mastery_data', JSON.stringify(data));
            }
            updateMasteryBadges();
        }

        function openMasteryDashboard() {
            const modal = document.getElementById('mastery-dashboard-modal');
            modal.classList.remove('hidden');

            const data = JSON.parse(localStorage.getItem('svt_mastery_data') || '{}');
            
            // Calculate metrics
            let totalPossibleGrade = 6 * 20; // 6 labs (including sub-labs), 20 pts max each
            let currentTotal = 0;
            let defisCount = 0;
            let badgesCount = 0;

            const labData = [
                { id: 'genetics', name: 'Génétique Moléculaire', icon: '🧬', color: 'blue' },
                { id: 'mendel', name: 'Génétique Mendelienne', icon: '🐾', color: 'emerald' },
                { id: 'atp', name: 'ATP & Muscle', icon: '⚡', color: 'rose' },
                { id: 'geology', name: 'Géologie (Métamorphism)', icon: '⛰️', color: 'amber' },
                { id: 'water', name: 'Pollution des Eaux', icon: '💧', color: 'sky' },
                { id: 'immuno', name: 'Immunologie', icon: '🛡️', color: 'purple' }
            ];

            const grid = document.getElementById('dashboard-labs-grid');
            grid.innerHTML = "";

            labData.forEach(lab => {
                let grade = data[lab.id] || 0;
                currentTotal += grade;
                if (grade > 0) defisCount++;
                if (grade >= 16) badgesCount++;

                let progress = (grade / 20) * 100;
                
                const card = document.createElement('div');
                card.className = "bg-slate-800/20 border border-slate-800 p-4 rounded-2xl flex flex-col gap-3";
                card.innerHTML = `
                    <div class="flex justify-between items-start">
                        <div class="flex items-center gap-2">
                            <span class="text-xl">${lab.icon}</span>
                            <span class="text-[11px] font-bold text-white">${lab.name}</span>
                        </div>
                        <span class="text-[9px] font-black ${grade >= 16 ? 'text-yellow-500' : 'text-slate-500'} uppercase">${grade >= 16 ? 'Maître' : 'En Apprentissage'}</span>
                    </div>
                    <div class="space-y-1">
                        <div class="flex justify-between text-[9px] font-bold text-slate-500 uppercase">
                            <span>Note: ${grade} / 20</span>
                            <span>${Math.round(progress)}%</span>
                        </div>
                        <div class="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                            <div class="h-full bg-${lab.color}-500 transition-all duration-1000" style="width: ${progress}%"></div>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });

            // Update main stats
            document.getElementById('dashboard-defis-count').innerText = `${defisCount} / ${labData.length}`;
            document.getElementById('dashboard-badges-count').innerText = badgesCount;
            document.getElementById('dashboard-total-score').innerText = `${currentTotal} / ${totalPossibleGrade} pts`;

            let readiness = Math.round((currentTotal / totalPossibleGrade) * 100);
            document.getElementById('dashboard-readiness-percent').innerText = `${readiness}%`;

            // Progress circle animation
            const circle = document.getElementById('dashboard-total-progress-circle');
            if (circle) {
                const radius = 58;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (readiness / 100) * circumference;
                circle.style.strokeDasharray = `${circumference}`;
                circle.style.strokeDashoffset = offset;
            }
        }

        function closeMasteryDashboard() {
            document.getElementById('mastery-dashboard-modal').classList.add('hidden');
        }

        function updateMasteryBadges() {
            const data = JSON.parse(localStorage.getItem('svt_mastery_data') || '{}');
            const labs = ['genetics', 'mendel', 'atp', 'geology', 'water', 'immuno'];
            
            labs.forEach(id => {
                const el = document.getElementById(`mastery-badge-${id}`);
                if (el) {
                    const score = data[id] !== undefined ? data[id] : 0;
                    el.innerText = `${score}/20`;
                    el.style.display = "inline-block";
                    // Color coding based on score
                    if (score >= 16) el.style.color = "#10b981";
                    else if (score >= 10) el.style.color = "#fbbf24";
                    else el.style.color = "#94a3b8";
                }
            });
        }

        function restartGeologyChallenge() {
            startGeologyChallenge();
        }


        // ==========================================
        // PHASE 3 : INTERACTIVE CODON WHEEL ENGINE
        // ==========================================
        let wheelSelectedBases = []; // up to 3 bases e.g. ['A', 'U', 'G']
        let wheelActiveAminoHighlight = null; // amino key filter e.g. 'Leu'

        const BASE_COLORS = {
            'A': '#14b8a6', // Teal
            'C': '#eab308', // Gold
            'G': '#f97316', // Orange
            'U': '#3b82f6'  // Blue
        };

        const AMINO_COLORS = {
            "Phe": "#38bdf8", "Leu": "#0ea5e9", "Ser": "#10b981", "Tyr": "#a855f7",
            "Cys": "#f43f5e", "Trp": "#ec4899", "Pro": "#f59e0b", "His": "#6366f1",
            "Gln": "#8b5cf6", "Arg": "#3b82f6", "Ile": "#06b6d4", "Met": "#eab308",
            "Thr": "#14b8a6", "Asn": "#22c55e", "Lys": "#6d28d9", "Val": "#0284c7",
            "Ala": "#4f46e5", "Asp": "#dc2626", "Glu": "#b91c1c", "Gly": "#16a34a",
            "Stop": "#64748b"
        };

        const CODON_WHEEL_MAP = {
            "UUU": "Phe", "UUC": "Phe", "UUA": "Leu", "UUG": "Leu",
            "UCU": "Ser", "UCC": "Ser", "UCA": "Ser", "UCG": "Ser",
            "UAU": "Tyr", "UAC": "Tyr", "UAA": "Stop", "UAG": "Stop",
            "UGU": "Cys", "UGC": "Cys", "UGA": "Stop", "UGG": "Trp",
            "CUU": "Leu", "CUC": "Leu", "CUA": "Leu", "CUG": "Leu",
            "CCU": "Pro", "CCC": "Pro", "CCA": "Pro", "CCG": "Pro",
            "CAU": "His", "CAC": "His", "CAA": "Gln", "CAG": "Gln",
            "CGU": "Arg", "CGC": "Arg", "CGA": "Arg", "CGG": "Arg",
            "AUU": "Ile", "AUC": "Ile", "AUA": "Ile", "AUG": "Met",
            "ACU": "Thr", "ACC": "Thr", "ACA": "Thr", "ACG": "Thr",
            "AAU": "Asn", "AAC": "Asn", "AAA": "Lys", "AAG": "Lys",
            "AGU": "Ser", "AGC": "Ser", "AGA": "Arg", "AGG": "Arg",
            "GUU": "Val", "GUC": "Val", "GUA": "Val", "GUG": "Val",
            "GCU": "Ala", "GCC": "Ala", "GCA": "Ala", "GCG": "Ala",
            "GAU": "Asp", "GAC": "Asp", "GAA": "Glu", "GAG": "Glu",
            "GGU": "Gly", "GGC": "Gly", "GGA": "Gly", "GGG": "Gly"
        };

        const AMINO_ACID_DETAILS = {
            "Phe": { name: "Phénylalanine", prop: "Hydrophobe, Aromatique", role: "Constituant essentiel des protéines, précurseur de la tyrosine.", symbol: "F" },
            "Leu": { name: "Leucine", prop: "Hydrophobe, Aliphatique", role: "Régulateur puissant de la synthèse protéique musculaire.", symbol: "L" },
            "Ser": { name: "Sérine", prop: "Polaire, non-chargée", role: "Site clé de phosphorylation dans la régulation enzymatique.", symbol: "S" },
            "Tyr": { name: "Tyrosine", prop: "Polaire, Aromatique", role: "Précurseur de la dopamine, de l'adrénaline et de la mélanine.", symbol: "Y" },
            "Cys": { name: "Cystéine", prop: "Polaire, Soufrée", role: "Forme des ponts disulfures stabilisant la structure 3D des protéines.", symbol: "C" },
            "Trp": { name: "Tryptophane", prop: "Hydrophobe, Aromatique", role: "Précurseur de la sérotonine (neuromédiateur régulateur).", symbol: "W" },
            "Pro": { name: "Proline", prop: "Hydrophobe, Cyclique", role: "Provoque des coudes rigides caractéristiques dans les hélices polypeptidiques.", symbol: "P" },
            "His": { name: "Histidine", prop: "Basique (Chargé +)", role: "Rôle catalytique majeur dans le site actif de nombreuses enzymes.", symbol: "H" },
            "Gln": { name: "Glutamine", prop: "Polaire, Amide", role: "Transporteur d'azote principal pour les cellules à division rapide.", symbol: "Q" },
            "Arg": { name: "Arginine", prop: "Très Basique (Chargé +)", role: "Intermédiaire du cycle de l'urée et stimulant immunitaire.", symbol: "R" },
            "Ile": { name: "Isoleucine", prop: "Hydrophobe, Aliphatique", role: "Production énergétique directe au niveau des muscles squelettiques.", symbol: "I" },
            "Met": { name: "Méthionine", prop: "Hydrophobe, Soufrée", role: "Codon d'initiation (AUG). Démarre TOUTES les traductions protéiques du vivant.", symbol: "M" },
            "Thr": { name: "Thréonine", prop: "Polaire, non-chargée", role: "Participe activement à la biosynthèse du collagène.", symbol: "T" },
            "Asn": { name: "Asparagine", prop: "Polaire, Amide", role: "Indispensable au développement et au bon fonctionnement neuronal.", symbol: "N" },
            "Lys": { name: "Lysine", prop: "Basique (Chargé +)", role: "Permet la fixation du calcium et l'élasticité des vaisseaux.", symbol: "K" },
            "Val": { name: "Valine", prop: "Hydrophobe, Aliphatique", role: "Restauration tissulaire et maintien de la coordination musculaire.", symbol: "V" },
            "Ala": { name: "Alanine", prop: "Hydrophobe, Aliphatique", role: "Source carbonée majeure lors d'un effort physique prolongé.", symbol: "A" },
            "Asp": { name: "Acide Aspartique", prop: "Acide (Chargé -)", role: "Neurotransmetteur excitateur du système nerveux central.", symbol: "D" },
            "Glu": { name: "Acide Glutamique", prop: "Acide (Chargé -)", role: "Principal neurotransmetteur excitateur du cerveau humain.", symbol: "E" },
            "Gly": { name: "Glycine", prop: "Non-polaire", role: "Plus petit acide aminé, offre une flexibilité structurale critique.", symbol: "G" },
            "Stop": { name: "Codon STOP (Terminaison)", prop: "Signal de fin de chaîne", role: "Provoque l'arrivée d'un facteur de libération et la dissociation immédiate du ribosome.", symbol: "🛑" }
        };

        function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
            // Adjust angle to match SVG coordinate layout (0 deg at top)
            const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
            return {
                x: centerX + (radius * Math.cos(angleInRadians)),
                y: centerY + (radius * Math.sin(angleInRadians))
            };
        }

        function getDonutSegmentPath(x, y, innerRadius, outerRadius, startAngle, endAngle) {
            const startValOuter = polarToCartesian(x, y, outerRadius, endAngle);
            const endValOuter = polarToCartesian(x, y, outerRadius, startAngle);
            const startValInner = polarToCartesian(x, y, innerRadius, endAngle);
            const endValInner = polarToCartesian(x, y, innerRadius, startAngle);

            const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

            return [
                "M", startValOuter.x, startValOuter.y,
                "A", outerRadius, outerRadius, 0, largeArcFlag, 0, endValOuter.x, endValOuter.y,
                "L", endValInner.x, endValInner.y,
                "A", innerRadius, innerRadius, 0, largeArcFlag, 1, startValInner.x, startValInner.y,
                "Z"
            ].join(" ");
        }

        function drawCodonWheelSVG() {
            const container = document.getElementById('codon-wheel-svg-container');
            if (!container) return;

            const cx = 200;
            const cy = 200;

            let svg = `<svg viewBox="0 0 400 400" style="width: 100%; height: 100%; max-width: 400px; max-height: 400px; background: transparent; display: block; margin: 0 auto;">`;

            // Draw core center plate
            svg += `<circle cx="${cx}" cy="${cy}" r="45" fill="#090d16" stroke="#334155" stroke-width="2" />`;

            const bases = ['U', 'C', 'A', 'G'];

            // RING 1: First base (radius 35 to 65)
            bases.forEach((b1, idx1) => {
                const startAngle = idx1 * 90;
                const endAngle = (idx1 + 1) * 90;

                let isDimmed = false;
                let isActive = false;

                if (wheelSelectedBases.length > 0) {
                    if (wheelSelectedBases[0] === b1) isActive = true;
                    else isDimmed = true;
                }

                if (wheelActiveAminoHighlight) {
                    const canCode = Object.keys(CODON_WHEEL_MAP).some(codon => codon[0] === b1 && CODON_WHEEL_MAP[codon] === wheelActiveAminoHighlight);
                    if (!canCode) isDimmed = true;
                    else if (wheelSelectedBases.length === 0) isActive = true;
                }

                const path = getDonutSegmentPath(cx, cy, 45, 85, startAngle, endAngle);
                const color = BASE_COLORS[b1];
                let cls = "codon-wheel-sector";
                if (isActive) cls += " active";
                if (isDimmed) cls += " dimmed";

                svg += `<path d="${path}" fill="${color}22" stroke="${color}" stroke-width="0.5" class="${cls}" style="color: ${color};" onclick="selectWheelBase(0, '${b1}')" />`;

                // Add base letters
                const midAngle = startAngle + 45;
                const textPos = polarToCartesian(cx, cy, 65, midAngle);
                const textCls = isDimmed ? "codon-wheel-text dimmed" : "codon-wheel-text";
                svg += `<text x="${textPos.x}" y="${textPos.y}" class="${textCls}" font-size="16" fill="${color}">${b1}</text>`;

                // RING 2: Second base (radius 65 to 95)
                bases.forEach((b2, idx2) => {
                    const startAngle2 = startAngle + idx2 * 22.5;
                    const endAngle2 = startAngle2 + 22.5;

                    let isDimmed2 = isDimmed;
                    let isActive2 = false;

                    if (wheelSelectedBases.length > 0) {
                        if (wheelSelectedBases[0] === b1 && wheelSelectedBases[1] === b2) isActive2 = true;
                        else if (wheelSelectedBases[0] !== b1 || (wheelSelectedBases.length > 1 && wheelSelectedBases[1] !== b2)) {
                            isDimmed2 = true;
                        }
                    }

                    if (wheelActiveAminoHighlight) {
                        const canCode = Object.keys(CODON_WHEEL_MAP).some(codon => codon[0] === b1 && codon[1] === b2 && CODON_WHEEL_MAP[codon] === wheelActiveAminoHighlight);
                        if (!canCode) isDimmed2 = true;
                        else if (wheelSelectedBases.length <= 1) isActive2 = true;
                    }

                    const path2 = getDonutSegmentPath(cx, cy, 85, 125, startAngle2, endAngle2);
                    const color2 = BASE_COLORS[b2];
                    let cls2 = "codon-wheel-sector";
                    if (isActive2) cls2 += " active";
                    if (isDimmed2) cls2 += " dimmed";

                    svg += `<path d="${path2}" fill="${color2}15" stroke="${color2}" stroke-width="0.3" class="${cls2}" style="color: ${color2};" onclick="selectWheelBase(1, '${b2}', '${b1}')" />`;

                    const midAngle2 = startAngle2 + 11.25;
                    const textPos2 = polarToCartesian(cx, cy, 105, midAngle2);
                    const textCls2 = isDimmed2 ? "codon-wheel-text dimmed" : "codon-wheel-text";
                    svg += `<text x="${textPos2.x}" y="${textPos2.y}" class="${textCls2}" font-size="10" fill="${color2}">${b2}</text>`;

                    // RING 3: Third base (radius 95 to 125)
                    bases.forEach((b3, idx3) => {
                        const startAngle3 = startAngle2 + idx3 * 5.625;
                        const endAngle3 = startAngle3 + 5.625;

                        let isDimmed3 = isDimmed2;
                        let isActive3 = false;

                        const codon = b1 + b2 + b3;
                        const amino = CODON_WHEEL_MAP[codon];

                        if (wheelSelectedBases.length > 0) {
                            if (wheelSelectedBases[0] === b1 && wheelSelectedBases[1] === b2 && wheelSelectedBases[2] === b3) isActive3 = true;
                            else if (wheelSelectedBases[0] !== b1 || wheelSelectedBases[1] !== b2 || (wheelSelectedBases.length > 2 && wheelSelectedBases[2] !== b3)) {
                                isDimmed3 = true;
                            }
                        }

                        if (wheelActiveAminoHighlight) {
                            if (amino !== wheelActiveAminoHighlight) isDimmed3 = true;
                            else isActive3 = true;
                        }

                        const path3 = getDonutSegmentPath(cx, cy, 125, 165, startAngle3, endAngle3);
                        const color3 = BASE_COLORS[b3];
                        let cls3 = "codon-wheel-sector";
                        if (isActive3) cls3 += " active";
                        if (isDimmed3) cls3 += " dimmed";

                        svg += `<path d="${path3}" fill="${color3}10" stroke="${color3}" stroke-width="0.2" class="${cls3}" style="color: ${color3};" onclick="selectWheelBase(2, '${b3}', '${b1}', '${b2}')" />`;

                        const midAngle3 = startAngle3 + 2.8125;
                        const textPos3 = polarToCartesian(cx, cy, 145, midAngle3);
                        const textCls3 = isDimmed3 ? "codon-wheel-text dimmed" : "codon-wheel-text";
                        svg += `<text x="${textPos3.x}" y="${textPos3.y}" class="${textCls3}" font-size="6" fill="${color3}">${b3}</text>`;
                    });
                });
            });

            // Group codon spans radially to draw beautiful outer amino acid badges
            const aminoSpans = {};
            let globalIdx = 0;
            bases.forEach(b1 => {
                bases.forEach(b2 => {
                    bases.forEach(b3 => {
                        const codon = b1 + b2 + b3;
                        const amino = CODON_WHEEL_MAP[codon];
                        const start = globalIdx * 5.625;
                        const end = (globalIdx + 1) * 5.625;

                        if (!aminoSpans[amino]) {
                            aminoSpans[amino] = [];
                        }
                        const list = aminoSpans[amino];
                        const last = list[list.length - 1];
                        if (last && Math.abs(last.endAngle - start) < 0.01) {
                            last.endAngle = end;
                        } else {
                            list.push({ startAngle: start, endAngle: end });
                        }
                        globalIdx++;
                    });
                });
            });

            // Draw amino acid borders and text markers on outer layer
            Object.keys(aminoSpans).forEach(amino => {
                const list = aminoSpans[amino];
                const color = AMINO_COLORS[amino] || "#94a3b8";

                list.forEach(span => {
                    let isDimmed = false;
                    let isActive = false;

                    if (wheelSelectedBases.length === 3) {
                        const currentCodon = wheelSelectedBases.join('');
                        if (CODON_WHEEL_MAP[currentCodon] === amino) isActive = true;
                        else isDimmed = true;
                    }
                    if (wheelActiveAminoHighlight) {
                        if (amino === wheelActiveAminoHighlight) isActive = true;
                        else isDimmed = true;
                    }

                    const borderPath = getDonutSegmentPath(cx, cy, 165, 168, span.startAngle, span.endAngle);
                    let arcCls = "codon-wheel-sector";
                    if (isActive) arcCls += " active";
                    if (isDimmed) arcCls += " dimmed";
                    svg += `<path d="${borderPath}" fill="${color}" stroke="none" class="${arcCls}" style="color: ${color};" />`;

                    const midAngle = (span.startAngle + span.endAngle) / 2;
                    const textPos = polarToCartesian(cx, cy, 185, midAngle);

                    let rotation = midAngle;
                    if (midAngle > 90 && midAngle < 270) {
                        rotation = midAngle - 180;
                    }

                    const labelCls = isDimmed ? "codon-wheel-text dimmed" : "codon-wheel-text";
                    const symbol = AMINO_ACID_DETAILS[amino]?.symbol || "";

                    svg += `<text x="${textPos.x}" y="${textPos.y}" transform="rotate(${rotation}, ${textPos.x}, ${textPos.y})" class="${labelCls}" font-size="9" fill="${color}" font-weight="900">${amino} (${symbol})</text>`;
                });
            });

            // Draw center code feedback
            if (wheelSelectedBases.length > 0) {
                const text = wheelSelectedBases.join('');
                svg += `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" font-size="14" font-weight="900" fill="#ffffff">${text}</text>`;
            } else {
                svg += `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" font-size="10" font-weight="900" fill="#64748b">CODON</text>`;
            }

            svg += `</svg>`;
            container.innerHTML = svg;
        }

        function selectWheelBase(ringIndex, base, p1, p2) {
            // Cancel active searches when directly choosing bases
            wheelActiveAminoHighlight = null;
            document.getElementById('wheel-amino-search').value = "";

            if (ringIndex === 0) {
                wheelSelectedBases = [base];
            } else if (ringIndex === 1) {
                wheelSelectedBases = [p1, base];
            } else if (ringIndex === 2) {
                wheelSelectedBases = [p1, p2, base];
            }

            drawCodonWheelSVG();
            updateCodonWheelReadout();
        }

        function updateCodonWheelReadout() {
            const b1 = wheelSelectedBases[0] || "-";
            const b2 = wheelSelectedBases[1] || "-";
            const b3 = wheelSelectedBases[2] || "-";

            const el1 = document.getElementById('wheel-base-1');
            const el2 = document.getElementById('wheel-base-2');
            const el3 = document.getElementById('wheel-base-3');

            el1.innerText = b1;
            el1.style.color = b1 !== "-" ? BASE_COLORS[b1] : "#64748b";
            el2.innerText = b2;
            el2.style.color = b2 !== "-" ? BASE_COLORS[b2] : "#64748b";
            el3.innerText = b3;
            el3.style.color = b3 !== "-" ? BASE_COLORS[b3] : "#64748b";

            if (wheelSelectedBases.length === 3) {
                const codon = wheelSelectedBases.join('');
                const amino = CODON_WHEEL_MAP[codon];
                showAminoAcidInfo(amino);
            } else {
                document.getElementById('wheel-no-selection-desc').style.display = "block";
                document.getElementById('wheel-selection-desc').style.display = "none";
            }
        }

        function showAminoAcidInfo(amino) {
            const details = AMINO_ACID_DETAILS[amino];
            if (!details) return;

            document.getElementById('wheel-no-selection-desc').style.display = "none";
            document.getElementById('wheel-selection-desc').style.display = "block";

            document.getElementById('wheel-amino-name').innerText = details.name + (amino === "Stop" ? "" : ` (${amino})`);
            document.getElementById('wheel-amino-prop').innerText = details.prop;
            document.getElementById('wheel-amino-symbol').innerText = details.symbol;
            document.getElementById('wheel-amino-role').innerText = details.role;

            const color = AMINO_COLORS[amino] || "#eab308";
            document.getElementById('wheel-info-banner-border').style.backgroundColor = color;
            document.getElementById('wheel-amino-symbol').style.color = color;
            document.getElementById('wheel-amino-symbol').style.borderColor = color + "40";
            document.getElementById('wheel-amino-symbol').style.backgroundColor = color + "10";
        }

        function highlightAminoAcidRedundancy() {
            const val = document.getElementById('wheel-amino-search').value;
            wheelActiveAminoHighlight = val || null;
            wheelSelectedBases = [];

            drawCodonWheelSVG();
            updateCodonWheelReadout();

            if (val) showAminoAcidInfo(val);
        }

        function resetCodonWheelSelection() {
            wheelSelectedBases = [];
            wheelActiveAminoHighlight = null;
            document.getElementById('wheel-amino-search').value = "";
            drawCodonWheelSVG();
            updateCodonWheelReadout();
        }

        function openCodonWheelModal() {
            document.getElementById('codon-wheel-modal').style.display = "flex";
            const select = document.getElementById('wheel-amino-search');
            if (select.options.length <= 1) {
                const keys = Object.keys(AMINO_ACID_DETAILS).sort((a, b) => AMINO_ACID_DETAILS[a].name.localeCompare(AMINO_ACID_DETAILS[b].name));
                keys.forEach(key => {
                    const opt = document.createElement('option');
                    opt.value = key;
                    opt.innerText = `${AMINO_ACID_DETAILS[key].name} (${AMINO_ACID_DETAILS[key].symbol})`;
                    select.appendChild(opt);
                });
            }
            resetCodonWheelSelection();
            drawCodonWheelSVG();
            updateCodonWheelReadout();
        }

        function closeCodonWheelModal() {
            document.getElementById('codon-wheel-modal').style.display = "none";
        }

        // Initialize badges on load
        window.addEventListener('load', () => {
            updateMasteryBadges();
        });
    