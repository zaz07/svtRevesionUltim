const fs = require('fs');
const path = require('path');

const agents = ['architecte', 'coach', 'piegeur', 'forgeron', 'correcteur'];
const dir = '/home/oapc/Downloads/svt/svtRevesionUltim';

agents.forEach(agent => {
    // Update HTML files
    const htmlPath = path.join(dir, `agent_${agent}.html`);
    if (fs.existsSync(htmlPath)) {
        let html = fs.readFileSync(htmlPath, 'utf8');
        html = html.replace(
            `<script src="data/unite1/${agent}.js"></script>`,
            `<!-- Chargement dynamique des données hors-ligne -->\n    <script>\n        const urlParams = new URLSearchParams(window.location.search);\n        const uniteId = urlParams.get('unite') || '1';\n        document.write(\`<script src="data/unite\${uniteId}/${agent}.js"><\\/script>\`);\n    </script>`
        );
        fs.writeFileSync(htmlPath, html, 'utf8');
    }

    // Update JS files
    const jsPath = path.join(dir, 'js', `agent_${agent}.js`);
    if (fs.existsSync(jsPath)) {
        let js = fs.readFileSync(jsPath, 'utf8');
        const searchPattern = new RegExp(`const data = typeof ${agent}Unite1 !== 'undefined' \\? ${agent}Unite1 : null;`, 'g');
        js = js.replace(
            searchPattern,
            `const urlParams = new URLSearchParams(window.location.search);\n    const uniteId = urlParams.get('unite') || '1';\n    const data = window[\`${agent}Unite\${uniteId}\`];`
        );
        fs.writeFileSync(jsPath, js, 'utf8');
    }
});

console.log("Refactoring complete");
