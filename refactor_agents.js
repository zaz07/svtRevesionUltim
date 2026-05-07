const fs = require('fs');
const path = require('path');
const vm = require('vm');

const units = [2, 3, 4];

units.forEach(u => {
    const filePath = `data/unite${u}.js`;
    if (!fs.existsSync(filePath)) return;
    
    // Read the file and execute it to get the object
    let code = fs.readFileSync(filePath, 'utf8');
    code = code.replace(/const UNITE_/g, 'var UNITE_');
    const sandbox = {};
    vm.createContext(sandbox);
    vm.runInContext(code, sandbox);
    
    const data = sandbox[`UNITE_${u}`];
    if (!data) return;

    const dir = `data/unite${u}`;
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // 1. architecte.js
    const architecte = {
        unite: data.unite,
        titre: data.titre,
        conceptsPiliers: data.conceptsPiliers,
        zonesConfusion: data.zonesConfusion,
        tableauObjectifs: data.tableauObjectifs
    };
    fs.writeFileSync(`${dir}/architecte.js`, `const architecteUnite${u} = ${JSON.stringify(architecte, null, 2)};`, 'utf8');

    // 2. correcteur.js
    const correcteur = {
        unite: data.unite,
        titre: data.titre,
        sections: data.erreursFrequentes
    };
    fs.writeFileSync(`${dir}/correcteur.js`, `const correcteurUnite${u} = ${JSON.stringify(correcteur, null, 2)};`, 'utf8');

    // 3. coach.js
    const quizChrono = data.questions.filter(q => q.difficulte !== 'piege' && q.difficulte !== 'expert').slice(0, 10);
    const bossDeFin = data.questions.filter(q => q.difficulte === 'expert');
    const coach = {
        unite: data.unite,
        titre: data.titre,
        ficheCondensee: data.ficheCondensee,
        quizChrono: quizChrono,
        bossDeFin: bossDeFin
    };
    fs.writeFileSync(`${dir}/coach.js`, `const coachUnite${u} = ${JSON.stringify(coach, null, 2)};`, 'utf8');

    // 4. piegeur.js
    const piegeQuestions = data.questions.filter(q => q.difficulte === 'piege');
    const piegeur = {
        unite: data.unite,
        titre: data.titre,
        questions: piegeQuestions
    };
    fs.writeFileSync(`${dir}/piegeur.js`, `const piegeurUnite${u} = ${JSON.stringify(piegeur, null, 2)};`, 'utf8');

    // 5. forgeron.js
    const forgeronQuestions = data.questions.filter(q => q.difficulte !== 'piege' && q.difficulte !== 'expert' && !quizChrono.includes(q));
    const forgeron = {
        unite: data.unite,
        titre: data.titre,
        questions: forgeronQuestions
    };
    fs.writeFileSync(`${dir}/forgeron.js`, `const forgeronUnite${u} = ${JSON.stringify(forgeron, null, 2)};`, 'utf8');

    console.log(`✅ Unité ${u} splitted into agent files.`);
});
