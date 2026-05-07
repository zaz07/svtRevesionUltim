const forgeronUnite1 = {
  unite: 1,
  titre: "Entraînement de Base Intensif (70 Questions)",
  questions: [
    // --- GLYCOLYSE ---
    {
      id: "f1_1", type: "classique",
      enonce: "Où se déroule la glycolyse dans la cellule ?",
      choix: { A: "Matrice mitochondriale", B: "Noyau", C: "Hyaloplasme", D: "Espace intermembranaire" },
      reponseCorrecte: "C",
      explication: "La glycolyse a lieu strictement dans le hyaloplasme (cytoplasme sans organites).",
      mnemotechnique: "Glyco(sucre) + Lyse(coupure) flotte dans l'eau du cytoplasme (hyaloplasme)."
    },
    {
      id: "f1_2", type: "vrai_faux",
      enonce: "La glycolyse nécessite obligatoirement la présence de dioxygène (O2).",
      choix: { A: "Vrai", B: "Faux" },
      reponseCorrecte: "B",
      explication: "La glycolyse est une étape anaérobie (sans O2). Elle est le point de départ commun à la respiration et la fermentation.",
      mnemotechnique: "La glycolyse est universelle : elle respire même sous l'eau (sans oxygène)."
    },
    {
      id: "f1_3", type: "classique",
      enonce: "Quel est le bilan en ATP de la glycolyse (pour une molécule de glucose) ?",
      choix: { A: "2 ATP", B: "4 ATP", C: "38 ATP", D: "0 ATP" },
      reponseCorrecte: "A",
      explication: "Bien qu'elle en consomme 2 et en produise 4, le bilan net (bénéfice) est de 2 ATP.",
      mnemotechnique: "Le péage de la glycolyse coûte 2 ATP, on en gagne 4, bénéfice = 2 dans la poche."
    },
    {
      id: "f1_4", type: "classique",
      enonce: "Le produit final de la glycolyse (à partir d'un glucose C6) est :",
      choix: { A: "2 Acétyl-CoA", B: "2 Acides lactiques", C: "2 Pyruvates (C3)", D: "6 molécules de CO2" },
      reponseCorrecte: "C",
      explication: "Le glucose (6 carbones) est scindé en deux molécules de pyruvate (3 carbones chacune).",
      mnemotechnique: "C6 (Glucose) coupé en deux = 2 x C3 (Pyruvate)."
    },
    {
      id: "f1_5", type: "classique",
      enonce: "Combien de transporteurs réduits (NADH,H+) sont produits lors de la glycolyse ?",
      choix: { A: "0", B: "2", C: "6", D: "10" },
      reponseCorrecte: "B",
      explication: "La déshydrogénation au cours de la glycolyse permet de réduire 2 NAD+ en 2 NADH,H+.",
      mnemotechnique: "La règle des 2 de la glycolyse : 2 Pyruvates, 2 ATP, 2 NADH,H+."
    },

    // --- MITOCHONDRIE & CYCLE DE KREBS ---
    {
      id: "f1_6", type: "classique",
      enonce: "Le cycle de Krebs a lieu exclusivement dans :",
      choix: { A: "Le hyaloplasme", B: "L'espace intermembranaire", C: "La crête mitochondriale", D: "La matrice mitochondriale" },
      reponseCorrecte: "D",
      explication: "Le cycle de Krebs est une suite de réactions de décarboxylation et déshydrogénation dans la matrice.",
      mnemotechnique: "Le Cycle tourne comme une roue dans la Matrice."
    },
    {
      id: "f1_7", type: "vrai_faux",
      enonce: "La membrane interne de la mitochondrie est lisse et imperméable.",
      choix: { A: "Vrai", B: "Faux" },
      reponseCorrecte: "B",
      explication: "Elle est très repliée (crêtes) pour augmenter sa surface, et imperméable aux protons (sauf via l'ATP synthase).",
      mnemotechnique: "La membrane interne est plissée comme un accordéon pour faire plus de musique (énergie)."
    },
    {
      id: "f1_8", type: "classique",
      enonce: "Avant d'entrer dans le cycle de Krebs, le pyruvate est transformé en :",
      choix: { A: "Acide citrique", B: "Acétyl-CoA", C: "Acide oxaloacétique", D: "Éthanol" },
      reponseCorrecte: "B",
      explication: "Le pyruvate subit une décarboxylation (perte de CO2) pour former l'Acétyl-CoA.",
      mnemotechnique: "Le Pyruvate (C3) perd un doigt (CO2) et devient un bras droit (Acétyl-CoA, C2) pour entrer dans le cycle."
    },
    {
      id: "f1_9", type: "classique",
      enonce: "Le cycle de Krebs libère de l'énergie principalement sous forme de :",
      choix: { A: "Chaleur pure", B: "Glucose", C: "Transporteurs réduits (NADH,H+ et FADH2)", D: "Graisses" },
      reponseCorrecte: "C",
      explication: "Bien qu'il produise 1 ATP par tour, sa fonction principale est de charger des transporteurs en électrons (pouvoir réducteur).",
      mnemotechnique: "Krebs est une usine de taxis : il charge un maximum de passagers (électrons) dans les taxis (NADH, FADH2)."
    },
    {
      id: "f1_10", type: "classique",
      enonce: "Combien de molécules de CO2 sont libérées par la dégradation complète d'UNE molécule de pyruvate dans la mitochondrie ?",
      choix: { A: "1", B: "2", C: "3", D: "6" },
      reponseCorrecte: "C",
      explication: "Le pyruvate (3 carbones) est totalement oxydé : 1 CO2 lors de la formation de l'acétyl-CoA + 2 CO2 dans le cycle de Krebs = 3 CO2.",
      mnemotechnique: "Le Pyruvate a 3 atomes de Carbone, il crache donc 3 boules de fumée (CO2)."
    },

    // --- CHAÎNE RESPIRATOIRE ---
    {
      id: "f1_11", type: "classique",
      enonce: "La chaîne respiratoire est localisée au niveau de :",
      choix: { A: "La matrice mitochondriale", B: "La membrane externe", C: "La membrane interne mitochondriale", D: "Le hyaloplasme" },
      reponseCorrecte: "C",
      explication: "Elle est composée de protéines complexes insérées dans la membrane interne (crêtes).",
      mnemotechnique: "La chaîne (des crêtes) est accrochée au mur intérieur de la mitochondrie."
    },
    {
      id: "f1_12", type: "classique",
      enonce: "Quel est le rôle de la chaîne respiratoire ?",
      choix: { A: "Oxyder le glucose directement", B: "Réoxyder les transporteurs (NADH,H+ et FADH2)", C: "Produire du CO2", D: "Synthétiser du glucose" },
      reponseCorrecte: "B",
      explication: "Elle arrache les électrons des transporteurs (qui redeviennent NAD+ et FAD) pour générer un flux d'énergie.",
      mnemotechnique: "La chaîne est le pressing de la cellule : elle nettoie (réoxyde) les taxis (NADH) pour qu'ils retournent bosser."
    },
    {
      id: "f1_13", type: "classique",
      enonce: "Qui est l'accepteur final des électrons dans la chaîne respiratoire ?",
      choix: { A: "Le dioxygène (O2)", B: "Le NAD+", C: "L'ATP Synthase", D: "L'eau (H2O)" },
      reponseCorrecte: "A",
      explication: "L'O2 capte les électrons en fin de chaîne et s'associe aux protons pour former de l'eau (H2O).",
      mnemotechnique: "L'Oxygène est la poubelle finale qui ramasse les électrons usés pour les jeter sous forme d'eau."
    },
    {
      id: "f1_14", type: "vrai_faux",
      enonce: "Les protons (H+) sont pompés de la matrice vers l'espace intermembranaire, créant un gradient.",
      choix: { A: "Vrai", B: "Faux" },
      reponseCorrecte: "A",
      explication: "L'énergie des électrons est utilisée par les complexes protéiques pour expulser les protons contre leur gradient, acidifiant l'espace intermembranaire.",
      mnemotechnique: "Les protons sont chassés dehors (espace intermembranaire) et s'entassent derrière la porte."
    },
    {
      id: "f1_15", type: "classique",
      enonce: "Comment s'appelle l'enzyme qui produit massivement l'ATP grâce au retour des protons ?",
      choix: { A: "L'ATP Réductase", B: "La Sphère pédonculée (ATP Synthase)", C: "L'Hélicase", D: "La Myosine" },
      reponseCorrecte: "B",
      explication: "Le flux de protons rentrant dans la matrice fait tourner l'ATP synthase comme une turbine pour phosphoryler l'ADP en ATP.",
      mnemotechnique: "L'ATP Synthase est un moulin à eau (protons) qui moud des grains (ADP) pour faire de la farine (ATP)."
    },

    // --- FERMENTATION & BILANS ---
    {
      id: "f1_16", type: "vrai_faux",
      enonce: "La fermentation lactique produit un dégagement de dioxyde de carbone (CO2).",
      choix: { A: "Vrai", B: "Faux" },
      reponseCorrecte: "B",
      explication: "Contrairement à la fermentation alcoolique, la lactique ne dégage pas de CO2 (le pyruvate C3 donne de l'acide lactique C3).",
      mnemotechnique: "Le lait (lactique) ne fait pas de bulles (pas de CO2), la bière (alcoolique) fait des bulles."
    },
    {
      id: "f1_17", type: "classique",
      enonce: "Quel est le bilan énergétique global de la respiration à partir d'un Glucose ?",
      choix: { A: "2 ATP", B: "15 ATP", C: "38 ATP", D: "36 ATP" },
      reponseCorrecte: "C",
      explication: "2 (Glycolyse) + 2 (Krebs) + 34 (Chaîne respiratoire) = 38 ATP.",
      mnemotechnique: "Respirer à pleins poumons donne le rendement maximum : 38."
    },
    {
      id: "f1_18", type: "classique",
      enonce: "Laquelle de ces réactions est qualifiée de dégradation INCOMPLÈTE de la matière organique ?",
      choix: { A: "La respiration", B: "La fermentation", C: "L'oxydation totale", D: "La glycolyse" },
      reponseCorrecte: "B",
      explication: "L'acide lactique ou l'éthanol produits contiennent encore beaucoup d'énergie potentielle non extraite.",
      mnemotechnique: "La fermentation fait le travail à moitié : elle laisse des déchets toxiques remplis d'énergie."
    },
    {
      id: "f1_19", type: "classique",
      enonce: "Où se déroule la fermentation dans la cellule ?",
      choix: { A: "Hyaloplasme", B: "Mitochondrie", C: "Noyau", D: "Espace intermembranaire" },
      reponseCorrecte: "A",
      explication: "Tout comme la glycolyse qui la précède, elle a lieu dans le hyaloplasme car elle n'utilise pas la mitochondrie.",
      mnemotechnique: "Sans O2, on reste bloqué à l'entrée (hyaloplasme), on ne peut pas entrer dans le VIP (mitochondrie)."
    },
    {
      id: "f1_20", type: "classique",
      enonce: "Pour réoxyder 1 NADH,H+ au niveau de la chaîne respiratoire, combien d'ATP sont formés ?",
      choix: { A: "1 ATP", B: "2 ATP", C: "3 ATP", D: "38 ATP" },
      reponseCorrecte: "C",
      explication: "1 NADH,H+ produit théoriquement 3 ATP (tandis qu'1 FADH2 produit 2 ATP).",
      mnemotechnique: "Le taxi VIP (NADH) paye 3 billets, le taxi standard (FADH2) paye 2 billets."
    },

    // --- LE MUSCLE : ENREGISTREMENTS ---
    {
      id: "f1_21", type: "classique",
      enonce: "L'intensité minimale d'excitation provoquant une secousse musculaire s'appelle :",
      choix: { A: "La contraction", B: "Le tétanos", C: "La chronaxie", D: "La rhéobase" },
      reponseCorrecte: "D",
      explication: "C'est le seuil d'excitabilité en dessous duquel le muscle ne réagit pas.",
      mnemotechnique: "La RHÉOBASE est la BASE pour réveiller le muscle."
    },
    {
      id: "f1_22", type: "classique",
      enonce: "Une secousse musculaire isolée comprend 3 phases dans l'ordre :",
      choix: { A: "Latence, relâchement, contraction", B: "Latence, contraction, relâchement", C: "Contraction, latence, relâchement", D: "Relâchement, contraction, latence" },
      reponseCorrecte: "B",
      explication: "Le muscle attend (latence), se tend (contraction) puis se détend (relâchement).",
      mnemotechnique: "L-C-R : Le Cerveau Réfléchit (Latence, Contraction, Relâchement)."
    },
    {
      id: "f1_23", type: "classique",
      enonce: "Le phénomène d'augmentation de l'amplitude de la secousse en augmentant l'intensité s'appelle :",
      choix: { A: "La fatigue", B: "Le tétanos", C: "Le recrutement (sommation spatiale)", D: "La sommation temporelle" },
      reponseCorrecte: "C",
      explication: "Plus l'intensité est forte, plus le nombre de fibres musculaires stimulées (recrutées) augmente.",
      mnemotechnique: "Comme l'armée : on RECRUTE de plus en plus de soldats (fibres) pour taper plus fort."
    },
    {
      id: "f1_24", type: "classique",
      enonce: "Un tétanos imparfait est obtenu si la 2ème excitation survient pendant :",
      choix: { A: "La phase de latence", B: "La phase de contraction", C: "La phase de relâchement", D: "Avant la première excitation" },
      reponseCorrecte: "C",
      explication: "Le muscle a commencé à se relâcher avant d'être à nouveau contracté, formant des oscillations sur le myogramme.",
      mnemotechnique: "Imparfait = le muscle a eu le temps de trébucher (relâchement) avant de repartir."
    },
    {
      id: "f1_25", type: "classique",
      enonce: "Un tétanos parfait est obtenu si les excitations sont très rapprochées, la 2ème survenant pendant :",
      choix: { A: "Le relâchement", B: "La phase de contraction", C: "La latence", D: "Le repos" },
      reponseCorrecte: "B",
      explication: "Les secousses fusionnent complètement, formant un plateau lisse et continu car le relâchement n'a pas le temps de commencer.",
      mnemotechnique: "Parfait = le plateau est lisse comme une table, contraction sur contraction."
    },
    {
      id: "f1_26", type: "vrai_faux",
      enonce: "Sur un myogramme, la fatigue musculaire se traduit par une diminution de l'amplitude et un allongement de la phase de relâchement.",
      choix: { A: "Vrai", B: "Faux" },
      reponseCorrecte: "A",
      explication: "Le muscle fatigué se contracte moins fort et met beaucoup plus de temps à se détendre (accumulation d'acide lactique).",
      mnemotechnique: "Fatigué = le muscle est faible (petite amplitude) et paresseux pour s'étirer (relâchement long)."
    },

    // --- LE MUSCLE : THERMIQUE & STRUCTURE ---
    {
      id: "f1_27", type: "classique",
      enonce: "La chaleur initiale, dégagée pendant la secousse musculaire, est liée à :",
      choix: { A: "La respiration aérobie", B: "Les voies métaboliques anaérobies (Phosphocréatine, Fermentation)", C: "La transpiration", D: "Le cycle de Krebs" },
      reponseCorrecte: "B",
      explication: "C'est une libération d'énergie rapide sans oxygène.",
      mnemotechnique: "Chaleur initiale = allumette craquée vite fait dans le noir (sans oxygène)."
    },
    {
      id: "f1_28", type: "classique",
      enonce: "La chaleur retardée, dégagée lentement après la secousse, correspond à :",
      choix: { A: "La respiration cellulaire (voies aérobies)", B: "La fermentation lactique", C: "L'hydrolyse rapide de l'ATP", D: "La destruction du muscle" },
      reponseCorrecte: "A",
      explication: "La respiration est un processus lent qui permet de reconstituer les réserves de glycogène et métaboliser l'acide lactique.",
      mnemotechnique: "Chaleur retardée = le radiateur (mitochondrie) qui chauffe doucement mais longtemps."
    },
    {
      id: "f1_29", type: "classique",
      enonce: "L'unité structurale et fonctionnelle de la myofibrille est :",
      choix: { A: "Le sarcoplasme", B: "La strie Z", C: "Le sarcomère", D: "Le myofilament" },
      reponseCorrecte: "C",
      explication: "Le sarcomère est la portion comprise entre deux stries Z successives. C'est lui qui se raccourcit.",
      mnemotechnique: "Sarcomère est le MÈTRE-ruban du muscle (l'unité de mesure de la contraction)."
    },
    {
      id: "f1_30", type: "vrai_faux",
      enonce: "Lors de la contraction, la bande sombre (Bande A) garde une longueur constante.",
      choix: { A: "Vrai", B: "Faux" },
      reponseCorrecte: "A",
      explication: "La bande sombre est constituée des filaments épais de myosine qui ne changent pas de longueur. Ce sont les filaments d'actine qui glissent.",
      mnemotechnique: "Bande A (Anisotrope) = Attend (longueur constante)."
    },
    {
      id: "f1_31", type: "classique",
      enonce: "De quoi est constituée la bande claire (Bande I) du sarcomère ?",
      choix: { A: "Uniquement d'Actine", B: "Uniquement de Myosine", C: "D'Actine et Myosine superposées", D: "De collagène" },
      reponseCorrecte: "A",
      explication: "La lumière passe plus facilement à travers l'actine (filaments fins), d'où son aspect clair (Isotrope).",
      mnemotechnique: "I (Clair) = fIn (Actine). A (Sombre) = épAis (Myosine)."
    },
    {
      id: "f1_32", type: "classique",
      enonce: "Au milieu de la bande sombre (A) se trouve une zone plus claire appelée :",
      choix: { A: "Strie Z", B: "Bande I", C: "Zone H", D: "Ligne M" },
      reponseCorrecte: "C",
      explication: "La zone H correspond à l'endroit où il n'y a QUE de la myosine (pas de chevauchement avec l'actine). Elle disparaît lors de la contraction.",
      mnemotechnique: "La zone H comme un 'H' : l'espace vide au milieu du pont."
    },

    // --- LE MUSCLE : MÉCANISME & RÉGÉNÉRATION ATP ---
    {
      id: "f1_33", type: "classique",
      enonce: "Quel organite musculaire stocke et libère les ions Calcium (Ca2+) ?",
      choix: { A: "La mitochondrie", B: "L'appareil de Golgi", C: "Le réticulum sarcoplasmique", D: "Le noyau" },
      reponseCorrecte: "C",
      explication: "Suite à l'influx nerveux, ce réticulum s'ouvre pour inonder le sarcoplasme de Ca2+.",
      mnemotechnique: "Le Réticulum est le Réservoir de Calcium."
    },
    {
      id: "f1_34", type: "classique",
      enonce: "Sur quelle protéine se fixe le Ca2+ pour initier la contraction ?",
      choix: { A: "L'actine", B: "La myosine", C: "La troponine", D: "L'ATP" },
      reponseCorrecte: "C",
      explication: "En se fixant sur la troponine, le Ca2+ déplace la tropomyosine, démasquant ainsi les sites de fixation pour les têtes de myosine.",
      mnemotechnique: "La Troponine est le Cadenas, le Ca2+ est la Clé."
    },
    {
      id: "f1_35", type: "classique",
      enonce: "Lors de la formation des ponts actomyosine, la tête de myosine pivote. Qu'est-ce qui provoque ce pivotement ?",
      choix: { A: "La libération d'ADP et Pi", B: "La fixation d'un nouvel ATP", C: "Le retrait du Ca2+", D: "La chaleur retardée" },
      reponseCorrecte: "A",
      explication: "La tête de myosine accrochée relâche l'ADP et le phosphate inorganique (Pi), ce qui libère l'énergie mécanique du pivotement.",
      mnemotechnique: "Jeter ses bagages (ADP+Pi) permet de se pencher (pivotement)."
    },
    {
      id: "f1_36", type: "classique",
      enonce: "Que permet la fixation d'une NOUVELLE molécule d'ATP sur la tête de myosine ?",
      choix: { A: "La contraction", B: "Le pivotement", C: "Le détachement de la tête de myosine (relâchement)", D: "La destruction de l'actine" },
      reponseCorrecte: "C",
      explication: "Sans nouvel ATP, la myosine reste accrochée à l'actine (rigidité cadavérique). L'ATP est requis pour rompre le pont actomyosine.",
      mnemotechnique: "L'ATP est le ticket de sortie pour détacher les wagons."
    },
    {
      id: "f1_37", type: "vrai_faux",
      enonce: "La rigidité cadavérique est due à l'absence de production d'ATP après la mort.",
      choix: { A: "Vrai", B: "Faux" },
      reponseCorrecte: "A",
      explication: "Puisque l'ATP est nécessaire pour DETACHER la myosine de l'actine, l'épuisement d'ATP laisse le muscle bloqué en état contracté.",
      mnemotechnique: "Pas de ticket (ATP) = coincé dans le manège."
    },
    {
      id: "f1_38", type: "classique",
      enonce: "Quelle voie de régénération de l'ATP est 'anaérobie alactique' (sans O2, sans acide lactique) ?",
      choix: { A: "La respiration", B: "La fermentation", C: "La voie de la phosphocréatine", D: "La lipolyse" },
      reponseCorrecte: "C",
      explication: "La phosphocréatine donne très vite son phosphate à l'ADP. Elle est utilisée pour les efforts explosifs de quelques secondes.",
      mnemotechnique: "Créatine = Énergie propre (alactique) mais très courte (éclair)."
    },
    {
      id: "f1_39", type: "classique",
      enonce: "La voie anaérobie lactique est stimulée lors :",
      choix: { A: "D'efforts de très faible intensité", B: "D'efforts explosifs de 2 secondes", C: "D'efforts intenses de moyenne durée (ex: sprint de 400m)", D: "Pendant le sommeil" },
      reponseCorrecte: "C",
      explication: "Elle permet de fournir de l'ATP rapidement sans oxygène, mais l'accumulation d'acide lactique provoque la fatigue et bloque la contraction (crampes).",
      mnemotechnique: "Lactique = Acide = Brûlure musculaire au bout de 30 secondes."
    },
    {
      id: "f1_40", type: "classique",
      enonce: "Pour un marathon (effort long et modéré), la fibre musculaire va prioritairement utiliser :",
      choix: { A: "La phosphocréatine", B: "La fermentation lactique", C: "La respiration cellulaire (aérobie)", D: "La chaleur initiale" },
      reponseCorrecte: "C",
      explication: "C'est la seule voie capable de fournir un flux constant et très rentable (38 ATP) sur la durée, en présence d'oxygène.",
      mnemotechnique: "Marathon = Respiration de fond (aérobie)."
    },

    // --- REVISION EN RAFALE (Détails et Exceptions) ---
    {
      id: "f1_41", type: "vrai_faux",
      enonce: "L'ATP est constitué d'une base azotée (Adénine), d'un sucre (Ribose) et de trois groupements phosphates.",
      choix: { A: "Vrai", B: "Faux" },
      reponseCorrecte: "A",
      explication: "Adénosine Tri-Phosphate. L'énergie est stockée dans les liaisons riches entre les phosphates.",
      mnemotechnique: "ATP = A (Adénine) T (Trois) P (Phosphates)."
    },
    {
      id: "f1_42", type: "classique",
      enonce: "Comment s'appelle l'enzyme responsable de l'hydrolyse de l'ATP sur la tête de myosine ?",
      choix: { A: "La kinase", B: "L'ATPase", C: "La polymérase", D: "La pepsine" },
      reponseCorrecte: "B",
      explication: "La tête de myosine possède une activité enzymatique ATPase qui coupe l'ATP en ADP + Pi, libérant l'énergie.",
      mnemotechnique: "Le suffixe -ase signifie 'enzyme qui coupe' (ATPase coupe l'ATP)."
    },
    {
      id: "f1_43", type: "classique",
      enonce: "Quelles structures du muscle permettent de propager l'influx nerveux jusqu'au réticulum sarcoplasmique en profondeur ?",
      choix: { A: "Les crêtes mitochondriales", B: "Les tubules transverses (Système T)", C: "Les axones moteurs", D: "Le sarcolemme" },
      reponseCorrecte: "B",
      explication: "Le système de tubules T s'enfonce dans la fibre pour que l'excitation atteigne rapidement tous les sarcomères.",
      mnemotechnique: "Les tubules T font un Tunnel dans le muscle."
    },
    {
      id: "f1_44", type: "classique",
      enonce: "La décarboxylation oxydative du pyruvate se fait dans :",
      choix: { A: "Le cytoplasme", B: "La membrane externe mitochondriale", C: "La matrice mitochondriale", D: "Le sang" },
      reponseCorrecte: "C",
      explication: "C'est la réaction de préparation (Pyruvate -> Acétyl-CoA) qui a lieu dans la matrice avant le cycle de Krebs.",
      mnemotechnique: "On enlève le manteau (le CO2) dans l'entrée de la maison (la Matrice)."
    },
    {
      id: "f1_45", type: "classique",
      enonce: "Quel est le donneur primaire d'électrons dans la chaîne respiratoire ?",
      choix: { A: "L'eau", B: "L'ATP", C: "Le NADH,H+ (et FADH2)", D: "Le glucose" },
      reponseCorrecte: "C",
      explication: "Les transporteurs réduits cèdent leurs électrons au premier complexe de la chaîne.",
      mnemotechnique: "Les taxis (NADH) débarquent leurs passagers (électrons) au premier arrêt de la chaîne."
    },
    {
      id: "f1_46", type: "vrai_faux",
      enonce: "Les électrons perdent de l'énergie au fur et à mesure qu'ils passent d'un complexe à l'autre dans la chaîne respiratoire.",
      choix: { A: "Vrai", B: "Faux" },
      reponseCorrecte: "A",
      explication: "Cette énergie perdue par les électrons est justement celle qui sert à pomper les protons dans l'espace intermembranaire.",
      mnemotechnique: "Comme une balle qui rebondit les marches d'un escalier, elle perd son énergie à chaque marche."
    },
    {
      id: "f1_47", type: "classique",
      enonce: "Quel complexe protéique de la chaîne respiratoire réduit l'oxygène en eau ?",
      choix: { A: "Le complexe I", B: "Le complexe III", C: "Le complexe IV (Cytochrome c oxydase)", D: "L'ATP synthase" },
      reponseCorrecte: "C",
      explication: "C'est le dernier complexe de la chaîne de transport des électrons avant l'ATP Synthase.",
      mnemotechnique: "Le complexe IV ferme la porte en jetant l'eau."
    },
    {
      id: "f1_48", type: "classique",
      enonce: "Quelle molécule permet le transfert du groupe phosphate d'un ADP à un autre pour créer un ATP en cas d'urgence extrême (Voie de la myokinase) ?",
      choix: { A: "ADP + ADP -> ATP + AMP", B: "Glucose + O2", C: "Acide lactique", D: "NADH,H+" },
      reponseCorrecte: "A",
      explication: "La myokinase fusionne deux ADP pour créer un ATP et un AMP. C'est une réaction d'urgence.",
      mnemotechnique: "Myokinase = Myo(Muscle) Kinase(transfère phosphate) -> 2 ADP donnent 1 ATP."
    },
    {
      id: "f1_49", type: "vrai_faux",
      enonce: "La cellule musculaire squelettique est plurinucléée (plusieurs noyaux).",
      choix: { A: "Vrai", B: "Faux" },
      reponseCorrecte: "A",
      explication: "La fibre musculaire est une immense cellule résultant de la fusion de plusieurs cellules myoblastes embryonnaires.",
      mnemotechnique: "Le muscle est tellement long qu'il lui faut plusieurs cerveaux (noyaux) pour gérer l'espace."
    },
    {
      id: "f1_50", type: "classique",
      enonce: "Unité de base du muscle, la myofibrille présente une striation :",
      choix: { A: "Longitudinale (dans le sens de la longueur)", B: "Transversale (perpendiculaire à la longueur)", C: "Circulaire", D: "Absente" },
      reponseCorrecte: "B",
      explication: "L'alternance régulière des bandes sombres (A) et claires (I) crée cette striation transversale visible au microscope.",
      mnemotechnique: "Le muscle STRIÉ porte des rayures (stries) comme un code-barres."
    },
    {
      id: "u1_nat_2017_q1",
      type: "classique",
      enonce: "[Bac 2017 N] Le tétanos parfait est le résultat de la fusion de plusieurs secousses musculaires suite à une série d’excitations dont l’excitation suivante est appliquée :",
      choix: {
        A: "pendant la phase de contraction de la secousse due à l’excitation précédente.",
        B: "pendant la phase de relâchement de la secousse due à l’excitation précédente.",
        C: "à la fin de la secousse due à l’excitation précédente.",
        D: "pendant la phase de latence de la secousse due à l’excitation précédente."
      },
      reponseCorrecte: "A",
      explication: "Le tétanos parfait s'obtient par sommation temporelle complète lorsque la fréquence d'excitation est élevée, chaque stimulus survenant pendant la phase de contraction de la secousse précédente.",
      mnemotechnique: "Tétanos Parfait = Plateau continu et lisse. On excite pendant la Contraction !",
      source: "national_2017_N"
    },
    {
      id: "u1_nat_2017_q2",
      type: "classique",
      enonce: "[Bac 2017 N] Au cours de la contraction musculaire, on constate un raccourcissement :",
      choix: {
        A: "de la bande sombre et de la zone H.",
        B: "de la bande claire et de la zone H.",
        C: "des bandes sombres et claires sans changement de la zone H.",
        D: "des bandes sombres, des bandes claires et de la zone H."
      },
      reponseCorrecte: "B",
      explication: "Lors du glissement des filaments, les filaments épais de myosine (bande sombre A) restent intacts en longueur, tandis que les bandes claires (I) et la zone H diminuent de taille.",
      mnemotechnique: "Contraction = Bande claire (I) et Zone H rétrécissent. La bande sombre (A) reste stable !",
      source: "national_2017_N"
    },
    {
      id: "u1_nat_2017_q3",
      type: "classique",
      enonce: "[Bac 2017 N] La fermentation lactique :",
      choix: {
        A: "libère 4 molécules d’ATP à partir d’une seule molécule de glucose.",
        B: "comporte une phase commune avec la respiration qui est la glycolyse.",
        C: "produit un résidu organique sous forme de CO2.",
        D: "produit deux molécules d’ATP à partir d’un gradient H+ de part et d’autre de la membrane."
      },
      reponseCorrecte: "B",
      explication: "Tant la fermentation et la respiration commencent par la glycolyse anaérobie dans le hyaloplasme de la cellule.",
      mnemotechnique: "Glycolyse = Le tronc commun de la dégradation du glucose pour tout le monde.",
      source: "national_2017_N"
    },
    {
      id: "u1_nat_2017_q4",
      type: "classique",
      enonce: "[Bac 2017 N] Les réactions du cycle de Krebs :",
      choix: {
        A: "ne produisent pas d'énergie.",
        B: "libèrent le dioxyde de carbone.",
        C: "se déroulent au niveau de la membrane interne de la mitochondrie.",
        D: "sont communes entre la respiration et la fermentation."
      },
      reponseCorrecte: "B",
      explication: "Le cycle de Krebs est une suite de décarboxylations oxydatives dans la matrice mitochondriale qui rejette du CO2.",
      mnemotechnique: "Krebs tourne en crachant du CO2 (décarboxylations) dans la matrice !",
      source: "national_2017_N"
    },
    {
      id: "u1_nat_2018_q1",
      type: "classique",
      enonce: "[Bac 2018 N] La transformation d’une molécule de glucose en deux molécules d’acide pyruvique au niveau du hyaloplasme s’accompagne d’une :",
      choix: {
        A: "réduction de 2 NADH,H+ et de production de 4 ATP.",
        B: "oxydation de 2 NADH,H+ et de production de 4 ATP.",
        C: "oxydation de 2 NAD+ et de production de 2 ATP.",
        D: "réduction de 2 NAD+ et de production de 2 ATP (gain net)."
      },
      reponseCorrecte: "D",
      explication: "La glycolyse produit un gain net de 2 ATP (4 produits moins 2 consommés au départ) et réduit 2 NAD+ en 2 NADH,H+.",
      mnemotechnique: "Glycolyse bilan = 2 Pyruvates + 2 ATP nets + 2 NADH,H+ !",
      source: "national_2018_N"
    },
    {
      id: "u1_nat_2018_q2",
      type: "classique",
      enonce: "[Bac 2018 N] L’activité de la chaîne respiratoire conduit à une :",
      choix: {
        A: "augmentation de la concentration des protons dans la matrice.",
        B: "diminution de la concentration des protons dans la matrice.",
        C: "augmentation de la concentration des protons dans l’espace inter-membranaire.",
        D: "diminution de la concentration des protons dans l’espace inter-membranaire."
      },
      reponseCorrecte: "C",
      explication: "Le transport des électrons s'accompagne d'un pompage actif de protons H+ de la matrice vers l'espace intermembranaire, créant le gradient de protons.",
      mnemotechnique: "Chaîne respiratoire = Pompe géante de protons vers l'espace intermembranaire !",
      source: "national_2018_N"
    },
    {
      id: "u1_nat_2018_q3",
      type: "classique",
      enonce: "[Bac 2018 N] Choisissez la succession chronologique correcte des étapes de la contraction musculaire :",
      choix: {
        A: "Fixation ATP → Hydrolyse → Rotation têtes → Libération Ca2+ → Acto-myosine → Glissement.",
        B: "Glissement → Libération Ca2+ → Fixation ATP → Acto-myosine → Hydrolyse → Rotation têtes.",
        C: "Libération Ca2+ → Complexe Acto-myosine → Hydrolyse ATP → Rotation têtes → Glissement → Fixation ATP.",
        D: "Fixation ATP → Hydrolyse ATP → Rotation têtes → Glissement → Libération Ca2+ → Complexe Acto-myosine."
      },
      reponseCorrecte: "C",
      explication: "La contraction musculaire débute par la libération du Ca2+, qui permet la formation du complexe acto-myosine. L'énergie de l'hydrolyse de l'ATP provoque la rotation des têtes et le glissement des filaments. Enfin, une nouvelle fixation d'ATP permet le détachement.",
      mnemotechnique: "Contraction = Ca2+ libéré, ponts formés, pivotement des têtes, glissement, puis recharge ATP pour relâcher !",
      source: "national_2018_N"
    },
    {
      id: "u1_nat_2018_q4",
      type: "classique",
      enonce: "[Bac 2018 N] Lors de la phosphorylation de l’ADP, le gradient de protons créé par la chaîne respiratoire est utilisé par :",
      choix: {
        A: "les canaux à protons de la membrane interne de la mitochondrie.",
        B: "l’ATP synthase (sphères pédonculées) de la membrane interne.",
        C: "les transporteurs d’électrons de la membrane interne de la mitochondrie.",
        D: "les coenzymes de la membrane interne de la mitochondrie."
      },
      reponseCorrecte: "B",
      explication: "Le flux de retour des protons vers la matrice mitochondriale se fait par le rotor de l'ATP synthase, ce qui active la synthèse d'ATP.",
      mnemotechnique: "ATP Synthase = Moulin à eau moléculaire ! Le flux de H+ fait tourner la turbine pour fabriquer l'ATP.",
      source: "national_2018_N"
    },
    {
      id: "u1_nat_2020_r1",
      type: "classique",
      enonce: "[Bac 2020 R] Lors de la contraction musculaire, on observe au niveau des sarcomères un raccourcissement :",
      choix: {
        A: "des bandes sombres (A).",
        B: "des bandes claires (I).",
        C: "des filaments de myosine.",
        D: "des filaments d’actine."
      },
      reponseCorrecte: "B",
      explication: "Pendant la contraction musculaire, les filaments fins d'actine glissent entre les filaments épais de myosine sans changer de longueur. Les bandes claires (I) et les zones (H) se raccourcissent, tandis que les bandes sombres (A) gardent une longueur constante.",
      mnemotechnique: "Contraction = Les bandes claires (I) et la zone (H) s'écrasent, mais les bandes sombres (A) ne bougent pas d'un poil !",
      source: "national_2020_R"
    },
    {
      id: "u1_nat_2020_r2",
      type: "classique",
      enonce: "[Bac 2020 R] La tête de myosine possède deux sites de fixation spécifiques à :",
      choix: {
        A: "l’ATP et l’actine.",
        B: "l’ATP et la tropomyosine.",
        C: "l’actine et la troponine.",
        D: "l’actine et les ions Ca2+."
      },
      reponseCorrecte: "A",
      explication: "La tête de la myosine se lie à l'actine (formation des ponts d'actomyosine) et possède une activité enzymatique ATPasique grâce à son site de fixation de l'ATP.",
      mnemotechnique: "Têtes de Myosine = Double casquette ! Un crochet pour attraper l'Actine, et une poche pour consommer l'ATP !",
      source: "national_2020_R"
    },
    {
      id: "u1_nat_2020_r3",
      type: "classique",
      enonce: "[Bac 2020 R] La chaîne respiratoire permet la synthèse d'ATP suite à une :",
      choix: {
        A: "réduction de RH2 en R et du dioxygène en eau.",
        B: "réduction de R en RH2 et oxydation d’eau en dioxygène.",
        C: "oxydation de R en RH2 et une réduction du dioxygène en eau.",
        D: "oxydation de RH2 en R et une réduction du dioxygène en eau."
      },
      reponseCorrecte: "D",
      explication: "Les complexes de la chaîne respiratoire oxydent les transporteurs de protons et d'électrons réduits (NADH,H+ et FADH2) en R, et transfèrent les électrons jusqu'au dioxygène (O2), l'accepteur final, qui est réduit en eau (H2O).",
      mnemotechnique: "La chaîne respiratoire oxyde les transporteurs (RH2 -> R) et réduit l'O2 en H2O !",
      source: "national_2020_R"
    },
    {
      id: "u1_nat_2020_r4",
      type: "classique",
      enonce: "[Bac 2020 R] Lors de la phosphorylation oxydative au niveau de la mitochondrie :",
      choix: {
        A: "le transfert des électrons engendre une accumulation des protons H+ dans la matrice mitochondriale.",
        B: "le flux des protons H+ vers la matrice se fait à travers le complexe protéique CIV.",
        C: "le transfert des électrons vers l’oxygène se fait par les complexes de la chaîne respiratoire.",
        D: "tous les différents complexes de la chaîne respiratoire pompent les protons vers l'espace intermembranaire."
      },
      reponseCorrecte: "C",
      explication: "Le transfert d'électrons est assuré par une série de réactions d'oxydoréduction en cascade à travers les complexes de la membrane interne de la mitochondrie (chaîne respiratoire), pour aboutir à l'oxygène.",
      mnemotechnique: "Phosphorylation oxydative = Les complexes de la chaîne se passent les électrons comme un ballon jusqu'à l'oxygène !",
      source: "national_2020_R"
    },
    {
      id: "u1_nat_2022_q1",
      type: "classique",
      enonce: "[Bac 2022 N] Dans la mitochondrie :",
      choix: {
        A: "la sphère pédonculée transporte les protons H+ vers l’espace intermembranaire.",
        B: "la sphère pédonculée est responsable de la phosphorylation de l'ADP en ATP.",
        C: "la membrane externe contient des protéines qui transportent les électrons vers le dioxygène.",
        D: "la membrane externe contient des enzymes d’oxydoréduction de la chaîne respiratoire."
      },
      reponseCorrecte: "B",
      explication: "Les sphères pédonculées (ATP synthases) exploitent l'énergie mécanique du flux de retour des protons H+ de l'espace intermembranaire vers la matrice pour phosphoryler l'ADP en ATP.",
      mnemotechnique: "Sphères pédonculées = Phosphorylation de l'ADP ! Elles fabriquent l'ATP !",
      source: "national_2022_N"
    },
    {
      id: "u1_nat_2022_q2",
      type: "classique",
      enonce: "[Bac 2022 N] La réduction de NAD+ en NADH,H+ se fait au cours :",
      choix: {
        A: "de la glycolyse et du cycle de Krebs.",
        B: "de la glycolyse et des réactions de la chaîne respiratoire.",
        C: "du cycle de Krebs et des réactions de la chaîne respiratoire.",
        D: "des réactions de la chaîne respiratoire et de la phosphorylation de l’ADP."
      },
      reponseCorrecte: "A",
      explication: "Le NAD+ est réduit en NADH,H+ lors des étapes de déshydrogénation de la glycolyse (cytoplasme) et du cycle de Krebs (matrice mitochondriale). Au niveau de la chaîne respiratoire, le NADH,H+ est ré-oxydé en NAD+.",
      mnemotechnique: "Réduction NAD+ -> NADH,H+ = Glycolyse + Cycle de Krebs ! C'est la recharge des batteries !",
      source: "national_2022_N"
    },
    {
      id: "u1_nat_2022_q3",
      type: "classique",
      enonce: "[Bac 2022 N] L’ultrastructure du sarcomère montre que :",
      choix: {
        A: "la bande sombre est limitée par deux stries Z.",
        B: "la bande sombre est limitée par deux bandes H.",
        C: "le sarcomère est limité par deux stries Z.",
        D: "le sarcomère est limité par deux bandes H."
      },
      reponseCorrecte: "C",
      explication: "Par définition, un sarcomère est l'unité structurale et fonctionnelle de la myofibrille, délimitée par deux stries Z successives.",
      mnemotechnique: "Sarcomère = Limité par 2 stries Z ! Facile à repérer, c'est l'unité de base.",
      source: "national_2022_N"
    },
    {
      id: "u1_nat_2022_q4",
      type: "classique",
      enonce: "[Bac 2022 N] Les filaments fins de la myofibrille sont formés par l'association :",
      choix: {
        A: "d’actine, de myosine et de troponine.",
        B: "d’actine, de myosine et de tropomyosine.",
        C: "d’actine, de troponine et de tropomyosine.",
        D: "de myosine, de troponine et de tropomyosine."
      },
      reponseCorrecte: "C",
      explication: "Les filaments fins sont composés de trois protéines principales : l'actine (qui forme le filament double hélice), la troponine (qui fixe le calcium), et la tropomyosine (qui s'enroule autour de l'actine). La myosine constitue exclusivement les filaments épais.",
      mnemotechnique: "Filament fin = Actine + Troponine + Tropomyosine ! Jamais de myosine (qui est épaisse) !",
      source: "national_2022_N"
    },
    {
      id: "u1_nat_2023_r1",
      type: "classique",
      enonce: "[Bac 2023 R] L’hydrolyse de la phosphocréatine est une voie de régénération énergétique :",
      choix: {
        A: "lente permettant de régénérer l’ADP.",
        B: "lente permettant de régénérer la phosphocréatine.",
        C: "rapide permettant de régénérer l’ATP.",
        D: "rapide permettant de régénérer la phosphocréatine."
      },
      reponseCorrecte: "C",
      explication: "L'hydrolyse de la phosphocréatine (PCr + ADP -> Cr + ATP) is la voie de régénération d'ATP anaérobie alactique la plus rapide de la cellule musculaire, indispensable pour les efforts intenses et immédiats de quelques secondes.",
      mnemotechnique: "Phosphocréatine = Sprinteur ! Voie anaérobie alactique ultra rapide pour fabriquer de l'ATP !",
      source: "national_2023_R"
    },
    {
      id: "u1_nat_2023_r2",
      type: "classique",
      enonce: "[Bac 2023 R] L’ATP est synthétisée au cours des métabolismes cellulaires par une réaction de :",
      choix: {
        A: "phosphorylation de l’ADP.",
        B: "réduction de l’ADP.",
        C: "d’hydrolyse de l’ADP.",
        D: "d’oxydation de l’ADP."
      },
      reponseCorrecte: "A",
      explication: "La synthèse de l'ATP (Adénosine Triphosphate) s'effectue par fixation d'un groupement phosphate inorganique (Pi) sur une molécule d'ADP (Adénosine Diphosphate). C'est une réaction endergonique de phosphorylation.",
      mnemotechnique: "Synthèse d'ATP = Phosphorylation de l'ADP ! On recharge l'ADP en lui greffant un phosphate.",
      source: "national_2023_R"
    },
    {
      id: "u1_nat_2023_r3",
      type: "classique",
      enonce: "[Bac 2023 R] La secousse musculaire isolée d’un muscle fatigué se caractérise par une :",
      choix: {
        A: "diminution de la durée totale de la secousse.",
        B: "augmentation significative de l’amplitude.",
        C: "diminution de la durée de la phase de latence.",
        D: "prolongation de la durée de sa phase de relâchement."
      },
      reponseCorrecte: "D",
      explication: "La fatigue musculaire se traduit graphiquement par une diminution de l'amplitude de la secousse et par une prolongation très nette de la phase de relâchement, due au ralentissement de la récupération des ions Ca2+ par le réticulum sarcoplasmique.",
      mnemotechnique: "Muscle fatigué = Moins de force (amplitude en baisse) et relâchement très lent !",
      source: "national_2023_R"
    },
    {
      id: "u1_nat_2023_r4",
      type: "classique",
      enonce: "[Bac 2023 R] La transition métabolique conduisant à la formation de l’acétyl-CoA dans la matrice mitochondriale est accompagnée d’une :",
      choix: {
        A: "oxydation de NADH,H+.",
        B: "phosphorylation du GDP.",
        C: "décarboxylation du pyruvate.",
        D: "réduction de FAD."
      },
      reponseCorrecte: "C",
      explication: "L'entrée du pyruvate dans la matrice conduit à sa décarboxylation oxydative (perte de CO2) pour former le radical acétyl qui se lie au Coenzyme A, tout en réduisant un NAD+ en NADH,H+.",
      mnemotechnique: "Pyruvate -> Acétyl-CoA = Décarboxylation (perte de CO2) + Production de NADH,H+ !",
      source: "national_2023_R"
    },
    {
      id: "u1_nat_2024_r1",
      type: "classique",
      enonce: "[Bac 2024 R] La fermentation lactique se caractérise par une dégradation :",
      choix: {
        A: "complète du glucose en aérobiose avec production d’acide lactique et d'ATP.",
        B: "incomplète du glucose en anaérobiose avec production d’acide lactique et d'une faible quantité d’énergie.",
        C: "complète du glucose en anaérobiose avec production de CO2, d’eau et d'acide lactique.",
        D: "incomplète du glucose en aérobiose avec production d’éthanol et de CO2."
      },
      reponseCorrecte: "B",
      explication: "La fermentation lactique est une dégradation incomplète du glucose (dans le hyaloplasme) en l'absence de dioxygène (anaérobiose) conduisant à la production d'acide lactique (déchet organique encore riche en énergie) et d'un faible bilan de 2 ATP.",
      mnemotechnique: "Fermentation = Anaérobiose + Dégradation incomplète + Déchet organique (acide lactique) !",
      source: "national_2024_R"
    },
    {
      id: "u1_nat_2024_r2",
      type: "classique",
      enonce: "[Bac 2024 R] Le sens de déplacement des protons (H+) lors de la phosphorylation oxydative mitochondriale est de la :",
      choix: {
        A: "matrice vers l’espace intermembranaire par la chaîne respiratoire, et de l'espace intermembranaire vers la matrice par l'ATP synthase.",
        B: "matrice vers l’espace intermembranaire par l'ATP synthase, et inversement par la chaîne respiratoire.",
        C: "membrane interne vers la membrane externe par la chaîne respiratoire, et de la matrice vers l’espace intermembranaire par l'ATP synthase.",
        D: "matrice vers l’espace intermembranaire par l'ATP synthase, et de l'espace intermembranaire vers la matrice par diffusion simple."
      },
      reponseCorrecte: "A",
      explication: "L'énergie de transfert des électrons dans la chaîne respiratoire permet de pomper activement les protons H+ de la matrice vers l'espace intermembranaire. Le retour passif de ces protons se fait ensuite exclusivement à travers l'ATP synthase (sphères pédonculées) de l'espace intermembranaire vers la matrice, activant la synthèse d'ATP.",
      mnemotechnique: "Chaîne respiratoire = Sortie forcée des protons (Matrice -> Espace). Sphères pédonculées = Retour payant des protons (Espace -> Matrice) !",
      source: "national_2024_R"
    },
    {
      id: "u1_nat_2024_r3",
      type: "classique",
      enonce: "[Bac 2024 R] Lors de la contraction musculaire et de la régénération d'ATP, associez correctement chaque processus : (1) Fixation du Ca2+ sur la troponine, (2) Hydrolyse de l'ATP, (3) Fixation de l'ATP sur la myosine, (4) Hydrolyse de la phosphocréatine.",
      choix: {
        A: "1-Séparation des myofilaments ; 2-Rotation des têtes ; 3-Libération des sites ; 4-Régénération rapide.",
        B: "1-Libération des sites de fixation ; 2-Rotation des têtes de myosine ; 3-Détachement des têtes de myosine ; 4-Régénération rapide de l'ATP.",
        C: "1-Régénération rapide de l'ATP ; 2-Détachement des têtes ; 3-Rotation des têtes ; 4-Libération des sites.",
        D: "1-Rotation des têtes ; 2-Libération des sites ; 3-Régénération rapide ; 4-Détachement des têtes."
      },
      reponseCorrecte: "B",
      explication: "Le couplage excitation-contraction implique : (1) le Ca2+ libère les sites d'actine masqués par la tropomyosine ; (2) l'hydrolyse de l'ATP fournit l'énergie nécessaire au pivotement des têtes de myosine ; (3) la fixation d'une nouvelle molécule d'ATP permet le détachement de la tête de myosine de l'actine ; (4) l'hydrolyse de la phosphocréatine permet de régénérer l'ATP de façon ultra-rapide en anaérobie alactique.",
      mnemotechnique: "Ca2+ ouvre la porte (sites d'actine), l'hydrolyse d'ATP fait tourner la poignée (pivotement), la fixation d'un nouvel ATP lâche la poignée (détachement), la phosphocréatine recharge la pile !",
      source: "national_2024_R"
    },
    {
      id: "u1_nat_2025_n1",
      type: "classique",
      enonce: "[Bac 2025 N] Dans les mitochondries des plantes thermogènes (comme le chou puant), l'oxydase alternative (AOX) permet la réduction de l'oxygène en eau sans pompage de protons au niveau des complexes III et IV. Cela engendre :",
      choix: {
        A: "une augmentation de la synthèse d'ATP et une baisse de dégagement de chaleur.",
        B: "une faible production d'ATP et une importante dissipation d'énergie sous forme de chaleur.",
        C: "un blocage complet de la chaîne respiratoire entraînant la mort immédiate de la cellule.",
        D: "une activation exclusive de la fermentation alcoolique dans la matrice mitochondriale."
      },
      reponseCorrecte: "B",
      explication: "L'alternative oxydase (AOX) reçoit les électrons et réduit directement l'O2 en eau, en court-circuitant les complexes III (C3) et IV (C4). Comme les protons ne sont pas pompés au niveau de ces complexes, le gradient de protons H+ créé par le seul complexe I est très faible. Le retour de protons via l'ATP synthase est donc faible, générant très peu d'ATP et dissipant l'énergie sous forme de chaleur (thermogenèse), ce qui permet à la plante de fondre la neige.",
      mnemotechnique: "AOX = Chauffage ! On court-circuite C3 et C4 pour dissiper l'énergie en chaleur au lieu de faire de l'ATP !",
      source: "national_2025_N"
    }
  ]
};
