# 🏆 Mode Défi Intégratif : Labo 1 SVT (Transcription, Traduction & Mutations)

Nous avons enrichi l'expérience d'apprentissage en transformant le premier laboratoire en un **Défi interactif, ludique et pédagogique (Mode Défi)** conforme aux attentes rigoureuses du Baccalauréat SVT marocain. 

Ce mode permet de tester activement les connaissances de l'élève avant de lui présenter la correction automatique, en le guidant avec bienveillance à travers un parcours interactif doté de rappels "Mnémo-Flash" mémorables.

---

## 🎮 Présentation de l'expérience utilisateur

Dans l'onglet **Labo 1**, un sélecteur moderne permet désormais de basculer instantanément entre deux modes d'apprentissage :
1.  **📺 Mode Démo (Auto) :** Le simulateur de base automatique où l'élève clique et observe les résultats.
2.  **🏆 Mode Défi (Actif) :** Un mini-jeu d'évaluation par étapes où l'élève est l'acteur principal.

### 📐 Le Déroulement du Défi :
*   **Écran d'Accueil & Choix de l'Allèle :** L'élève sélectionne l'allèle à étudier (ex: HbA normal, HbS muté, CFTR, Tyrosinase, etc.). Il commence avec **3 cœurs (vies) ❤️❤️❤️**.
*   **Étape 1 : Transcription Active :** L'élève doit transcrire, base par base, l'ARNm complémentaire à partir du brin d'ADN Transcrit (3'). Les touches de saisie sont **A, U, C, G et T** (avec un bouton "T" piégé !).
*   **Étape 2 : Traduction Active :** L'élève doit traduire, codon par codon, l'ARNm en acides aminés à l'aide d'un clavier interactif regroupant les 20 acides aminés et le codon STOP. Un bouton d'aide permet d'afficher en un clic la **Table du Code Génétique officielle** sous forme de modal.
*   **Gestion des Erreurs ("Mnémo-Flash") :** S'il commet une erreur de complémentarité ou clique sur le piège Thymine (T), le jeu s'arrête temporairement pour lui afficher une carte diagnostic animée avec un mnémonique mémorable.
*   **Écran de Résultats ("Session de Rattrapage" / Note de Rigueur) :** 
    *   **Succès :** L'élève reçoit une note dynamique de rigueur **sur 20** (max 20/20 si sans faute) et un score d'élite.
    *   **Échec (0 vie) :** L'élève est redirigé vers une **Session de Rattrapage** interactive listant ses lacunes avec des explications spécifiques pour ne plus jamais reproduire l'erreur au Bac.

---

## 🧠 Les Mnémo-Flashs implémentés (SMART)

Pour maximiser l'impact pédagogique, les explications et mnémoniques ciblent les erreurs les plus récurrentes au Baccalauréat :

| Type d'Erreur | Titre de l'Alerte | Explication Pédagogique | Mnémo-Flash (Ancrage) |
| :--- | :--- | :--- | :--- |
| **Piège de la Thymine (T)** | `🚨 THYMINE STRICTEMENT INTERDITE !` | L'ARNm ne contient jamais de Thymine (T), qui est rigoureusement remplacée par l'Uracile (U). Mettre un T dans un ARN sur votre copie est éliminatoire ! | **U**nique à l'**Uracile** ! Rappelez-vous : L'ADN a de la **T**enue (Thymine), mais l'ARN a des **U**rgences (Uracile) ! |
| **Complémentarité Incorrecte** | `🚨 COMPLÉMENTARITÉ INCORRECTE !` | La transcription obéit à l'appariement de Watson & Crick. C s'apparie toujours avec G, et A s'apparie avec U dans l'ARN. | **C**occinelle va avec **G**irafe (C-G), et **A**nanas va avec **U**kulele (A-U) ! Ne séparez jamais ces couples d'élite. |
| **Erreur de Code (HbS - Drépanocytose)** | `🚨 PIÈGE DE LA DRÉPANOCYTOSE (HbS) !` | Le codon de substitution GUG code pour la Valine (Val), tandis que l'allèle sain HbA possédait GAG codant pour l'acide glutamique (Glu). | Le codon **G**U**G** donne la **V**ALINE. Retenez : **G**rand **U**rgent **G**lobule devient **V**ide (Valine - HbS) ! |
| **Erreur de Traduction Générale** | `🚨 DÉCODAGE ERRONÉ !` | Comment décoder correctement à l'aide de la table d'examen (première base à gauche, deuxième en haut, troisième à droite). | Prenez toujours le temps de croiser les coordonnées de la table d'examen. La rigueur paie toujours au Bac ! |

---

## 🛠️ Architecture Technique

Toute la logique a été intégrée de manière modulaire dans le fichier [lab_interactif.html](file:///home/oapc/Downloads/svt/svtRevesionUltim/lab_interactif.html) sous forme d'une machine à états robuste :

*   **Variables d'état :** `challengeStep`, `challengeLivesLeft`, `challengeScoreValue`, `challengeMRNA`, `challengeProtein`, `challengeMistakesArray`.
*   **`switchLabMode(mode)` :** Bascule instantanément les vues HTML en masquant le plan de travail démo au profit du plan de travail défi.
*   **`loadGeneticCodeTable()` :** Génère et peuple dynamiquement la table du code génétique à partir du dictionnaire existant dans la modal pour une expérience 100% offline-first.
*   **`pressChallengeNuc(base)` & `pressChallengeAA(aa)` :** Gèrent la validation d'appariement en temps réel, l'avancement des indices et la détection intelligente des pièges.
*   **`endChallenge(success)` :** Calcule la note finale sur 20 et dresse une checklist personnalisée des rappels SVT basés sur les erreurs commises par l'élève.

---

### 🚀 Comment tester
1. Ouvrez [lab_interactif.html](file:///home/oapc/Downloads/svt/svtRevesionUltim/lab_interactif.html) dans votre navigateur.
2. Basculez sur l'onglet **Mode Défi (Actif)**.
3. Sélectionnez un allèle (essayez l'allèle muté **HbS** pour tester l'erreur codon !).
4. Amusez-vous à cliquer sur les touches de transcription et observez les alertes et mnémo-flashs se déclencher !
