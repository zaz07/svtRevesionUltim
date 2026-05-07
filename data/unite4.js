const UNITE_4 = {
  "unite": 4,
  "titre": "Phénomènes Géologiques (Tectonique)",
  "conceptsPiliers": [
    "La lithosphère est découpée en plaques flottant sur l'asthénosphère.",
    "Les marges actives (zones de subduction) : formation de fosses, prismes d'accrétion, magmatisme andésitique et anomalies thermiques négatives.",
    "L'obduction : charriage d'une lithosphère océanique (Ophiolites) sur une lithosphère continentale (ex: Oman).",
    "La collision continentale : affrontement de deux lithosphères continentales après fermeture d'un océan (ex: Alpes, Himalaya), créant un fort épaississement crustal.",
    "Le métamorphisme : transformation à l'état solide des roches sous l'effet de la pression (P) et de la température (T) (ex: Argile -> Schiste -> Micaschiste -> Gneiss).",
    "Les minéraux index : indicateurs des conditions P/T (ex: glaucophane pour HP/BT, sillimanite).",
    "L'anatexie (granitisation) : fusion partielle des roches métamorphiques donnant naissance au magma granitique (ex: Migmatites)."
  ],
  "zonesConfusion": [
    {
      "notions": "Métamorphisme vs Anatexie",
      "explication": "Le métamorphisme est une transformation strictement à l'état SOLIDE. Dès qu'il y a fusion (passage à l'état liquide), on entre dans le domaine de l'anatexie (formation de magma, roche migmatite)."
    },
    {
      "notions": "Granite d'Anatexie vs Granite Intrusif",
      "explication": "Le granite d'anatexie cristallise sur place (concordant avec les roches encaissantes). Le granite intrusif est un magma qui a migré vers le haut et recoupé les couches (discordant, auréole de métamorphisme de contact)."
    },
    {
      "notions": "Subduction vs Obduction",
      "explication": "Subduction : la plaque océanique dense plonge SOUS la plaque continentale. Obduction : la plaque océanique (ophiolites) chevauche SUR la plaque continentale (anomalie)."
    },
    {
      "notions": "Faille Inverse vs Faille Normale",
      "explication": "La faille inverse est causée par une COMPRESSION (raccourcissement). La faille normale est causée par une EXTENSION (étirement, zones de divergence)."
    }
  ],
  "tableauObjectifs": {
    "debutant": [
      "Reconnaître les 3 types de chaînes de montagnes (subduction, obduction, collision).",
      "Connaître la définition du métamorphisme (état solide) et les facteurs P et T."
    ],
    "intermediaire": [
      "Identifier un complexe ophiolitique comme preuve de la fermeture d'un ancien océan.",
      "Comprendre la série métamorphique de l'argile et du gabbro."
    ],
    "expert": [
      "Analyser un diagramme P/T à l'aide des minéraux index (ex: Glaucophane = subduction).",
      "Expliquer l'origine de l'eau provoquant le magma andésitique en subduction."
    ]
  },
  "ficheCondensee": [
    "🌍 **TECTONIQUE DES PLAQUES** : La lithosphère (rigide) flotte sur l'asthénosphère (ductile).",
    "🌋 **SUBDUCTION** : Convergence Océan/Continent. Fosses, prismes d'accrétion, anomalies thermiques négatives. Le magma andésitique provient de la fusion de la péridotite hydratée par la plaque plongeante.",
    "🛡️ **OBDUCTION** : Charriage de la plaque océanique sur le continent. Preuve : **Ophiolites** (Sédiments, Basalte, Complexe filonien, Gabbro, Péridotite).",
    "⛰️ **COLLISION** : Affrontement Continent/Continent. Déformations intenses (plis, failles inverses, nappes de charriage), épaississement crustal (racine).",
    "🔨 **DÉFORMATIONS** : Cassantes (failles inverses = compression), Souples (plis), Intermédiaires (chevauchements, nappes).",
    "🔥 **MÉTAMORPHISME** : Transformation minéralogique et structurale à l'état solide sous l'effet de P et T. 3 types : Thermique (contact), Dynamique (subduction, HP/BT), Thermodynamique/Régional (collision, HP/HT).",
    "📊 **SÉQUENCES** : Argile ➔ Schiste ➔ Micaschiste ➔ Gneiss. Gabbro ➔ Schiste Vert ➔ Schiste Bleu ➔ Eclogite.",
    "🌋 **ANATEXIE** : Fusion partielle des roches (ex: Gneiss) donnant un magma granitique. La **Migmatite** est la roche intermédiaire (mi-magmatique, mi-métamorphique)."
  ],
  "questions": [
    {
      "id": "u4_q18",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "Qu'est-ce que la foliation dans une roche comme le Gneiss ?",
      "choix": {
        "A": "Des cassures franches sans déformation souple.",
        "B": "Une structure caractérisée par l'alternance de lits clairs et de lits sombres orientés.",
        "C": "L'absence totale d'orientation minéralogique.",
        "D": "Une roche composée à 100% de verre."
      },
      "reponseCorrecte": "B",
      "explication": "Au plus haut degré, les minéraux ségrègent en bandes (Feldspath/Quartz clair, Mica sombre).",
      "mnemotechnique": "Foliation = Feuilles de Gneiss rayées de chocolat noir (Mica) et blanc (Quartz/Feldspath)."
    },
    {
      "id": "u4_q20",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "Le terme 'série métamorphique' désigne :",
      "choix": {
        "A": "Une succession de tremblements de terre.",
        "B": "L'ensemble des roches métamorphiques dérivant d'une même roche originelle par degrés croissants de P et T.",
        "C": "Le classement des volcans.",
        "D": "Une strate sédimentaire."
      },
      "reponseCorrecte": "B",
      "explication": "Par exemple : Argile donne la série Schiste-Micaschiste-Gneiss.",
      "mnemotechnique": "Série métamorphique = La même famille de roche qui monte les escaliers de Pression et Température."
    },
    {
      "id": "u4_q22",
      "difficulte": "facile",
      "theme": "anatexie",
      "enonce": "La Migmatite est une roche complexe caractérisée par :",
      "choix": {
        "A": "Son aspect homogène de roche magmatique.",
        "B": "La coexistence d'une partie sombre métamorphique (Gneiss) et d'une partie claire magmatique (Granite).",
        "C": "Sa structure contenant 100% d'argile.",
        "D": "Une structure microgrenue avec du verre."
      },
      "reponseCorrecte": "B",
      "explication": "La migmatite est la preuve directe du processus de fusion partielle (anatexie).",
      "mnemotechnique": "Migmatite = Mi-solide, Mi-liquide. Un délicieux gâteau marbré entre gneiss et granite."
    },
    {
      "id": "u4_q24",
      "difficulte": "facile",
      "theme": "anatexie",
      "enonce": "Le Granite intrusif (or pluton intrusif) :",
      "choix": {
        "A": "A des limites floues et concordantes avec les roches voisines.",
        "B": "Cristallise rapidement en surface formant des laves.",
        "C": "A des limites très nettes avec la roche encaissante et est toujours entouré d'une auréole de métamorphisme de contact.",
        "D": "Se forme par précipitation de sels minéraux."
      },
      "reponseCorrecte": "C",
      "explication": "Le magma a migré (intrusif). En s'immisçant dans les roches froides plus haut, il induit un métamorphisme thermique.",
      "mnemotechnique": "Intrusif = L'invité surprise (magma) qui entre dans la pièce et réchauffe (métamorphise) les voisins."
    },
    {
      "id": "u4_q26",
      "difficulte": "facile",
      "theme": "anatexie",
      "enonce": "L'auréole de métamorphisme, souvent visible autour d'un pluton de granite intrusif, résulte :",
      "choix": {
        "A": "De la baisse extrême de la température ambiante.",
        "B": "De l'impact d'une météorite au même endroit.",
        "C": "De la forte chaleur dégagée par le magma intrusif qui modifie (cuit) les roches environnantes.",
        "D": "D'une forte pression tectonique isolée."
      },
      "reponseCorrecte": "C",
      "explication": "C'est l'exemple type du métamorphisme de contact : seule la température augmente.",
      "mnemotechnique": "Auréole = Le halo de chaleur qui 'cuit' les roches qui osent toucher le magma brûlant."
    },
    {
      "id": "u4_q28",
      "difficulte": "facile",
      "theme": "magmatisme",
      "enonce": "Un granite est une roche riche en :",
      "choix": {
        "A": "Glaucophane et pyroxènes.",
        "B": "Argile et chlorite.",
        "C": "Quartz, Feldspaths (et souvent Micas).",
        "D": "Verre volcanique et bulles de gaz."
      },
      "reponseCorrecte": "C",
      "explication": "Ce sont les minéraux caractéristiques de la croûte continentale (acide et peu dense).",
      "mnemotechnique": "Granite = G-Q-F-M. Gneiss et Granite aiment le Quartz, le Feldspath et le Mica !"
    },
    {
      "id": "u4_q32",
      "difficulte": "facile",
      "theme": "tectonique",
      "enonce": "Le prisme d'accrétion se forme :",
      "choix": {
        "A": "Dans les chaînes de collision continentale.",
        "B": "Au niveau de la fosse océanique par raclage des sédiments de la plaque plongeante.",
        "C": "Au centre d'un océan, le long de la dorsale.",
        "D": "Dans le manteau inférieur."
      },
      "reponseCorrecte": "B",
      "explication": "La plaque océanique agit comme un tapis roulant ; les sédiments s'y accumulent contre le continent.",
      "mnemotechnique": "Prisme d'accrétion = Le chasse-neige qui racle les sédiments de la plaque qui plonge."
    },
    {
      "id": "u4_q34",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "Quel est le factor principal du métamorphisme de contact ?",
      "choix": {
        "A": "La Pression.",
        "B": "La Température.",
        "C": "Le temps.",
        "D": "La circulation de fluides profonds."
      },
      "reponseCorrecte": "B",
      "explication": "L'intrusion d'un magma chaud chauffe simplement les roches environnantes.",
      "mnemotechnique": "Métamorphisme de Contact = Contact brûlant ! C'est la Température pure qui cuit la roche."
    },
    {
      "id": "u4_q38",
      "difficulte": "facile",
      "theme": "magmatisme",
      "enonce": "La granodiorite et l'andésite ont en commun :",
      "choix": {
        "A": "Leur structure microlithique.",
        "B": "Leur structure grenue.",
        "C": "Leur origine : le magma andésitique de zone de subduction.",
        "D": "Le fait qu'elles sont toutes les deux sédimentaires."
      },
      "reponseCorrecte": "C",
      "explication": "Elles proviennent du même magma. Si le magma sort, il donne de l'andésite ; s'il reste bloqué, il donne de la granodiorite.",
      "mnemotechnique": "Frères de magma = L'Andésite sort prendre l'air (volcanique), la Granodiorite reste au chaud (plutonique)."
    },
    {
      "id": "u4_q40",
      "difficulte": "facile",
      "theme": "magmatisme",
      "enonce": "Le métamorphisme de la roche d'origine (protolithe) Argile aboutit au final au :",
      "choix": {
        "A": "Gabbro.",
        "B": "Basalte.",
        "C": "Gneiss.",
        "D": "Calcaire."
      },
      "reponseCorrecte": "C",
      "explication": "Argile -> Schiste -> Micaschiste -> Gneiss.",
      "mnemotechnique": "A-S-M-G : L'Argile Sage Devient Merveilleux Gneiss !"
    },
    {
      "id": "u4_q42",
      "difficulte": "facile",
      "theme": "obduction",
      "enonce": "Le complexe filonien dans une ophiolite est constitué de :",
      "choix": {
        "A": "Failles remplies d'or.",
        "B": "Filons de basalte injectés verticalement entre le gabbro et les basaltes en coussins.",
        "C": "Roches métamorphiques foliacées.",
        "D": "Péridotites hydratées."
      },
      "reponseCorrecte": "B",
      "explication": "Ces filons sont les 'tuyaux' par lesquels la lave remontait vers le fond de l'océan.",
      "mnemotechnique": "Filonien = Les tuyaux de plomberie verticale qui alimentent les basaltes en coussins."
    },
    {
      "id": "u4_q44",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "Si l'on trouve une auréole de cornéennes (roches très dures), on est en présence de :",
      "choix": {
        "A": "Métamorphisme dynamique.",
        "B": "Métamorphisme thermodynamique régional.",
        "C": "Métamorphisme de contact (thermique).",
        "D": "Obduction océanique."
      },
      "reponseCorrecte": "C",
      "explication": "Les cornéennes sont la 'croûte' cuite des roches qui entourent un pluton granitique intrusif chaud.",
      "mnemotechnique": "Cornéenne = Corne dure ! La roche est cuite par la chaleur et devient dure comme de la corne."
    },
    {
      "id": "u4_q48",
      "difficulte": "facile",
      "theme": "magmatisme",
      "enonce": "La péridotite est la roche qui constitue :",
      "choix": {
        "A": "La croûte continentale.",
        "B": "Le manteau lithosphérique et l'asthénosphère.",
        "C": "Le noyau terrestre.",
        "D": "Les sédiments marins profonds."
      },
      "reponseCorrecte": "B",
      "explication": "C'est la roche principale du manteau terrestre.",
      "mnemotechnique": "Péridotite = La reine du Manteau. Elle constitue l'essentiel de la lithosphère et asthénosphère sous la croûte."
    },
    {
      "id": "u4_q49",
      "difficulte": "facile",
      "theme": "obduction",
      "enonce": "Dans la chaîne d'Oman (obduction), la nappe ophiolitique est charriée sur :",
      "choix": {
        "A": "Une autre plaque océanique.",
        "B": "La croûte continentale arabique.",
        "C": "La dorsale océanique.",
        "D": "L'Eurasie."
      },
      "reponseCorrecte": "B",
      "explication": "L'obduction est le blocage d'une subduction, forçant l'océan à grimper sur le continent.",
      "mnemotechnique": "Oman = Océan sur le continent. Les ophiolites d'Oman ont escaladé la plage arabe !"
    },
    {
      "id": "u4_nat_2016_q1",
      "difficulte": "facile",
      "theme": "tectonique",
      "enonce": "[Bac 2016 N] Le magma andésitique se forme suite à la fusion partielle d’une roche nommée :",
      "choix": {
        "A": "l’éclogite.",
        "B": "l’argile.",
        "C": "la péridotite.",
        "D": "le basalte."
      },
      "reponseCorrecte": "C",
      "explication": "Le magma andésitique provient de la fusion partielle de la péridotite hydratée du manteau de la plaque chevauchante.",
      "mnemotechnique": "Fusion de Péridotite Hydratée = Magma Andésitique de subduction !",
      "source": "national_2016_N"
    },
    {
      "id": "u4_nat_2016_q2",
      "difficulte": "facile",
      "theme": "tectonique",
      "enonce": "[Bac 2016 N] Les chaînes de collision résultent de :",
      "choix": {
        "A": "l’affrontement de deux plaques océaniques.",
        "B": "l’affrontement de deux blocs continentaux après la fermeture d’un ancien océan.",
        "C": "l’effet de forces géologiques extensives.",
        "D": "l’effet de forces géologiques compressives au niveau de la dorsale."
      },
      "reponseCorrecte": "B",
      "explication": "La collision fait suite à la subduction et l'obduction, après disparition (fermeture) complète de l'espace océanique.",
      "mnemotechnique": "Collision = Deux continents qui se rentrent dedans après la mort de l'océan.",
      "source": "national_2016_N"
    },
    {
      "id": "u4_nat_2016_q3",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "[Bac 2016 N] La séquence métamorphique est un ensemble de :",
      "choix": {
        "A": "roches magmatiques résultant du refroidissement du même magma.",
        "B": "roches ayant subi un même degré de métamorphisme.",
        "C": "minéraux ayant subi une température croissante.",
        "D": "roches métamorphiques qui résultent de la même roche mère."
      },
      "reponseCorrecte": "D",
      "explication": "Une séquence métamorphique (ex: série argileuse : schiste -> micaschiste -> gneiss) regroupe des roches issues du même protolithe.",
      "mnemotechnique": "Séquence métamorphique = Les enfants différents d'une même maman (roche mère).",
      "source": "national_2016_N"
    },
    {
      "id": "u4_nat_2016_q4",
      "difficulte": "facile",
      "theme": "anatexie",
      "enonce": "[Bac 2016 N] Les migmatites :",
      "choix": {
        "A": "sont des roches appartenant à une auréole métamorphique.",
        "B": "sont des roches ayant une texture mixte (grenue et foliée).",
        "C": "résultent de la fusion partielle de la péridotite.",
        "D": "résultent de la fusion totale du gneiss."
      },
      "reponseCorrecte": "B",
      "explication": "Les migmatites témoignent d'une fusion partielle (anatexie) : la partie magmatique a une texture grenue, la partie métamorphique a une texture foliée.",
      "mnemotechnique": "Migmatite = Texture mixte : Grains de granite (grenue) + Rubans de gneiss (foliée).",
      "source": "national_2016_N"
    },
    {
      "id": "u4_nat_2017_r1",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "[Bac 2017 R] La série métamorphique des roches argileuses résultant d’un métamorphisme de pression et de température croissantes est :",
      "choix": {
        "A": "argile → gneiss → schiste → micaschiste.",
        "B": "argile → schiste → gneiss → micaschiste.",
        "C": "argile → schiste → micaschiste → gneiss.",
        "D": "argile → gneiss → micaschiste → schiste."
      },
      "reponseCorrecte": "C",
      "explication": "La série argileuse classique montre une augmentation du métamorphisme : Schiste (faible) → Micaschiste (moyen) → Gneiss (fort).",
      "mnemotechnique": "Série argileuse = S-M-G : Schiste, Micaschiste, Gneiss. De plus en plus chaud !",
      "source": "national_2017_R"
    },
    {
      "id": "u4_nat_2017_r2",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "[Bac 2017 R] Le granite intrusif (d'anatexie ayant migré) est entouré par :",
      "choix": {
        "A": "les migmatites.",
        "B": "l’auréole métamorphique.",
        "C": "le gneiss.",
        "D": "la péridotite."
      },
      "reponseCorrecte": "B",
      "explication": "Le granite intrusif monte chaud dans des roches froides, provoquant un métamorphisme thermique ou de contact caractérisé par une auréole métamorphique.",
      "mnemotechnique": "Intrusif = Un invité chaud qui brûle ses voisins directs (auréole métamorphique).",
      "source": "national_2017_R"
    },
    {
      "id": "u4_nat_2017_r3",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "[Bac 2017 R] L’éclogite est une roche métamorphique formée sous les conditions suivantes :",
      "choix": {
        "A": "haute pression et haute température.",
        "B": "haute pression et basse/moyenne température.",
        "C": "basse pression et haute température.",
        "D": "basse pression et basse température."
      },
      "reponseCorrecte": "B",
      "explication": "L'éclogite caractérise le faciès de très haute pression et basse à moyenne température, typique de la subduction profonde de la lithosphère océanique.",
      "mnemotechnique": "Éclogite = Subduction très profonde. Énorme pression mais pas trop chaud (haute P, basse T) !",
      "source": "national_2017_R"
    },
    {
      "id": "u4_nat_2017_r4",
      "difficulte": "facile",
      "theme": "anatexie",
      "enonce": "[Bac 2017 R] Les migmatites forment un complexe rocheux qui sépare :",
      "choix": {
        "A": "les roches du métamorphisme de contact du domaine de la fusion.",
        "B": "les roches du métamorphisme dynamique du domaine de la fusion.",
        "C": "le granite anatectique du granite intrusif.",
        "D": "le gneiss du granite anatectique."
      },
      "reponseCorrecte": "D",
      "explication": "Les migmatites représentent l'état intermédiaire de fusion partielle (anatexie), faisant la transition entre le gneiss métamorphique solide et le granite d'anatexie liquide.",
      "mnemotechnique": "Migmatite = Zone tampon. Moitié gneiss (folié), moitié granite (grenu).",
      "source": "national_2017_R"
    },
    {
      "id": "u4_nat_2019_q1",
      "difficulte": "facile",
      "theme": "tectonique",
      "enonce": "[Bac 2019 N] Le refroidissement du magma en surface dans les zones de subduction entraîne la formation de :",
      "choix": {
        "A": "l’andésite à structure grenue.",
        "B": "la péridotite à structure microlitique.",
        "C": "l’andésite à structure microlitique.",
        "D": "la péridotite à structure grenue."
      },
      "reponseCorrecte": "C",
      "explication": "Le refroidissement rapide de la lave andésitique en surface produit une roche volcanique appelée andésite, dotée d'une structure microlitique (pâte de verre + phénocristaux + microlites).",
      "mnemotechnique": "Refroidissement rapide en surface = Structure microlitique (Andésite volcanique de subduction) !",
      "source": "national_2019_N"
    },
    {
      "id": "u4_nat_2019_q2",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "[Bac 2019 N] Le gneiss se caractérise par une structure :",
      "choix": {
        "A": "grenue.",
        "B": "de foliation.",
        "C": "microlitique.",
        "D": "de schistosité."
      },
      "reponseCorrecte": "B",
      "explication": "Le gneiss présente une structure de foliation avec une alternance de lits sombres (riches en biotite/amphibole) et clairs (riches en quartz/feldspaths).",
      "mnemotechnique": "Gneiss = Rubans bien séparés = Foliation. Schiste = Feuillets cassants = Schistosité !",
      "source": "national_2019_N"
    },
    {
      "id": "u4_nat_2019_q3",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "[Bac 2019 N] Les zones de subduction se caractérisent par des conditions de :",
      "choix": {
        "A": "haute pression et haute température.",
        "B": "basse pression et haute température.",
        "C": "haute pression et basse température.",
        "D": "basse pression et basse température."
      },
      "reponseCorrecte": "C",
      "explication": "La subduction rapide d'une plaque océanique froide augmente la pression très rapidement tandis que la température reste basse (création d'un gradient HP-BT et d'anomalies thermiques négatives).",
      "mnemotechnique": "Subduction = Plongeon froid = HP-BT (Haute Pression, Basse Température) !",
      "source": "national_2019_N"
    },
    {
      "id": "u4_nat_2019_q4",
      "difficulte": "facile",
      "theme": "tectonique",
      "enonce": "[Bac 2019 N] La chaîne d’Oman s’est formée suite à :",
      "choix": {
        "A": "un déplacement d’une lithosphère continentale au-dessus d’une lithosphère océanique.",
        "B": "un déplacement d’une lithosphère océanique au-dessus d’une lithosphère continentale (obduction).",
        "C": "un enfouissement d’une lithosphère océanique sous une autre lithosphère océanique.",
        "D": "un enfouissement d’une lithosphère océanique sous une lithosphère continentale."
      },
      "reponseCorrecte": "B",
      "explication": "La chaîne d'Oman is la chaîne d'obduction de référence mondiale, formée par le chevauchement d'une portion de croûte océanique (ophiolite) sur la marge continentale passive.",
      "mnemotechnique": "Oman = Obduction = Croûte océanique escaladant le continent !",
      "source": "national_2019_N"
    },
    {
      "id": "u4_nat_2020_q1",
      "difficulte": "facile",
      "theme": "tectonique",
      "enonce": "[Bac 2020 N] Le magma des zones de subduction résulte d’une fusion :",
      "choix": {
        "A": "totale de la péridotite hydratée suite à une libération d’eau par la plaque chevauchante.",
        "B": "partielle de la péridotite hydratée suite à une libération d’eau par la plaque plongeante.",
        "C": "totale de la péridotite hydratée suite à une libération d’eau par la plaque plongeante.",
        "D": "partielle de la péridotite hydratée suite à une libération d’eau par la plaque chevauchante."
      },
      "reponseCorrecte": "B",
      "explication": "Dans les zones de subduction, la plaque océanique plongeante se déshydrate sous l'effet de l'augmentation de pression. L'eau libérée monte et hydrate la péridotite de la plaque chevauchante, ce qui abaisse son point de fusion et provoque sa fusion partielle.",
      "mnemotechnique": "Fusion partielle = Péridotite hydratée grâce à l'eau libérée par la plaque plongeante !",
      "source": "national_2020_N"
    },
    {
      "id": "u4_nat_2020_q2",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "[Bac 2020 N] Le micaschiste et le gneiss se caractérisent par :",
      "choix": {
        "A": "une composition chimique semblable mais une texture et une taille des cristaux différentes.",
        "B": "une texture et une taille des cristaux semblables mais une composition chimique différente.",
        "C": "une texture, une taille des cristaux et une composition chimique semblables.",
        "D": "une composition chimique, une texture et une taille des cristaux différentes."
      },
      "reponseCorrecte": "A",
      "explication": "Le micaschiste et le gneiss sont issus du métamorphisme régional de la même roche mère argileuse (pélite), donc leur composition chimique globale reste semblable, mais la structure (schistosité vs foliation) et la taille des minéraux (plus grands dans le gneiss) diffèrent.",
      "mnemotechnique": "Même maman argile = Même chimie ! Mais le gneiss a grandi plus fort sous la chaleur (foliation et grands cristaux).",
      "source": "national_2020_N"
    },
    {
      "id": "u4_nat_2020_q3",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "[Bac 2020 N] L’existence de la sillimanite dans une roche métamorphique indique qu’elle a été soumise à une :",
      "choix": {
        "A": "basse température et haute pression.",
        "B": "haute température et haute pression.",
        "C": "haute température et basse pression.",
        "D": "basse température et basse pression."
      },
      "reponseCorrecte": "B",
      "explication": "La sillimanite est le polymorphisme d'aluminosilicate de haute température et de haute pression (dans le domaine du métamorphisme régional de haut degré ou du métamorphisme de contact intense).",
      "mnemotechnique": "Sillimanite = Le silicate du feu et de l'enfer (Haute Température et Haute Pression) !",
      "source": "national_2020_N"
    },
    {
      "id": "u4_nat_2020_q4",
      "difficulte": "facile",
      "theme": "tectonique",
      "enonce": "[Bac 2020 N] Dans les chaînes de montagnes, l’ophiolite est un fragment d’une lithosphère :",
      "choix": {
        "A": "océanique récente métamorphisée contenant du granite et du gabbro.",
        "B": "océanique ancienne non métamorphisée contenant du granite et du gneiss.",
        "C": "océanique ancienne métamorphisée contenant du basalte et du métagabbro.",
        "D": "océanique récente non métamorphisée contenant de l’éclogite et du schiste vert."
      },
      "reponseCorrecte": "C",
      "explication": "L'ophiolite est une relique de l'ancienne lithosphère océanique charriée sur le continent, montrant le métamorphisme hydrothermal (basalte en coussin, métagabbros à hornblende ou faciès schiste vert).",
      "mnemotechnique": "Ophiolite = Relique d'océan ! Contient du basalte et du métagabbro (jamais de granite continental) !",
      "source": "national_2020_N"
    },
    {
      "id": "u4_nat_2022_r1",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "[Bac 2022 R] Le gneiss se caractérise par le fait que c'est une :",
      "choix": {
        "A": "roche magmatique à structure de schistosité.",
        "B": "roche magmatique à structure de foliation.",
        "C": "roche métamorphique à structure de schistosité.",
        "D": "roche métamorphique à structure de foliation."
      },
      "reponseCorrecte": "D",
      "explication": "Le gneiss est une roche métamorphique hautement transformée (gradient moyen à fort), caractérisée par une structure de foliation qui se traduit par des lits alternés sombres et clairs.",
      "mnemotechnique": "Gneiss = Métamorphique + Foliation ! Ne pas confondre avec le granite magmatique.",
      "source": "national_2022_R"
    },
    {
      "id": "u4_nat_2022_r2",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "[Bac 2022 R] La séquence métamorphique résultant de la transformation progressive d’une roche argileuse sous pression et température croissantes est :",
      "choix": {
        "A": "argile → gneiss → schiste → micaschiste.",
        "B": "argile → schiste → gneiss → micaschiste.",
        "C": "argile → schiste → micaschiste → gneiss.",
        "D": "argile → gneiss → micaschiste → schiste."
      },
      "reponseCorrecte": "C",
      "explication": "La séquence pélitique classique commence par l'argile (roche sédimentaire mère), qui se transforme progressivement en schiste, puis en micaschiste, et enfin en gneiss sous l'effet du métamorphisme régional croissant.",
      "mnemotechnique": "Séquence pélitique = Argile → Schiste → Micaschiste → Gneiss (S-M-G dans l'ordre croissant) !",
      "source": "national_2022_R"
    },
    {
      "id": "u4_nat_2022_r3",
      "difficulte": "facile",
      "theme": "tectonique",
      "enonce": "[Bac 2022 R] La faille inverse est une structure tectonique cassante caractérisée par :",
      "choix": {
        "A": "un plan de faille incliné avec rapprochement des deux compartiments de la faille.",
        "B": "un plan de faille incliné avec éloignement des deux compartiments de la faille.",
        "C": "un plan de faille vertical avec éloignement des deux compartiments de la faille.",
        "D": "un plan de faille vertical avec rapprochement des deux compartiments de la faille."
      },
      "reponseCorrecte": "A",
      "explication": "Une faille inverse est provoquée par des forces de compression. Le raccourcissement horizontal pousse le bloc supérieur à monter le long du plan de faille incliné, rapprochant les deux compartiments.",
      "mnemotechnique": "Faille inverse = Forces de compression = Rapprochement et chevauchement de blocs !",
      "source": "national_2022_R"
    },
    {
      "id": "u4_nat_2022_r4",
      "difficulte": "facile",
      "theme": "tectonique",
      "enonce": "[Bac 2022 R] Le refroidissement rapide du magma en surface dans les zones de subduction entraîne la formation de :",
      "choix": {
        "A": "l’andésite à structure grenue.",
        "B": "la péridotite à structure microlitique.",
        "C": "l’andésite à structure microlitique.",
        "D": "la péridotite à structure grenue."
      },
      "reponseCorrecte": "C",
      "explication": "La lave andésitique émise en surface se refroidit très rapidement, ce qui empêche la cristallisation complète des minéraux et produit une structure microlitique typique des roches volcaniques.",
      "mnemotechnique": "Surface = Refroidissement rapide = Structure microlitique (Andésite) !",
      "source": "national_2022_R"
    },
    {
      "id": "u4_nat_2024_n1",
      "difficulte": "facile",
      "theme": "tectonique",
      "enonce": "[Bac 2024 N] Quelles sont deux caractéristiques géophysiques majeures qui caractérisent les zones de subduction ?",
      "choix": {
        "A": "Anomalies thermiques positives et sismicité superficielle uniquement le long des dorsales.",
        "B": "Anomalies thermiques (isothermes enfoncés, anomalie négative) et répartition des foyers sismiques selon un plan incliné (plan de Bénioff).",
        "C": "Absence totale de sismicité et présence constante de marges passives sédimentaires non déformées.",
        "D": "Une croûte continentale très mince de moins de 5 km d'épaisseur sans relief montagneux."
      },
      "reponseCorrecte": "B",
      "explication": "Les zones de subduction se caractérisent par des anomalies thermiques négatives (les isothermes s'enfoncent avec la plaque froide plongeante) et une forte sismicité dont les foyers se répartissent le long d'un plan incliné appelé plan de Bénioff.",
      "mnemotechnique": "Subduction = Plongeon froid (isothermes enfoncés) + Tremblements inclinés (plan de Bénioff) !",
      "source": "national_2024_N"
    },
    {
      "id": "u4_nat_2024_n2",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "[Bac 2024 N] Par définition, un faciès métamorphique correspond à :",
      "choix": {
        "A": "une même roche mère ayant subi des pressions différentes au cours du temps.",
        "B": "un groupe de roches caractérisé par un assemblage minéralogique défini, formé dans des conditions de pression et de température précises.",
        "C": "la structure foliée des gneiss riches en quartz et en feldspath.",
        "D": "l'état d'anatexie complète provoquant la fusion de la croûte."
      },
      "reponseCorrecte": "B",
      "explication": "Un faciès métamorphique regroupe toutes les roches métamorphiques (quelle que soit leur origine chimique) dont l'association minérale (assemblage minéralogique) s'est stabilisée dans un intervalle donné de température et de pression.",
      "mnemotechnique": "Faciès = Assemblage minéral ! C'est la signature P-T de la roche !",
      "source": "national_2024_N"
    },
    {
      "id": "u4_nat_2024_n3",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "[Bac 2024 N] Une séquence métamorphique se définit comme :",
      "choix": {
        "A": "un ensemble de roches métamorphiques de compositions chimiques différentes issues de conditions de pression identiques.",
        "B": "un ensemble de roches métamorphiques de structures et compositions minéralogiques différentes mais issues d'une seule et même roche mère (protolithe) soumise à des conditions de température et de pression croissantes.",
        "C": "le trajet d'enfoncement puis d'exhumation emprunté par une roche lors d'une collision.",
        "D": "la succession chronologique des failles inverses et des chevauchements dans une zone de collision."
      },
      "reponseCorrecte": "B",
      "explication": "Une séquence métamorphique (ex: pélitique) regroupe des roches métamorphiques ayant des structures et compositions minéralogiques différentes mais issues d'une seule et même roche mère (ex: argile), sous l'effet d'un métamorphisme d'intensité croissante.",
      "mnemotechnique": "Séquence = Même Mère ! (ex: Argile -> Schiste -> Micaschiste -> Gneiss) !",
      "source": "national_2024_N"
    },
    {
      "id": "u4_q4",
      "difficulte": "piege",
      "theme": "subduction",
      "enonce": "Dans une zone de subduction, l'anomalie thermique est qualifiée de négative au niveau du plan de Bénioff car :",
      "choix": {
        "A": "Le magma en remontant refroidit la zone.",
        "B": "La plaque plongeante apporte du matériel très chaud en profondeur.",
        "C": "La plaque océanique froide s'enfonce rapidement dans l'asthénosphère chaude, abaissant localement la température.",
        "D": "L'eau de mer s'infiltre et gèle la lithosphère."
      },
      "reponseCorrecte": "C",
      "explication": "Les isothermes plongent car la plaque froide met beaucoup de temps à se réchauffer."
    },
    {
      "id": "u4_q8",
      "difficulte": "piege",
      "theme": "deformation",
      "enonce": "Quelle déformation tectonique est caractéristique d'un régime compressif ?",
      "choix": {
        "A": "Une faille normale.",
        "B": "Un rift médio-océanique.",
        "C": "Un décrochement pur.",
        "D": "Une faille inverse ou un pli."
      },
      "reponseCorrecte": "D",
      "explication": "Les failles inverses et les plis traduisent un raccourcissement du terrain, caractéristique des forces de compression."
    },
    {
      "id": "u4_q23",
      "difficulte": "piege",
      "theme": "anatexie",
      "enonce": "Le Granite d'anatexie est un type de granite qui :",
      "choix": {
        "A": "Est monté rapidement à la surface pour former des volcans.",
        "B": "Se solidifie sur place, sans migrer, et présente des limites diffuses avec les roches encaissantes.",
        "C": "Est toujours entouré d'une très forte auréole de métamorphisme de contact.",
        "D": "N'existe que dans les zones d'obduction."
      },
      "reponseCorrecte": "B",
      "explication": "En se refroidissant sur place, le passage entre le granite et le gneiss originel est très progressif."
    },
    {
      "id": "u4_q25",
      "difficulte": "piege",
      "theme": "magmatisme",
      "enonce": "La différence fondamentale entre une roche plutonique (Granite) et volcanique (Andésite) est :",
      "choix": {
        "A": "La roche plutonique se forme par sédimentation.",
        "B": "La roche volcanique se forme par refroidissement lent en profondeur.",
        "C": "La roche plutonique refroidit lentement en profondeur (grenue) alors que la volcanique refroidit rapidement en surface (microlithique).",
        "D": "Le granite ne contient aucun cristal visible."
      },
      "reponseCorrecte": "C",
      "explication": "Le refroidissement lent donne de gros cristaux visibles à l'œil nu (grenue)."
    },
    {
      "id": "u4_q30",
      "difficulte": "piege",
      "theme": "anatexie",
      "enonce": "Finalement, on peut dire que la formation du granite d'anatexie :",
      "choix": {
        "A": "Clôture le cycle de métamorphisme dans une chaîne de collision.",
        "B": "A lieu exclusivement au niveau des dorsales médio-océaniques.",
        "C": "Ne nécessite aucune augmentation de température.",
        "D": "Engendre un métamorphisme de Haute Pression / Basse Température."
      },
      "reponseCorrecte": "A",
      "explication": "L'anatexie marque la limite ultime où le métamorphisme (solide) devient du magmatisme (liquide)."
    },
    {
      "id": "u4_q31",
      "difficulte": "piege",
      "theme": "tectonique",
      "enonce": "Qu'est-ce que le plan de Wadati-Benioff ?",
      "choix": {
        "A": "La surface de séparation entre croûte et manteau.",
        "B": "Le plan incliné selon lequel se répartissent les foyers sismiques dans une subduction.",
        "C": "Le plan de faille normale dans un rift.",
        "D": "L'alignement des volcans de collision."
      },
      "reponseCorrecte": "B",
      "explication": "Ce plan trace exactement le plongement de la plaque océanique froide dans le manteau chaud."
    },
    {
      "id": "u4_q37",
      "difficulte": "piege",
      "theme": "deformation",
      "enonce": "Un pli déversé possède :",
      "choix": {
        "A": "Un plan axial horizontal.",
        "B": "Un plan axial incliné où les deux flancs plongent dans le même sens.",
        "C": "Un plan axial vertical.",
        "D": "Aucun plan axial."
      },
      "reponseCorrecte": "B",
      "explication": "Dans un pli déversé, la force de compression a été si forte d'un côté que le pli penche jusqu'à ce que les deux flancs s'inclinent du même côté."
    },
    {
      "id": "u4_q41",
      "difficulte": "piege",
      "theme": "metamorphisme",
      "enonce": "Laquelle de ces propositions décrit la foliation ?",
      "choix": {
        "A": "Un simple débitage en feuillets sans réorganisation minérale (comme le schiste).",
        "B": "La ségrégation des minéraux en lits distincts clairs et sombres sous l'effet de forte P et T.",
        "C": "La présence de bulles d'air dans la roche.",
        "D": "L'érosion de la surface."
      },
      "reponseCorrecte": "B",
      "explication": "C'est la différence avec la schistosité. Dans la foliation, les minéraux sont chimiquement réorganisés en bandes."
    },
    {
      "id": "u4_q46",
      "difficulte": "piege",
      "theme": "anatexie",
      "enonce": "La cristallisation d'un magma granitique en profondeur est responsable de sa texture :",
      "choix": {
        "A": "Vitreuse.",
        "B": "Microlithique.",
        "C": "Grenue.",
        "D": "Foliée."
      },
      "reponseCorrecte": "C",
      "explication": "Contrairement à la foliation (métamorphisme), la texture grenue (magmatisme plutonique) montre des cristaux visibles et non orientés."
    },
    {
      "id": "u4_q50",
      "difficulte": "piege",
      "theme": "tectonique",
      "enonce": "Le métamorphisme est-il indispensable à la formation d'un complexe ophiolitique ?",
      "choix": {
        "A": "Oui, les ophiolites sont toutes métamorphiques.",
        "B": "Non, les ophiolites sont les roches magmatiques de la lithosphère océanique (basalte, gabbro, péridotite) avant tout métamorphisme.",
        "C": "Oui, sinon c'est un granite.",
        "D": "Seulement dans l'asthénosphère."
      },
      "reponseCorrecte": "B",
      "explication": "Les ophiolites peuvent subir un métamorphisme ultérieur (hydrothermal ou subduction), mais à la base, ce sont des roches magmatiques pures."
    },
    {
      "id": "u4_q1",
      "difficulte": "facile",
      "theme": "tectonique",
      "enonce": "La plaque lithosphérique est constituée :",
      "choix": {
        "A": "De l'asthénosphère uniquement.",
        "B": "Du manteau supérieur et du noyau externe.",
        "C": "De la croûte terrestre (océanique ou continentale) et du manteau lithosphérique.",
        "D": "De la croûte océanique exclusivement."
      },
      "reponseCorrecte": "C",
      "explication": "La plaque lithosphérique (rigide) flotte sur l'asthénosphère (ductile) et comprend la croûte et la partie supérieure du manteau supérieur."
    },
    {
      "id": "u4_q2",
      "difficulte": "facile",
      "theme": "subduction",
      "enonce": "Les chaînes de subduction se forment suite à :",
      "choix": {
        "A": "L'éloignement de deux plaques continentales.",
        "B": "L'enfoncement d'une plaque océanique dense sous une plaque continentale moins dense.",
        "C": "L'affrontement de deux plaques océaniques de même densité.",
        "D": "Le charriage d'une plaque océanique sur un continent."
      },
      "reponseCorrecte": "B",
      "explication": "C'est la définition exacte de la subduction. La différence de densité pousse la plaque basaltique (dense) à s'enfoncer sous la plaque granitique."
    },
    {
      "id": "u4_q5",
      "difficulte": "facile",
      "theme": "obduction",
      "enonce": "Le complexe ophiolitique (les ophiolites) témoigne :",
      "choix": {
        "A": "De la fermeture d'un ancien domaine océanique (témoin d'une lithosphère océanique sur un continent).",
        "B": "D'une activité volcanique strictement continentale.",
        "C": "De l'ouverture récente d'un rift océanique.",
        "D": "De la formation d'un grand désert de sable."
      },
      "reponseCorrecte": "A",
      "explication": "Les ophiolites (basalte, gabbro, péridotite) trouvées sur un continent prouvent qu'un océan existait là avant d'être charrié (obduction) ou piégé (collision)."
    },
    {
      "id": "u4_q6",
      "difficulte": "facile",
      "theme": "deformation",
      "enonce": "Une nappe de charriage est une déformation tectonique qui :",
      "choix": {
        "A": "Concerne le déplacement vertical d'un bloc rocheux le long d'une faille normale.",
        "B": "Concerne le déplacement horizontal de masses énormes de couches géologiques sur plusieurs kilomètres.",
        "C": "Se traduit par une simple ondulation des strates.",
        "D": "Se forme dans les zones de divergence océanique."
      },
      "reponseCorrecte": "B",
      "explication": "Dans les zones de forte compression (collision), des terrains entiers sont déracinés et charriés au-dessus d'autres terrains."
    },
    {
      "id": "u4_q9",
      "difficulte": "facile",
      "theme": "obduction",
      "enonce": "Laquelle de ces séquences ophiolitiques (de haut en bas) représente la croûte océanique ?",
      "choix": {
        "A": "Sédiments, Basalte en coussin, Complexe filonien, Gabbro, Péridotite.",
        "B": "Péridotite, Gabbro, Basalte, Sédiments.",
        "C": "Granite, Gneiss, Schiste, Argile.",
        "D": "Gabbro, Granodiorite, Andésite."
      },
      "reponseCorrecte": "A",
      "explication": "C'est la séquence typique trouvée dans les chaînes d'obduction (ex: Oman). La péridotite est le manteau à la base."
    },
    {
      "id": "u4_q10",
      "difficulte": "facile",
      "theme": "collision",
      "enonce": "L'Himalaya est un exemple classique de :",
      "choix": {
        "A": "Chaîne d'obduction.",
        "B": "Chaîne de subduction.",
        "C": "Chaîne de collision (précédée d'une subduction).",
        "D": "Dorsale océanique émergée."
      },
      "reponseCorrecte": "C",
      "explication": "L'Inde et l'Eurasie (deux continents) se sont affrontés après la disparition par subduction de l'océan Thétys."
    },
    {
      "id": "u4_q11",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "Le métamorphisme est un processus géologique caractérisé par :",
      "choix": {
        "A": "La fusion totale des roches donnant un magma.",
        "B": "Des modifications minéralogiques et structurales toujours à l'état solide.",
        "C": "Le dépôt de particules dans le fond d'un océan.",
        "D": "La cristallisation rapide d'une lave en surface."
      },
      "reponseCorrecte": "B",
      "explication": "Le métamorphisme se fait SANS fusion. Si la roche fond, on parle d'anatexie."
    },
    {
      "id": "u4_q12",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "La schistosité est une structure métamorphique qui se manifeste par :",
      "choix": {
        "A": "L'alternance de lits clairs et de lits sombres dans la roche.",
        "B": "Le débitage (clivage) de la roche en feuillets ou lamelles parallèles.",
        "C": "La présence de gros cristaux non orientés dans une pâte vitreuse.",
        "D": "La formation exclusive de fossiles très bien conservés."
      },
      "reponseCorrecte": "B",
      "explication": "Sous la pression tectonique, les minéraux s'aplatissent et s'orientent perpendiculairement à la force de compression."
    },
    {
      "id": "u4_q13",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "Quelle est la séquence métamorphique argileuse dans une zone de collision (par T et P croissantes) ?",
      "choix": {
        "A": "Argile -> Micaschiste -> Schiste -> Gneiss.",
        "B": "Argile -> Schiste -> Micaschiste -> Gneiss.",
        "C": "Gneiss -> Micaschiste -> Schiste -> Argile.",
        "D": "Schiste -> Argile -> Gneiss -> Micaschiste."
      },
      "reponseCorrecte": "B",
      "explication": "Cette évolution correspond au métamorphisme régional : du plus faible degré (Schiste) au plus fort (Gneiss)."
    },
    {
      "id": "u4_q16",
      "difficulte": "facile",
      "theme": "metamorphisme",
      "enonce": "Le métamorphisme de contact (thermique) se trouve généralement :",
      "choix": {
        "A": "Dans les zones d'obduction, sous les nappes ophiolitiques.",
        "B": "Au voisinage des intrusions magmatiques, par libération de chaleur.",
        "C": "À l'intérieur du noyau de la Terre.",
        "D": "Au niveau du prisme d'accrétion."
      },
      "reponseCorrecte": "B",
      "explication": "L'intrusion d'un magma chaud 'cuit' les roches environnantes sans Pression dirigée forte."
    },
    {
      "id": "u4_q3",
      "difficulte": "expert",
      "theme": "subduction",
      "enonce": "Parmi les caractéristiques géophysiques d'une zone de subduction, on trouve :",
      "choix": {
        "A": "Une anomalie thermique positive au niveau de la fosse.",
        "B": "Des foyers sismiques répartis aléatoirement.",
        "C": "Des foyers sismiques répartis selon un plan incliné appelé plan de Wadati-Bénioff.",
        "D": "L'absence totale d'activité sismique."
      },
      "reponseCorrecte": "C",
      "explication": "Le frottement de la plaque plongeante froide dans l'asthénosphère crée des séismes dont la profondeur augmente avec l'éloignement de la fosse."
    },
    {
      "id": "u4_q7",
      "difficulte": "expert",
      "theme": "magmatisme",
      "enonce": "La formation du magma andésitique dans les zones de subduction est due à :",
      "choix": {
        "A": "L'augmentation brutale de la température de la plaque plongeante.",
        "B": "La fusion de la croûte continentale par frottement.",
        "C": "La libération d'eau par la plaque plongeante qui abaisse le point de fusion de la péridotite du manteau chevauchant.",
        "D": "La fusion des sédiments marins de la fosse océanique."
      },
      "reponseCorrecte": "C",
      "explication": "La déshydratation des minéraux de la croûte océanique hydrate le manteau (péridotite) de la plaque chevauchante, ce qui permet sa fusion partielle."
    },
    {
      "id": "u4_q14",
      "difficulte": "expert",
      "theme": "metamorphisme",
      "enonce": "Un minéral indicateur (ou minéral index) en métamorphisme permet de déduire :",
      "choix": {
        "A": "La composition chimique de l'atmosphère primitive.",
        "B": "L'âge absolu de la roche (au million d'années près).",
        "C": "Les conditions de Pression et Température lors de la formation de la roche.",
        "D": "Le nombre de fossiles disparus lors d'une extinction de masse."
      },
      "reponseCorrecte": "C",
      "explication": "Ces minéraux n'apparaissent que dans des plages très spécifiques de Température et Pression."
    },
    {
      "id": "u4_q15",
      "difficulte": "expert",
      "theme": "metamorphisme",
      "enonce": "Le glaucophane et la jadéite sont des minéraux caractéristiques d'un métamorphisme :",
      "choix": {
        "A": "De Haute Pression et Basse Température (métamorphisme dynamique).",
        "B": "De Basse Pression et Haute Température (métamorphisme de contact).",
        "C": "De Haute Pression et Haute Température (métamorphisme régional).",
        "D": "De Basse Pression et Basse Température (sédimentation)."
      },
      "reponseCorrecte": "A",
      "explication": "Typique des zones de subduction où la roche s'enfonce rapidement (forte P) mais reste froide (anomalie négative)."
    },
    {
      "id": "u4_q17",
      "difficulte": "expert",
      "theme": "metamorphisme",
      "enonce": "Quel type de métamorphisme caractérise les chaînes de collision ?",
      "choix": {
        "A": "Métamorphisme thermique uniquement.",
        "B": "Métamorphisme dynamique (HP/BT).",
        "C": "Métamorphisme thermodynamique régional (HP/HT).",
        "D": "Aucun métamorphisme."
      },
      "reponseCorrecte": "C",
      "explication": "L'enfouissement profond et l'épaississement crustal font augmenter Pression et Température ensemble."
    },
    {
      "id": "u4_q19",
      "difficulte": "expert",
      "theme": "metamorphisme",
      "enonce": "Dans les zones de subduction, le Gabbro subit des transformations métamorphiques. Quelle est la séquence classique de métamorphisme du Gabbro plongeant ?",
      "choix": {
        "A": "Schiste bleu -> Schiste vert -> Eclogite.",
        "B": "Eclogite -> Schiste bleu -> Schiste vert.",
        "C": "Schiste vert -> Schiste bleu -> Eclogite.",
        "D": "Gneiss -> Micaschiste -> Schiste vert."
      },
      "reponseCorrecte": "C",
      "explication": "Gabbro hydraté -> Schiste Vert (Chlorite/Actinote) -> Bleu (Glaucophane) -> Eclogite (Grenat)."
    },
    {
      "id": "u4_q21",
      "difficulte": "expert",
      "theme": "anatexie",
      "enonce": "Comment se définit le processus d'Anatexie ?",
      "choix": {
        "A": "La cristallisation d'un magma volcanique à la surface.",
        "B": "Le refroidissement du noyau terrestre.",
        "C": "La fusion partielle des roches en profondeur sous des conditions extrêmes de P et T, produisant un magma granitique.",
        "D": "L'érosion des chaînes de montagnes par l'eau."
      },
      "reponseCorrecte": "C",
      "explication": "L'anatexie est le stade où le métamorphisme de très haut degré aboutit à la fusion partielle."
    },
    {
      "id": "u4_q27",
      "difficulte": "expert",
      "theme": "anatexie",
      "enonce": "Quelle relation existe-t-il entre le métamorphisme thermodynamique régional et le magmatisme de collision ?",
      "choix": {
        "A": "Ils n'ont aucun lien.",
        "B": "Le magmatisme provoque d'abord la faille, puis le métamorphisme suit.",
        "C": "L'épaississement crustal crée un fort métamorphisme P/T, qui finit par atteindre la fusion partielle (anatexie) engendrant le magmatisme granitique.",
        "D": "Le magmatisme de collision ne produit que des basaltes."
      },
      "reponseCorrecte": "C",
      "explication": "La collision fait s'enfoncer les roches. La température grimpe jusqu'à fondre le gneiss."
    },
    {
      "id": "u4_q29",
      "difficulte": "expert",
      "theme": "magmatisme",
      "enonce": "Les roches à l'origine d'un magma andésitique en zone de subduction sont :",
      "choix": {
        "A": "Le manteau continental sec.",
        "B": "La péridotite mantellique chevauchante, hydratée par l'eau libérée par la plaque plongeante.",
        "C": "La croûte continentale granitique par simple frottement.",
        "D": "Uniquement les roches sédimentaires de la fosse."
      },
      "reponseCorrecte": "B",
      "explication": "C'est l'hydratation (baisse du point de fusion de la péridotite) qui crée le magma."
    },
    {
      "id": "u4_q33",
      "difficulte": "expert",
      "theme": "deformation",
      "enonce": "La déformation ductile des roches est favorisée par :",
      "choix": {
        "A": "Une faible température et une application rapide de la force.",
        "B": "Une température et une pression lithostatique élevées, ainsi qu'une longue durée.",
        "C": "La pureté cristalline de la roche sans eau.",
        "D": "Une compression en surface uniquement."
      },
      "reponseCorrecte": "B",
      "explication": "En profondeur (T et P élevées), les roches perdent leur rigidité et se plient au lieu de casser."
    },
    {
      "id": "u4_q35",
      "difficulte": "expert",
      "theme": "metamorphisme",
      "enonce": "La jadéite et le glaucophane (HP/BT) se forment typiquement à partir de la transformation :",
      "choix": {
        "A": "Des roches calcaires du plateau continental.",
        "B": "Du Gabbro de la lithosphère océanique plongeante.",
        "C": "Du Granite de la plaque chevauchante.",
        "D": "Des sables du désert."
      },
      "reponseCorrecte": "B",
      "explication": "La lithosphère océanique plongeante subit de fortes pressions mais reste froide longtemps."
    },
    {
      "id": "u4_q36",
      "difficulte": "expert",
      "theme": "collision",
      "enonce": "Comment expliquer la présence de roches ophiolitiques métamorphisées au cœur d'une chaîne de collision ?",
      "choix": {
        "A": "Elles proviennent de la fusion du granite local.",
        "B": "Ce sont les restes d'un ancien océan qui s'est refermé par subduction avant l'affrontement des continents.",
        "C": "Elles ont été apportées par des météorites.",
        "D": "Elles se sont formées par cristallisation de l'eau de pluie dans des failles."
      },
      "reponseCorrecte": "B",
      "explication": "C'est la preuve ultime qu'un océan séparait autrefois les deux blocs continentaux."
    },
    {
      "id": "u4_q39",
      "difficulte": "expert",
      "theme": "metamorphisme",
      "enonce": "La sillimanite, l'andalousite et le disthène (silicates d'alumine) sont dits polymorphes car :",
      "choix": {
        "A": "Ils ont la même structure cristalline mais des compositions chimiques différentes.",
        "B": "Ils ont la même formule chimique (Al2SiO5) mais cristallisent différemment selon P et T.",
        "C": "Ils se transforment toujours en magma.",
        "D": "Ce sont des fossiles de plantes anciennes."
      },
      "reponseCorrecte": "B",
      "explication": "Ils sont donc de parfaits minéraux index : chacun existe dans un domaine de stabilité P/T unique."
    },
    {
      "id": "u4_q43",
      "difficulte": "expert",
      "theme": "collision",
      "enonce": "L'épaississement crustal (formation d'une racine profonde) dans une chaîne de collision est causé par :",
      "choix": {
        "A": "L'accumulation de sédiments marins profonds.",
        "B": "Le refroidissement du manteau qui se dilate.",
        "C": "L'empilement d'écailles crustales et de nappes de charriage sous l'effet de la compression.",
        "D": "La remontée d'un diapir salin."
      },
      "reponseCorrecte": "C",
      "explication": "La croûte continentale s'épaissit comme un accordéon que l'on comprime, créant des montagnes vers le haut et des racines vers le bas."
    },
    {
      "id": "u4_q45",
      "difficulte": "expert",
      "theme": "anatexie",
      "enonce": "Le passage du Gneiss à la Migmatite s'accompagne :",
      "choix": {
        "A": "De l'apparition du premier liquide silicaté (fusion partielle).",
        "B": "De l'évaporation de l'eau.",
        "C": "De la formation d'une faille normale majeure.",
        "D": "De la sédimentation d'argile."
      },
      "reponseCorrecte": "A",
      "explication": "La migmatite (ou gneiss anatectique) montre visuellement que la roche a commencé à fondre (lits de granite clair)."
    },
    {
      "id": "u4_q47",
      "difficulte": "expert",
      "theme": "tectonique",
      "enonce": "Un séisme profond (plus de 300 km) est systématiquement lié à :",
      "choix": {
        "A": "Une dorsale médio-océanique.",
        "B": "Une collision continentale.",
        "C": "Une zone de subduction.",
        "D": "Une faille transformante."
      },
      "reponseCorrecte": "C",
      "explication": "La croûte continentale dépasse rarement 70km. Seule la lithosphère océanique subduite peut plonger assez profondément pour créer des séismes à 300-700km."
    }
  ],
  "erreursFrequentes": [
    {
      "nom": "Les Mécanismes Tectoniques",
      "erreursFrequentes": [
        "Confondre subduction et obduction (Faux : Sub = dessous, Ob = par-dessus).",
        "Penser que la faille normale indique une compression (Faux : Faille inverse = compression / Faille normale = extension).",
        "Croire que les ophiolites se forment sur les continents (Faux : ce sont des morceaux de l'ancien océan charriés)."
      ],
      "methodeFlash": "Ophiolite = Ocean Fossilisé sur le continent."
    },
    {
      "nom": "Métamorphisme et Magmatisme",
      "erreursFrequentes": [
        "Dire que le métamorphisme implique la fusion de la roche (Faux : strictement solide ! S'il y a fusion, c'est l'anatexie).",
        "Croire que le magma des zones de subduction vient de la fusion de la plaque subduite (Faux : c'est le manteau au-dessus qui fond, hydraté par l'eau).",
        "Confondre l'auréole de métamorphisme de contact (lié au magma) et le métamorphisme régional."
      ],
      "methodeFlash": "Série Argileuse : Argile -> Schiste -> Micaschiste -> Gneiss -> (fusion) -> Migmatite -> Granite."
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