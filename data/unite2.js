const UNITE_2 = {
  "unite": 2,
  "titre": "Génétique et Lois Statistiques",
  "conceptsPiliers": [
    "La nature de l'information génétique : l'ADN (double hélice) et sa réplication semi-conservative.",
    "L'expression génétique : Transcription (ADN ➔ ARNm dans le noyau) et Traduction (ARNm ➔ Protéine dans le cytoplasme par les ribosomes).",
    "Les mutations : modifications de la séquence nucléotidique de l'ADN (délétion, substitution, addition) provoquant une modification de la protéine.",
    "La méiose : 2 divisions successives (réductionnelle puis équationnelle) passant de 2n à n chromosomes (production de gamètes).",
    "Le brassage génétique : intrachromosomique (Crossing-over en Prophase I) et interchromosomique (séparation aléatoire en Anaphase I).",
    "Le monohybridisme (étude d'1 caractère) : dominance absolue (F2 : 3/4, 1/4), codominance (F2 : 1/4, 1/2, 1/4), gène létal (F2 : 2/3, 1/3) et hérédité liée au sexe.",
    "Le dihybridisme (étude de 2 caractères) : gènes indépendants (F2 : 9/16, 3/16, 3/16, 1/16) vs gènes liés (forte proportion de phénotypes parentaux)."
  ],
  "zonesConfusion": [
    {
      "notions": "Transcription vs Traduction",
      "explication": "Transcription = copier l'ADN en ARNm (dans le noyau). Traduction = lire l'ARNm pour assembler les acides aminés en protéine (dans le cytoplasme)."
    },
    {
      "notions": "Méiose vs Mitose",
      "explication": "La mitose (1 division) crée 2 cellules diploïdes (2n) identiques pour la croissance. La méiose (2 divisions) crée 4 cellules haploïdes (n) différentes pour la reproduction."
    },
    {
      "notions": "Brassage Inter vs Intra",
      "explication": "Interchromosomique = séparation au hasard des chromosomes entiers en Anaphase I. Intrachromosomique = échange de fragments d'ADN (crossing-over) entre homologues en Prophase I."
    },
    {
      "notions": "Test Cross : Indépendant vs Lié",
      "explication": "Test Cross de Dihybridisme : Si 4 phénotypes à 25% = gènes indépendants. Si 2 parentaux majeurs (>50%) et 2 recombinés mineurs (<50%) = gènes liés (avec crossing-over)."
    }
  ],
  "tableauObjectifs": {
    "debutant": [
      "Décrire la structure de l'ADN et le principe de la réplication semi-conservative.",
      "Connaître les étapes de la méiose (Prophase, Métaphase, Anaphase, Télophase)."
    ],
    "intermediaire": [
      "Comprendre le code génétique (codons, redondance) et les mutations.",
      "Appliquer les 3 lois de Mendel (monohybridisme)."
    ],
    "expert": [
      "Identifier l'hérédité liée au sexe (gène sur X ou Y) à partir d'un croisement réciproque.",
      "Calculer la distance entre 2 gènes (en cMg) à l'aide des recombinés d'un test-cross."
    ]
  },
  "ficheCondensee": [
    "🧬 **ADN & EXPRESSION** : L'ADN se réplique (semi-conservatif). Pour s'exprimer, il est transcrit en ARNm (Uracile remplace Thymine), puis traduit en Protéine par les ribosomes et l'ARNt.",
    "⚠️ **MUTATIONS** : Substitution, Addition, Délétion. Une mutation modifie le codon, ce qui peut changer l'acide aminé et détruire la fonction de la protéine.",
    "➗ **MÉIOSE** : Crée 4 gamètes haploïdes (n) à partir d'une cellule mère (2n). Division 1 (Réductionnelle : sépare les homologues). Division 2 (Équationnelle : sépare les chromatides).",
    "🔀 **BRASSAGES** : Intra = Crossing-over (Prophase I). Inter = Hasard (Anaphase I). La fécondation (n+n=2n) multiplie encore la diversité.",
    "📊 **MENDEL (1 gène)** : Croisement 2 purs = F1 homogène (1ère Loi). F1xF1 = F2 (Dominance : 75/25. Codominance : 25/50/25). Gène lié au sexe : F1 hétérogène et mâle hérite de la mère.",
    "📈 **MENDEL (2 gènes)** : Test Cross (Hybride x Double Récessif). Si 4 phénotypes 25% = Gènes indépendants (sur 2 chr. diff.). Si Parentaux > Recombinés = Gènes liés (sur le même chr.)."
  ],
  "questions": [
    {
      "id": "u2_q20",
      "difficulte": "facile",
      "theme": "statistiques",
      "enonce": "Lors d'une dominance complète, les proportions à la F2 (F1xF1) sont :",
      "choix": {
        "A": "50% et 50%.",
        "B": "75% (3/4) dominant et 25% (1/4) récessif.",
        "C": "25%, 50%, 25%.",
        "D": "100% dominant."
      },
      "reponseCorrecte": "B",
      "explication": "Ségrégation mendélienne classique (3/4 - 1/4).",
      "mnemotechnique": "Dominance complète = 3 quarts pour le Roi (dominant) et 1 quart pour le Serviteur (récessif) !"
    },
    {
      "id": "u2_q22",
      "difficulte": "facile",
      "theme": "statistiques",
      "enonce": "En cas de codominance (Monohybridisme), quelles sont les proportions F2 ?",
      "choix": {
        "A": "1/4, 1/2, 1/4.",
        "B": "3/4, 1/4.",
        "C": "50%, 50%.",
        "D": "100% intermédiaire."
      },
      "reponseCorrecte": "A",
      "explication": "Les hybrides (1/2) expriment les deux allèles (phénotype intermédiaire/nouveau).",
      "mnemotechnique": "Codominance = Personne ne gagne ! 1/4 Parent A, 1/4 Parent B, et la moitié (1/2) est un mélange des deux !"
    },
    {
      "id": "u2_q23",
      "difficulte": "facile",
      "theme": "statistiques",
      "enonce": "Le Croisement Test (Test Cross) consiste à croiser l'individu testé avec :",
      "choix": {
        "A": "Un hétérozygote.",
        "B": "Un individu homozygote récessif.",
        "C": "Un parent dominant.",
        "D": "Un pur dominant."
      },
      "reponseCorrecte": "B",
      "explication": "Le récessif ne produit qu'un gamète 'neutre', permettant de voir exactement les gamètes du testé.",
      "mnemotechnique": "Test Cross = Croisement avec le fantôme récessif double, car il est neutre et révèle les secrets !"
    },
    {
      "id": "u2_q28",
      "difficulte": "facile",
      "theme": "statistiques",
      "enonce": "Un croisement réciproque vérifie :",
      "choix": {
        "A": "L'ADN en double hélice.",
        "B": "La dominance.",
        "C": "Si le gène est porté par un autosome ou un chromosome sexuel.",
        "D": "L'état hétérozygote."
      },
      "reponseCorrecte": "C",
      "explication": "On inverse le sexe des parents porteurs du caractère pour voir si le résultat change.",
      "mnemotechnique": "Réciproque = On échange les rôles de papa et maman pour démasquer si le gène est porté par X ou Y !"
    },
    {
      "id": "u2_q30",
      "difficulte": "facile",
      "theme": "statistiques",
      "enonce": "En Dihybridisme (indépendants), la F2 (F1xF1) donne les proportions :",
      "choix": {
        "A": "1/4, 1/4, 1/4, 1/4.",
        "B": "9/16, 3/16, 3/16, 1/16.",
        "C": "2/3, 1/3.",
        "D": "50%, 50%."
      },
      "reponseCorrecte": "B",
      "explication": "Le fameux 9-3-3-1 de Mendel.",
      "mnemotechnique": "Mendel 9-3-3-1 = Le grand code secret du dihybridisme indépendant !"
    },
    {
      "id": "u2_q32",
      "difficulte": "facile",
      "theme": "adn",
      "enonce": "Dans la molécule d'ADN, l'Adénine (A) est toujours complémentaire à :",
      "choix": {
        "A": "Guanine (G).",
        "B": "Cytosine (C).",
        "C": "Thymine (T).",
        "D": "Uracile (U)."
      },
      "reponseCorrecte": "C",
      "explication": "Règle de complémentarité : A-T (2 liaisons H) et C-G (3 liaisons H).",
      "mnemotechnique": "ADN = L'**A**nanas dans la **T**arte (**A**-**T**), et la **C**arotte dans le **G**âteau (**C**-**G**) !"
    },
    {
      "id": "u2_q34",
      "difficulte": "facile",
      "theme": "meiose",
      "enonce": "Une cellule humaine diploïde possède :",
      "choix": {
        "A": "23 chromosomes.",
        "B": "46 paires de chromosomes.",
        "C": "23 paires de chromosomes (soit 46 chromosomes au total).",
        "D": "92 chromosomes."
      },
      "reponseCorrecte": "C",
      "explication": "22 paires d'autosomes et 1 paire de gonosomes (XX ou XY).",
      "mnemotechnique": "2n = Double stock ! 23 de papa, 23 de maman, total de 46 chromosomes !"
    },
    {
      "id": "u2_q39",
      "difficulte": "facile",
      "theme": "meiose",
      "enonce": "Lors de la Prophase I, les chromosomes homologues se regroupent par paires appelées :",
      "choix": {
        "A": "Diplosomes.",
        "B": "Tétrades (ou bivalents).",
        "C": "Centromères.",
        "D": "Chromatides sœurs."
      },
      "reponseCorrecte": "B",
      "explication": "Une paire de chromosomes à 2 chromatides chacun forme une structure à 4 chromatides (Tétrade).",
      "mnemotechnique": "Tétrade = Tetra (4) chromatides qui dansent un slow serré en Prophase I !"
    },
    {
      "id": "u2_nat_2018_r1",
      "difficulte": "facile",
      "theme": "meiose",
      "enonce": "[Bac 2018 R] Le brassage interchromosomique lors de la méiose résulte de la répartition indépendante et aléatoire :",
      "choix": {
        "A": "des chromosomes homologues pendant l’anaphase I.",
        "B": "des chromosomes homologues pendant l’anaphase II.",
        "C": "des chromatides pendant l’anaphase I.",
        "D": "des chromatides pendant l’anaphase II."
      },
      "reponseCorrecte": "A",
      "explication": "Le brassage interchromosomique a lieu en Anaphase I par la séparation aléatoire des paires de chromosomes homologues de chaque bivalent.",
      "mnemotechnique": "Interchromosomique = Anaphase I ! Les couples de chromosomes homologues se séparent au hasard de part et d'autre !",
      "source": "national_2018_R"
    },
    {
      "id": "u2_nat_2018_r2",
      "difficulte": "facile",
      "theme": "meiose",
      "enonce": "[Bac 2018 R] Durant la métaphase de la mitose, chaque chromosome est formé :",
      "choix": {
        "A": "d’une seule chromatide constituée de deux brins d'ADN.",
        "B": "de deux chromatides constituée chacune d’un seul brin d'ADN.",
        "C": "de deux chromatides constituée chacune de deux brins d'ADN (double hélice).",
        "D": "de deux chromatides, l’une à un brin et l’autre à deux brins d'ADN."
      },
      "reponseCorrecte": "C",
      "explication": "En métaphase de mitose, le chromosome est dupliqué sous forme de deux chromatides sœurs unies par le centromère. Chaque chromatide contient une molécule d'ADN double brin complète.",
      "mnemotechnique": "Chromosome en Métaphase = Un 'X' fait de 2 chromatides. Chaque branche est une double hélice d'ADN complète !",
      "source": "national_2018_R"
    },
    {
      "id": "u2_nat_2018_r3",
      "difficulte": "facile",
      "theme": "statistiques",
      "enonce": "[Bac 2018 R] Dans le cas d'un monohybridisme avec dominance complète, le croisement entre un individu homozygote récessif et un individu hétérozygote donne :",
      "choix": {
        "A": "25% de phénotype récessif et 75% de phénotype dominant.",
        "B": "75% de phénotype récessif et 25% de phénotype dominant.",
        "C": "25% de phénotype récessif, 50% de phénotype intermédiaire et 25% de phénotype dominant.",
        "D": "50% de phénotype récessif et 50% de phénotype dominant."
      },
      "reponseCorrecte": "D",
      "explication": "C'est un backcross (test-cross) classique : Aa x aa donnera 50% [A] (hétérozygotes) et 50% [a] (homozygotes récessifs).",
      "mnemotechnique": "Test-cross Aa x aa = Moitié-Moitié ! 50% dominant, 50% récessif.",
      "source": "national_2018_R"
    },
    {
      "id": "u2_nat_2018_r4",
      "difficulte": "facile",
      "theme": "adn",
      "enonce": "[Bac 2018 R] Au cours de la réplication de l’ADN :",
      "choix": {
        "A": "la double hélice parentale reste intacte et une deuxième copie entièrement nouvelle est synthétisée.",
        "B": "chaque brin des deux molécules d’ADN formées contient des fragments anciens et nouveaux entremêlés.",
        "C": "les deux brins de la double hélice parentale se séparent et chacun d’eux sert de modèle pour un nouveau brin complémentaire.",
        "D": "la double hélice parentale ne sert pas du tout à la synthèse des nouvelles copies."
      },
      "reponseCorrecte": "C",
      "explication": "La réplication est semi-conservative (modèle de Watson et Crick, prouvé par Meselson et Stahl) : séparation des brins originels puis synthèse complémentaire.",
      "mnemotechnique": "Réplication ADN = Semi-conservative ! On sépare la fermeture éclair parentale, et on complète chaque côté.",
      "source": "national_2018_R"
    },
    {
      "id": "u2_nat_2023_r1",
      "difficulte": "facile",
      "theme": "meiose",
      "enonce": "[Bac 2023 R] Au cours de la méiose, le crossing-over se déroule lors de :",
      "choix": {
        "A": "la prophase I.",
        "B": "l’anaphase I.",
        "C": "l’anaphase II.",
        "D": "la prophase II."
      },
      "reponseCorrecte": "A",
      "explication": "Le crossing-over (brassage intrachromosomique) a lieu uniquement pendant la prophase I de la méiose, lorsque les chromosomes homologues s'apparient étroitement en bivalents (synapsis) pour former des chiasmas.",
      "mnemotechnique": "Crossing-over = Prophase I ! Les bras des chromosomes s'entremêlent dès le début.",
      "source": "national_2023_R"
    },
    {
      "id": "u2_nat_2023_r2",
      "difficulte": "facile",
      "theme": "cycle_cellulaire",
      "enonce": "[Bac 2023 R] Au cours de la phase G1 de l'interphase, chaque chromosome est :",
      "choix": {
        "A": "monochromatidien condensé.",
        "B": "monochromatidien non condensé.",
        "C": "bichromatidien non condensé.",
        "D": "bichromatidien condensé."
      },
      "reponseCorrecte": "B",
      "explication": "Pendant l'interphase, l'ADN est sous forme de chromatine décondensée (non condensée). En phase G1 (avant la réplication), chaque chromosome est constitué d'une seule molécule d'ADN double brin, donc il est monochromatidien.",
      "mnemotechnique": "G1 = Avant la réplication = 1 seule chromatide ! Et interphase = Toujours non condensé !",
      "source": "national_2023_R"
    },
    {
      "id": "u2_nat_2023_r3",
      "difficulte": "facile",
      "theme": "meiose",
      "enonce": "[Bac 2023 R] A partir d’une cellule mère diploïde, la méiose donne :",
      "choix": {
        "A": "quatre cellules haploïdes avec des chromosomes monochromatidiens.",
        "B": "deux cellules diploïdes avec des chromosomes bichromatidiens.",
        "C": "quatre cellules diploïdes avec des chromosomes bichromatidiens.",
        "D": "deux cellules haploïdes avec des chromosomes monochromatidiens."
      },
      "reponseCorrecte": "A",
      "explication": "La méiose consiste en deux divisions successives (réductionnelle puis équationnelle) précédées d'une seule réplication. Elle produit ainsi quatre cellules filles haploïdes (n) à chromosomes monochromatidiens.",
      "mnemotechnique": "Méiose = Division par 4 ! On part de 2n (bichromatidien) pour finir à 4 cellules haploïdes n (monochromatidiens).",
      "source": "national_2023_R"
    },
    {
      "id": "u2_nat_2023_r4",
      "difficulte": "facile",
      "theme": "cycle_cellulaire",
      "enonce": "[Bac 2023 R] À la fin de la phase S de l’interphase, les chromosomes sont :",
      "choix": {
        "A": "bichromatidiens et ne présentent pas des yeux de réplication.",
        "B": "monochromatidiens et présentent des yeux de réplication.",
        "C": "bichromatidiens et présentent des yeux de réplication.",
        "D": "monochromatidiens et ne présentent pas des yeux de réplication."
      },
      "reponseCorrecte": "A",
      "explication": "La phase S est la phase de réplication de l'ADN. À sa fin, la duplication est complètement achevée : chaque chromosome possède deux chromatides sœurs identiques (bichromatidiens) reliées par le centromère, et tous les yeux de réplication se sont rejoints (plus d'yeux visibles).",
      "mnemotechnique": "Fin de phase S = Réplication terminée ! Donc 2 chromatides (bichromatidiens) et zéro yeux de réplication restants !",
      "source": "national_2023_R"
    },
    {
      "id": "u2_nat_2025_n1",
      "difficulte": "facile",
      "theme": "genetique",
      "enonce": "[Bac 2025 N] L'adrénoleucodystrophie (ALD) est une maladie liée à une mutation par substitution (T par A) au triplet 149 du brin non transcrit du gène ABCD1. Cette mutation remplace le codon AGU par AGA sur l'ARNm, changeant l'acide aminé Sérine (Ser) par l'Arginine (Arg). Cela s'explique par :",
      "choix": {
        "A": "la synthèse d'une protéine ALDP non fonctionnelle, empêchant l'entrée et la dégradation des acides gras (AGLC) dans le peroxysome, ce qui montre la relation gène-protéine-caractère.",
        "B": "la synthèse d'une protéine fonctionnelle qui dégrade trop rapidement les lipides membranaires.",
        "C": "une mutation silencieuse n'ayant aucun effet sur la structure de la protéine ALDP.",
        "D": "une modification directe du phénotype sans affecter la séquence des acides aminés."
      },
      "reponseCorrecte": "A",
      "explication": "Une substitution de nucléotide change le codon de l'ARNm (AGU -> AGA), ce qui modifie la séquence peptidique (Ser -> Arg). La protéine ALDP résultante est non fonctionnelle, entraînant l'accumulation d'acides gras à chaîne très longue (AGLC) dans le cytoplasme et le dysfonctionnement cellulaire. Cela illustre la relation gène-protéine-caractère.",
      "mnemotechnique": "Gène -> Protéine -> Caractère ! Un changement d'un seul nucléotide (Gène) donne une protéine défectueuse (ALDP) qui cause la maladie (Caractère) !",
      "source": "national_2025_N"
    },
    {
      "id": "u2_q4",
      "difficulte": "piege",
      "theme": "mutation",
      "enonce": "Une mutation par délétion correspond à :",
      "choix": {
        "A": "Le remplacement d'un nucléotide.",
        "B": "L'ajout d'un nucléotide.",
        "C": "La perte d'un ou de plusieurs nucléotides dans la séquence d'ADN.",
        "D": "La lecture de l'ADN à l'envers."
      },
      "reponseCorrecte": "C",
      "explication": "La délétion (perte) provoque un décalage du cadre de lecture pour tous les codons suivants."
    },
    {
      "id": "u2_q8",
      "difficulte": "piege",
      "theme": "expression",
      "enonce": "Lors de la traduction, l'initiation commence par :",
      "choix": {
        "A": "La fixation du ribosome sur un codon STOP.",
        "B": "La fixation de la petite sous-unité du ribosome sur le codon initiateur AUG de l'ARNm.",
        "C": "L'intervention de l'ADN polymérase.",
        "D": "La séparation des brins d'ARNm."
      },
      "reponseCorrecte": "B",
      "explication": "Le codon AUG code pour la Méthionine, le premier acide aminé de presque toutes les protéines."
    },
    {
      "id": "u2_q14",
      "difficulte": "piege",
      "theme": "meiose",
      "enonce": "Lors de l'Anaphase I de la méiose, on observe :",
      "choix": {
        "A": "Le clivage des centromères.",
        "B": "La séparation aléatoire des chromosomes homologues sans clivage des centromères.",
        "C": "La séparation des chromatides.",
        "D": "L'alignement à l'équateur."
      },
      "reponseCorrecte": "B",
      "explication": "C'est l'origine du brassage interchromosomique. Les centromères ne se clivent qu'en Anaphase II."
    },
    {
      "id": "u2_q18",
      "difficulte": "piege",
      "theme": "meiose",
      "enonce": "Le brassage intrachromosomique s'applique :",
      "choix": {
        "A": "Aux gènes indépendants.",
        "B": "Uniquement aux chromosomes sexuels.",
        "C": "Aux gènes liés, situés sur la même paire de chromosomes.",
        "D": "À l'ADN mitochondrial."
      },
      "reponseCorrecte": "C",
      "explication": "Les gènes liés voyagent ensemble, sauf si un crossing-over les sépare en cassant la chromatide."
    },
    {
      "id": "u2_q21",
      "difficulte": "piege",
      "theme": "statistiques",
      "enonce": "Un gène est dit 'létal' lorsque :",
      "choix": {
        "A": "Il donne un phénotype intermédiaire.",
        "B": "Il est sur Y.",
        "C": "La combinaison homozygote entraîne la mort avant la naissance (proportions F2 : 2/3, 1/3).",
        "D": "Il provoque une mutation."
      },
      "reponseCorrecte": "C",
      "explication": "Un génotype entier disparaît des statistiques de naissance."
    },
    {
      "id": "u2_q26",
      "difficulte": "piege",
      "theme": "statistiques",
      "enonce": "Si deux gènes sont en 'liaison absolue' :",
      "choix": {
        "A": "Il y a >50% recombinés.",
        "B": "Le test cross donne seulement 2 phénotypes parentaux (50/50), sans aucun recombiné.",
        "C": "4 phénotypes 25%.",
        "D": "Mort systématique."
      },
      "reponseCorrecte": "B",
      "explication": "Aucun crossing-over n'a séparé les gènes liés."
    },
    {
      "id": "u2_q29",
      "difficulte": "piege",
      "theme": "statistiques",
      "enonce": "Comment note-t-on le génotype d'un hétérozygote (gènes indépendants) ?",
      "choix": {
        "A": "A/A",
        "B": "[Aa]",
        "C": "A//a",
        "D": "AB//ab"
      },
      "reponseCorrecte": "C",
      "explication": "Le double trait symbolise la paire de chromosomes."
    },
    {
      "id": "u2_q31",
      "difficulte": "piege",
      "theme": "adn",
      "enonce": "Le nucléotide est constitué de :",
      "choix": {
        "A": "Un acide aminé et un sucre.",
        "B": "Un acide phosphorique, un sucre (désoxyribose) et une base azotée.",
        "C": "Une protéine et de l'ADN.",
        "D": "De l'uracile et du ribose uniquement."
      },
      "reponseCorrecte": "B",
      "explication": "C'est l'unité de base (le monomère) de l'ADN."
    },
    {
      "id": "u2_q36",
      "difficulte": "piege",
      "theme": "expression",
      "enonce": "Un codon est composé de :",
      "choix": {
        "A": "1 nucléotide.",
        "B": "2 nucléotides.",
        "C": "3 nucléotides (triplet) portés par l'ARNm.",
        "D": "3 acides aminés."
      },
      "reponseCorrecte": "C",
      "explication": "Le code génétique se lit par mots de 3 lettres appelés codons."
    },
    {
      "id": "u2_q1",
      "difficulte": "facile",
      "theme": "adn",
      "enonce": "Le modèle de la réplication de l'ADN est dit :",
      "choix": {
        "A": "Conservatif.",
        "B": "Semi-conservatif.",
        "C": "Dispersif.",
        "D": "Aléatoire."
      },
      "reponseCorrecte": "B",
      "explication": "La réplication est semi-conservative car chaque nouvelle molécule d'ADN possède un brin ancien (parental) et un brin nouvellement synthétisé."
    },
    {
      "id": "u2_q2",
      "difficulte": "facile",
      "theme": "adn",
      "enonce": "Lors de la réplication, le rôle de l'enzyme Hélicase est de :",
      "choix": {
        "A": "Synthétiser le nouveau brin d'ADN.",
        "B": "Casser les liaisons hydrogènes entre les bases azotées pour séparer les deux brins.",
        "C": "Lier les acides aminés.",
        "D": "Transformer l'ADN en ARN."
      },
      "reponseCorrecte": "B",
      "explication": "L'hélicase sépare l'ADN double brin pour former l'œil de réplication."
    },
    {
      "id": "u2_q3",
      "difficulte": "facile",
      "theme": "adn",
      "enonce": "La chromatine est formée par l'enroulement de l'ADN autour de protéines spécifiques appelées :",
      "choix": {
        "A": "Des kératines.",
        "B": "Des histones.",
        "C": "Des polymérases.",
        "D": "Des ribosomes."
      },
      "reponseCorrecte": "B",
      "explication": "L'ADN s'enroule autour des histones pour former des nucléosomes, qui se condensent en chromatine."
    },
    {
      "id": "u2_q5",
      "difficulte": "facile",
      "theme": "expression",
      "enonce": "Quelle est la différence majeure entre l'ADN et l'ARNm ?",
      "choix": {
        "A": "L'ARNm possède de la Thymine.",
        "B": "L'ADN est simple brin.",
        "C": "L'ADN contient du désoxyribose, l'ARNm contient du ribose et de l'Uracile (U) à la place de la Thymine (T).",
        "D": "L'ADN sort du noyau."
      },
      "reponseCorrecte": "C",
      "explication": "De plus, l'ARNm est monocaténaire et sert de messager pour sortir du noyau."
    },
    {
      "id": "u2_q6",
      "difficulte": "facile",
      "theme": "expression",
      "enonce": "La transcription est la synthèse de :",
      "choix": {
        "A": "L'ADN à partir de l'ARNm.",
        "B": "Une protéine à partir de l'ARNm.",
        "C": "L'ARNm à partir d'un brin transcrit d'ADN grâce à l'ARN polymérase.",
        "D": "Lipides."
      },
      "reponseCorrecte": "C",
      "explication": "L'ARN polymérase lit l'ADN et crée l'ARNm correspondant par complémentarité."
    },
    {
      "id": "u2_q9",
      "difficulte": "facile",
      "theme": "expression",
      "enonce": "La molécule qui transfère les acides aminés vers le ribosome s'appelle :",
      "choix": {
        "A": "L'ARNm.",
        "B": "L'ARNt.",
        "C": "L'ARNr.",
        "D": "L'ADN polymérase."
      },
      "reponseCorrecte": "B",
      "explication": "L'ARN de transfert (ARNt) possède l'anticodon."
    },
    {
      "id": "u2_q10",
      "difficulte": "facile",
      "theme": "expression",
      "enonce": "Lequel de ces codons commande l'arrêt de la synthèse protéique (codon STOP) ?",
      "choix": {
        "A": "AUG",
        "B": "UAA (ou UAG, UGA)",
        "C": "AAA",
        "D": "CCC"
      },
      "reponseCorrecte": "B",
      "explication": "Ces codons ne correspondent à aucun ARNt, bloquant ainsi le ribosome."
    },
    {
      "id": "u2_q11",
      "difficulte": "facile",
      "theme": "meiose",
      "enonce": "Quel est le rôle principal de la méiose ?",
      "choix": {
        "A": "Multiplier des cellules identiques.",
        "B": "Produire 2 cellules diploïdes.",
        "C": "Produire 4 cellules sexuelles haploïdes (gamètes, n) à partir d'une cellule mère diploïde (2n).",
        "D": "Cicatriser les tissus."
      },
      "reponseCorrecte": "C",
      "explication": "La méiose réduit de moitié le nombre de chromosomes."
    },
    {
      "id": "u2_q12",
      "difficulte": "facile",
      "theme": "meiose",
      "enonce": "La première division de la méiose est dite :",
      "choix": {
        "A": "Équationnelle.",
        "B": "Réductionnelle.",
        "C": "Conservatrice.",
        "D": "Proliférative."
      },
      "reponseCorrecte": "B",
      "explication": "Elle réduit le nombre de chromosomes (2n -> n) en séparant les homologues."
    },
    {
      "id": "u2_q16",
      "difficulte": "facile",
      "theme": "meiose",
      "enonce": "La fécondation permet :",
      "choix": {
        "A": "De diviser par deux le nombre de chromosomes.",
        "B": "De rétablir la diploïdie (2n) en fusionnant deux gamètes haploïdes (n).",
        "C": "De créer des clones.",
        "D": "D'empêcher tout brassage."
      },
      "reponseCorrecte": "B",
      "explication": "Elle réunit le lot paternel et maternel pour former un nouvel individu (zygote 2n)."
    },
    {
      "id": "u2_q7",
      "difficulte": "expert",
      "theme": "expression",
      "enonce": "Le code génétique est dit 'redondant' (ou dégénéré) car :",
      "choix": {
        "A": "Il est le même pour tous.",
        "B": "Plusieurs codons différents peuvent coder pour le même acide aminé.",
        "C": "Un seul codon code pour plusieurs acides aminés.",
        "D": "Il a 3 codons stop."
      },
      "reponseCorrecte": "B",
      "explication": "Il y a 64 codons pour seulement 20 acides aminés."
    },
    {
      "id": "u2_q13",
      "difficulte": "expert",
      "theme": "meiose",
      "enonce": "Le brassage intrachromosomique (Crossing-over) a lieu durant :",
      "choix": {
        "A": "La Prophase II.",
        "B": "La Métaphase I.",
        "C": "L'Anaphase I.",
        "D": "La Prophase I."
      },
      "reponseCorrecte": "D",
      "explication": "Les chromosomes homologues s'apparient en tétrades et échangent des segments."
    },
    {
      "id": "u2_q15",
      "difficulte": "expert",
      "theme": "meiose",
      "enonce": "Le brassage interchromosomique est lié à :",
      "choix": {
        "A": "L'échange de fragments d'ADN.",
        "B": "La ségrégation aléatoire et indépendante des chromosomes homologues lors de l'Anaphase I.",
        "C": "L'intervention des mutations.",
        "D": "La division des centromères."
      },
      "reponseCorrecte": "B",
      "explication": "Les chromosomes maternels et paternels se répartissent au hasard vers les pôles."
    },
    {
      "id": "u2_q17",
      "difficulte": "expert",
      "theme": "meiose",
      "enonce": "Le caryotype humain d'un gamète (spermatozoïde ou ovule) s'écrit :",
      "choix": {
        "A": "2n = 44A + XY",
        "B": "n = 22A + XX",
        "C": "n = 22A + X ou n = 22A + Y",
        "D": "2n = 46A"
      },
      "reponseCorrecte": "C",
      "explication": "Haploïde (n) = 22 autosomes + 1 chromosome sexuel."
    },
    {
      "id": "u2_q19",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "En Monohybridisme, si la F1 est hétérogène alors que les parents sont purs :",
      "choix": {
        "A": "La première loi de Mendel est respectée.",
        "B": "C'est une codominance.",
        "C": "C'est une exception : le gène est lié au sexe.",
        "D": "C'est un gène létal."
      },
      "reponseCorrecte": "C",
      "explication": "La descendance dépend du sexe car les mâles (XY) n'héritent que du X de leur mère."
    },
    {
      "id": "u2_q24",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "En Dihybridisme, si le Test Cross donne 4 phénotypes à 25% chacun :",
      "choix": {
        "A": "Les gènes sont liés absolument.",
        "B": "C'est une codominance.",
        "C": "Les deux gènes sont indépendants (sur des chromosomes différents).",
        "D": "Le gène est mortel."
      },
      "reponseCorrecte": "C",
      "explication": "Le brassage interchromosomique a produit 4 gamètes équiprobables."
    },
    {
      "id": "u2_q25",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "Si un Test Cross en dihybridisme donne 80% de parentaux et 20% de recombinés :",
      "choix": {
        "A": "Les gènes sont indépendants.",
        "B": "Les gènes sont liés et un crossing-over s'est produit (liaison partielle).",
        "C": "Les gènes sont liés sans crossing-over.",
        "D": "Mutation simultanée."
      },
      "reponseCorrecte": "B",
      "explication": "Les recombinés existent mais sont rares, preuve du brassage intra."
    },
    {
      "id": "u2_q27",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "La distance entre deux gènes liés (en centiMorgans cMg) est égale à :",
      "choix": {
        "A": "Pourcentage des parentaux.",
        "B": "Pourcentage total des individus recombinés dans un test cross.",
        "C": "50.",
        "D": "0."
      },
      "reponseCorrecte": "B",
      "explication": "20% de recombinés = 20 cMg."
    },
    {
      "id": "u2_q33",
      "difficulte": "expert",
      "theme": "expression",
      "enonce": "L'enzyme responsable de l'association des acides aminés (liaison peptidique) dans le ribosome est :",
      "choix": {
        "A": "L'ARN polymérase.",
        "B": "L'ADN polymérase.",
        "C": "L'hélicase.",
        "D": "Aucune, c'est l'ARNr du ribosome qui a cette fonction catalytique."
      },
      "reponseCorrecte": "D",
      "explication": "Le ribosome est un 'ribozyme'. Son ARN ribosomal lie les acides aminés entre eux."
    },
    {
      "id": "u2_q35",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "Dans un arbre généalogique, si des parents sains ont un enfant malade, alors l'allèle responsable de la maladie est :",
      "choix": {
        "A": "Dominant.",
        "B": "Récessif.",
        "C": "Lié à Y.",
        "D": "Létal."
      },
      "reponseCorrecte": "B",
      "explication": "Les parents sont porteurs sains (hétérozygotes), la maladie (récessive) était cachée."
    },
    {
      "id": "u2_q37",
      "difficulte": "expert",
      "theme": "mutation",
      "enonce": "Une mutation silencieuse :",
      "choix": {
        "A": "Change la protéine sans affecter sa fonction.",
        "B": "Détruit l'organisme en silence.",
        "C": "Change un nucléotide de l'ADN, mais le codon muté code pour le MÊME acide aminé (grâce à la redondance).",
        "D": "Créé un codon STOP."
      },
      "reponseCorrecte": "C",
      "explication": "La séquence de la protéine n'est pas modifiée."
    },
    {
      "id": "u2_q38",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "Si l'hérédité est liée à X, un père atteint par un caractère DOMINANT transmettra ce caractère :",
      "choix": {
        "A": "À tous ses fils.",
        "B": "À toutes ses filles.",
        "C": "À 50% de ses enfants.",
        "D": "À personne."
      },
      "reponseCorrecte": "B",
      "explication": "Le père donne son chromosome Y à ses fils, et son unique chromosome X (portant le gène dominant) à toutes ses filles."
    },
    {
      "id": "u2_q40",
      "difficulte": "expert",
      "theme": "statistiques",
      "enonce": "Dans la drosophile (mouche), le crossing-over a lieu uniquement chez :",
      "choix": {
        "A": "Le mâle.",
        "B": "La femelle.",
        "C": "Les individus mutés.",
        "D": "Les homozygotes."
      },
      "reponseCorrecte": "B",
      "explication": "C'est une particularité très importante pour les exercices (Test Cross avec le mâle = liaison absolue)."
    }
  ],
  "erreursFrequentes": [
    {
      "nom": "Expression Génétique",
      "erreursFrequentes": [
        "Confondre Transcription et Traduction.",
        "Mettre de la Thymine (T) dans l'ARNm (Faux : c'est l'Uracile U).",
        "Oublier que l'ARNm se lit par triplets (codons)."
      ],
      "methodeFlash": "ADN (noyau) -> ARNm (U) -> Protéine (cytoplasme)."
    },
    {
      "nom": "Lois Statistiques",
      "erreursFrequentes": [
        "Confondre la F2 du monohybridisme (3/4 - 1/4) avec la F2 du dihybridisme indépendant (9/16 - 3/16 - 3/16 - 1/16).",
        "Ne pas reconnaître une liaison absolue (0% recombinés).",
        "Oublier de vérifier le sexe dans les croisements (gène sur X ?)."
      ],
      "methodeFlash": "Test Cross 25x4 = Indépendants. Test Cross (Parentaux > Recombinés) = Liés."
    }
  ],
  "parcours": {
    "5min": [
      "Lisez la Fiche Express (onglet Cours)."
    ],
    "15min": [
      "Lisez la Fiche Express + les Zones de Confusion.",
      "Lancez un Quiz de 10 questions en mode Entraînement Libre."
    ],
    "30min": [
      "Lancez un Examen Blanc complet (20 questions, 15 min).",
      "Consultez l'onglet Bilan pour voir vos points faibles."
    ]
  }
};